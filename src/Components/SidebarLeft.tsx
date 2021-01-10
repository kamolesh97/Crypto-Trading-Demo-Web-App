import React from 'react';
import {StyleSheet, css} from 'aphrodite';

// THEME IMPORT
import * as theme from '../Utils/theme';

// GLOBAL STYLE IMPORT
import globalStyles from '../Utils/globalStyle.css';

// COMPONENTS IMPORT
import CustomIcon from './CustomIcon';
import CustomButton from './CustomButton';

// PROP TYPE DEF
interface SectionTitleProps {
    title: string;
    iconType: string;
}
interface SidebarLeftProps {}

// COMPONENTS
const SectionTitle: React.FC<SectionTitleProps> = ({title, iconType}): JSX.Element => {
    return (
        <div className={css(globalStyles.rowContainer, globalStyles.alignItemsCenter, globalStyles.hover, globalStyles.justifyContentSpaceBetween)}>
            <div>
                <CustomIcon type={iconType} />
                <span className={`pl-3 ${css(styles.sectionTitleText, theme.fonts.robotoReg)}`}>{title.toUpperCase()}</span>
            </div>
            <CustomIcon type={'chevRight'} />
        </div>
    );
};

const Separator: React.FC<{}> = (): JSX.Element => {
    return <div className={css(styles.separator)} />;
};

const SidebarLeft: React.FC<SidebarLeftProps> = (): JSX.Element => {
    return (
        <div className={css(styles.sidebarLeftContainer)}>
            {/* SECTION 1 */}
            <SectionTitle title={'Open Trades'} iconType={'trades'} />
            <div className={`mt-3 pb-4 ${css(globalStyles.rowContainer)}`}>
                <div className={css(globalStyles.columnContainer, styles.subSectionContainer)}>
                    <span className={css(styles.text1, theme.fonts.robotoMed)}>Trades in progress</span>
                    <span className={css(styles.text2, theme.fonts.robotoMed)}>15</span>
                </div>
                <div className={css(globalStyles.columnContainer, styles.subSectionContainer)}>
                    <span className={css(styles.text1, theme.fonts.robotoMed)}>Closest outcome</span>
                    <span className={css(styles.text2, theme.fonts.robotoMed)}>25m 40s</span>
                    <span className={css(styles.text3, theme.fonts.robotoReg)}>ETH 48 hour</span>
                </div>
            </div>
            <Separator />

            {/* SECTION 2 */}
            <SectionTitle title={'Trading History'} iconType={'history'} />
            <div className={`mt-3 pb-4 ${css(globalStyles.rowContainer)}`}>
                <div className={css(globalStyles.columnContainer, styles.subSectionContainer)}>
                    <span className={css(styles.text1, theme.fonts.robotoMed)}>Total trades</span>
                    <span className={css(styles.text2, theme.fonts.robotoMonoMed)}>245</span>
                </div>
                <div className={css(globalStyles.columnContainer, styles.subSectionContainer)}>
                    <span className={css(styles.text1, theme.fonts.robotoMed)}>Profit</span>
                    <span className={css(styles.text2, theme.fonts.robotoMonoMed)}>+21.5%</span>
                </div>
            </div>
            <Separator />

            {/* SECTION 3 */}
            <SectionTitle title={'Training wallet'} iconType={'wallet'} />
            <div className={`mt-3 ${css(globalStyles.columnContainer)}`}>
                <span className={css(styles.text1, theme.fonts.robotoMed)}>Trading</span>
                <div className={css(globalStyles.rowContainer, globalStyles.alignItemsCenter, globalStyles.justifyContentSpaceBetween)}>
                    <span className={css(styles.text2, theme.fonts.robotoMonoMed)}>$ 34,752.00</span>
                    <CustomButton type={'outlined'} label={'TOP UP'} onClick={() => {}} />
                </div>
                <span className={`mt-2 ${css(styles.text1, theme.fonts.robotoMed)}`}>Holding</span>
                <div className={css(globalStyles.rowContainer, globalStyles.alignItemsCenter, globalStyles.justifyContentSpaceBetween)}>
                    <span className={css(styles.text4, theme.fonts.robotoMonoReg)}>$ 4,102.00</span>
                    <CustomButton type={'solid'} label={'BUY DAI'} onClick={() => {}} />
                </div>
            </div>
        </div>
    );
};

const styles = StyleSheet.create({
    sidebarLeftContainer: {
        backgroundColor: theme.colors.background.black,
        padding: '2rem 1.5rem',
        height: '100%',
        '@media (min-width: 540px)': {
            width: '280px',
        },
        '@media (max-width: 540px)': {
            width: '0px',
        },
    },
    sectionTitleText: {
        color: theme.colors.ui.green,
        fontSize: '16px',
    },
    separator: {
        width: '100%',
        height: '2px',
        background: 'linear-gradient(to right, #36393C, rgba(54, 57, 60, 0.1))',
        marginBottom: '2rem',
    },
    subSectionContainer: {
        flex: 1,
    },
    text1: {
        color: theme.colors.ui.grey,
        fontSize: '10px',
    },
    text2: {
        color: 'white',
        fontSize: '20px',
    },
    text3: {
        color: 'white',
        fontSize: '12px',
    },
    text4: {
        color: 'white',
        fontSize: '14px',
    },
});

export default SidebarLeft;
