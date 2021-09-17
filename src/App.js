import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Home";
import SongLikePage from "./Components/SharedComp/SongLikePage";

function App() {
  return (
    <Home>
      <SongLikePage />
    </Home>
  );
}

export default App;
