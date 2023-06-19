import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Option from './Option'

export default function Nav(props:any){
    return (
    <div className = "grid grid-rows-3 gap-2 md:grid-cols-3">
        <Option text = "sakura"  onClick = {() => props.setBg("sakura")} />
        <Option text = "sea" onClick = {() => props.setBg("sea")}/>
        <Option text = "forest" onClick = {() => props.setBg("forest")}/>
    </div>
    )

}

