import 'leaflet/dist/leaflet.css';

import { useState } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';

import { Container, Text } from './styles';

export const Locale = () => {
  const centerLocation = { lat: -24.2421208, lng: -52.7905163 };
  const location1 = { lat: -24.2418208, lng: -52.7913163 }; // Igreja
  const location2 = { lat: -24.2426774, lng: -52.7896493 }; // clube da melhor idade

  const openGoogleMaps = async (destinationLocation: any) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLocation.lat},${destinationLocation.lng}`;
    window.open(url, '_blank');
  };

  return (
    <Container>
      <Text>
        <h1>Localização</h1>
      </Text>
      <MapContainer
        center={centerLocation}
        zoom={17}
        style={{ height: '80%', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={location1}>
          <Tooltip permanent direction="bottom" offset={[-14, 30]} interactive>
            <p>Igreja</p>
            <button onClick={() => openGoogleMaps(location1)}>
              <FaMapMarkedAlt /> Abrir rotas no Google Maps
            </button>
          </Tooltip>
        </Marker>
        <Marker position={location2}>
          <Tooltip offset={[-14, 28]} permanent direction="bottom" interactive>
            <p>Salão de festas</p>
            <button onClick={() => openGoogleMaps(location2)}>
              <FaMapMarkedAlt /> Abrir rotas no Google Maps
            </button>
          </Tooltip>
        </Marker>
      </MapContainer>
    </Container>
  );
};
