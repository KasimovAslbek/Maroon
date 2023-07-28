import Main from "./components/Main";
import Bestsellers from "./components/Bestsellers";
function App() {
  return (
    <div className="App text-[#122947] max-w-main mx-auto overflow-x-hidden">
      <header className="App-header">
        <Main/>
        <Bestsellers/>
      </header>
    </div>
  );
}

export default App;
