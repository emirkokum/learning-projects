import { useState, useEffect } from "react";

function Weather() {
  const [city, setCity] = useState("Istanbul");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (city === "") return;

    const fetchWeather = async () => {
      const res = await fetch(`https://wttr.in/${city}?format=3`);
      const data = await res.text();
      setWeather(data);
    };

    fetchWeather();
  }, [city]); // city değişince yeniden fetch et

  return (
    <div>
      <input
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <div style={{ marginTop: 10 }}>
        {weather ? <p>{weather}</p> : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default Weather;
