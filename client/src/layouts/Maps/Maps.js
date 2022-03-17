import React, { useEffect, useRef, useState } from "react";
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import { Field, Input, Form, Flex, Box, Heading, Select, Tooltip, Modal, Card, Icon, Text, Loader, Button, Image, ToastMessage } from 'rimble-ui';

mapboxgl.accessToken = "pk.eyJ1IjoiYmxlbnR6IiwiYSI6ImNrcXdlbTNpZzBubHgydnRmMTFhYTUyYnQifQ.BMNFdTUitHI4lP1Kp7moPg";

function Maps() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
    });

        return (
            <div>
              <div ref={mapContainer} className="map-container" />
            </div>
          );
  };



export default Maps
