import './AppBackground.css';

function AppBackground() {
    return (
        <div>
            <section>    
            <div className="curve"></div>
            <div className="progress">
            <div className="barOverflow">
                <div className="bar"></div>
            </div>
            </div>

            <div className="progress">
            <div className="barOverflow-right">
                <div className="bar-right"></div>
            </div>
            </div>
        </section>
        </div>
    );
}

export default AppBackground;