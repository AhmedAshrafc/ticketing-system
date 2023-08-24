import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Custom404() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-6xl font-bold">404 - Page Not Found</h1>
      <p className="text-4xl font-bold">
        Oops! The page {isClient ? <code>{router.asPath}</code> : ""} does not
        exist.
      </p>
      <p className="text-2xl font-bold">
        <Link href="/dashboard" className="text-primary-color underline">
          Go back to dashboard
        </Link>
      </p>
    </div>
  );
}
