import React from 'react';
import songList from '../api/songList'
import Option from './Option'
import { useState, useEffect } from 'react';
import Song from './Song'

export default function Player(){
    const [activeSong, setActiveSong] = useState(songList[0]);

    const changeSong = (e:number) => {
        console.log(e)
        setActiveSong(songList[e]);
        console.log(songList[e])
    }

    return (
        <div className = "absolute bottom-5 left-10 hidden lg:block ">
            <div className = "border-2 w-20 px-2 mb-2 text-sm py-1 rounded-2xl font-semibold transform transition duration-200 hover:bg-white hover:text-black">
            <select name="Choose Sound" className = "bg-transparent" onChange = {e => changeSong(Number(e.target.value))}>
                <option value={0}>Lo-Fi</option>
                <option value={1}>Rain</option>
            </select>
            </div>
            
            <Song src = {activeSong}/>
        </div>
    )
}
