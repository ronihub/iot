import { IonContent, IonImg, IonLabel, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import johannesburg from "../images/johannesburg.jpg";
import { fetchFromApiAndSave, IResultFormatted } from "../routes/pollution-api";
import MyChart from "./Chart";
import InfoCards from "./CurrentLocationInfo";
import Divider from "./divider";

const ExplorePage4: React.FC = () => {
  const [data, setData] = useState<IResultFormatted>();
  useEffect(() => {
    const fetchResult = async () => {
      const res = await fetchFromApiAndSave(
        "52.237049",
        "21.017532",
        "Washington DC, USA"
      );
      if (res) {
        setData({
          aqi: res.aqi,
          pm10: res.pm10,
          pm2_5: res.pm2_5,
          place: "Warszawa, Poland",
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
          <h2>Warszawa, Poland</h2>
          <p style={{ fontWeight: 300 }}>
            Warszawa is the capital of Poland. It has the most populous urban
            area in Poland as well as in whole of Eastern Europe.
          </p>
        </div>
        <Divider />
        <div className="custom-wrapper">
          <IonLabel className="title">Right now</IonLabel>
          <p className="undertext">Warszawa, Poland today</p>

          <InfoCards
            lat="52.237049"
            long="21.017532"
            place="Washington DC, USA"
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

export default ExplorePage4;
