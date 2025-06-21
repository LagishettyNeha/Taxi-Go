








import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DestinationCoordiContext } from '@/context/DestinationCoordiContext';
import { SourceCoordiContext } from '@/context/SourceCoordiContext';

const MAPBOX_RETREIVE_URL = 'https://api.mapbox.com/search/searchbox/v1/retrieve/';
const sessionToken = uuidv4();

interface AddressSuggestion {
  full_address: string;
  mapbox_id: string;
  session_token?: string;
}

function AutocompleteAddress({ setSource, setDestination }: { setSource: (value: string) => void; setDestination: (value: string) => void }) {
  const [source, setSourceState] = useState<string>('');
  const [destination, setDestinationState] = useState<string>('');
  const [sourceChange, setSourceChange] = useState<boolean>(false);
  const [destinationChange, setDestinationChange] = useState<boolean>(false);
  const [addressList, setAddressList] = useState<{ source: AddressSuggestion[]; destination: AddressSuggestion[] }>({
    source: [],
    destination: [],
  });

  const { setSourceCoordinates } = useContext(SourceCoordiContext);
  const { setDestinationCoordinates } = useContext(DestinationCoordiContext);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (sourceChange) {
        getAddressList('source', source);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [source, sourceChange]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (destinationChange) {
        getAddressList('destination', destination);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [destination, destinationChange]);

  const getAddressList = async (type: 'source' | 'destination', query: string) => {
    setAddressList((prev) => ({
      ...prev,
      [type]: [],
    }));

    const res = await fetch(`/api/search-address?q=${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await res.json();

    setAddressList((prev) => ({
      ...prev,
      [type]: result.suggestions || [],
    }));
  };

  const onSourceAddressClick = async (item: AddressSuggestion) => {
    setSource(item.full_address);
    setSourceState(item.full_address);
    setAddressList({ source: [], destination: [] });
    setSourceChange(false);

    const res = await fetch(
      `${MAPBOX_RETREIVE_URL}${item.mapbox_id}?session_token=${sessionToken}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
    );
    const result = await res.json();

    if (result.features && result.features.length > 0) {
      setSourceCoordinates({
        lng: result.features[0].geometry.coordinates[0],
        lat: result.features[0].geometry.coordinates[1],
      });
    } else {
      console.error('No features found for source address:', item.full_address);
    }
  };

  const onDestinationAddressClick = async (item: AddressSuggestion) => {
    setDestination(item.full_address);
    setDestinationState(item.full_address);
    setAddressList({ source: [], destination: [] });
    setDestinationChange(false);

    const res = await fetch(
      `${MAPBOX_RETREIVE_URL}${item.mapbox_id}?session_token=${sessionToken}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
    );
    const result = await res.json();

    if (result.features && result.features.length > 0) {
      setDestinationCoordinates({
        lng: result.features[0].geometry.coordinates[0],
        lat: result.features[0].geometry.coordinates[1],
      });
    } else {
      console.error('No features found for destination address:', item.full_address);
    }
  };

  return (
    <div className="mt-5">
      <div className="relative">
        <label className="text-gray-400">Where From?</label>
        <input
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
          value={source}
          onChange={(e) => {
            setSourceState(e.target.value);
            setSourceChange(true);
          }}
        />
        {addressList.source.length > 0 && sourceChange && (
          <div className="shadow-md p-1 rounded-md absolute w-full bg-white">
            {addressList.source.map((item, index) => (
              <h2
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => onSourceAddressClick(item)}
                key={index}
              >
                {item.full_address}
              </h2>
            ))}
          </div>
        )}
      </div>

      <div className="mt-3 relative">
        <label className="text-gray-400">Where To?</label>
        <input
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
          value={destination}
          onChange={(e) => {
            setDestinationState(e.target.value);
            setDestinationChange(true);
          }}
        />
        {addressList.destination.length > 0 && destinationChange && (
          <div className="shadow-md p-1 rounded-md absolute w-full bg-white">
            {addressList.destination.map((item, index) => (
              <h2
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => onDestinationAddressClick(item)}
                key={index}
              >
                {item.full_address}
              </h2>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AutocompleteAddress;

