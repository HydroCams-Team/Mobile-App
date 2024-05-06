import { useState } from "react";
import { Photo } from "../types/Photo";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export const usePhotoGallery = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);

    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100
        })
        console.log("Photo: ", photo)

        const fileName = new Date().getTime() + '.jpeg';
    };

    const savePhoto = async () => {

    }


    const deletePhoto = async(fileName: string) => {};

    return {
        photos,
        takePhoto,
        deletePhoto
    }
}