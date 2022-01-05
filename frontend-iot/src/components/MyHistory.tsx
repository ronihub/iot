import { IonIcon, IonItem, IonList } from "@ionic/react";
import { location, pin, radioButtonOnOutline, star } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { getColor } from "../helpers/getColor";
import {
  fetchLatestData,
  fetchMyHistory,
  IResultFormatted,
} from "../routes/pollution-api";

const MyHistory: React.FC = () => {
  interface IItem {
    id: any;
    created_at: any;
    aqi: number;
    pm10: number;
    pm2_5: number;
    place: string;
    date: any;
  }

  const [data, setData] = useState<IItem[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchMyHistory();
      if (res) {
        setData([...res.data.result]);
      }
    };
    fetchData();
  }, []);

  const MyHistoryItem: React.FC<IItem> = ({
    aqi,
    place,
    pm10,
    pm2_5,
    created_at,
  }) => {
    return (
      <div className="recent-activity-item" style={{ padding: "15px" }}>
        <IonIcon className="location" icon={location}></IonIcon>
        <div style={{ width: "100%" }}>
          <div className="recent-activity-item-top">
            <h6>{place}</h6>
            <div>
              <IonIcon
                icon={radioButtonOnOutline}
                style={{ color: getColor(aqi) }}
              ></IonIcon>
            </div>
          </div>
          <div className="recent-activity-item-date">
            <p
              style={{
                margin: "0 0 10px 0",
                fontWeight: 300,
                opacity: 0.5,
                fontSize: "0.8rem",
              }}
            >
              {created_at}
            </p>
          </div>
          <div className="recent-activity-item-pm">
            <span>
              pm10: <em>{pm10}</em>
            </span>
            <span>
              pm2.5: <em>{pm2_5}</em>
            </span>
            <span>
              aqi: <em>{aqi}</em>
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <IonList>
      {data
        ? data.map((item) => (
            <MyHistoryItem
              id={item.id}
              created_at={item.created_at}
              aqi={item.aqi}
              place={item.place}
              pm2_5={item.pm2_5}
              pm10={item.pm10}
              date={item.date}
            />
          ))
        : ""}
    </IonList>
  );
};

export default MyHistory;
