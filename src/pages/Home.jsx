import Hero from "../components/Home/Hero";
import ProductsSection from "../components/Home/ProductsSection";
import FeaturesStrip from "../components/Home/FeaturesStrip";

function Home() {
  return (
    <div>
      <Hero />
      {/* products grid - filter buttons and all flower cards */}
      <ProductsSection />
      <FeaturesStrip />
    </div>
  );
}

export default Home;