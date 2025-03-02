// src/utils/generateSessionToken.js
import { v4 as uuidv4 } from 'uuid';

export const generateSessionToken = () => {
    return `session_token=${uuidv4()}`;
};


