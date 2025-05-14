export default function Card({ image, title, description }) {
    return (
      <div className="card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  