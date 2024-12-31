import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useMediaQuery } from "react-responsive";
import "bootstrap/dist/css/bootstrap.min.css";
import StyleHandler from "./utils/styleHandler.js";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });
  const styleHandler = new StyleHandler(isMobile, isTablet, isDesktop);

  return (
    <div>
      <Header linkStyling={styleHandler.headerLinkStyling} />
      <Outlet context={[styleHandler]} />
      <Footer styleHandler={styleHandler} />
    </div>
  );
}

export default App;
