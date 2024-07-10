import profilePic from "./assets/John-Cena.jpg"
function Card() {
    return (
        <div className="card">
            <img className="card-image" src={ profilePic }  alt="profile picture"></img>
            <h2 className="card-title">Arun Channel</h2>
            <p className="card-text">Developer and play video games</p>
        </div>
    );
}
export default Card