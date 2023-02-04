import "./App.css";
import FileUpload from "./components/fileUploader/FileUpload";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar  />
      <FileUpload/>
    </div>
  );
}

export default App;
