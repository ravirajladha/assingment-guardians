
import './App.css';
import Nav from './components/Nav.js';
// import Footer from './components/Footer.js';
import Signup from './components/signup/Signup.js';
import Index from './components/Index.js';
import Api from './components/Api.js';
// import Login from './components/Login.js';


// import PrivateComponent from './components/PrivateComponent.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Nav />
<Routes>
  {/* <Route element = {<PrivateComponent />} >


  <Route path="/profile" element={<h1>Profile component</h1>} />
  </Route>
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} /> */}
  <Route path="/" element={<Signup />} />
  <Route path="/index" element={<Index />} />
  <Route path="/api" element={<Api />} />
</Routes>
     </BrowserRouter>
     {/* <Footer /> */}
    </div>
  );
}

export default App;
