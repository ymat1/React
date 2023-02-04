import { Link } from 'react-router-dom';

function MainLayout() {
    return(
        <>
            <div>
                <Link to='/register' className="btn btn-success">Register</Link>
                <Link to='/login' className="btn btn-warning">Login</Link>
            </div>
        </>
    )
}

export default MainLayout;