import './Card.css'
export default function Card({ card }) {
    return (
        <div className="card">
            <div>
                <img className="front" src={card.src} alt="card front" />
            </div>
        </div>
    )
}