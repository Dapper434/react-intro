// App.jsx

import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Profile from "./components/Profile"

// Root component that combines everything
function App() {
  return (
    <div className="app-container">
      {/* Props example */}
      <Greeting name="Eugene" />

      {/* State example */}
      <Counter />

      <Profile name = "Pipsy" role= "Frontend Developer" />
    </div>
  );
}

export default App;