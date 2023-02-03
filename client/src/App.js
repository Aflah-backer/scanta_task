import "./App.css";
import DashBoard from "./components/dashBoard/DashBoard";
import FileUpload from "./components/fileUploader/FileUpload";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <FileUpload />
      {/* <DashBoard/> */}
    </div>
  );
}

export default App;
