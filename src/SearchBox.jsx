import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [err, setErr] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "fad1dbcc0d8e48b259ee062451c7c7a";

  const getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    let jsonResponse = await response.json();

    // Check if city exists
    if (jsonResponse.cod !== 200) {
      throw new Error("City not found");
    }

    let result = {
      city: jsonResponse.name,
      feelsLike: jsonResponse.main.feels_like,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      weather: jsonResponse.weather[0].description,
    };

    return result;
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let newInfo = await getWeatherInfo();

      updateInfo(newInfo);

      // Clear error if previous search failed
      setErr(false);

      // Clear input field
      setCity("");
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Enter City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>

        {err && (
          <p style={{ color: "red" }}>
            No such place exists in our app!
          </p>
        )}
      </form>
    </div>
  );
}