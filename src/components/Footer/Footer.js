import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
  TextField,
  Link,
} from "@mui/material";
import Image from "next/image";
import { useTheme, useMediaQuery } from "@mui/material";
export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const LinkData = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Course", href: "/course" },
    { title: "Register", href: "/register" },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    reason: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.reason
    ) {
      alert("Please fill all fields!");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Enquiry Sent Successfully!");
        setFormData({ name: "", email: "", phoneNumber: "", reason: "" });
      } else {
        alert(data.error || "❌ Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Failed to send enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component={"section"}
      sx={{ borderTop: "1px solid #E5E8EB", px: "40px", py: "20px" }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {/* Logo */}
          <Grid size={isMobile ? 12 : 4}>
            <Image
              src="/images/foot-logo.jpg"
              alt="Logo"
              width={180}
              height={150}
            />
          </Grid>

          {/* Quick Links */}
          <Grid size={4} display={isMobile ? "none" : "flex"}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography
                variant="h6"
                sx={{ fontFamily: "var(--font-family-primary)" }}
              >
                Quick Links
              </Typography>
              {LinkData.map((link, index) => (
                <Box key={index}>
                  <Link
                    href={link.href}
                    sx={{
                      fontFamily: "var(--font-family-primary)",
                      textDecoration: "none",
                      color: "#9E6E47",
                    }}
                  >
                    {link.title}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Enquiry Form */}
          <Grid size={isMobile ? 12 : 4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography
                variant="h6"
                sx={{ fontFamily: "var(--font-family-primary)" }}
              >
                Enquiry
              </Typography>
              <Grid container spacing={2}>
                <Grid size={12}>
                  <TextField
                    name="name"
                    label="Student Name"
                    variant="outlined"
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid size={isMobile ? 12 : 6}>
                  <TextField
                    name="phoneNumber"
                    label="Mobile Number"
                    variant="outlined"
                    fullWidth
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid size={isMobile ? 12 : 6}>
                  <TextField
                    name="email"
                    label="Email Id"
                    variant="outlined"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    name="reason"
                    label="Reason"
                    variant="outlined"
                    multiline
                    maxRows={4}
                    fullWidth
                    value={formData.reason}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Sending..." : "Enquiry"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
