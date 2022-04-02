import { Chronometer } from "./components/Chronometer/Chronometer";
import { Countdown } from "./components/Countdown/Countdown";
import { Digitalclock } from "./components/Digitalclock/Digitalclock";
import "./main.scss";

function App() {
  return (
    <div className="App">
     <Digitalclock/>
     <Countdown/>
     <Chronometer/>
    </div>
  );
}

export default App;
