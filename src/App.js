import "./App.css";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import { ScrollToTop } from "./utils/ScrollToTop";
import MainRoute from "./routes";

function App() {
  return (
    <>
      <ScrollToTop />
      <HeaderComponent />
      <MainRoute />
      <FooterComponent />
    </>
  );
}

export default App;
