import { useEffect, useRef } from 'react';
import Header from './component/Header';
import SearchMenu from './component/SearchMenu';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { PROJECTIONS } from 'ol/proj/epsg4326';
import 'ol/ol.css';

const MapPage = () => {
  const mapRef = useRef(
    new Map({
      view: new View({
        projection: PROJECTIONS[0],
        center: [127.3922689, 36.3407831],
        zoom: 18,
        // extent: [124, 32, 134, 40],
        // maxZoom: 10,
        // minZoom: 6,
      }),
      layers: [new TileLayer({ source: new OSM() })],
    }),
  );

  const wrapperEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = mapRef.current;
    map.setTarget(wrapperEl.current ?? undefined);
    return () => {
      map.dispose();
    };
  });

  return (
    <div className="flex flex-col h-screen">
      <Header back alarm review />
      <SearchMenu />
      <div className="flex-1 w-ful" ref={wrapperEl} />
    </div>
  );
};

export default MapPage;
