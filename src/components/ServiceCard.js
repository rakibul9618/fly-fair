import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ServiceCard = ({ data }) => {
  return (
    <Card
      sx={{
        maxWidth: { xs: 275, md: 370, lg: 268, xl: 275 },
        margin: "20px 10px",
        transform: "scale(1)",
        transition:
          "0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow, 0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12)",
      }}
      className="card-hover"
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={data.img}
          alt="green iguana"
          sx={{ width: "100%" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              textAlign: "center",
              fontSize: "24",
              fontWeight: "700",
              marginTop: "5px",
            }}
          >
            {data.header}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            {data.para}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
