
import { ToastContainer } from "react-toastify";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Router from "./router/Router";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  

  return (
    <>
    <ToastContainer/>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
