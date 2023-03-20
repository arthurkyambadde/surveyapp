import React from "react";
import { Submit } from "../../../components/buttons/Submit";
import { MediaViewer } from "../../../components/MediaViewer/MediaViewer";

export function Introduction({ title, videoUrl, imageUrl }) {
  return (
    <section
      className={`h-screen w-screen flex items-center flex-col justify-center`}
    >
      <div className="w-1/2">
        <h1 className="text-7xl font-normal mb-8 ">{title}</h1>

        {videoUrl && (
          <iframe
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-96 mb-5"
            allowFullScreen
            controls
            loop={true}
          ></iframe>
        )}
        {imageUrl && <MediaViewer imageUrl={imageUrl} />}

        <Submit />
      </div>
    </section>
  );
}
