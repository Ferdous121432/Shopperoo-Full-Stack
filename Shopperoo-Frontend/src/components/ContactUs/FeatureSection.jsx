/* eslint-disable */
import React from 'react';

function FeatureSection() {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a78db668b54cbedb234be712209fb7fd29af590e6fc9abe238ef527fa473f9f?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      title: "High Quality",
      description: "crafted from top materials"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/306b4eda71b9937266e5653625f9bbb4a3c5904b34491170d0cab5e95c5ed803?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      title: "Warranty Protection",
      description: "Over 2 years"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3daf64c88d27d5e66d9d369c77d062b65cf942283b332829da06b35b26cb302?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      title: "Free Shipping",
      description: "Order over 150 $"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4931226542fbf221d4ebf9a167f766c08c2e1eb0f497ca6290b4a27fbcb34e7b?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      title: "24 / 7 Support",
      description: "Dedicated support"
    }
  ];

  return (
    <section className="flex flex-col justify-center items-center py-24 w-full bg-orange-50 min-h-[270px] max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center max-w-full w-[1334px]">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px]">
            <img loading="lazy" src={feature.icon} alt={`${feature.title} icon`} className="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]" />
            <div className="flex flex-col self-stretch my-auto min-w-[240px]">
              <h3 className="text-2xl font-semibold text-neutral-800">{feature.title}</h3>
              <p className="text-xl font-medium text-zinc-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;