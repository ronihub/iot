import { IonButton, IonContent, IonImg, IonModal } from "@ionic/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useHistory, useLocation } from "react-router";
import "./components.css";
import ExploreModal from "./ExploreModal";

interface IExploreCard {
  title: string;
  img: any;
  long: string;
  lat: string;
  place: string;
  url: string;
}

const ExploreCard: React.FC<IExploreCard> = ({
  title,
  img,
  long,
  lat,
  place,
  url,
}) => {
  const [modal, setModal] = useState<boolean>(false);
  const history = useHistory();

  const clickHandler = (url: string) => {
    history.push(`/explore/${url}`);
  };

  return (
    <div onClick={() => clickHandler(url)} className="explore-card">
      <div>
        <IonImg className="explore-banner" src={img} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ExploreCard;
