import React from "react";
import ProductCard from "../components/ProductCard";
import exampleBatik from "../assets/example-batik.jpg";

const dummyProducts = [
  { id: 1, name: "Batik Parang", price: "Rp150.000", image: exampleBatik },
  { id: 2, name: "Batik Kawung", price: "Rp200.000", image: exampleBatik },
  { id: 3, name: "Batik Mega Mendung", price: "Rp180.000", image: exampleBatik }
];

const Home = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {dummyProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
