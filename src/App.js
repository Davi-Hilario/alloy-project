import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Cart from './pages/cart/Cart';

function App () {
    return (
        <div className='App'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="cart" element={<Cart />} />
            </Routes>
        </div>
    )
}

export default App;