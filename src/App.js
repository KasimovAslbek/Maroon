import Main from "./components/Main";
import Bestsellers from "./components/Bestsellers";
import Spring from "./components/Spring";
import Indcare from "./components/Indcare";
import Ritual from "./components/Ritual";
import Subscribe from "./components/Subscribe";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Test from "./components/Test";
function App() {
  return (
    <div className="App text-[#122947] max-w-main mx-auto overflow-x-hidden">
      <header className="App-header">
        <Main/>
        <Bestsellers/>
        <Spring/>
        <Indcare/>
        <Ritual/>
        <Subscribe/>
        <Contacts/>
        <Footer/>
        <Test/>
      </header>
    </div>
  );
}

export default App;
