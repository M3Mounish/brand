import All from "./components/AllInOne";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Start from "./components/Start";
import Support from "./components/Support";

function App() {
  return (
    <>
      <Navbar />
      <Start />
      <Info />
      <Support />
      <All />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
