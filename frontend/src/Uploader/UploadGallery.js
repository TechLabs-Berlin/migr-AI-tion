import React from "react";
import RUG from "react-upload-gallery";

export default function UploadGallery(event) {
  return (
    <RUG
      action="/api/upload"
      source={(response) => response.source}
      rules={{
        limit: 10,
        size: 20,
        width: { min: 1280, max: 1920 },
        height: { min: 720, max: 1080 },
    
    accept={['jpg', 'jpeg', 'png']}, 
      }}
    />
  );
}
