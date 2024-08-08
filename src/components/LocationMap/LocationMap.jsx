import React from 'react';

const LocationMap = () => {
    return (
        <div className="location-map w-full h-auto">
            <iframe src="https://my.atlist.com/map/33d3f0c2-dfc8-465d-b4fa-0a54c5276842/?share=true" allow="geolocation 'self' https://my.atlist.com" width="100%" height="600px" loading="lazy" frameborder="0" scrolling="no" allowfullscreen id="atlist-embed"></iframe>
        </div >
    );
};

export default LocationMap;
