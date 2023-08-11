import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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
        <Link href="/dashboard" className="text-blue-500">
          Go back to dashboard
        </Link>
      </p>
    </div>
  );
}
