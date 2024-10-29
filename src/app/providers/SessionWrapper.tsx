"use client"; 

import { SessionProvider } from "next-auth/react";
import React from "react";

export default function SessionWrapper({ session, children }: { session: any; children: React.ReactNode }) {
  return <SessionProvider >{children}</SessionProvider>;
}