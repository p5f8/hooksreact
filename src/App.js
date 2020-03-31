import React, { useState, useEffect } from 'react';

export default function App() {

  const [location, setLocation] = useState({})

  useEffect(() => {
    navigator.geolocation.watchPosition(handePosition)
  }, [])

  let handePosition = (position) => {
    const { latitude, longitude } = position.coords
    setLocation( { latitude, longitude })
  }


  return (
    <>

    latitude: {location.latitude} <br/>
    longitude: {location.longitude}

    </>
  )
}
