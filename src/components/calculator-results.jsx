import { formatCurrency } from "../utils.js";

function shouldCalculateValues({ bill, tip, peopleCount }, errors) {
  return (
    typeof bill === "number" &&
    !Number.isNaN(bill) &&
    !errors.bill &&
    typeof tip === "number" &&
    !Number.isNaN(tip) &&
    !errors.tip &&
    typeof peopleCount === "number" &&
    !Number.isNaN(peopleCount) &&
    !errors.peopleCount
  );
}

export function CalculatorResults({ values, errors }) {
  let shouldCalculate = shouldCalculateValues(
    {
      bill: values.bill,
      tip: values.tip,
      peopleCount: values.peopleCount,
    },
    errors,
  );

  let tipPerPerson = shouldCalculate
    ? (values.bill * values.tip) / values.peopleCount
    : 0;
  let totalPerPerson = shouldCalculate
    ? values.bill / values.peopleCount + tipPerPerson
    : 0;

  return (
    <dl className="space-y-6">
      <div className="space-y-2">
        <dt className="text-sm/6 font-medium text-gray-500">Tip amount</dt>
        <dd className="flex items-baseline gap-2 text-4xl font-semibold tracking-tight text-gray-900">
          <span className={shouldCalculate ? "text-gray-900" : "text-gray-500"}>
            {formatCurrency(tipPerPerson, values.currency)}
          </span>
          <span className="text-sm font-medium text-gray-400">per person</span>
        </dd>
      </div>
      <div className="space-y-2">
        <dt className="text-sm/6 font-medium text-gray-500">Total amount</dt>
        <dd className="flex items-baseline gap-2 text-4xl font-semibold tracking-tight text-gray-900">
          <span className={shouldCalculate ? "text-gray-900" : "text-gray-500"}>
            {formatCurrency(totalPerPerson, values.currency)}
          </span>
          <span className="text-sm font-medium text-gray-400">per person</span>
        </dd>
      </div>
    </dl>
  );
}
