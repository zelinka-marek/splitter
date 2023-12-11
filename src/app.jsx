import { Logo } from "./components/logo.jsx";

export default function App() {
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
    </div>
  );
}
