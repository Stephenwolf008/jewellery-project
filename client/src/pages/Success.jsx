import React from "react";

export default function Success() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Payment Successful!
      </h1>
      <p className="text-gray-700 text-lg">
        Thank you for your purchase. A confirmation email has been sent to your
        inbox.
      </p>
      <a
        href="/shop"
        className="inline-block mt-6 px-6 py-3 bg-deepTeal text-white rounded-lg"
      >
        Continue Shopping
      </a>
    </div>
  );
}
