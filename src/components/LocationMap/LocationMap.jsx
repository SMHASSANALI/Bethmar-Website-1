import React, { useState, useEffect } from 'react';

const LocationMap = () => {
    const [ctrlPressed, setCtrlPressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey || event.metaKey) {
                setCtrlPressed(true);
            }
        };

        const handleKeyUp = (event) => {
            if (!event.ctrlKey && !event.metaKey) {
                setCtrlPressed(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (
        <div className="w-full h-auto relative">
            <iframe
                style={{ pointerEvents: ctrlPressed ? 'auto' : 'none' }}
                src="https://www.google.com/maps/d/embed?mid=1IuKsDO4XYpsAIrz1fcTg0Jz8dpYTsK0&ehbc=2E312F&noprof=1"
                width="100%"
                height="600px"
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default LocationMap;



{/* <iframe src="https://my.atlist.com/map/33d3f0c2-dfc8-465d-b4fa-0a54c5276842/?share=true"
    allow="geolocation 'self' https://my.atlist.com"
    width="100%"
    height="600px"
    loading="lazy"
    frameBorder="0"
    scrolling="no"
    allowFullScreen id="atlist-embed"></iframe> */}