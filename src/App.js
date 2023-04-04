import "./App.css";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import { ScrollToTop } from "./utils/ScrollToTop";
import MainRoute from "./routes";

function App() {
  return (
    <React.Fragment>
      <ScrollToTop />
      <HeaderComponent />
      <MainRoute />
      <FooterComponent />
    </React.Fragment>
  );
}

export default App;
