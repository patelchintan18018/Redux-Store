import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import { Provider } from "react-redux";
import store from "./store/store";
import ProductDeatils from "./components/ProductDeatils";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="text-center text-4xl font-bold my-5">Redux Store</div>
        <BrowserRouter>
          <ToastContainer
            position="bottom-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            
          />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Basket" element={<Basket />}></Route>
            <Route path="/product/:id" element={<ProductDeatils/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
