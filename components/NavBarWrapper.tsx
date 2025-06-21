"use client";
import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";

export default function NavBarWrapper() {
  const pathname = usePathname();

  // Hide NavBar on driver-related pages
  if (pathname.startsWith("/driver") || pathname.startsWith("/driver-dashboard")) {
    return null;
  }

  return <NavBar />;
}
