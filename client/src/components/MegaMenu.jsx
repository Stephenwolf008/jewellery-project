import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = {
  Rings: ["Gold", "Silver", "Platinum"],
  Necklaces: ["Pearl", "Diamond", "Gemstone"],
  Earrings: ["Stud", "Hoop", "Drop"],
};

export default function MegaMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative group">
      <button onClick={() => setOpen(!open)} className="nav-link">
        Shop
      </button>
      <div
        className={`absolute left-0 top-full mt-2 p-4 bg-white shadow-lg border rounded-md grid grid-cols-3 gap-6 w-max ${
          open ? "block" : "hidden"
        } group-hover:block`}
      >
        {Object.entries(categories).map(([category, types]) => (
          <div key={category}>
            <h4 className="font-semibold text-deepTeal">{category}</h4>
            <ul>
              {types.map((type) => (
                <li key={type}>
                  <Link
                    to={`/shop/${category.toLowerCase()}/${type.toLowerCase()}`}
                    className="block hover:text-coralPink text-softGray py-1"
                  >
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
