import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer className="p-5 bg-dark text-white-50 text-center">
            <div className="container">
                <div className="lead">Copyright 2023 &copy; All Rights Reserved. | Design by <a href='https://www.facebook.com/raymartbarrameda' className="text-decoration-none text-white">Raymart</a> | Coded by <a href='https://www.facebook.com/raymartbarrameda' className="text-decoration-none text-white">Raymart</a>
                    <div className="ms-auto">
                        <Link to='/'><i className="bi bi-facebook"></i></Link>
                        <Link to='/'><i className="bi bi-twitter ps-3"></i></Link>
                        <Link to='/'><i className="bi bi-instagram ps-3"></i></Link>
                        <Link to='/'><i className="bi bi-linkedin ps-3"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;