'use client';

import generateStarfield from 'app/generateStarfield';
import {useEffect} from 'react';

export function Starfield() {
    useEffect(() => {
        generateStarfield('starfield');
    }, []);
    return <canvas className="absolute z-0 hidden dark:block" id="starfield"/>;
}