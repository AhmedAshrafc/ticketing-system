import Head from "next/head";
import { useRouter } from "next/router";

export default function DynamicTitle() {
  const router = useRouter();
  const { pathname } = router;

  const titleMapping = {
    "/dashboard": "A.U.H. | Dashboard",
    "/projects": "A.U.H. | Projects",
    "/profile": "A.U.H. | Profile",
    "/settings": "A.U.H. | Settings",
  };

  const pageTitle = titleMapping[pathname] || "Default Title";

  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
}
