import React, { useState } from "react";

const SidebarIndex = () => {
  const CATEGORY_ARR = [
    { category: "All Categories", quantity: 100 },
    {
      category: "Widget",
      quantity: 20,
      subcategory: [
        { category: "Discover", quantity: 8 },
        { category: "Features Properties", quantity: 8 },
        { category: "Testimonials", quantity: 4 },
        { category: "Ecperiences", quantity: 4 },
      ],
    },
    { category: "Welcome", quantity: 20 },
    { category: "Features", quantity: 15 },
    { category: "Map", quantity: 12 },
  ];
  const [categories, setCategories] = useState(CATEGORY_ARR);

  return (
    <ul className="component-list">
      {categories.map((category) => (
        <li>{category[0]}</li>
      ))}
    </ul>
  );
};

export default SidebarIndex;
