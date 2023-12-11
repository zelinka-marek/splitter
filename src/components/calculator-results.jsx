import { formatCurrency } from "../utils.js";

function shouldCalculateValues({ bill, tip, peopleCount }) {
  return (
    typeof bill === "number" &&
    bill > 0 &&
    typeof tip === "number" &&
    tip > 0 &&
    typeof peopleCount === "number" &&
    peopleCount > 0
  );
}

function calculateTipPerPerson({ bill, tip, peopleCount }) {
  return (bill * tip) / peopleCount;
}

function calculateTotalPerPerson({ bill, peopleCount }, tipPerPerson) {
  return bill / peopleCount + tipPerPerson;
}

export function CalculatorResults({ values }) {
  let bill = Number.parseFloat(values.bill);
  let tip = Number.parseFloat(values.tip);
  let peopleCount = Number.parseInt(values.peopleCount, 10);
  let shouldCalculate = shouldCalculateValues({ bill, tip, peopleCount });

  let tipPerPerson = shouldCalculate
    ? calculateTipPerPerson({ bill, tip, peopleCount })
    : 0;
  let totalPerPerson = shouldCalculate
    ? calculateTotalPerPerson({ bill, peopleCount }, tipPerPerson)
    : 0;

  return (
    <dl className="space-y-6">
      <div className="space-y-2">
        <dt className="text-sm/6 font-medium text-gray-500">Tip amount</dt>
        <dd className="flex items-baseline gap-2 text-4xl font-semibold tracking-tight text-gray-900">
          {formatCurrency(tipPerPerson, values.currency)}
          <span className="text-sm font-medium text-gray-400">per person</span>
        </dd>
      </div>
      <div className="space-y-2">
        <dt className="text-sm/6 font-medium text-gray-500">Total amount</dt>
        <dd className="flex items-baseline gap-2 text-4xl font-semibold tracking-tight text-gray-900">
          {formatCurrency(totalPerPerson, values.currency)}
          <span className="text-sm font-medium text-gray-400">per person</span>
        </dd>
      </div>
    </dl>
  );
}
