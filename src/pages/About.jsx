// About page - displays company info and a randomly fetched quote from an external API
import { useState, useEffect } from "react";
import "./About.css";

function About() {
  // quote stores the fetched quote object from the API
  // starts as null until the API responds
  const [quote, setQuote] = useState(null);

  // useEffect runs once when the page loads (empty dependency array [])
  // fetches a random quote from the dummyjson API
  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())        // converts the response to a JavaScript object
      .then((data) => setQuote(data))   // stores the quote object in state
      .catch((error) => console.log(error)); // logs any errors to the console
  }, []); // empty array means this runs only once when the component first loads

  return (
    // main about page wrapper
    <div className="about-container">

      {/* hero banner at the top of the about page */}
      <div className="about-hero">
        <h1>About Bloom</h1>
        <p>We believe every moment deserves beautiful flowers.</p>
      </div>

      {/* Bootstrap container - centers content and adds responsive padding */}
      <div className="container py-5">

        {/* Bootstrap row with 3 equal columns - one for each card */}
        <div className="row g-4">

          {/* column 1 - Who We Are card */}
          <div className="col-md-4">
            {/* h-100 is a Bootstrap class that makes the card full height of the row */}
            <div className="about-card h-100">
              <h2>Who We Are</h2>
              <p>Bloom is a flower delivery service dedicated to bringing joy through handpicked, freshly arranged bouquets delivered straight to your door.</p>
            </div>
          </div>

          {/* column 2 - Our Mission card */}
          <div className="col-md-4">
            <div className="about-card h-100">
              <h2>Our Mission</h2>
              <p>To make every occasion special by offering fresh, beautiful flowers for every moment — from birthdays to apologies, celebrations to expressions of love.</p>
            </div>
          </div>

          {/* column 3 - Why Choose Us card */}
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

        {/* API fetched quote - only renders after the API responds and quote is not null */}
        {quote && (
          <div className="about-quote">
            {/* quote.quote is the quote text, quote.author is the author name */}
            <p className="about-quote-text">"{quote.quote}"</p>
            <p className="about-quote-author">— {quote.author}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default About;