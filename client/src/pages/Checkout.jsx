import React from "react";

export default function Checkout() {
  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Checkout</h1>
      <form className="space-y-6">
        <input
          className="w-full border p-3 rounded-lg"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="w-full border p-3 rounded-lg"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="w-full border p-3 rounded-lg"
          type="text"
          placeholder="Shipping Address"
        />
        <button className="w-full bg-warmGold text-white font-bold p-3 rounded-lg">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}
