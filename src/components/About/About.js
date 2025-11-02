import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
            About Jan Academy
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily: "var(--font-family-primary)",
              color: "#1C140D",
              fontWeight: "regular",
              textAlign: isMobile ? "left" : "justify",
            }}
          >
            At Jan Academy, we are dedicated to providing high-quality online
            education in UI/UX and Graphic Design. Our courses are designed to
            equip you with the skills and knowledge needed to succeed in today's
            competitive creative industry. Learn from experienced instructors,
            work on real-world projects, and build a portfolio that showcases
            your talent.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
