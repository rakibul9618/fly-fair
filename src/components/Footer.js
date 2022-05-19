import { Box, Container } from "@mui/system";
import React from "react";
import facebook from "../assets/images/facebook.png";
import youtube from "../assets/images/youtube.png";
import linkedin from "../assets/images/linkedin.png";
import pit from "../assets/images/pit.png";
import twitter from "../assets/images/twitter.png";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

// images
import logo from "../assets/images/logo.png";
import iata from "../assets/images/iata.png";
import toad from "../assets/images/toad.png";
import atab from "../assets/images/atab.png";
import biman from "../assets/images/biman.png";
import footer from "../assets/images/footer.png";

const Subscribe = styled(Button)({
  background: "#003566",
  color: "white",
  fontWeight: "600",
  fontSize: "15px",
  padding: "10px 35px",
  "&:hover": {
    backgroundColor: "#198754",
    color: "white",
  },
});

const socialIcon = [
  {
    img: facebook,
    alt: "faceook",
  },
  {
    img: youtube,
    alt: "youtube",
  },
  { img: linkedin, alt: "linkedin" },
  { img: pit, alt: "logo" },
  { img: twitter, alt: "twitter" },
];

const para = [
  "Payment Mathod",
  "Terms and condition",
  "Privacy policy",
  "Contact US",
];

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        paddin: 0,
        background: "#E5E5E5",
        marginTop: "100px",
        paddingTop: "80px",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Box component="div" sx={{ p: 2 }}>
          <img src={logo} alt="logo" />
          <Box component="div" sx={{ p: 2 }}>
            {socialIcon.map((value, index) => {
              return (
                <img
                  key={index}
                  src={value.img}
                  alt={value.alt}
                  style={{ padding: "5px 5px" }}
                />
              );
            })}
          </Box>
        </Box>
        <Box component="div" sx={{ p: 2 }}>
          <Typography
            component="h1"
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              paddingBottom: "10px",
              color: "#202020",
            }}
          >
            Company
          </Typography>
          {para.map((data, index) => {
            return (
              <Typography
                key={index}
                component="h1"
                sx={{ fontSize: "16px", color: "#636363" }}
              >
                {data}
              </Typography>
            );
          })}
        </Box>
        <Box component="div" sx={{ p: 2 }}>
          <Typography
            component="h1"
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              paddingBottom: "10px",
              color: "#202020",
            }}
          >
            Authorised by
          </Typography>
          <img src={iata} alt="IATA company logo" />
        </Box>
        <Box
          component="div"
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              paddingBottom: "10px",
              color: "#202020",
            }}
          >
            Members of
          </Typography>
          <img
            src={toad}
            alt="TOAB company logo"
            style={{ padding: "10px 0" }}
          />
          <img src={atab} alt="ATAB company logo" />
        </Box>
        <Box
          component="div"
          sx={{
            p: 2,
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              paddingBottom: "10px",
              color: "#202020",
            }}
          >
            Approved Agent
          </Typography>
          <img src={biman} alt="Biman company logo" />
        </Box>
        <Box
          component="div"
          sx={{
            p: 2,
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              paddingBottom: "10px",
              color: "#202020",
            }}
          >
            Send us massage via Email
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "16px", color: "#636363", width: "283px" }}
          >
            It is a long established fact that a reader will be by content.
          </Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: { sm: "center" },
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box
              component="h1"
              sx={{
                border: "2px solid #003566",
                borderRadius: "4px",
                width: "auto",
                marginRight: { sm: "30px" },
              }}
            >
              <Typography
                component="p"
                sx={{
                  color: "#BEBEBF",
                  padding: "10px",
                  paddingRight: { xs: "20px", sm: "80px" },
                }}
              >
                enter Your Email
              </Typography>
            </Box>
            <Subscribe>SUBSCRIBE</Subscribe>
          </Box>
        </Box>
      </Box>
      <Box component="div" sx={{ p: 2, marginTop: "50px" }}>
        <img src={footer} alt="Different getrway of payment" width="100%" />
      </Box>
    </Container>
  );
};

export default Footer;
