import Header from "./Components/Header";
import Sessions from "./Components/Sessions";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sessions />
      </BrowserRouter>
    </div>
  );
}

export default App;

