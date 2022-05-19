import React from "react";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const RegButton = styled(Button)({
  background: "#FFFF00",
  color: "black",
  fontWeight: "600",
  fontSize: { xs: "8px", sm: "15px" },
  "&:hover": {
    backgroundColor: "#198754",
    color: "white",
  },
});

const Header = () => {
  return (
    <Container
      maxWidth="xl"
      className="header-image"
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "start" },
        alignItems: "center",
        borderRadius: "16px",
        textAlign: { xs: "center", md: "start" },
      }}
    >
      <Box
        component="div"
        sx={{
          p: 2,
          color: "white",
          width: { xs: "100%", md: "50%", lg: "40%", xl: "50%" },
        }}
      >
        <h1 style={{ color: "white" }}>One Platform, All Travel Solutions.</h1>
        <p>
          Bangladesh’s most comprehensive B2B portal for You. In publishing and
          graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on.
        </p>
        <RegButton variant="contained">Regester now as a Agent</RegButton>
      </Box>
    </Container>
  );
};

export default Header;
