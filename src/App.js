import "./App.css";
import Bookform from "./components/Bookform";
import { Booklist } from "./components/Booklist";
import Navbar from "./components/Navbar";
import BookProvider from "./context/BookContext";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Navbar />
        <Booklist />
        <Bookform />
      </BookProvider>
    </div>
  );
}

export default App;
