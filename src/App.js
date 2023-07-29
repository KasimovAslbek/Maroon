import Main from "./components/Main";
import Bestsellers from "./components/Bestsellers";
import Spring from "./components/Spring";
import Indcare from "./components/Indcare";
import Ritual from "./components/Ritual";
function App() {
  return (
    <div className="App text-[#122947] max-w-main mx-auto overflow-x-hidden">
      <header className="App-header">
        <Main/>
        <Bestsellers/>
        <Spring/>
        <Indcare/>
        <Ritual/>
      </header>
    </div>
  );
}

export default App;
