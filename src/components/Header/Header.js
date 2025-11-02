import {
  Box,
  Button,
  Typography,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";

export default function Header() {
  const NavItems = [
    { title: "Home", link: "/" },
    { title: "Courses", link: "/course" },
    { title: "About", link: "/about" },
  ];

  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box component={"section"} sx={{ borderBottom: "1px solid #E5E8EB" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            height: "65px",
            px: isMobileOrTablet ? "12px" : "40px",
            py: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {isMobileOrTablet ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                // justifyContent: "space-between",
                width: "100%",
              }}
            >
              <IconButton onClick={toggleDrawer(true)} sx={{ color: "#000" }}>
                <MenuIcon />
              </IconButton>

              <Image
                src="/images/JAN Academy Logo.png"
                alt="Logo"
                width={151}
                height={65}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  router.push("/");
                }}
              />

              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{
                    width: 250,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <List>
                    {NavItems.map((item, index) => (
                      <ListItem
                        button
                        key={index}
                        onClick={() => {
                          toggleDrawer(false)();
                          router.push(item.link);
                        }}
                      >
                        <ListItemText
                          primary={item.title}
                          primaryTypographyProps={{
                            fontFamily: "var(--font-family-primary)",
                            fontSize: "16px",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => router.push("/register")}
                    sx={{
                      backgroundColor: "var(--color-orange)",
                      fontFamily: "var(--font-family-primary)",
                      fontSize: "16px",
                      color: "#FCFAF7",
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Enroll Now
                  </Button>
                </Box>
              </Drawer>
            </Box>
          ) : (
            <>
              <Image
                src="/images/JAN Academy Logo.png"
                alt="Logo"
                width={151}
                height={65}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  router.push("/");
                }}
              />
              <Box sx={{ display: "flex", alignItems: "center", gap: "32px" }}>
                {NavItems.map((item, index) => (
                  <Box key={index}>
                    <Typography
                      variant="h6"
                      onClick={() => router.push(item.link)}
                      sx={{
                        fontFamily: "var(--font-family-primary)",
                        fontSize: "16px",
                        lineHeight: "21px",
                        cursor: "pointer",
                        "&:hover": {
                          color: "var(--color-orange)",
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                ))}

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => router.push("/register")}
                  sx={{
                    backgroundColor: "var(--color-orange)",
                    fontFamily: "var(--font-family-primary)",
                    fontSize: "16px",
                    color: "#FCFAF7",
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                >
                  Enroll Now
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
}
