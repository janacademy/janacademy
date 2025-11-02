export const courses = [
  {
    slug: "ui-ux-design",
    image: "/images/UI.png",
    bannerVideo: "/images/ui-banner-video.mp4",
    title: "UI/UX Design",
    short: "Learn UI/UX fundamentals and real-world workflows.",
    description:
      "Learn the fundamentals of User Interface (UI) and User Experience (UX) design in this comprehensive course. This program covers everything from understanding user behavior and conducting research to creating wireframes, prototypes, and visually engaging interfaces. You’ll gain hands-on experience with industry-standard tools like Figma, Adobe XD, while building portfolio-ready projects. By the end of the course, you’ll be able to design intuitive, user-friendly digital experiences and understand the complete design process — from ideation to final delivery. Perfect for beginners looking to start a career in UI/UX design or designers aiming to strengthen their skills.",
    duration: "3 Months (72 hrs Totally)",
    level: "Beginner → Intermediate",
    days: "3 Days per Week (2 hrs class per day)",
    modules: [
      {
        title: "UI/UX Design",
        duration: "3 Months (72 hrs Totally)",
        schedule: "3 Days per Week (2 hrs class per day)",
      },
    ],
    tools: "Figma , Adobe XD",
  },
  {
    slug: "graphic-design-pro",
    image: "/images/GRAPHIC.png",
    bannerVideo: "/images/graphic-design-banner-video.mp4",
    title: "Graphic Design",
    short: "Master branding, layout and visual communication.",
    description:
      " A comprehensive course designed to teach the fundamentals and advanced concepts of graphic design. You’ll explore typography, color theory, layout design, branding, and visual communication. Through hands-on projects like logo creation, marketing materials, and digital illustrations, you’ll develop practical skills that are immediately applicable in real-world design scenarios. This course is perfect for beginners aiming to start a career in graphic design or for creative professionals looking to enhance their design expertise.",
    modules: [
      {
        title: "Basics of Graphic Design",
        duration: "1 Month (16 hrs Totally)",
        schedule: "2 Days per Week - Saturday & Sunday (2 hrs Class per Day)",
      },
      {
        title: "Advanced Graphic Design",
        duration: "3 Months (72 hrs Totally)",
        schedule: "3 Days per Week (2 hrs Class per Day)",
      },
    ],
    tools: "Adobe Photoshop,Adobe illustrator,Canva",
  },
];

export function getAllCourses() {
  return courses;
}

export function getCourseBySlug(slug) {
  return courses.find((c) => c.slug === slug) || null;
}
