import { UsersIcon } from "@heroicons/react/20/solid";
import { Input, Label, Select } from "./forms.jsx";

export function CalculatorForm() {
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
            required
            min="0.01"
            step="0.01"
            className="pl-7"
            placeholder="0.00"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="tip">Select tip %</Label>
        <div className="mt-2">
          <Select id="tip" name="tip">
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
