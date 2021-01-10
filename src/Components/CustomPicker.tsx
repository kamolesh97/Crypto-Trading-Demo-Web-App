import React from 'react';
import {StyleSheet, css, StyleDeclarationValue} from 'aphrodite/no-important';

// THEME IMPORT
import * as theme from '../Utils/theme';

// GLOBAL STYLE IMPORT
import globalStyles from '../Utils/globalStyle.css';

// PROP TYPE DEF
interface Props {
    options: option[];
    className?: string;
    style?: {
        container?: StyleDeclarationValue;
        label?: StyleDeclarationValue;
    };
}

// TYPE DEF
type option = {
    name: string;
    value: string;
};

// COMPONENTS
const CustomPicker: React.FC<Props> = ({options, className}): JSX.Element => {
    return (
        <select className={`${css(styles.customPicker)} ${className}`}>
            {options.map((item: option, index: number) => {
                return (
                    <option key={index.toString()} value={item.value} className={`${css(styles.customPickerOption, theme.fonts.robotoMed)}`}>
                        {item.name}
                    </option>
                );
            })}
        </select>
    );
};

const styles = StyleSheet.create({
    customPicker: {
        backgroundColor: 'transparent',
        minWidth: '150px',
        fontSize: '12px',
        color: 'white',
        borderRadius: '0.2rem',
        borderColor: 'rgba(102,110,121,0.5)',
        padding: '0.2rem 0.4rem',
        ':after': {
            borderColor: 'red',
            color: 'red',
        },
    },
    customPickerOption: {
        fontSize: '12px',
        color: 'white',
    },
});

export default CustomPicker;
