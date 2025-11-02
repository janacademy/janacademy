import { getAllCourses, getCourseBySlug } from "../../lib/course";
import { Box, Container, Typography, Button, Chip } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

export default function CourseDetail({ course }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Container maxWidth="lg">
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (!course) {
    return (
      <Container maxWidth="lg">
        <Typography variant="h5">Course not found</Typography>
      </Container>
    );
  }

  return (
    <>
      <Head>
        <title>Jan Academy - Course Detail Page</title>
        <meta name="description" content="Course Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/JAN Academy Logo.png" />
      </Head>
      <Box component={"section"} sx={{ p: "20px" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Box
              component="video"
              src={course.bannerVideo}
              autoPlay
              muted
              loop
              playsInline
              sx={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <Typography
              variant="h3"
              sx={{
                fontSize: "32px",
                lineHeight: "40px",
                fontFamily: "var(--font-family-primary)",
                color: "#1C140D",
                fontWeight: "bold",
              }}
            >
              {course.title}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "16px",
                lineHeight: "24px",
                fontFamily: "var(--font-family-primary)",
                color: "#9E6E47",
                fontWeight: "regular",
              }}
            >
              {course.level}
            </Typography>

            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontFamily: "var(--font-family-primary)",
                  color: "#1C140D",
                  fontWeight: "regular",
                }}
              >
                • Mode - Online
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                lineHeight: "24px",
                fontFamily: "var(--font-family-primary)",
                color: "#1C140D",
                fontWeight: "regular",
              }}
            >
              {course.description}
            </Typography>

            {course.modules && course.modules.length > 0 && (
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "20px",
                    lineHeight: "28px",
                    fontFamily: "var(--font-family-primary)",
                    color: "#1C140D",
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  Course Modules
                </Typography>
                {course.modules.map((mod, index) => (
                  <Box
                    key={index}
                    sx={{
                      mb: 2,
                      p: 2,
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontFamily: "var(--font-family-primary)",
                        color: "#1C140D",
                        fontWeight: "bold",
                      }}
                    >
                      {mod.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontFamily: "var(--font-family-primary)",
                        color: "#1C140D",
                        fontWeight: "regular",
                      }}
                    >
                      Duration: {mod.duration}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontFamily: "var(--font-family-primary)",
                        color: "#1C140D",
                        fontWeight: "regular",
                      }}
                    >
                      • Schedule: {mod.schedule}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}

            {course.tools && (
              <Box sx={{ mt: 4 }}>
                <Typography
                  component="div"
                  variant="h5"
                  sx={{
                    fontSize: "20px",
                    lineHeight: "28px",
                    fontFamily: "var(--font-family-primary)",
                    color: "#1C140D",
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  Tools and Technologies
                </Typography>
                <Chip
                  label={course.tools}
                  sx={{
                    backgroundColor: "#F5EDE5",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontFamily: "var(--font-family-primary)",
                    color: "#1C140D",
                    fontWeight: "regular",
                  }}
                />
              </Box>
            )}

            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "var(--color-orange)",
                  fontFamily: "var(--font-family-primary)",
                  fontSize: "16px",
                  color: "#FCFAF7",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
                onClick={() => {
                  router.push("/register");
                }}
              >
                Enroll Now
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const courses = getAllCourses();

  const paths = courses.map((c) => ({
    params: { courseSlug: c.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const course = getCourseBySlug(params.courseSlug);

  return {
    props: {
      course,
    },
  };
}
