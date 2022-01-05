import { IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import { snow, sparkles, star } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { fetchFromApiAndSave, IResultFormatted } from "../routes/pollution-api";
import "./components.css";

interface IInfoCard {
  title: string;
  icon: any;
  value: undefined | number;
  background: string;
}

interface I {
  long: string;
  lat: string;
  place: string;
}

const InfoCards: React.FC<I> = ({ lat, long, place }) => {
  const [data, setData] = useState<IResultFormatted>();

  useEffect(() => {
    const fetchResult = async () => {
      const res = await fetchFromApiAndSave(lat, long, place);
      if (res) {
        setData({
          aqi: res.aqi,
          pm10: res.pm10,
          pm2_5: res.pm2_5,
          place: place,
        });
      }
    };
    fetchResult();
  }, []);

  const InfoCard: React.FC<IInfoCard> = ({
    icon,
    value,
    title,
    background,
  }) => {
    return (
      <div style={{ background: background }} className="info-card">
        <div className="info-card-container">
          <IonIcon icon={icon}></IonIcon>
          <h2>{value}</h2>
          <p>{title}</p>
        </div>
      </div>
    );
  };
  return (
    <IonGrid style={{ padding: "20px 0 0 0" }}>
      <IonRow>
        <IonCol style={{ padding: "0 10px 10px 0" }} sizeXs="6">
          <InfoCard
            title="AQI"
            icon={star}
            value={data?.aqi}
            background="#EDFCFC"
          />
        </IonCol>
        <IonCol style={{ padding: "0 0 10px 10px" }} sizeXs="6">
          <InfoCard
            title="PM 2.5"
            icon={sparkles}
            value={data?.pm2_5}
            background="#F4F0F9"
          />
        </IonCol>
        <IonCol style={{ padding: "10px 10px 0 0" }} sizeXs="6">
          <InfoCard
            title="PM 10"
            icon={snow}
            value={data?.pm10}
            background="#F2F1F9"
          />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default InfoCards;
