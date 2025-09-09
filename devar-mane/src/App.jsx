// src/App.jsx
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Rooms from "./pages/Rooms/Rooms";
import Contact from "./pages/Contact/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'rooms':
        return <Rooms />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onPageChange={setCurrentPage} currentPage={currentPage} />
      <main className="flex-1 pt-24 md:pt-28">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;