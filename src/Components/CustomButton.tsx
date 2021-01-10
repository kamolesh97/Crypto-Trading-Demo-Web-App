import React from 'react';
import {StyleSheet, css, StyleDeclarationValue} from 'aphrodite/no-important';

// THEME IMPORT
import * as theme from '../Utils/theme';

// GLOBAL STYLE IMPORT
import globalStyles from '../Utils/globalStyle.css';

// PROP TYPE DEF
interface Props {
    type: 'outlined' | 'solid';
    label: string;
    onClick: Function;
    className?: {
        container?: string;
        label?: string;
    };
    style?: {
        container?: StyleDeclarationValue;
        label?: StyleDeclarationValue;
    };
}

// COMPONENTS
const CustomButton: React.FC<Props> = ({type, label, onClick, className, style}): JSX.Element => {
    switch (type) {
        case 'outlined':
            return (
                <div
                    className={`${css(styles.outlinedButtonContainer, globalStyles.totalCenter, globalStyles.hover, style?.container)} ${className?.container}`}
                    onClick={() => onClick()}>
                    <span className={`${css(theme.fonts.robotoMed, styles.outlinedButtonLabel, style?.label)} ${className?.label}`}>{label}</span>
                </div>
            );
        case 'solid':
            return (
                <div
                    className={`${css(styles.solidButtonContainer, globalStyles.totalCenter, globalStyles.hover, style?.container)} ${className?.container}`}
                    onClick={() => onClick()}>
                    <span className={`${css(theme.fonts.robotoMed, styles.solidButtonLabel, style?.label)} ${className?.label}`}>{label}</span>
                </div>
            );
        default:
            return <></>;
    }
};

const styles = StyleSheet.create({
    outlinedButtonContainer: {
        border: `1px ${theme.colors.ui.green} solid`,
        padding: '0.25rem 0.85rem',
        borderRadius: '0.2rem',
    },
    outlinedButtonLabel: {
        color: theme.colors.ui.green,
        fontSize: '10px',
    },
    solidButtonContainer: {
        background: 'radial-gradient(50% 138.28% at 50% 0%, rgba(246, 255, 142, 0.75) 0%, rgba(245, 255, 136, 0) 100%), #9AC802;',
        padding: '0.3rem 0.85rem',
        borderRadius: '0.2rem',
    },
    solidButtonLabel: {
        color: 'black',
        fontSize: '10px',
    },
});

export default CustomButton;
