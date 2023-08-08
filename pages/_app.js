import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/styles.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'react-tooltip/dist/react-tooltip.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
