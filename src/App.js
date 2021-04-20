import "./App.css";
import Navbar from "./components/navbar/navbar";
import Content from "./components/content/content";
import NavbarContent from "./components/navbar-content/navbar-content";

function App() {
  return (
    <div className="container m-4 shadow-md overflow-example bg-content h-content">
      <Navbar/>
      <NavbarContent />
      <Content/>
    </div>
  );
}

export default App;
