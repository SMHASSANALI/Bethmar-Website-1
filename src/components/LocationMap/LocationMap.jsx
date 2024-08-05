import React from 'react';

const LocationMap = () => {
    return (
        <div className="location-map w-full h-auto">
            <iframe src="https://my.atlist.com/map/5016a90e-b8b4-49e1-b224-ed25d6503d05/?share=true" allow="geolocation 'self' https://my.atlist.com" width="100%" height="500px" loading="lazy" frameborder="0" scrolling="no" allowfullscreen id="atlist-embed"></iframe>
        </div >
    );
};

export default LocationMap;
