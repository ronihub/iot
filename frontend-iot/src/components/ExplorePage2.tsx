import { IonContent, IonImg, IonLabel, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import stockholm from "../images/stockholm.jpg";
import { fetchFromApiAndSave, IResultFormatted } from "../routes/pollution-api";
import MyChart from "./Chart";
import InfoCards from "./CurrentLocationInfo";
import Divider from "./divider";

const ExplorePage2: React.FC = () => {
  const [data, setData] = useState<IResultFormatted>();
  useEffect(() => {
    const fetchResult = async () => {
      const res = await fetchFromApiAndSave(
        "47.751076",
        "-120.740135",
        "Washington DC, USA"
      );
      if (res) {
        setData({
          aqi: res.aqi,
          pm10: res.pm10,
          pm2_5: res.pm2_5,
          place: "Washington DC, USA",
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
          <h2>Washington DC, USA</h2>
          <p style={{ fontWeight: 300 }}>
            Washington DC is the capital of USA. It has the most populous urban
            area in USA as well as in Northern America.
          </p>
        </div>
        <Divider />
        <div className="custom-wrapper">
          <IonLabel className="title">Right now</IonLabel>
          <p className="undertext">Washington DC, USA</p>

          <InfoCards
            lat="47.751076"
            long="-120.740135"
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

export default ExplorePage2;
