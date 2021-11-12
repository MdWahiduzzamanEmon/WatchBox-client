import React from "react";
import Navbar from "../../Navbar/Navbar";
import Products from "../../Products/Products";
import Series from "../../shared/Series/Series";
import WAtchAdvertise from "../../shared/WatchAdvertise/WAtchAdvertise";
import Watchbg from "../../Watchbg/Watchbg";
import Banner from "../Banner/Banner";
import GetReview from "../GetReview/GetReview";
import Advertise from "../../shared/Advertise/Advertise";
import Footer from "../../Footer/Footer";
const Home = () => {
  return (
      <div>
          {/* //components */}
      <Navbar />
      <Banner />
      <Watchbg />
      <Products />
      <WAtchAdvertise />
      <Series />
      <GetReview />
      <Advertise />
      <Footer />
    </div>
  );
};

export default Home;
