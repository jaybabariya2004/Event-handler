import { Route, Routes, } from 'react-router-dom';
import './App.css';
import { adminNav } from './componets/Admin/Header/adminNav';
import Navbar from './componets/Atoms/Header/Navbar';
import Home from './componets/Admin/Pages/Home';
import List from './componets/Admin/Pages/List';
import Not from './componets/Atoms/Not';
import { userNav } from './componets/User/Header/userNav';
import Product from './componets/User/Pages/Product';
import Login from "./componets/Atoms/Body/Login";
import Ushome from './componets/User/Pages/Ushome';

function App() {

  const role = "user";

  if (role === 'admin') {
    return (
      <>
        <Navbar data={adminNav} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List />} />
          <Route path='*' element={<Not />} />
        </Routes>
      </>
    );
  } else if (role === "user") {
    return (
      <>
        <Navbar data={userNav} />
        <Routes>
        <Route path='/' element={<Ushome/>}/>
          <Route path='/product' element={<Product />} />
          <Route path='*' element={<Not />} />
        </Routes>
      </>
    );
  } else {
    return <Login />
  }

}

export default App;
