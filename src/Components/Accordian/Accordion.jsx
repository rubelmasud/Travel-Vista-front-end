import { useState } from "react";
import "./Accordion.css";
import { useEffect } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

const AccordionSection = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("/FAQ.json")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  return (
    <>
      <h2 className="text-center text-2xl font-semibold mt-10 underline">
        FAQs
      </h2>
      <div className="md:flex lg:px-12 md:px-6 px-4 my-12 justify-between">
        <Accordion allowZeroExpanded className="md:w-[65%] ">
          {questions.map((question) => (
            <AccordionItem key={question.id}>
              <AccordionItemHeading>
                <AccordionItemButton>{question.question}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>{question.answer}</AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="md:w-[30%] category">
          <h5 className="border border-orange-500 px-6 py-2 text-xl font-semibold">
            All
          </h5>
          <p className="bg-[#0000ced7] text-white">Reservation</p>
          <p>Payment</p>
          <p>Schedule</p>
          <p>Money Back Policy</p>
          <p>Tour Plan</p>
          <p>Booking Policy</p>
          <p>Others</p>
        </div>
      </div>
    </>
  );
};

export default AccordionSection;
