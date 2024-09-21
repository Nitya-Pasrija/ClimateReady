import React from "react";

const SDGGrid: React.FC = () => {
  const images = [
    "/sdgImg/sdg4.jpg",
    "/sdgImg/sdg10.jpg",
    "/sdgImg/sdg12.jpg",
    "/sdgImg/sdg13.jpg",
    "/sdgImg/sdg17.jpg",
  ];

  return (
    <section className="px-4 py-6 max-w-6xl mx-auto bg-green-50 pb-10">
      <div className="flex justify-center gap-6">
        {images.map((url, index) => (
          <div
            key={index}
            className="w-44 h-44 bg-white rounded-md shadow-lg overflow-hidden"
          >
            <img
              src={url}
              alt={`SDG ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SDGGrid;
