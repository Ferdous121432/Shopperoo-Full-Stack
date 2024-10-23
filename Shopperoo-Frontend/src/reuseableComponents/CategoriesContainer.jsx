import React from "react";

export default function CategoriesContainer({ children }) {
  return (
    <div className="mt-16 w-full self-stretch">
      <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-5">
        {children}
      </div>
    </div>
  );
}
