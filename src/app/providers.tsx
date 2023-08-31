"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
