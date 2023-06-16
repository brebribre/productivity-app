import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Option from './Option'

export default function Nav(props:any){

    return (

    <div className = "absolute top-5 gap-2 mx-auto grid grid-cols-3 md:w-96 md:gap-4">
        <Option text = "sakura"  onClick = {() => props.setBg("sakura")} />
        <Option text = "sea" onClick = {() => props.setBg("sea")}/>
        <Option text = "forest" onClick = {() => props.setBg("forest")}/>
    </div>
                
     
    
    )

}

