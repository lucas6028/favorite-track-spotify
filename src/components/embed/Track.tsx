import React from "react";

const Track: React.FC<{ id: string }> = ({ id }) => {
  const link = `https://open.spotify.com/embed/track/${id}?utm_source=generator`;

  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src={link}
      width="75%"
      height="352"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default Track;
