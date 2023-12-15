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

  const [firstName, setFirstName] = React.useState("");

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
      <form action="">
        <label htmlFor="1">
          <input
            id="1"
            type="text"
            placeholder="First name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </form>
    </>
  );
};

export default Home;
