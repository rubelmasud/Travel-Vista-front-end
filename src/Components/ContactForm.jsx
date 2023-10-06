import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { BsBrowserEdge, BsTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex lg:px-12 md:px-6 px-4 my-12 justify-between">
      <div className="w-[50%] mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-[40%] bg-[#0000ced7] mt-6 p-12 flex flex-col gap-6 shadow-2xl">
        <div className="flex justify-start items-center gap-6 text-gray-200">
          <FaLocationArrow
            className="text-white border rounded-full opacity-60  p-1"
            size={30}
          />
          <div className="">
            <h2>
              {" "}
              <span className="font-bold">Address:</span>
              198 West 21th Street, Suite 721 New York NY 10016
            </h2>
          </div>
        </div>
        <div className="flex justify-start items-center gap-6 text-gray-200">
          <BsTelephoneFill
            className="text-white border rounded-full opacity-60  p-1"
            size={30}
          />
          <div className="">
            <h2>
              {" "}
              <span className="font-bold">Phone:</span>+ 1235 2355 98
            </h2>
          </div>
        </div>
        <div className="flex justify-start items-center gap-6 text-gray-200">
          <BsBrowserEdge
            className="text-white border rounded-full opacity-60  p-1"
            size={30}
          />
          <div className="">
            <h2>
              {" "}
              <span className="font-bold">Website:</span>
              yoursite.com
            </h2>
          </div>
        </div>
        <div className="flex justify-start items-center gap-6 text-gray-200">
          <AiTwotoneMail
            className="text-white border rounded-full opacity-60  p-1"
            size={30}
          />
          <div className="">
            <h2>
              {" "}
              <span className="font-bold">Email:</span>
              info@yoursite.com
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
