import Link from "next/link";
import { getAllCourses } from "../../lib/course";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";

export default function CourseIndex({ courses }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Jan Academy - Course Page</title>
        <meta name="description" content="Course Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/JAN Academy Logo.png" />
      </Head>

      <Box component={"section"} sx={{ p: "20px" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: "32px",
                lineHeight: "40px",
                fontFamily: "var(--font-family-primary)",
                color: "#1C140D",
                fontWeight: "bold",
              }}
            >
              All Courses
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
              component="div"
            >
              Explore our comprehensive course catalog designed to help you
              achieve your academic and professional goals.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "16px",
              }}
            >
              {courses.map((course) => (
                <Card
                  key={course.slug}
                  onClick={() => router.push(`/course/${course.slug}`)}
                  sx={{
                    width: isMobile ? "100%" : "40%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    cursor: "pointer",
                  }}
                >
                  <CardActionArea
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={course.image}
                      alt="course image"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{
                          fontSize: "16px",
                          lineHeight: "24px",
                          fontFamily: "var(--font-family-primary)",
                          color: "#1C140D",
                          fontWeight: "medium",
                        }}
                      >
                        {course.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "14px",
                          lineHeight: "21px",
                          fontFamily: "var(--font-family-primary)",
                          color: "#9E6E47",
                          fontWeight: "regular",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {course.description}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        p: 2,
                        width: "100%",
                      }}
                    >
                      <Link
                        href={`/course/${course.slug}`}
                        passHref
                        legacyBehavior
                      >
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#107bb0",
                            fontFamily: "var(--font-family-primary)",
                            fontSize: "16px",
                            color: "#FCFAF7",
                            fontWeight: "bold",
                            textTransform: "none",
                            width: "100%",
                          }}
                        >
                          View Course
                        </Button>
                      </Link>
                    </Box>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const courses = getAllCourses();
  return {
    props: { courses },
  };
}
