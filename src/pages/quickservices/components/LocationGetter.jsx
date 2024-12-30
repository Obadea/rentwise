import React, { useState, useEffect } from "react";

const LocationGetter = () => {
  const [time, setTime] = useState("");
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    city: null,
    country: null,
  });
  const [error, setError] = useState("");

  // Function to fetch time
  const updateTime = () => {
    const currentTime = new Date();
    setTime(
      new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZoneName: "short",
      }).format(currentTime)
    );
  };

  // Function to fetch location
  const fetchLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation((prev) => ({ ...prev, latitude, longitude }));

          try {
            // Reverse Geocoding API to fetch city and country
            const response = await fetch(
              `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            setLocation((prev) => ({
              ...prev,
              city: data.address?.city || data.address?.town || "Unknown",
              country: data.address?.country || "Unknown",
            }));
          } catch (err) {
            setError("Failed to fetch location details.");
          }
        },
        (err) => {
          setError("Location access denied.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  // Update time every second
  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Fetch location on component mount
  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className="max-w-lg  p-4  text-gray-800">
      <h1 className="text-base font-bold">Your Time and Location</h1>
      <div className="mb-1">
        <p className="text-gray-700">{time || "Fetching time..."}</p>
      </div>
      <div>
        {/* <h2 className="text-lg font-semibold">Location:</h2> */}
        {/* {location.latitude && location.longitude ? (
          <p className="text-gray-700">
            Latitude: {location.latitude.toFixed(2)}, Longitude:{" "}
            {location.longitude.toFixed(2)}
          </p>
        ) : (
          <p className="text-gray-700">Fetching location...</p>
        )} */}
        {location.city && location.country ? (
          <p className="text-gray-700">
            City: {location.city}, Country: {location.country}
          </p>
        ) : (
          <p className="text-gray-700">Fetching location...</p>
        )}
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default LocationGetter;
