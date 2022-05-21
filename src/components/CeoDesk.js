import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

// images
import ceoDeskImg from "../assets/images/ceoDeskImg.png";
import profile from "../assets/images/profile.png";

const CeoDesk = () => {
  return (
    <Box
      className="ceo-container"
      sx={{
        backgroundImage: `url(${ceoDeskImg})`,
        width: "100%",
        marginTop: { xs: "40px", md: "80px", lg: "100px", xl: "160px" },
      }}
    >
      <Box
        component="div"
        className="ceo-desk"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "680px", sm: "601px" },
        }}
      >
        <Box
          component="div"
          sx={{
            px: 2,
            py: { xs: 2, lg: 4 },
            background: "white",
            width: "80%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: "15px",
            maxWidth: "1246px",
          }}
        >
          <Box
            component="img"
            src={profile}
            alt="A person"
            sx={{
              border: "4px solid #003566",
              borderRadius: "999px",
              marginLeft: { md: "30px" },
            }}
          />
          <Box
            sx={{
              py: { xs: 1, md: 6 },
              px: { xs: 1, md: "30px" },
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "22px", sm: "30px", md: "34px" },
                py: 1,
                fontWeight: "600",
              }}
            >
              From The Desk Of CEO!
            </Typography>
            <Typography
              component="p"
              sx={{ fontSize: { xs: "15px", sm: "16px" } }}
            >
              Dear Respected Partner, <br /> First of all, I'd like to say a
              massive thank you for the continued support you offer to TBO. With
              your help, the business continues to grow in all product sectors,
              and I am sure that you have experienced a fruitful and profitable
              season too.{" "}
              <span
                style={{
                  color: "#003566",
                  borderBottom: "1px solid #003566",
                  fontWeight: "600",
                }}
              >
                Read more
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CeoDesk;
