import React from "react";

const Gallery: React.FC = () => {
  // Image URLs
  const images = [
    "/instagramImg/image1.jpg",
    "/instagramImg/image2.jpg",
    "/instagramImg/image3.jpg",
    "/instagramImg/image4.jpg",
    "/instagramImg/image5.jpg",
  ];

  return (
    <section className="px-4 py-8 max-w-6xl mx-auto bg-green-50">
      <h2 className="text-3xl font-bold pb-10 text-center mb-8 text-green-800">
        Instagram Gallery
      </h2>
      <div className="flex justify-center gap-4">
        {images.map((url, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-md shadow-lg w-44 h-44 ${
              index % 2 === 0 ? "mt-4" : "-mt-4"
            }`}
          >
            <img
              src={url}
              alt={`Instagram Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
