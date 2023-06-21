import React from 'react';

export default function Player(){
    return (
        <div className = "absolute bottom-10 left-10 w-96">
            <iframe
            style={{ borderRadius: 12 }}
            src="https://open.spotify.com/embed/track/1pe508M2MCfevGvUesF0bV?utm_source=generator"
            width="100%"
            height={152}
       
            
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            />
        </div>
    )
}