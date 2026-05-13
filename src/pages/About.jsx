import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Bloom</h1>
        <p>We believe every moment deserves beautiful flowers.</p>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="about-card h-100">
              <h2>Who We Are</h2>
              <p>Bloom is a flower delivery service dedicated to bringing joy through handpicked, freshly arranged bouquets delivered straight to your door.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-card h-100">
              <h2>Our Mission</h2>
              <p>To make every occasion special by offering fresh, beautiful flowers for every moment — from birthdays to apologies, celebrations to expressions of love.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-card h-100">
              <h2>Why Choose Us</h2>
              <ul>
                <li>Fresh flowers picked and arranged daily</li>
                <li>Same-day delivery available</li>
                <li>100% satisfaction guaranteed</li>
                <li>Handcrafted with care</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;