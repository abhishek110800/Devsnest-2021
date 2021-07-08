import image from "./react-meme1_.png";

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <img src={image} alt="Meme" />
          <div className="content">
            <h2>This is React Card</h2>
            <h4>Created By - ANSH SAWANT</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
