import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function Option(props: any){
    return (
    <div 
    className = "border-2 text-sm text-center py-1 px-4 rounded-2xl font-semibold transform transition duration-200 hover:bg-white hover:text-black" 
    onClick = {props.onClick}>
        {props.text}
    </div>
    )

}
