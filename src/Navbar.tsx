import {Routes, Route, useNavigate} from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    const navToHome = () => {
        navigate('/home');
    }

    const navToAbout = () => {
        navigate('/about');
    }

    const navToLogin = () => {
        navigate('/login');
    }

    return (
        <nav className="nav">
            <div>
                <button onClick={navToHome}>HOME</button>
                <button onClick={navToAbout}>ABOUT</button>
                <button onClick={navToLogin}>LOGIN</button>    
            </div>
        </nav>
    )
}

export default Navbar;
