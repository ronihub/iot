import { IonImg } from "@ionic/react";
import React, { Dispatch, SetStateAction } from "react";

interface IExploreModal {
  long: string;
  lat: string;
  place: string;
  img: any;
  stateModifier: Dispatch<SetStateAction<boolean>>;
}

const ExploreModal: React.FC<IExploreModal> = ({
  long,
  lat,
  place,
  stateModifier,
  img,
}) => {
  return (
    <div className="explore-modal">
      <button className="close-modal" onClick={() => stateModifier(false)}>
        X
      </button>
      <IonImg src={img}></IonImg>
      <h3>{place}</h3>
    </div>
  );
};

export default ExploreModal;
