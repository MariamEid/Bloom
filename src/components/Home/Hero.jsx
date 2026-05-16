import "./Hero.css";

function Hero() {
  return (
    // hero section - the large banner at the top of the home page
    <section className="hero-container">
      <div className="hero-content">
        {/* main heading */}
        <h1 className="hero-title">Fresh Flowers, Delivered with Love</h1>

        {/* subtitle text below the heading */}
        <p className="hero-subtitle">
          Handpicked bouquets for every moment. Beautifully arranged and delivered to your door.
        </p>
        {/* shop now button - clicking scrolls smoothly down to the products section */}
        {/* getElementById finds the element with id="products" in ProductsSection.jsx */}
        <button className="hero-btn" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Hero;