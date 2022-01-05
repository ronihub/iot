import { IonContent, IonImg, IonLabel, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import stockholm from "../images/stockholm.jpg";
import { fetchFromApiAndSave, IResultFormatted } from "../routes/pollution-api";
import MyChart from "./Chart";
import InfoCards from "./CurrentLocationInfo";
import Divider from "./divider";

const ExplorePage: React.FC = () => {
  const [data, setData] = useState<IResultFormatted>();
  useEffect(() => {
    const fetchResult = async () => {
      const res = await fetchFromApiAndSave(
        "59.334591",
        "18.063240",
        "Stockholm, Sweden"
      );
      if (res) {
        setData({
          aqi: res.aqi,
          pm10: res.pm10,
          pm2_5: res.pm2_5,
          place: "Stockholm, Sweden",
        });
      }
    };
    fetchResult();
  }, []);

  return (
    <IonPage>
      <IonContent>
        <IonImg src={stockholm}></IonImg>
        <div style={{ padding: "0px 15px" }}>
          <h2>Stockholm, Sweden</h2>
          <p style={{ fontWeight: 300 }}>
            Stockholm is the capital of Sweden. It has the most populous urban
            area in Sweden as well as in Scandinavia.
          </p>
        </div>
        <Divider />
        <div className="custom-wrapper">
          <IonLabel className="title">Right now</IonLabel>
          <p className="undertext">Stockholm, Sweden today</p>
          <InfoCards
            lat="59.334591"
            long="18.063240"
            place="Stockholm, Sweden"
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

export default ExplorePage;
