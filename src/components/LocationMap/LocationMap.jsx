import React from 'react';

const LocationMap = () => {
    return (
        <div className="w-full h-auto relative">
            <iframe src="https://my.atlist.com/map/33d3f0c2-dfc8-465d-b4fa-0a54c5276842/?share=true"
                allow="geolocation 'self' https://my.atlist.com"
                width="100%"
                height="600px"
                loading="lazy"
                frameBorder="0"
                scrolling="no"
                allowFullScreen id="atlist-embed"></iframe>

        </div >
    );
};

export default LocationMap;
