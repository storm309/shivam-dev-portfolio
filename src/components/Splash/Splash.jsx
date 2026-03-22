import { useEffect, useState } from 'react';
import './Splash.css';

const Splash = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="splash-overlay">
            <div className="splash-container">
                {/* Main pop animation */}
                <div className="splash-pop">
                    {/* Outer glow ring */}
                    <div className="splash-ring splash-ring-1"></div>
                    <div className="splash-ring splash-ring-2"></div>
                    <div className="splash-ring splash-ring-3"></div>

                    {/* Center badge */}
                    <div className="splash-badge">
                        <div className="splash-content">
                            <span className="splash-emoji">🚀</span>
                            <h2 className="splash-title">Shivam's Portfolio</h2>
                            <p className="splash-subtitle">Welcome</p>
                        </div>
                    </div>
                </div>

                {/* Particle effects */}
                <div className="splash-particles">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="particle" style={{ '--delay': `${i * 0.05}s` }}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Splash;
