import "./card.css";

function BdayCard({ name, bdayImg }) {
  return (
    <div className="bdaycard">
      <span>{name}</span>
      <div className="bdaycardimg">
        <img src={bdayImg} alt="bdayimg" />
      </div>
      <h1>Happy Birthday!</h1>
    </div>
  );
}

function CakeCard({ kidName, cakeImg }) {
  return (
    <div className="cakecard">
      <span>{kidName}</span>
      <div className="cakeimg">
        <img src={cakeImg} alt="cakeimg" />
      </div>
      <h1>Birthday Cake!</h1>
    </div>
  );
}

export default CakeCard;
export { BdayCard };
