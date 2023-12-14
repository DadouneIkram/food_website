export const data = [
  {
    img: require("../../Assests/p1.png"),
    title: "La Roqueta",
    desc: "Sauce crème  ou tomate.",
    review: 3.75,
    price: 400,
  },
  {
    img: require("../../Assests/p2.png"),
    title: "Marguerita",
    desc: "sauce tomate, mozza, origan",
    review: 4.95,
    price: 600,
  },
  {
    img: require("../../Assests/p3.png"),
    title: "Mexicana",
    desc: "crème fraîche, sauce tomate",
    review: 3.75,
    price: 400,
  },
  {
    img: require("../../Assests/p4.png"),
    title: "Far-west",
    desc: "crème fraîche,  champignons.",
    review: 6.75,
    price: 500,
  },
];

function Cards(props) {
  return (
    <div
      style={
        {
          //borderRadius:"20px",
          //border :"solid black"
        }
      }
    >
      <div
        style={{
          backgroundImage: `url(${props.img})`,
          width: "250px",
          height: "250px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2> {props.title}</h2>

        <h6>
          <i
            style={{
              color: "gold",
            }}
            className="fa-solid fa-star"
          ></i>
          {props.review}
        </h6>
      </div>
      <h6> {props.desc}</h6>
      <h6>
        {" "}
        {props.price}${" "}
        <span
          style={{
            color: "gray",
          }}
        >
          night
        </span>{" "}
      </h6>
    </div>
  );
}

export default Cards;