"use client";
import { useSearchParams } from "next/navigation";

const ErrorPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error") || "An unknown authentication error occurred.";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-red-500 text-2xl font-bold">Authentication Error</h1>
      <p className="mt-2">{error}</p>
      <a href="/" className="mt-4 text-blue-500 hover:underline">Go Home</a>
    </div>
  );
};

export default ErrorPage;
