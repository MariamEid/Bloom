import "./Hero.css";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Fresh Flowers, Delivered with Love</h1>
        <p className="hero-subtitle">
          Handpicked bouquets for every moment. Beautifully arranged and delivered to your door.
        </p>
        <button className="hero-btn" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Hero;