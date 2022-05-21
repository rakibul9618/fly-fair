import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const HoverCard = styled(Card)({
  "&:hover": {},
});

const ChoiceUsCard = ({ data }) => {
  const head = data.fontSize[0];
  const para = data.fontSize[1];
  return (
    <HoverCard
      sx={{
        minWidth: data.minWidth,
        minHeight: data.minHeight,
        maxWidth: data.maxWidth,
        maxHeight: data.maxHeight,
        height: { xl: data.maxHeight },
        width: { xl: data.maxWidth },
        background: data.background,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        borderRadius: "30px",
        p: { xs: 2, sm: 1, lg: 2, xl: 0 },
        marginTop: "16px",
        mx: "16px",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
          component="h4"
          sx={{
            color: data.color,
            fontSize: {
              xs: `${head / 1.7}px`,
              lg: `${head / 1.2}px`,
              xl: `${head}px`,
            },
            fontWeight: "bold",
          }}
        >
          {data.header}
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            color: data.color,
            fontSize: {
              xs: `${para / 1.7}px`,
              lg: `${para / 1.2}px`,
              xl: `${para}px`,
            },
            fontWeight: "500",
            marginTop: "20px",
          }}
        >
          {data.para}
        </Typography>
      </CardContent>
    </HoverCard>
  );
};

export default ChoiceUsCard;
