import React, {useState, useEffect} from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';

// THEME IMPORT
import * as theme from '../../Utils/theme';

// GLOBAL STYLE IMPORT
import globalStyles from '../../Utils/globalStyle.css';

// PROP TYPE DEF
interface BaseLineChartProps {
    values: Array<string> | null;
    disabled?: boolean;
}

interface CustomChartProps {
    type: 'baseline' | 'area';
    values: Array<string> | null;
    disabled?: boolean;
}

// COMPONENTS
const BaseLineChart: React.FC<BaseLineChartProps> = ({values, disabled}): JSX.Element => {
    // STATE
    // eslint-disable-next-line
    const [viewPortDims, setViewPortDims] = useState<{height: number; width: number}>({height: 100, width: 400});
    const [startPointCoords, setStartPointCoords] = useState<{x: number; y: number}>({x: 0, y: 0});
    const [endPointCoords, setEndPointCoords] = useState<{x: number; y: number}>({x: 0, y: 0});
    const [points, setPoints] = useState<string>('');

    // HOOKS
    useEffect(() => {
        // CONVERT VALUES TO CHART POINTS
        if (values) {
            const valuesInNum = values.map((x: string): number => parseFloat(x));
            const maxVal = Math.max(...valuesInNum);
            const minVal = Math.min(...valuesInNum);
            const minMaxDiff = maxVal - minVal;
            const xPointDiff = viewPortDims.width / valuesInNum.length;
            let pointsStr = '';
            for (let i = 0; i < valuesInNum.length; i++) {
                const value = valuesInNum[i];
                const x = i * xPointDiff;
                const y = 98 - (value - minVal) / (minMaxDiff / 100);
                pointsStr += `${x},${y} `;
                if (i === 0) {
                    setStartPointCoords({x, y});
                } else if (i === valuesInNum.length - 1) {
                    setEndPointCoords({x, y});
                }
            }
            setPoints(pointsStr);
        }
    }, [values, viewPortDims.width]);

    return (
        <React.Fragment>
            <svg viewBox={`0 0 ${viewPortDims.width} ${viewPortDims.height}`} className={css(styles.chart)}>
                <defs>
                    <linearGradient id="linear_gradient_0" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9AC802" stopOpacity="0.5" />
                        <stop offset="1" stopColor="#9AC802" stopOpacity="0" />
                        {/* <stop offset="1" stopColor="#9AC802" stopOpacity="0.5" /> */}
                    </linearGradient>
                </defs>

                {/* AXES */}
                <g fill="none" stroke="rgba(102,110,121,0.5)" strokeWidth="3">
                    <path strokeDasharray="5,5" d={`M${startPointCoords.x} ${startPointCoords.y} l${viewPortDims.width} 0`} />
                    <path strokeDasharray="5,5" d="M0 0 l0 100" />
                </g>
                {/* AREA STROKE */}
                <polyline fill="none" stroke={!disabled ? theme.colors.ui.green : '#666E79'} strokeWidth="2" points={points} />
                {/* AREA */}
                {!disabled && (
                    <path
                        d={`M${points.replace(new RegExp(' ', 'g'), 'L').replace(new RegExp(',', 'g'), ' ')}${endPointCoords.x} ${startPointCoords.y}H0Z`}
                        fill="url(#linear_gradient_0)"
                    />
                )}
                {/* START AND END CIRCLES */}
                {!disabled && (
                    <React.Fragment>
                        <circle
                            stroke={theme.colors.ui.green}
                            strokeWidth="2"
                            cx={startPointCoords.x + 2}
                            cy={startPointCoords.y}
                            r="2"
                            fill={theme.colors.ui.green}></circle>
                        <circle
                            stroke={theme.colors.ui.green}
                            strokeWidth="2.5"
                            cx={endPointCoords.x - 4.5}
                            cy={endPointCoords.y + 4.5}
                            r="4"
                            fill={'white'}></circle>
                    </React.Fragment>
                )}
            </svg>
            {/* TOOLTIP */}
            {!disabled && (
                <div className={css(styles.toolTip, globalStyles.totalCenter)}>
                    <span className={css(theme.fonts.robotoMed, styles.toolTipText)}>+21.5%</span>
                </div>
            )}
        </React.Fragment>
    );
};

const CustomChart: React.FC<CustomChartProps> = ({type, values, disabled}): JSX.Element => {
    switch (type) {
        case 'baseline':
            return <BaseLineChart values={values} disabled={disabled} />;
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
        height: '100%',
        justifyContent: 'flex-end',
        // padding: '0px 10px 0px',
        // padding: '20px 20px 20px 0',
    },
    toolTip: {
        width: '40px',
        height: '18px',
        borderRadius: '0.2rem',
        backgroundColor: theme.colors.ui.green,
        position: 'absolute',
        right: '0.2rem',
        top: 5,
    },
    toolTipText: {
        color: 'white',
        fontSize: '10px',
    },
});

export default CustomChart;
