import { useState, useEffect } from "react";
import { sanityClient } from "../helpers/client";
import HeroBanner from "../components/HeroBanner";
import Product from "../components/Product";
import FooterBanner from "../components/FooterBanner";


async function getProducts() {
  const productQuery = '*[_type =="product"]';
  const products = await sanityClient.fetch(productQuery);
  const bannerQuery = '*[_type =="banner"][0]';
  const banner = await sanityClient.fetch(bannerQuery);

  return { products, banner };
}

function Home() {
  const [products, setProducts] = useState(null);
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.products);
      setBanner(data.banner);
      setLoading(false);
    });
  }, []);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div>
      <HeroBanner heroBanner={banner} />
      <div className="products-heading">
        <h2>Top-Selling Products</h2>
        <p>Choose your smartphone</p>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={banner} />
    </div>
  );
}

export default Home;
