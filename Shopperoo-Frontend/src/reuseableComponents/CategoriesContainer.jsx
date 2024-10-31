import React from "react";

export default function CategoriesContainer({ children }) {
  return (
    <div className="mt-16 w-full self-stretch">
      <div className="flex flex-col items-center justify-center md:flex-row">
        {children}
      </div>
    </div>
  );
}
