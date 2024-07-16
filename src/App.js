import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import "./output.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen box-border">
        <Sidebar />
        <div className="w-10/12 h-full">
          <Table />
        </div>
      </div>
    </>
  );
}

export default App;
