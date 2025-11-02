"use client";
import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Container,
  Typography,
  Box,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    course: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCourseChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      course: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      course: "",
    });
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });
    const data = await res.json();
    setMessage(data.message || data.error);
    // console.log("Form submitted:", formData);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 4,
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{ mb: 3, color: "#fa7305", fontWeight: "bold" }}
          >
            Register
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={formData.name}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#fa7305",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#fa7305",
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#fa7305",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#fa7305",
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="phoneNumber"
              label="phoneNumber"
              name="phoneNumber"
              autoComplete="tel"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#fa7305",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#fa7305",
                },
              }}
            />
            <FormControl fullWidth margin="normal" required>
              <InputLabel
                id="course-label"
                sx={{ "&.Mui-focused": { color: "#fa7305" } }}
              >
                Course
              </InputLabel>
              <Select
                labelId="course-label"
                id="course"
                value={formData.course}
                label="Course"
                onChange={handleCourseChange}
                disableportal="true"
                MenuProps={{
                  disableScrollLock: true,
                  PaperProps: {
                    sx: {
                      mt: 0.5,
                      maxHeight: 224,
                    },
                  },
                }}
                sx={{
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fa7305",
                  },
                }}
              >
                <MenuItem value="UI/UX course">UI/UX course</MenuItem>
                <MenuItem value="Graphic Design course">
                  Graphic Design course
                </MenuItem>
              </Select>
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#fa7305",
                "&:hover": {
                  backgroundColor: "#e56505",
                },
                textTransform: "none",
                fontSize: "1.1rem",
                padding: "12px",
              }}
            >
              Submit Registration
            </Button>
          </Box>
          {message && (
            <Typography mt={3} textAlign="center" color="secondary">
              {message}
            </Typography>
          )}
        </Box>
      </Container>
    </>
  );
}
