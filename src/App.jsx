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

  function styleLink(mediaQueries) {
    if (mediaQueries.isMobile) {
      return "me-auto fs-5";
    } else {
      return "me-auto fs-6";
    }
  }

  return (
    <div>
      <Header linkStyling={styleLink(mediaQueries)} />
      <div className="container">
        <Outlet context={[mediaQueries]} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
