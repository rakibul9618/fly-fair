import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

// images

import profile from "../assets/images/profile.png";

const CeoDesk = () => {
  return (
    <Container className="ceo-container">
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
            p: 2,
            background: "white",
            width: "70%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: "15px",
          }}
        >
          <img src={profile} alt="A person" style={{ padding: "10px" }} />
          <Box
            sx={{
              p: { xs: 1, md: 6 },
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Typography component="h1" sx={{ fontSize: "34px", py: 1 }}>
              From The Desk Of CEO!
            </Typography>
            <Typography component="p" sx={{}}>
              Dear Respected Partner, <br /> First of all, I'd like to say a
              massive thank you for the continued support you offer to TBO. With
              your help, the business continues to grow in all product sectors,
              and I am sure that you have experienced a fruitful and profitable
              season too.{" "}
              <span
                style={{ color: "#003566", borderBottom: "1px solid #003566" }}
              >
                Read more
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CeoDesk;
