import "./FeaturesStrip.css";

function FeaturesStrip() {
  return (
    <div className="features-strip">
      <div className="feature-item">
        <span className="feature-icon">✓</span>
        <h4>Fresh Guarantee</h4>
        <p>All flowers are freshly picked and arranged daily</p>
      </div>
      <div className="feature-item">
        <span className="feature-icon">🛒</span>
        <h4>Fast Delivery</h4>
        <p>Same-day delivery available on all orders</p>
      </div>
      <div className="feature-item">
        <span className="feature-icon">☆</span>
        <h4>Satisfaction Guaranteed</h4>
        <p>100% satisfaction or your money back</p>
      </div>
    </div>
  );
}

export default FeaturesStrip;