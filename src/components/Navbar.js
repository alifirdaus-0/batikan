import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Ecommerce Batik</h1>
      <div>
        <a href="/" className="px-3">Home</a>
        <a href="/cart" className="px-3">Cart</a>
      </div>
    </nav>
  );
};

export default Navbar;
