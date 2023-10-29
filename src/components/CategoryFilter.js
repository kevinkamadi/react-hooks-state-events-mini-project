import React from "react";

function CategoryFilter(props) {
  const { categories, selectedCategory, onCategoryChange } = props;

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */
      categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))
      }
    </div>
  );
}

export default CategoryFilter;
