import React, { useState, useEffect } from "react";
import MainPage from "./MainPage";
import Sprite from "./Sprite";
import "../styles/animation.css";
import "../styles/styles.css";
import "../styles/project.css"

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("MainPage");

  const renderPage = () => {
    if (currentPage === "MainPage") {
      return <MainPage handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Sprite") {
      return <Sprite handlePageChange={handlePageChange}/>;
    }
  };

  useEffect(() => {
    document.title = "Johnathan Mann";
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {renderPage()}
    </div>
  );
}