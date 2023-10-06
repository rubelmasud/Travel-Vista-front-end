// import FAQ from "../../Components/FAQSection/FAQ";

import Accordion from "../../Components/Accordian/Accordion";
import ContactForm from "../../Components/ContactForm";

const Contact = () => {
  return (
    <>
      {" "}
      <div className="about-banner my-auto pt-10 ">
        <div className="lg:w-[60%] p-[30px]  my-auto text-white mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
          <div className="md:py-4 mb-2">
            <h3 className="text-3xl font-semibold mt-3">
              Discover Amazing Places of the World
            </h3>
          </div>
        </div>
      </div>
      <Accordion />
      <ContactForm />
    </>
  );
};

export default Contact;
