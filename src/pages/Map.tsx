import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import 'ol/ol.css';
import { PROJECTIONS } from 'ol/proj/epsg4326';
import OSM from 'ol/source/OSM';
import { useEffect, useRef } from 'react';
import Header from './component/Header';
import SearchMenu from './component/SearchMenu';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import Cluster from 'ol/source/Cluster';
import Style from 'ol/style/Style';
import CircleStyle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Text from 'ol/style/Text';

const MapPage = () => {
  const wrapperEl = useRef<HTMLDivElement>(null);
  const source = useRef(
    new VectorSource<Feature<Point>>({
      features: [],
    }),
  );

  const mapRef = useRef<Map>();

  useEffect(() => {
    mapRef.current = new Map({
      view: new View({
        projection: PROJECTIONS[0],
        center: [127.3922689, 36.3407831],
        zoom: 16,
        // extent: [124, 32, 134, 40],
        // maxZoom: 10,
        // minZoom: 6,
      }),
      layers: [
        new TileLayer({ source: new OSM() }),
        new VectorLayer({
          source: new Cluster({
            distance: 40,
            source: source.current,
          }),
          style: (feature) => {
            const size = feature.get('features').length;
            return new Style({
              image: new CircleStyle({
                radius: 10,
                stroke: new Stroke({
                  color: '#fff',
                }),
                fill: new Fill({
                  color: '#3399CC',
                }),
              }),
              text: new Text({
                text: size.toString(),
                fill: new Fill({
                  color: '#fff',
                }),
              }),
            });
          },
        }),
      ],
    });
    const map = mapRef.current;
    map.setTarget(wrapperEl.current ?? undefined);
    return () => {
      map.dispose();
    };
  }, []);

  useEffect(() => {
    source.current.clear();
    for (let i = 0; i < 1000; i++) {
      const r = Math.random() * 0.1;
      const deg = Math.random() * 360;
      const lat = 36.3407831 + r * Math.sin(deg);
      const lon = 127.3922689 + r * Math.cos(deg);
      const feature = new Feature(new Point([lon, lat]));
      source.current.addFeature(feature);
    }
  });

  return (
    <div className="">
      <div className="h-[calc(100vh-4rem)] flex flex-col">
        <div className="z-10 bg-white sticky top-0">
          <Header back alarm review />
          <SearchMenu />
        </div>
        <div className="bg-gray-200 flex-1" ref={wrapperEl} />
      </div>
      <div className="bg-white rounded-2xl min-h-screen -translate-y-4">
        <div className="h-4 place-items-center grid">
          <div className="h rounded w-16 h-2 bg-gray-300" />
        </div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sit
        velit nulla alias perferendis quas aspernatur vero cupiditate, provident
        esse obcaecati nobis deserunt minima modi et vel praesentium rem iure,
        atque maxime. Inventore eius eligendi sint autem, dolorum nobis ipsam
        accusamus maiores quas odit in deserunt! Deserunt reprehenderit nobis
        at, aliquam animi vero ullam voluptates ex reiciendis inventore laborum
        numquam vitae natus corporis quis sed nostrum, voluptatibus possimus
        dolor consequatur eum soluta culpa provident. Deserunt facere alias at
        modi? Molestiae nobis, quibusdam fugit omnis esse debitis quas modi
        neque eum eaque! Earum itaque ea ex voluptas reprehenderit nihil quia
        numquam.
      </div>
    </div>
  );
};

export default MapPage;