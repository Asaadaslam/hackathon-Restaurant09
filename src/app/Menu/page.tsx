import React from "react";
import StarterMenu from "../components/StarterMenu";
import MainCourse from "../components/MainCourse";

const MenuPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <StarterMenu />
      <MainCourse />
    </div>
  );
};

export default MenuPage;
