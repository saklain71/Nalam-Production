import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import PurchagePage from './Pages/Home/PurchagePage';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import NotFound from './Pages/Shared/NotFound';
import RequireAuth from './Pages/Login/RequireAuth';
import Payment from './Pages/Dashboard/Payment';
import AllUsers from './Pages/Dashboard/AllUsers';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import RequireAdmin from './Pages/Login/RequireAdmin';


function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="purchase/:id" element={
          <RequireAuth>
            <PurchagePage></PurchagePage>
          </RequireAuth>

        }></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="alluser" element={
            <RequireAdmin>
              <AllUsers></AllUsers>
            </RequireAdmin>
          }>
          </Route>
          <Route path="manageOrder" element={
            <RequireAdmin>
              <ManageOrders></ManageOrders>
            </RequireAdmin>
          }></Route>
          <Route path="payment" element={<Payment></Payment>}></Route>
        </Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
