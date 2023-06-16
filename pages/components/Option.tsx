import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function Option(props: any){
    return (
    <div 
    className = "border-2 text-center py-2 px-4 rounded-3xl font-semibold transform transition duration-200 hover:bg-white hover:text-black" 
    onClick = {props.onClick}
    >
        {props.text}
    </div>
    )

}
