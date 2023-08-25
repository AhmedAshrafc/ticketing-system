import { useRouter } from "next/router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Layout from "@/components/Layout";
import Custom404 from "./404";

import "@/styles/globals.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import "react-tooltip/dist/react-tooltip.css";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const router = useRouter();

  const validRoutes = [
    "/",
    "/dashboard",
    "/projects",
    "/profile",
    "/settings",
    "/login",
  ];

  if (!validRoutes.includes(router.asPath)) {
    return <Custom404 />;
  }

  // to render the login page without the layout
  if (router.asPath === "/login") {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
