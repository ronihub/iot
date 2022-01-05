import { IonModal, IonContent } from "@ionic/react";
import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
  long: string;
  lat: string;
  place: string;
  url: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({
  name,
  long,
  lat,
  place,
}) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
      <IonModal isOpen={true} swipeToClose={true} presentingElement={undefined}>
        <IonContent>Modal Content</IonContent>
      </IonModal>
    </div>
  );
};

export default ExploreContainer;
