import React from 'react';

export default function Song(props){
    return (
        <iframe
            style={{ borderRadius: 12 }}
            src={props.src}
            width={320}
            height={100}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
        />
    )
}