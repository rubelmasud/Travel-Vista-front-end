const Watch = () => {
  return (
    <div className="mb-12">
      <div className="bg-img text-center lg:pt-32 pt-3">
        <p className="text-xl text-white">Motion</p>
        <div className="lg:text-4xl text-xl font-semibold text-white ">
          <h2>
            Watch Our <span className="text-orange-500">Video Tour</span>
          </h2>
        </div>
      </div>
      <div className="lg:-translate-y-32 -translate-y-16 lg:px-12 md:px-6 px-4 mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <iframe
          width="100%"
          height="200" // Set the default height for mobile devices
          className="md:h-[300px] lg:h-[500px]" // Use responsive classes for tablet and desktop
          src="https://www.youtube.com/embed/Qmi-Xwq-MEc?si=AbtCSstFCMNkAsJd"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Watch;
