import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonFieldProps extends ComponentProps<"button"> {}
export function ButtonField({ ...props }: ButtonFieldProps) {
  return (
    <button
      className={twMerge(
        "bg-purple-200 cursor-pointer flex items-center gap-2 p-2 rounded-md transition-opacity hover:opacity-90 justify-center h-10",
        props.className
      )}
      {...props}
    />
  );
}
