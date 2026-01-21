import React, { useState } from "react";
import axios from "axios";
import "../components/styles.css";

const Temperature = () => {
  const [temp, setTemp] = useState(null);
  const [city, setCity] = useState("");

  const getTempColor = () => {
    if (temp >= 40 && temp <= 50) return "purple";
    if (temp >= 30) return "red";
    return "black";
  };

  const getTemperature = () => {
    if (!city) return;

    axios
      .get("https://geocoding-api.open-meteo.com/v1/search", {
        params: { name: city, count: 1 },
      })
      .then((res) => {
        const { latitude, longitude } = res.data.results[0];
        return axios.get("https://api.open-meteo.com/v1/forecast", {
          params: {
            latitude,
            longitude,
            current_weather: true,
          },
        });
      })
      .then((res) => {
        setTemp(res.data.current_weather.temperature);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {/* Page heading */}
      <h3>Welcome to API access via Axios - Weather Page!</h3>

      <br />

      {/* City Dropdown */}
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          width: 420,
          height: 50,
          padding: 10,
          fontSize: 18,
          backgroundColor: "#daeff5ff",
        }}
      >
        <option value="">-- Select City --</option>
        <option value="Guntur">Guntur</option>
        <option value="Vijayawada">Vijayawada</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Delhi">Delhi</option>
         <option value="australia">australia</option>
      </select>

      <br />
      <br />

      <button onClick={getTemperature}>Get Temperature</button>

      <br />
      <br />

      {temp !== null && (
        <h1 style={{ color: getTempColor() }}>
          Temperature is {temp} °C
        </h1>
      )}
    </div>
  );
};

export default Temperature;
