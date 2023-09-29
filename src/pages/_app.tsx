import "../styles/globals.css";
import store from "../store/store";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { Layout } from "../components/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextThemesProvider defaultTheme="system" attribute="class">
        <NextUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </NextThemesProvider>
    </Provider>
  );
}

export default MyApp;
