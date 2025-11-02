import {
  Box,
  Button,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";

export default function HeroBanner() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  return (
    <Box component={"section"} sx={{ p: "16px" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            // backgroundImage: 'url("/images/hero-banner.jpg")',
            background:
              "linear-gradient(to right bottom, var(--color-orange), #107bb0)",
            height: "428px",
            width: "100%",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: isMobile ? "10px" : "123px",
            gap: "5px",
          }}
        >
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{
              fontFamily: "var(--font-family-primary)",
              fontWeight: "bold",
              color: "#fff",
              lineHeight: isMobile ? "30px" : "60px",
              letterSpacing: "-0.02em",
            }}
          >
            Unlock Your Creative Potential
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "var(--font-family-primary)",
              fontWeight: "regular",
              color: "#fff",
              lineHeight: "24px",
              width: isMobile ? "100%" : "683px",
            }}
          >
            Learn UI/UX and Graphic Design from industry experts. Join our
            online courses and transform your career.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              router.push("/course");
            }}
            sx={{
              mt: "20px",
              backgroundColor: "var(--color-orange)",
              fontFamily: "var(--font-family-primary)",
              fontSize: "16px",
              color: "#FCFAF7",
              fontWeight: "Bold",
              textTransform: "none",
            }}
          >
            View Courses
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
