import React from "react";
import { useColorScheme } from "react-native";

interface PaletteOptions {

    theme: {
        dark: string,
        light: string,
        primary: string,
        secondary: string,
        accenta: string,
        accentb: string,
        accentc: string,
        accentd: string,
        
    }

    black: {
        main: string;
        B001: string;
        B002: string;
        B003: string;
        B004: string;
        B005: string;
    };
    white: {

        main: string,
        W001: string,
        W002: string,
        W003: string,

    };
    errors: {

        main: string,
        M001: string,
        M002: string,
        M003: string,
        M004: string,
        W001: string,
        A001: string,
        A002: string,

    };
    success: {

        main: string,
        G001: string,
        G002: string,
        G003: string,
        G004: string,
        G005: string,
        G006: string,
        
    },
    transparent: {
        level01: string,
        level02: string,
        level03: string,
        level04: string,
        level05: string,

    }

};

const darkmode = () =>{


    const mode = useColorScheme() === 'dark';

    return { mode }

};



const colors: PaletteOptions = {

    theme: {
        dark: '#111138',
        light: '#f6f9fa',
        primary: '#7ec9df',
        secondary: '#3aa7d3',
        accenta: '#8cc8fc',
        accentb: '#67afc6',
        accentc: '#257c98',
        accentd: '#83635a',
    },

    black: {
        main: '#0c0c0c',
        B001: '#202020',
        B002: '#262626',
        B003: '#303030',
        B004: '#404040',
        B005: '#919191'

    },
    white: {

        main: '#FFFFFF',
        W001: '#F6F6F6',
        W002: '#F0F0F0',
        W003: '#E2E2E2',

    },
    errors: {

        main: '#FDC361',
        M001: '#FDF3DB',
        M002: '#FFB029',
        M003: '#FF8627',
        M004: '#F27400',
        W001: '#ffdd00',
        A001: '#ff0000',
        A002: '#CD3209',

    },
    success: {

        main: '#3CB043',
        G001: '#03AC13',
        G002: '#028A0F',
        G003: '#B0FC3B',
        G004: '#AEF359',
        G005: '#3DED97',
        G006: '#99EDC3'
        

    },
    transparent: {

        level01: '#00000009',
        level02: '#00000019',
        level03: '#00000039',
        level04: '#00000069',
        level05: '#00000099',


    }

}

const colorway = darkmode();

// main colors
export const white = colors.white
export const black = colors.black
export const errors = colors.errors
export const success = colors.success
export const theme = colors.theme
export const transparent = colors.transparent
// color mode
export const mode = colorway.mode