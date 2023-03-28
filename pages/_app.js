import "@/styles/globals.css";
import Layout from "@/component/Layout";
import StateContext from "@/context/StateContext";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
