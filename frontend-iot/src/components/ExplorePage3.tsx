import { IonContent, IonImg, IonLabel, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import johannesburg from "../images/johannesburg.jpg";
import { fetchFromApiAndSave, IResultFormatted } from "../routes/pollution-api";
import MyChart from "./Chart";
import InfoCards from "./CurrentLocationInfo";
import Divider from "./divider";

const ExplorePage3: React.FC = () => {
  const [data, setData] = useState<IResultFormatted>();
  useEffect(() => {
    const fetchResult = async () => {
      const res = await fetchFromApiAndSave(
        "-26.195246",
        "28.034088",
        "Johannesburg, South Africa"
      );
      if (res) {
        setData({
          aqi: res.aqi,
          pm10: res.pm10,
          pm2_5: res.pm2_5,
          place: "Johannesburg, South Africa",
        });
      }
    };
    fetchResult();
  }, []);

  return (
    <IonPage>
      <IonContent>
        <IonImg src={johannesburg}></IonImg>
        <div style={{ padding: "0px 15px" }}>
          <h2>Johannesburg, South Africa</h2>
          <p style={{ fontWeight: 300 }}>
            Johannesburg is the capital of South Africa. It has the most
            populous urban area in South Africa as well as in whole of Africa.
          </p>
        </div>
        <Divider />
        <div className="custom-wrapper">
          <IonLabel className="title">Right now</IonLabel>
          <p className="undertext">Johannesburg, South Africa today</p>
          <InfoCards
            lat={"-26.195246"}
            long="28.034088"
            place="Johannesburg, South Africa"
          />
        </div>
        <Divider />
        <div className="custom-wrapper">
          <IonLabel className="title">PM 2_5</IonLabel>
          <p className="undertext">Values for Jan 2021 - Dec 2021</p>
          <MyChart />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ExplorePage3;
