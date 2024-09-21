import React from "react";

type ImageProps = {
  image: string;
  name: string;
  description: string;
};

const ImageCard: React.FC<ImageProps> = ({ image, name, description }) => {
  return (
    <div className="flex flex-col items-center bg-green-100 shadow-lg rounded-lg p-6">
      <img src={image} alt={name} className="w-100 h-60 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="mt-2 text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ImageCard;
