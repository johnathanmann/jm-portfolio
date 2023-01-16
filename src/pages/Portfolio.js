import React, { useState, useEffect } from "react";
import MainPage from "./MainPage";
import OtherPage from "./OtherPage";
import "../styles/animation.css";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("MainPage");

  const renderPage = () => {
    if (currentPage === "MainPage") {
      return <MainPage handlePageChange={handlePageChange} />;
    }
    if (currentPage === "OtherPage") {
      return <OtherPage handlePageChange={handlePageChange}/>;
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