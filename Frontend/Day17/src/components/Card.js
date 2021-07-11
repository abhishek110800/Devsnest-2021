import Info from "./Info";

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <Info name="Pizza" cal="56" />
          <Info name="Burger" cal="69" />
          <Info name="Coke" cal="500" />
          <Info name="Browne" cal="180" />
          <Info name="Fried Rice" cal="90" />
          <Info name="Lassania" cal="200 " />
          <Info name="Pani Puri" cal="10" />
        </div>
      </div>
    </>
  );
};

export default Card;
