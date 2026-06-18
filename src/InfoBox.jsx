import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

import "./InfoBox.css";

export default function InfoBox({ info }) {
  const IMG_URL =
    "https://plus.unsplash.com/premium_photo-1667143324668-064f130f731d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1542923910-f391dea9f674?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1636414795389-2cd7bb362560?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 75
                ? RAINY_URL
                : info.temp > 25
                  ? HOT_URL
                  : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>
                {info.city}
                &nbsp;{info.humidity > 75 ? (
                  <ThunderstormIcon />
                ) : info.temp > 25 ? (
                  <SunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </b>
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>
                Tempreture: <b>{info.temp}&deg;C</b>
              </p>
              <p>
                Humidity: <b>{info.humidity}</b>
              </p>
              <p>
                Min Temp: <b>{info.tempMin}</b>
              </p>
              <p>
                Max Temp: <b>{info.tempMax}</b>
              </p>
              <p>
                The weather can be described as{" "}
                <b>
                  <i>{info.weather}</i>
                </b>{" "}
                feels like <b>{info.feelsLike}&deg;C</b>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
