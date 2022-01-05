import {
  IonAlert,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonModal,
  IonPage,
  IonRow,
} from "@ionic/react";
import { addOutline, logoVimeo } from "ionicons/icons";
import { useState } from "react";
import InfoCards from "../components/CurrentLocationInfo";
import Divider from "../components/divider";
import ExploreCard from "../components/ExploreCard";
import PositionNow from "../components/PositionNow";
import RecentActivity from "../components/RecentActivity";
import { locations } from "../helpers/data";
import { logMyLocation } from "../routes/pollution-api";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const displayExploreCards = () => {
    return locations.map((location) => (
      <IonCol style={{ paddingLeft: "0px", marginRight: "10px" }} sizeXs="8">
        <ExploreCard
          title={location.place}
          img={location.img}
          long={location.long}
          lat={location.lat}
          place={location.place}
          url={location.url}
        />
      </IonCol>
    ));
  };

  const logMyLocationHandler = async () => {
    await logMyLocation();
    window.location.reload();
  };

  return (
    <IonPage>
      <IonHeader>
        <PositionNow />
      </IonHeader>
      <IonContent fullscreen>
        <div className="custom-container">
          <h2 className="greeting">
            Welcome to <br /> <span>AirQual 2</span>
          </h2>
        </div>
        <div className="custom-wrapper">
          <InfoCards
            lat="59.334591"
            long="18.063240"
            place="Stockholm, Sweden"
          />
        </div>
        <Divider />
        <div className="custom-wrapper">
          <IonLabel className="title">Explore the world</IonLabel>
          <p className="undertext">See the air quality around the globe</p>
          <IonGrid style={{ paddingLeft: "0" }}>
            <IonRow style={{ paddingLeft: "0" }} className="overflow-x">
              {displayExploreCards()}
            </IonRow>
          </IonGrid>
        </div>
        <Divider />
        <div className="custom-wrapper">
          <IonLabel className="title">Latest activity</IonLabel>
          <p style={{ marginBottom: "20px" }} className="undertext">
            User activities from around the globe
          </p>
          <RecentActivity />
        </div>
      </IonContent>
      <IonFab vertical="bottom" horizontal="end" edge slot="fixed">
        <IonFabButton>
          <IonIcon icon={addOutline} />
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton onClick={() => setShowAlert(true)} className="fab-btn">
            log my location
          </IonFabButton>
        </IonFabList>
      </IonFab>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass="my-custom-class"
        header={"Location"}
        subHeader={"Is this your location?"}
        message={"<em>Borgarfjordsgatan 12, 164 55 Kista</em>"}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            id: "cancel-button",
            handler: (blah) => {
              setShowAlert(false);
            },
          },
          {
            text: "Confirm",
            id: "confirm-button",
            handler: logMyLocationHandler,
          },
        ]}
      />
    </IonPage>
  );
};

export default Tab1;
