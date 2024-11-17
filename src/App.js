import Nav from "./components/Nav";

import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book]);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Route path="/" exact component={Home}></Route>
        <Route
          path="/books"
          exact
          render={() => <Books books={books}></Books>}
        ></Route>
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} add={addToCart} cart={cart}></BookInfo>
          )}
        ></Route>
        <Route path="/cart" render={() => <Cart books={cart}></Cart>}></Route>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
