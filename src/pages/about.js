import Head from "next/head";
import { useTheme, useMediaQuery } from "@mui/material";
import AboutPageComponent from "@/components/AboutPage/AboutPage";
export default function AboutPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Head>
        <title>Jan Academy - About Us</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/JAN Academy Logo.png" />
      </Head>
      <main styles={{ paddingTop: "20px" }}>
        <AboutPageComponent />
      </main>
    </>
  );
}
