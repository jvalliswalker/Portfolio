import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useMediaQuery } from "react-responsive";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });

  const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });

  const mediaQueries = {
    isMobile: isMobile,
    isTablet: isTablet,
    isDesktop: isDesktop,
  };

  return (
    <>
      <Header />
      <div className="container">
        <Outlet context={[mediaQueries]} />
        <Footer />
      </div>
    </>
  );
}

export default App;
