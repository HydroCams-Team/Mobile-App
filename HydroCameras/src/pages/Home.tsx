import React from 'react';
import { IonContent, IonFab, IonFabButton, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';
import './Home.css';
import { usePhotoGallery } from '../hooks/usePhotGallery';

const Home: React.FC = () => {
  const { photos, takePhoto, deletePhoto} = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HydroCams</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton onClick={takePhoto}>
            <IonIcon icon={camera} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
