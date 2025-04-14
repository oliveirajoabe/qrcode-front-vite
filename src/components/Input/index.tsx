import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface InputRootProps extends ComponentProps<"div"> {
  error?: boolean;
  messageError?: string;
}
export function InputRoot({
  error = false,
  messageError,
  ...props
}: InputRootProps) {
  return (
    <div className="flex flex-col w-full">
      <div
        data-error={error}
        className={twMerge(
          "transition-all group border border-white flex items-center h-10 py-1 px-4 rounded-md focus-within:border-purple-200 data-[error=true]:border-red-500",
          props.className
        )}
      >
        {props.children}
      </div>
      {error && (
        <p className="text-red-500 text-xs font-semibold">{messageError}</p>
      )}
    </div>
  );
}

interface InputIconProps extends ComponentProps<"span"> {}
export function InputIcon({ ...props }: InputIconProps) {
  return (
    <span
      className={twMerge(
        "transition-all group-focus-within:text-purple-200 group-data-[error=true]:text-red-500",
        props.className
      )}
    >
      {props.children}
    </span>
  );
}

interface InputFieldProps extends ComponentProps<"input"> {}
export function InputField({ ...props }: InputFieldProps) {
  return (
    <input
      autoComplete="off"
      className={twMerge("flex-1 outline-0", props.className)}
      {...props}
    />
  );
}
