import L from 'leaflet';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';

import { svgToUrl } from '../../../utils/svg';
import { Container, Title } from './styles';

const mapMarkerIcon = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 0C13.1634 0 7.99999 5.16344 7.99999 11.5C7.99999 19 20 30.5 20 30.5C20 30.5 31 19 31 11.5C31 5.16344 25.8366 0 20 0ZM20 15C18.3431 15 17 13.6569 17 12C17 10.3431 18.3431 9 20 9C21.6569 9 23 10.3431 23 12C23 13.6569 21.6569 15 20 15Z"
      fill="#ff0000"
    />
  </svg>`;

const customIcon = new L.Icon({
  iconUrl: svgToUrl(mapMarkerIcon), // Converta o componente SVG em uma URL de imagem
  iconSize: [40, 40], // Tamanho do ícone
  iconAnchor: [21, 32], // Ponto de ancoragem do ícone (centro inferior)
  popupAnchor: [0, 0], // Ponto de ancoragem do popup (acima do ícone)
});

export const Locale = () => {
  const centerLocation = { lat: -24.2426774, lng: -52.7905163 };
  const location1 = { lat: -24.2418208, lng: -52.7913163 }; // Igreja
  const location2 = { lat: -24.2426774, lng: -52.7896493 }; // clube da melhor idade

  const openGoogleMaps = async (destinationLocation: any) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLocation.lat},${destinationLocation.lng}`;
    window.open(url, '_blank');
  };

  return (
    <Container>
      <Title>Localização</Title>
      <MapContainer
        center={centerLocation}
        zoom={17}
        style={{ height: '60%', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={location1} icon={customIcon}>
          <Tooltip permanent direction="bottom" interactive>
            <p>Igreja</p>
            <button onClick={() => openGoogleMaps(location1)}>
              <FaMapMarkedAlt /> Abrir rotas
            </button>
          </Tooltip>
        </Marker>
        <Marker position={location2} icon={customIcon}>
          <Tooltip permanent direction="bottom" interactive>
            <p>Salão de festas</p>
            <button onClick={() => openGoogleMaps(location2)}>
              <FaMapMarkedAlt /> Abrir rotas
            </button>
          </Tooltip>
        </Marker>
      </MapContainer>
    </Container>
  );
};
