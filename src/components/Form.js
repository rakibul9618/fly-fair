import React from "react";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ShowInput from "./ShowInput";

// images
import calendar from "../assets/images/calendar.png";
import transfer from "../assets/images/transfer.png";
import search from "../assets/images/search.png";

const RoundTrip = styled(Button)({
  background: "#FFFF00",
  color: "black",
  fontWeight: "600",
  "&:hover": {
    backgroundColor: "#198754",
    color: "white",
  },
});

const SearchFlight = styled(Button)({
  background: "#003566",
  fontSize: "18px",
  fontWeight: "300",
  color: "white",
  borderRadius: "124.5px",
  "&:hover": {
    backgroundColor: "#198754",
    color: "white",
  },
});

const formData = [
  {
    header: "From",
    placeholder: "Enter city/airport name",
  },
  {
    header: "To",
    placeholder: "Enter city/airport name",
  },
  {
    header: "Departure Date",
    placeholder: "Departure Date",
    logo: (
      <img
        style={{ paddingRight: "10px" }}
        src={calendar}
        alt="calender logo"
      />
    ),
  },
  {
    header: "Returning Date",
    placeholder: "Departure Date",
    logo: (
      <img
        style={{ paddingRight: "10px" }}
        src={calendar}
        alt="calender logo"
      />
    ),
  },
  {
    header: "Passenger & Class",
    placeholder: "1 Person Economy Class",
  },
];

const Form = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: { xs: "relative", md: "absolute" },
        top: { xs: "50px", md: "560px", xl: "560px" },
        left: 0,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { md: "75%", xl: "80%" },
          background: "white",
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          py: 3,
          position: "relative",
          paddingBottom: "45px",
        }}
      >
        <Box
          component="div"
          sx={{
            width: { xs: "100%", sm: "90%", md: "80%", lg: "70%" },
            background: "#003566",
            px: "5px",
            py: "2px",
            color: "white",
            borderRadius: { xs: "8px", sm: "124.5px" },
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "white",
              padding: { xs: "3px 4px", sm: "3px 25px", md: "3px 20px" },
              fontSize: { xs: "13px", sm: "16px", md: "18px" },
              fontWeight: "medium",
              textTransform: "none",
            }}
            className="btn-hover"
          >
            One Way
          </Button>
          <RoundTrip
            sx={{
              padding: { xs: "3px 8px", sm: "3px 25px", md: "3px 40px" },
              fontSize: { xs: "13px", sm: "16px", md: "18px" },
              fontWeight: "medium",
              textTransform: "none",
              background: "#FFFF00",
              color: "black",
              borderRadius: "124.5px",
            }}
          >
            Round trip
          </RoundTrip>
          <Button
            variant="text"
            sx={{
              color: "white",
              padding: { xs: "3px 4px", sm: "3px 25px", md: "3px 20px" },
              fontSize: { xs: "13px", sm: "16px", md: "18px" },
              fontWeight: "medium",
              textTransform: "none",
            }}
          >
            Multi-City
          </Button>
        </Box>
        <Box
          component="div"
          sx={{
            width: { xs: "100%" },
            p: { xs: 1 },
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { sm: "center", xl: "space-between" },
            flexDirection: { xs: "column", sm: "row" },
            position: "relative",
          }}
        >
          {formData.map((data, index) => {
            return <ShowInput data={data} key={index} />;
          })}
          <Box
            component="img"
            sx={{
              position: "absolute",
              display: { xs: "none", sm: "block" },
              top: { sm: "19%", lg: "27%", xl: "26%" },
              left: { sm: "40%", lg: "27%", xl: "17%" },
            }}
            src={transfer}
            alt="logo"
          />
        </Box>
        <SearchFlight
          sx={{
            padding: { xs: "6px 20px", sm: "6px 35px" },
            display: "flex",
            alignItems: "center",
            position: "absolute",
            bottom: { xs: "-15px", sm: "-21px" },
            textTransform: "none",
          }}
        >
          <Box
            component="img"
            src={search}
            alt="search icon"
            sx={{ paddingRight: "10px" }}
          />
          Search Flight
        </SearchFlight>
      </Container>
    </Container>
  );
};

export default Form;
