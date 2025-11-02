import Contact from "@/components/Register/Register";
import Head from "next/head";

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Jan Academy - Registration Page</title>
        <meta name="description" content="Registration Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/JAN Academy Logo.png" />
      </Head>

      <main styles={{ paddingTop: "20px" }}>
        <Contact />
      </main>
    </>
  );
}
