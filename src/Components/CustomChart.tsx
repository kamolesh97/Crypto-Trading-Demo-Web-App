import React from 'react';
import {StyleSheet, css, StyleDeclarationValue} from 'aphrodite/no-important';

// THEME IMPORT
import * as theme from '../Utils/theme';

// GLOBAL STYLE IMPORT
import globalStyles from '../Utils/globalStyle.css';

// PROP TYPE DEF
interface BaseLineChartProps {}

interface CustomChartProps {
    type: 'baseline' | 'area';
    values: Array<number> | null;
}

// TYPE DEF

// COMPONENTS
const BaseLineChart: React.FC<BaseLineChartProps> = ({}): JSX.Element => {
    return (
        <svg viewBox="0 0 350 100" className={css(styles.chart)}>
            <defs>
                <linearGradient id="__cc_graph-gradient_1095" x1="0.5" x2="0.5" y1="0" y2="1">
                    <stop offset="0" stopColor="#9AC802" stopOpacity="0.5"></stop>
                    <stop offset="74.10907834856552%" stopColor="#9AC802" stopOpacity="0"></stop>
                    <stop offset="1" stopColor="#9AC802" stopOpacity="0.5"></stop>
                </linearGradient>
                <filter id="__cc-tooltip_1097">
                    <feDropShadow floodColor="#000000" floodOpacity="0.25" dx="0" dy="4" stdDeviation="4"></feDropShadow>
                </filter>

                <linearGradient id="grad" x2="0" y2="1">
                    <stop offset="0" stopColor="red" />
                    <stop offset="1" stopColor="blue" />
                </linearGradient>

                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(255,255,0)" stopOpacity="1" />
                    <stop offset="100%" stopColor="rgb(255,0,0)" stopOpacity="1" />
                </linearGradient>

                <linearGradient id="linear_gradient_0" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9AC802" stopOpacity="0.5" />
                    <stop offset="0.515625" stopColor="#9AC802" stopOpacity="0" />
                    <stop offset="1" stopColor="#9AC802" stopOpacity="0.5" />
                </linearGradient>
            </defs>

            {/* AXES */}
            <g fill="none" stroke="rgba(102,110,121,0.5)" strokeWidth="3">
                <path strokeDasharray="5,5" d="M0 50 l350 0" />
                <path strokeDasharray="5,5" d="M0 0 l0 100" />
            </g>
            <polyline
                // fill="#b3d1ff"
                fill="url(#linear_gradient_0)"
                // fill="none"
                stroke={theme.colors.ui.green}
                strokeWidth="2"
                points="0,50 10,40 20,45 30,78 50,80 100,50 150,60 200,20 250,80 300,90 350,40"
            />
            <circle stroke="#9AC802" strokeWidth="2" cx="2" cy="48" r="2" fill={theme.colors.ui.green}></circle>
            <circle stroke="#9AC802" strokeWidth="2" cx="348" cy="12" r="2" fill={theme.colors.ui.green}></circle>

            {/* <path
                d="M0 24.9505L3 12.4752L7 9.87624L11 4.15842L15 0L19 4.15842L23 12.4752L27 13.5149L31 18.1931L35 15.0743L39 16.1139L43 16.6337L47 14.5545L51 12.4752L55 16.6337L59 18.7129L61.4 24.9505H115V29.1089L111 32.2277L107 33.7871L103 32.2277L99 40.0248L95 42.104L91 48.8614L87 50.4208L83 52.5L79 49.901L75 43.6634L71 42.6238L67 28.0693L63 29.1089L61.4 24.9505H0Z"
                fill="url(#linear_gradient_0)"
            /> */}

            {/* <svg width="115" height="53" viewBox="0 0 115 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 24.9505L3 12.4752L7 9.87624L11 4.15842L15 0L19 4.15842L23 12.4752L27 13.5149L31 18.1931L35 15.0743L39 16.1139L43 16.6337L47 14.5545L51 12.4752L55 16.6337L59 18.7129L61.4 24.9505H115V29.1089L111 32.2277L107 33.7871L103 32.2277L99 40.0248L95 42.104L91 48.8614L87 50.4208L83 52.5L79 49.901L75 43.6634L71 42.6238L67 28.0693L63 29.1089L61.4 24.9505H0Z"
                    fill="url(#linear_gradient_0)"
                />
                <defs>
                    <linearGradient id="linear_gradient_0" x1="57.5" y1="0" x2="57.5" y2="52.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9AC802" stopOpacity="0.5" />
                        <stop offset="0.515625" stopColor="#9AC802" stopOpacity="0" />
                        <stop offset="1" stopColor="#9AC802" stopOpacity="0.5" />
                    </linearGradient>
                </defs>
            </svg> */}
        </svg>

        // <svg height="100" width="500" x={0} y={0}>
        //     <polyline points="20,20 40,25 60,40 80,100 120,100 200,100" stroke="#0074d9" strokeWidth="1" fill="url(#__cc_graph-gradient_1095)" />
        // </svg>
    );
};

const CustomChart: React.FC<CustomChartProps> = ({type}): JSX.Element => {
    switch (type) {
        case 'baseline':
            return <BaseLineChart />;
        case 'area':
            return <></>;
        default:
            return <></>;
    }
};

const styles = StyleSheet.create({
    chart: {
        display: 'flex',
        flex: 1,
        height: '100px',
        padding: '20px 20px 20px 0',
    },
});

export default CustomChart;
