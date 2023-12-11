import { UsersIcon } from "@heroicons/react/20/solid";
import { Input, Label, Select } from "./forms.jsx";

export function CalculatorForm({ values, onValueChange }) {
  function handleChange(event) {
    const { name, value } = event.target;

    onValueChange(name, value);
  }

  return (
    <form noValidate className="space-y-6">
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
            type="number"
            id="bill"
            name="bill"
            value={values.bill}
            onChange={handleChange}
            required
            min={0.01}
            step={0.01}
            className="pl-7 pr-20"
            placeholder="0.00"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <select
              id="currency"
              name="currency"
              value={values.currency}
              onChange={handleChange}
              required
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm"
              aria-label="Currency"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <Label htmlFor="tip">Select tip %</Label>
        <div className="mt-2">
          <Select
            id="tip"
            name="tip"
            value={values.tip}
            onChange={handleChange}
            required
          >
            <option value="0.05">5%</option>
            <option value="0.1">10%</option>
            <option value="0.15">15%</option>
            <option value="0.25">25%</option>
            <option value="0.5">50%</option>
            <option value="0.75">75%</option>
          </Select>
        </div>
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
            name="peopleCount"
            value={values.peopleCount}
            onChange={handleChange}
            required
            min="2"
            step="1"
            className="pl-10"
            placeholder="2"
          />
        </div>
      </div>
    </form>
  );
}
