import React from "react";
import Header from "./Header";
import { data } from "./Cards";
import Cards from "./Cards";
const Home = () => {
  const dataShow = data.map((item, index) => (
    <Cards
      key={index}
      img={item.img}
      title={item.title}
      desc={item.desc}
      review={item.review}
      price={item.price}
    />
  ));
  return (
    <>
      <Header />
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        Our Menu
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "30px",
          overflow: "hidden",
          flexWrap: "wrap",
        }}
      >
        {dataShow}
      </div>
    </>
  );
};

export default Home;
