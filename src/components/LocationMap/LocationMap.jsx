import React from 'react';

const LocationMap = () => {
    return (
        <div className="location-map w-full h-full">
            <iframe
                src="https://www.google.com/maps/d/embed?mid=11bl0fpbDXcvDE1g2jKBQ0YbPxKCOueM&ehbc=2E312F&noprof=1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
                className='w-full min-h-[80vh]'
            ></iframe>
        </div >
    );
};

export default LocationMap;
