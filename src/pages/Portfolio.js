import React, { useState, useEffect } from "react";
import MainPage from "./MainPage";
import "../styles/styles.css"

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("MainPage");

  const renderPage = () => {
    if (currentPage === "MainPage") {
      return <MainPage handlePageChange={handlePageChange} />;
    }
  };

  useEffect(() => {
    document.title = "Sprite Planner";
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {renderPage()}
    </div>
  );
}