import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import '../Component/Global_css/GlobalMap.css';

const worldGeoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const impactSites = [
  // Exact alignment ke liye coordinates tweak kiye hain
  { id: 1, name: 'Canada', coordinates: [-106, 58], url: 'https://changemakerindex.com/' },
  { id: 2, name: 'USA', coordinates: [-105, 40], url: 'https://usa-link.com' },
  { id: 3, name: 'UK', coordinates: [-2, 60], url: 'https://uk-link.com' },
  { id: 4, name: 'Switzerland', coordinates: [8.2, 46.8], url: 'https://switzerland-link.com' },
  { id: 5, name: 'India', coordinates: [78.9, 21.5], url: 'https://india-link.com' },
  { id: 6, name: 'Japan', coordinates: [138, 36], url: 'https://japan-link.com' },
  { id: 7, name: 'Philippines', coordinates: [122, 13], url: 'https://philippines-link.com' },
  { id: 8, name: 'Australia', coordinates: [133, -25], url: 'https://australia-link.com' },
];

export const GlobalMap = ({ name = "Impact" }) => {
  return (
    <div className="map-container">
      <h1 className="map-title">Global Impact - {name}</h1>
      <div className="map-wrapper">
        <ComposableMap 
        
          projectionConfig={{ 
            scale: 145,
            center: [0, 5] 
          }}
          width={800}
          height={400}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={worldGeoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC" 
                  stroke="#D6D6DA"
                  style={{
                    default: { outline: 'none' },
                    hover: { fill: '#CFD8DC', outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {impactSites.map((site) => (
            <Marker key={site.id} coordinates={site.coordinates}>
              <a href={site.url} target="_blank" rel="noopener noreferrer">
                {/* Visual Pin Point */}
                <circle
                  r={6}
                  fill="#007bff"
                  stroke="#fff"
                  strokeWidth={2}
                  className="map-marker"
                />
              
                <text
                  textAnchor="middle"
                  y={-15}
                  style={{
                    fontFamily: 'system-ui',
                    fill: '#333',
                    fontSize: '11px',
                    fontWeight: '600',
                  }}
                >
                  {site.name}
                </text>
              </a>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};