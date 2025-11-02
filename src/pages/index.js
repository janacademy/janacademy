import Head from "next/head";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import About from "@/components/About/About";
import CourseCard from "@/components/CourseCard/CourseCard";
import TestimonialCard from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jan Academy</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/JAN Academy Logo.png" />
      </Head>

      <main styles={{ paddingTop: "20px" }}>
        <HeroBanner />
        <About />
        <CourseCard />
        <TestimonialCard />
      </main>
    </>
  );
}
