import { Box, Typography, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { useTheme, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
export default function CourseCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const handleFunction = () => {
    router.push("/course");
  };
  const cardData = [
    {
      title: "UI/UX Design",
      description:
        "Master the art of user interface and user experience design. Learn to create intuitive and engaging digital products.",
      image: "/images/UI.png",
    },
    {
      title: "Graphic Design",
      description:
        "Learn the fundamentals of graphic design, including typography, color theory, and layout. Create stunning visuals for print and digital media.",
      image: "/images/GRAPHIC.png",
    },
  ];
  return (
    <Box component={"section"} sx={{ p: "20px" }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
            Course Highlights
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "16px",
            }}
          >
            {cardData.map((card, index) => (
              <Card
                key={card.index}
                onClick={() => {
                  handleFunction();
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt="course image"
                    sx={{
                      width: "100%",
                      height: 140,
                      objectFit: "cover",
                    }}
                  />

                  <CardContent>
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
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "21px",
                        fontFamily: "var(--font-family-primary)",
                        color: "#9E6E47",
                        fontWeight: "regular",
                      }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
