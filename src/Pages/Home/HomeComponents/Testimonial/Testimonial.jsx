import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./Testimonial.css"; // Create your own CSS file for styling if needed
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { BiSolidQuoteLeft } from "react-icons/bi";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/Testimonial.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTestimonials(data);
      });
  }, []);
  return (
    <div className="testimonial-container ">
      <AwesomeSlider
        className="slider"
        play={true} // Enable autoplay
        interval={3000} // Autoplay interval in milliseconds (e.g., 3 seconds)
        media={[
          {
            source: "(max-width: 768px)", // Media query for responsive behavior
            props: {
              autoplay: true, // Enable autoplay for smaller screens
            },
          },
        ]}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="slide p-12 flex flex-col gap-2 bg-[#f8fafc] w-full h-full"
          >
            <img
              className="w-16 h-16 mx-auto border border-white rounded-full "
              src={testimonial.image}
              alt={testimonial.travelerName}
            />
            <h4 className="text-xl font-semibold">
              {testimonial.travelerName}
            </h4>
            <p>{testimonial.comment}</p>
            <div className="text-center justify-center flex">
              <Rating
                style={{ maxWidth: 90 }}
                value={testimonial.rating}
                readOnly
              />
            </div>
            <div className="text-center justify-center flex">
              <BiSolidQuoteLeft size={50} className="opacity-20" />
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default Testimonial;
