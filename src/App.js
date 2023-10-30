
import './App.css';
import { Products } from './components/Products';
import { Contactus } from './components/Contactus';
import { Aboutus} from './components/Aboutus';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { PageNotFound } from './components/PageNotFound';
import { AddProduct } from './components/AddProduct';
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct';
import Login from './components/Login'
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <div>
      <Router>        <Navigation></Navigation>
        <Routes>
        <Route path='/' element={<Login/>}></Route>
          <Route path='/getProducts' element={<Products/>}></Route>
          <Route path='/userDashboard' element={<UserDashboard/>}></Route>
          <Route path='/aboutus' element={<Aboutus/>}></Route>
          <Route path='/contactus' element={<Contactus/>}> </Route>
          <Route path='/addProduct' element={<AddProduct/>}></Route>
          <Route path='/editProduct/:id' element={<EditProduct/>}></Route>
          <Route path='/deleteProduct/:id' element={<DeleteProduct/>}></Route>
         <Route path='/*' element={<PageNotFound/>}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
