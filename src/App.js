import "./App.css";
import Example from "./containers/header";
import Layouts from "./containers/ArticlesCarousel";
import { ServiceFactory } from "./controlllers/services/ServiceFactory";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Example />
      <Category />
    </div>
  );
}

export default App;
