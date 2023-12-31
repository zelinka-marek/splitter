import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { FormProvider, useForm } from "react-hook-form";
import { CalculatorForm } from "./components/calculator-form.jsx";
import { CalculatorResults } from "./components/calculator-results.jsx";
import { Logo } from "./components/logo.jsx";

const defaultValues = { currency: "USD", tip: 0.15 };

export default function App() {
  const form = useForm({
    mode: "onChange",
    defaultValues,
  });

  const errors = form.formState.errors;
  const bill = form.watch("bill");
  const currency = form.watch("currency");
  const tip = form.watch("tip");
  const peopleCount = form.watch("peopleCount");

  function handleReset() {
    form.reset();
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Logo className="mx-auto h-10 w-auto text-emerald-600" />
        <div className="mt-10 text-center">
          <h1 className="text-2xl/9 font-bold tracking-tight text-gray-900">
            Welcome to Splitter
          </h1>
          <p className="mt-2 text-sm/6 text-gray-500">
            Split expenses with{" "}
            <span className="font-semibold text-emerald-600">
              friends &amp; colleagues
            </span>
          </p>
        </div>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <FormProvider {...form}>
          <CalculatorForm />
        </FormProvider>
        <div className="mt-10 space-y-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden>
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex items-center justify-between">
              <span className="bg-white pr-3 text-base/6 font-semibold text-gray-900">
                Results
              </span>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <ArrowPathIcon className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400" />
                Reset
              </button>
            </div>
          </div>
          <CalculatorResults
            values={{ bill, currency, tip, peopleCount }}
            errors={errors}
          />
        </div>
      </div>
    </div>
  );
}
