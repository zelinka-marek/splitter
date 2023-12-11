import { forwardRef } from "react";
import { classNames } from "../utils.js";

export function Label({ className, ...props }) {
  return (
    <label
      {...props}
      className={classNames(
        "block text-sm/6 font-medium text-gray-900",
        className,
      )}
    />
  );
}

export let Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={classNames(
        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm/6",
        className,
      )}
    />
  );
});
Input.displayName = "Input";

export let Select = forwardRef(({ className, ...props }, ref) => {
  return (
    <select
      ref={ref}
      {...props}
      className={classNames(
        "block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-emerald-600 sm:text-sm/6",
        className,
      )}
    />
  );
});
Select.displayName = "Select";