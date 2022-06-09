import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesdata } from "./api";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import Map from "./components/Map/Map";

const App = () => {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({lat:0, lng:0});
  const [bounds, setBounds]= useState("");

  useEffect(()=>{
navigator.geolocation.getCurrentPosition(({coordinates: {latitude, longitude}})=>{
  setCoordinates({ lat:latitude, lng:longitude });
});
  },[])

  useEffect(() => {
    getPlacesdata( bounds.sw, bounds.ne)
    .then((data) => {
      setPlaces(data);
    });
  }, [coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          />
        </Grid>
      </Grid>
      <PlaceDetails />
    </>
  );
};

export default App;
