import {StyleSheet} from 'aphrodite';

const colors = {
    background: {
        dark: '#1E2122',
        black: '#181B1C',
        card: '#272A2D',
    },
    ui: {
        grey: '#666E79',
        green: '#9AC802',
        blue: '#1C9DE8',
    },
};

const fonts = StyleSheet.create({
    robotoLight: {
        fontFamily: 'Roboto',
        fontWeight: 300,
    },
    robotoReg: {
        fontFamily: 'Roboto',
        fontWeight: 400,
    },
    robotoMed: {
        fontFamily: 'Roboto',
        fontWeight: 500,
    },
    robotoBold: {
        fontFamily: 'Roboto',
        fontWeight: 700,
    },
    robotoBlack: {
        fontFamily: 'Roboto',
        fontWeight: 900,
    },
    robotoMonoReg: {
        fontFamily: 'Roboto Mono',
        fontWeight: 400,
    },
    robotoMonoMed: {
        fontFamily: 'Roboto Mono',
        fontWeight: 500,
    },
    robotoMonoSBold: {
        fontFamily: 'Roboto Mono',
        fontWeight: 600,
    },
    robotoMonoBold: {
        fontFamily: 'Roboto Mono',
        fontWeight: 700,
    },
});

export {colors, fonts};
