import { IonIcon, IonLabel } from "@ionic/react";
import {
  locate,
  location,
  paperPlane,
  paperPlaneOutline,
  pin,
} from "ionicons/icons";
import React from "react";
import { getMyCurrentLocation } from "../helpers/location";
import "./components.css";

const PositionNow: React.FC = () => {
  return (
    <div className="current-position-container">
      <div className="current-position">
        <IonLabel>{getMyCurrentLocation()}</IonLabel>
        <IonIcon icon={location} />
      </div>
    </div>
  );
};

export default PositionNow;
