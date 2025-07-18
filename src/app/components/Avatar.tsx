"use client";

import * as React from "react";
import { Avatar } from "@base-ui-components/react/avatar";

export const AvatarRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-5">
      <Avatar.Root className="inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-gray-100 align-middle text-base font-medium text-black select-none">
        {children}
      </Avatar.Root>
    </div>
  );
};

export const AvatarImage = ({
  src,
  size = 32,
  className = "",
}: {
  src: string;
  size?: number;
  className?: string;
}) => {
  return (
    <Avatar.Image src={src} width={size} height={size} className={className} />
  );
};

export const AvatarFallback = ({ children }: { children: React.ReactNode }) => {
  return (
    <Avatar.Fallback className="flex size-full items-center justify-center text-base">
      {children}
    </Avatar.Fallback>
  );
};
