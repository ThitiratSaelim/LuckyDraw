import './AppFooter.css';

function AppFooter() {
    
    return (
        <div className='app-footer'>
            <div className='app-footer-text'>
                <p>Copyright: &copy; {new Date().getFullYear()} Western Digital. All right reserved</p>
            </div>
        </div>
    );
}

export default AppFooter;