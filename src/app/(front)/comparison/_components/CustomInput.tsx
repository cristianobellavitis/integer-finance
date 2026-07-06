import { Input } from "@/components/ui/input";
import type { ComponentPropsWithoutRef } from "react";
import React from "react";

interface CustomInputProps extends ComponentPropsWithoutRef<typeof Input> {
  suffix?: string;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ suffix = "%", ...props }, ref) => {
    return (
      <div className="relative w-full">
        <Input
          ref={ref}
          {...props}
          className={`pr-6 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${props.className ?? ""}`}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
          {suffix}
        </span>
      </div>
    );
  },
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
