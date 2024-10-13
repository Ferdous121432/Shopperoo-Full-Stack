/* eslint-disable */
import React from 'react';

function SocialIcons() {
  const icons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a6f73034f6c7b75092be596a4bb46db32dbcdedfcab4fb199bfe93b072cb791?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0", alt: "Social icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d4e4cca381663fac697ad2d6bed7631e3f969e5c95e77418dc049930b5cd7ca?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0", alt: "Social icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/67a703a006cfd4a050cd695cbd085c73607417c228b05f49d8dcc42c10a500f3?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0", alt: "Social icon 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f04c910245c20308a746e424ecabafc9d9ec1f98e8b29c0310cff8a57837eb4?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0", alt: "Social icon 4" }
  ];

  return (
    <div className="flex gap-10 self-stretch my-auto max-md:mt-10">
      {icons.map((icon, index) => (
        <img key={index} loading="lazy" src={icon.src} alt={icon.alt} className="object-contain shrink-0 w-7 aspect-square" />
      ))}
    </div>
  );
}

export default SocialIcons;