import { UsersIcon } from "@heroicons/react/20/solid";
import { useFormContext } from "react-hook-form";
import { Input, Label, Select } from "./forms.jsx";

export function CalculatorForm() {
  const form = useFormContext();

  return (
    <form className="space-y-6">
      <div>
        <Label htmlFor="bill">Bill</Label>
        <div className="relative mt-2">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            aria-hidden
          >
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <Input
            {...form.register("bill", {
              required: { value: true, message: "Required" },
              min: { value: 0.01, message: "Can't be zero" },
              valueAsNumber: true,
            })}
            type="number"
            id="bill"
            step={0.01}
            className="pl-7 pr-20"
            placeholder="0.00"
            aria-invalid={form.formState.errors.bill ? true : undefined}
            aria-describedby="bill-error"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <select
              {...form.register("currency")}
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm"
              aria-label="Currency"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
        {form.formState.errors.bill ? (
          <p className="mt-2 text-sm text-red-600" id="bill-error">
            {form.formState.errors.bill.message}
          </p>
        ) : null}
      </div>
      <div>
        <Label htmlFor="tip">Select tip %</Label>
        <div className="mt-2">
          <Select
            {...form.register("tip", {
              required: { value: true, message: "Required" },
              valueAsNumber: true,
            })}
            id="tip"
            aria-invalid={form.formState.errors.tip ? true : undefined}
            aria-describedby="tip-error"
          >
            <option value="0.05">5%</option>
            <option value="0.1">10%</option>
            <option value="0.15">15%</option>
            <option value="0.25">25%</option>
            <option value="0.5">50%</option>
            <option value="0.75">75%</option>
          </Select>
        </div>
        {form.formState.errors.tip ? (
          <p className="mt-2 text-sm text-red-600" id="tip-error">
            {form.formState.errors.tip.message}
          </p>
        ) : null}
      </div>
      <div>
        <Label htmlFor="peopleCount">Number of people</Label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <UsersIcon className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="number"
            id="peopleCount"
            {...form.register("peopleCount", {
              required: { value: true, message: "Required" },
              valueAsNumber: true,
              min: { value: 1, message: "Can't be zero" },
            })}
            step="1"
            className="pl-10"
            placeholder="0"
            aria-invalid={form.formState.errors.peopleCount ? true : undefined}
            aria-describedby="peopleCount-error"
          />
        </div>
        {form.formState.errors.peopleCount ? (
          <p className="mt-2 text-sm text-red-600" id="peopleCount-error">
            {form.formState.errors.peopleCount.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
