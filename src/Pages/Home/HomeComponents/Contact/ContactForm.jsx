import "./Contact.css";

const ContactForm = () => {
  return (
    <section className="mt-20 w-auto lg:px-12 md:px-6 px-4">
      <div className="content-1 ">
        <h2 className="text-xl font-semibold pt-3">
          Do You Have Any Questions?
        </h2>
        <p>Pleace contact me</p>
        <form className="md:flex flex-col ">
          <div className="md:flex gap-2 my-2 w-full">
            <input
              type="text"
              placeholder="Your Name:"
              className="outline-none my-2"
              required
            />
            <input
              type="email"
              placeholder="Your Email:"
              className="outline-none"
              required
            />
          </div>
          <div className="w-full">
            <textarea
              name="message"
              cols="20"
              rows="8"
              placeholder="Inter Your Message"
              className="outline-none bg-transparent border-[1.4px]  border-black lg:w-[108%] lg:px-2"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="btn-style my-2 w-fit "
            />
          </div>
        </form>
      </div>
      <div className="content-2"></div>
    </section>
  );
};

export default ContactForm;
