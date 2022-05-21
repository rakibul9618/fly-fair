import { Box } from "@mui/system";
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
    <Box
      sx={{
        padding: 0,
        background: "#ECF0FB",
        marginTop: { xs: "100px", xl: "174px" },
        paddingTop: "80px",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: { xs: "space-around", xl: "space-between" },
          flexWrap: "wrap",
          px: { xs: "20px", sm: "30px", md: "40px", lg: "60px", xl: "100px" },
        }}
      >
        <Box
          component="div"
          sx={{ padding: { xs: 2, lg: "30px 20px", xl: "16px 10px" } }}
        >
          <Box component="img" src={logo} alt="logo" />
          <Box component="div" sx={{ py: 1 }}>
            {socialIcon.map((value, index) => {
              return (
                <Box
                  component="img"
                  key={index}
                  src={value.img}
                  alt={value.alt}
                  sx={{ paddingRight: "5px" }}
                />
              );
            })}
          </Box>
        </Box>
        <Box
          component="div"
          sx={{ padding: { xs: 2, lg: "30px 20px", xl: "16px 10px" } }}
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
        <Box
          component="div"
          sx={{
            padding: { xs: 2, lg: "30px 20px", xl: "16px 10px" },
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
            Authorised by
          </Typography>
          <img src={iata} alt="IATA company logo" />
        </Box>
        <Box
          component="div"
          sx={{
            padding: { xs: 2, lg: "30px 20px", xl: "16px 10px" },
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
            padding: { xs: 2, lg: "30px 20px", xl: "16px 10px" },
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
            padding: { xs: 2, lg: "30px 20px", xl: "16px 10px" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", xl: "start" },
            px: { lg: "117px", xl: "" },
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
            sx={{
              fontSize: "16px",
              color: "#636363",
              width: "283px",
              textAlign: { xs: "center", xl: "start" },
            }}
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
                marginRight: { sm: "15px" },
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
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          component="div"
          sx={{
            width: { xs: "89%", sm: "89%" },
            height: "1px",
            background: "white",
            marginTop: "20px",
          }}
        ></Box>
      </Box>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "center", px: { xs: 3, sm: 5 } }}
      >
        <Box
          component="img"
          src={footer}
          alt="Different getrway of payment"
          sx={{
            p: 2,
            marginTop: "40px",
            width: "100%",
            maxWidth: "1220px",
            margin: "",
          }}
        />
      </Box>

      <Box
        component="p"
        sx={{
          color: "#434343",
          fontSize: "18px",
          px: 2,
          paddingBottom: 6,
          textAlign: "center",
          margin: 0,
        }}
      >
        @All Right Reserved By Fly Far International & Developed By FLy Far Tech
      </Box>
    </Box>
  );
};

export default Footer;
