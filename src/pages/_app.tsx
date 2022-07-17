import { type AppProps } from "next/app";

import { ThemeProvider } from "@/design-system/theme-provider";

export default ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);
