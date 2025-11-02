import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";

export default function AboutPageComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const data = [
    {
      title: "Our Mission",
      description:
        "At Jan Academy, our mission is to democratize education by offering a diverse range of courses taught by industry experts. We strive to create a supportive and inclusive learning environment where students can thrive and reach their full potential. Our commitment to excellence ensures that every course is designed to provide practical skills and knowledge that can be applied in real-world scenarios.",
    },
    {
      title: "Our Vision",
      description:
        "Our vision is to be the premier online learning platform, recognized for its innovative approach to education and its impact on learners' lives. We aim to continuously expand our course offerings, incorporate cutting-edge technologies, and foster a global community of learners. By focusing on quality, accessibility, and student success, we aspire to transform the landscape of online education and empower individuals to shape their futures.",
    },
  ];
  return (
    <Box component={"section"} sx={{ p: "20px" }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: "32px",
                lineHeight: "41px",
                fontFamily: "var(--font-family-primary)",
                color: "#1C140D",
                fontWeight: "bold",
              }}
            >
              About Jan Academy
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                lineHeight: "24px",
                fontFamily: "var(--font-family-primary)",
                color: "#887d7dff",
                fontWeight: "regular",
                textAlign: isMobile ? "left" : "justify",
              }}
            >
              At Jan Academy, we are dedicated to providing high-quality online
              education in UI/UX and Graphic Design. Our courses are designed to
              equip you with the skills and knowledge needed to succeed in
              today's competitive creative industry. Learn from experienced
              instructors, work on real-world projects, and build a portfolio
              that showcases your talent.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {data.map((item, index) => (
              <Box key={index}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "22px",
                    lineHeight: "28px",
                    fontFamily: "var(--font-family-primary)",
                    color: "#1C140D",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontFamily: "var(--font-family-primary)",
                    color: "#887d7dff",
                    fontWeight: "regular",
                    textAlign: isMobile ? "left" : "justify",
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box display={"flex"} flexDirection="column" gap={2}>
            <Typography
              variant="h4"
              sx={{
                fontSize: "22px",
                lineHeight: "28px",
                fontFamily: "var(--font-family-primary)",
                color: "#1C140D",
                fontWeight: "bold",
              }}
            >
              Meet the Face Behind JAN Academy
            </Typography>
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: isMobile ? "column" : "row",
                gap: "20px",
              }}
            >
              {" "}
              <CardMedia
                component="img"
                sx={{ width: 400 }}
                image="/images/Owner-image.jpg"
                alt="Live from space album cover"
              />
              <CardContent>
                {" "}
                <Typography
                  component="div"
                  variant="h5"
                  sx={{
                    fontSize: "20px",
                    lineHeight: "28px",
                    fontFamily: "var(--font-family-primary)",
                    color: "#1C140D",
                    fontWeight: "bold",
                  }}
                >
                  Janarthanan Ramesh
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontFamily: "var(--font-family-primary)",
                    color: "#9E6E47",
                    fontWeight: "regular",
                    textAlign: isMobile ? "left" : "justify",
                  }}
                  component="div"
                >
                  Graphic Designer | UI/UX Designer | Mentor | Founder of JAN
                  Academy
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontFamily: "var(--font-family-primary)",
                    color: "#887d7dff",
                    fontWeight: "regular",
                    textAlign: isMobile ? "left" : "justify",
                    mt: "10px",
                  }}
                  component="div"
                >
                  A passionate Graphic and UI/UX Designer with over three years
                  of experience in the creative design industry. Currently
                  serving as the Head of the Design Team at Kloud Portal,
                  leading projects that combine innovation, functionality, and
                  visual storytelling. Skilled in creating engaging brand
                  identities, intuitive user interfaces, and meaningful digital
                  experiences. With a keen eye for detail and a deep
                  understanding of design principles, dedicated to inspiring
                  others to explore their creativity and develop a strong
                  foundation in modern design practices.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
