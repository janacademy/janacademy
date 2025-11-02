import { useEffect, useState } from "react";
import Router from "next/router";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { Roboto, Open_Sans, Work_Sans } from "next/font/google";
import Loader from "@/components/Loader/loader";

const workSans = Work_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const openSans = Open_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleStop);
    Router.events.on("routeChangeError", handleStop);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleStop);
      Router.events.off("routeChangeError", handleStop);
    };
  }, []);

  return (
    <div className={`${workSans.variable} ${openSans.variable}`}>
      {loading && (
        <style jsx global>{`
          body {
            overflow: hidden;
          }
        `}</style>
      )}

      {/* Loader Overlay */}
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      )}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
