import Main from "./components/Main";
import Bestsellers from "./components/Bestsellers";
import Spring from "./components/Spring";
import Indcare from "./components/Indcare";
import Ritual from "./components/Ritual";
import Subscribe from "./components/Subscribe";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

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

      </header>
    </div>
  );
}

export default App;
