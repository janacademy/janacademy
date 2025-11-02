import React from "react";
import { Box, Typography, Container } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Rating from "@mui/material/Rating";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function TestimonialCard() {
  const testimonialData = [
    {
      name: "Dr. Bishnupriya Pradhan",
      description:
        "I am extremely thankful to Jan Academy for giving me the opportunity to learn the basics of Graphic Designing. The mentor was incredibly supportive and made every concept easy to understand. As a complete beginner with no prior experience, this course gave me the confidence to explore and gain hands-on experience in graphic designing.Thank you, Jan Academy, for this wonderful learning experience!",
      image: "/images/test1.jpeg",
      date: "11-06-2025",
      rate: 5,
    },
    {
      name: "C. kathiravan",
      description:
        "I joined Jan Academy with absolutely no design background. In just three months, I not only learned graphic design from scratch, but now I'm confidently creating professional and stunning designs. The training was very clear, structured, and practical. I felt supported at every step. I'm really happy with how far I've come and grateful to Jan Academy for guiding me in the right way. This course has opened up new opportunities for me and boosted my confidence a lot.",
      image: "/images/test2.jpeg",
      date: "26-10-2025",
      rate: 5,
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
            Testimonial
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {testimonialData.map((test, index) => (
              <List
                key={test.index}
                display="flex"
                flexDirection="column"
                gap="12px"
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="profile image" src={test.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontFamily: "var(--font-family-primary)",
                            color: "#1C140D",
                            fontWeight: "medium",
                          }}
                        >
                          {test.name}
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{
                            fontSize: "14px",
                            lineHeight: "21px",
                            fontFamily: "var(--font-family-primary)",
                            color: "#9E6E47",
                            fontWeight: "regular",
                          }}
                        >
                          {test.date}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <ListItem>
                  <Rating
                    name="read-only"
                    value={test.rate}
                    readOnly
                    sx={{ color: "var(--color-orange)" }}
                  />
                </ListItem>
                <ListItem>
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
                    {test.description}
                  </Typography>
                </ListItem>
              </List>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
