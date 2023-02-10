import "../styles/globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  <style jsx global>{`
    html {
      font-family: ${outfit.style.fontFamily};
    }
  `}</style>;
  return <Component {...pageProps} />;
}
