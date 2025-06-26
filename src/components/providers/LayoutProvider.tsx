"use client";

import React from "react";
import { useIsMobile } from "@/libs/shadcn/hooks/use-mobile";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();
  console.log(isMobile ? isMobile : "");

  return <>{children}</>;
};

export default LayoutProvider;
