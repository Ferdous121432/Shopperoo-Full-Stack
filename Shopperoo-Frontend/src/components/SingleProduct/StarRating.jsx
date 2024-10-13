/* eslint-disable */
import React from 'react';

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <img
          key={star}
          loading="lazy"
          src={star <= rating ? "https://cdn.builder.io/api/v1/image/assets/TEMP/35cb519968837ecbbf7790f3c128da597ab6c33dd10c0353875022f7f2dc3781?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0" : "https://cdn.builder.io/api/v1/image/assets/TEMP/35cb519968837ecbbf7790f3c128da597ab6c33dd10c0353875022f7f2dc3781?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0empty"}
          alt={`${star} star${star !== 1 ? 's' : ''}`}
          className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[6.21] w-[24px]"
        />
      ))}
    </div>
  );
};

export default StarRating;