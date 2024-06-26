import Quote from "./components/Quote";
import Weather from "./components/Weather";
import store from "./store";
import { Provider } from "react-redux";
import './index.css'



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Weather />
        <Quote />
      </div>
    </Provider>
  );
}

export default App;
