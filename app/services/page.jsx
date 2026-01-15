"use client";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`
      );

      const data = await res.json();

      if (!res.ok) {
        setError("City not found");
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError("Failed to load weather");
    }

    setLoading(false);
  };

  return (
    <main style={styles.container}>
      <h1>🌤 Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={styles.input}
      />

      <button onClick={getWeather} style={styles.button}>
        Get Weather
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ colour: "red" }}>{error}</p>}

      {weather && (
        <div style={styles.card}>
          <h2>{weather.city}</h2>
          <p>🌡 Temperature: {weather.temperature} °C</p>
          <p>☁ Condition: {weather.description}</p>
          <p>💨 Wind Speed: {weather.windSpeed} km/h</p>
          <p>💧 Humidity: {weather.humidity}%</p>
        </div>
      )}
    </main>
  );
}

const styles = {
  container: {
    textAlign: "centre",
    padding: "40px",
    fontFamily: "Arial",
  },
  input: {
    padding: "10px",
    margin: "10px",
    width: "220px",
  },
  button: {
    padding: "10px 20px",
    background: "#0070f3",
    colour: "white",
    border: "none",
    cursor: "pointer",
  },
  card: {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    width: "300px",
    marginInline: "auto",
  },
};
