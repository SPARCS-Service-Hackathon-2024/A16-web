import React from "react";
import Header from "./component/Header";
import { Link } from "react-router-dom";
import Menu from "./component/Menu";
import Map from "./component/Map";

export default function MapChoice() {
  return (
    <div className="h-[100vh] mb-[60px]">
      <Header back={true} review={true} white={true} text=" " />

      <Menu video={true} />
    </div>
  );
}
