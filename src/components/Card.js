import "./Card.css";
import back from "../assets/images/orange.png";

export default function Card({ card, handleChoice, flipped, disabled }) {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    };
    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="card front" />
                <img
                    className="back"
                    src={back}
                    alt="card back"
                    onClick={handleClick}
                />
            </div>
        </div>
    );
}
