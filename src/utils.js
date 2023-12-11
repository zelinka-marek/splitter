import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function classNames(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value, currency = "USD") {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency,
  });
}
