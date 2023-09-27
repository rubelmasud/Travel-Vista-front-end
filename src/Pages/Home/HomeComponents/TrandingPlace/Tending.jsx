import "./Tending.css";

const Tending = () => {
  return (
    <div className="px-12 container">
      <div>
        <h1 className="text-2xl font-semibold"> Trending destinations</h1>
        <p>Most popular choices for travelers from World Wide</p>
      </div>
      <div className="w-full flex  my-6">
        <div className="effect">
          <img src="https://img.freepik.com/premium-photo/sydney-skyline-sunrise-sunrise-overlooking-famous-building-bridge-sydney-australia_745352-303.jpg?size=626&ext=jpg&ga=GA1.1.694185806.1694141924&semt=ais" />
          <a href="#">Australia</a>
        </div>
        <div className="effect">
          <img src="https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?size=626&ext=jpg&ga=GA1.1.694185806.1694141924&semt=ais" />
          <a href="#">New York City</a>
        </div>
      </div>
      <div className="flex">
        <div className="effect">
          <img src="https://img.freepik.com/premium-photo/lion-s-head-mountain-apartment-buildings-coast-cape-town_160696-273.jpg?size=626&ext=jpg&ga=GA1.1.694185806.1694141924&semt=ais" />
          <a href="#">South Africa</a>
        </div>
        <div className="effect">
          <img src="https://img.freepik.com/free-photo/vertical-shot-niteroi-contemporary-art-museum-brazil_181624-27249.jpg?size=626&ext=jpg&ga=GA1.1.694185806.1694141924&semt=ais" />
          <a href="#">Brazil</a>
        </div>
        <div className="effect">
          <img src="https://img.freepik.com/free-photo/woman-walking-big-entrance-gate-bali-indonesia_335224-378.jpg?size=626&ext=jpg&ga=GA1.1.694185806.1694141924&semt=ais" />
          <a href="#">Indonesia</a>
        </div>
      </div>
    </div>
  );
};

export default Tending;
