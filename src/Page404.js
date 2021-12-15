import './Page404.css';
import {Link} from 'react-router-dom';

function Page404() {
    return (   
        
        <div className="card">
            <img className="app-header-logo" src="/image/page-not-found.png" />
            <h2>404 Not found</h2>
            <p>Sorry, you are not authorized to access this page.</p>
            <Link to='/'><button className="back-button">Back Home</button></Link>   
        </div>
       
    );
}

export default Page404;

