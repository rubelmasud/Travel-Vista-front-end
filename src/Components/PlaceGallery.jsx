import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const PlaceGallery = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [images, setImages] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    fetch("/images.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data);
      });
  }, []);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <div className="flex items-center flex-col justify-center s">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image.img}
          alt={image}
          className="rounded-[12px]  md:h-80 h-56 shadow-2xl"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
      <div className="flex flex-row gap-3">
        <button
          className=" mt-[400px] bg-[rgba(255,79,16,0.922)]  rounded-md p-2 "
          onClick={handleBack}
        >
          <GrLinkPrevious />
        </button>
        <button
          className=" mt-[400px] bg-[rgba(255,79,16,0.922)] rounded-md p-2"
          onClick={handleNext}
        >
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default PlaceGallery;
