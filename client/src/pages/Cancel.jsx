import React from "react";

export default function Cancel() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        Payment Cancelled
      </h1>
      <p className="text-gray-700 text-lg">
        Your transaction was cancelled. Feel free to browse our collection and
        try again.
      </p>
      <a
        href="/checkout"
        className="inline-block mt-6 px-6 py-3 bg-warmGold text-white rounded-lg"
      >
        Return to Checkout
      </a>
    </div>
  );
}
