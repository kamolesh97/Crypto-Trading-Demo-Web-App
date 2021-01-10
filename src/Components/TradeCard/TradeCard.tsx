import React from 'react';
import {StyleSheet, css} from 'aphrodite';

// THEME IMPORT
import * as theme from '../../Utils/theme';

// GLOBAL STYLE IMPORT
import globalStyles from '../../Utils/globalStyle.css';

// HELPER IMPORT
import * as helper from '../../Utils/helper';

// COMPONENTS IMPORT
import CustomIcon from './../CustomIcon';
import CustomChart from './../CustomChart';

// TS TYPES IMPORT
import * as types from '../../Constants/types';

// PROP TYPE DEF
interface Props {
    data: types.TradeCard;
    assetPrice: {
        [key: string]: any;
    } | null;
}

// COMPONENTS
const Separator: React.FC<{}> = (): JSX.Element => {
    return <div className={css(styles.separator)} />;
};

const TradeCard: React.FC<Props> = ({data, assetPrice}): JSX.Element => {
    // CONSTANTS
    const outcome_time = helper.formatTimeStamp(data.outcome_time);
    const total_commitment_funds = helper.numberWithCommas(parseFloat(data.total_commitment_funds).toFixed(2));

    return (
        <div className={css(styles.wrapperContainer, globalStyles.hover)}>
            <div className={css(globalStyles.rowContainer, globalStyles.alignItemsCenter, styles.container)}>
                {/* SECTION 1 */}
                <div className={css(globalStyles.rowContainer, styles.section1Container)}>
                    <CustomIcon type={'star'} />
                    <div className={`pl-3 ${css(globalStyles.columnContainer)}`}>
                        <span className={css(theme.fonts.robotoMed, styles.text1)}>{data.name}</span>
                        <span className={css(theme.fonts.robotoMed, styles.text2)}>{data.type}</span>
                    </div>
                </div>
                <Separator />
                {/* SECTION 2 */}
                <div className={css(styles.section2Container)}>
                    <div className={css(globalStyles.rowContainer)}>
                        <CustomIcon type={'leverage'} />
                        <span className={`pl-3 ${css(theme.fonts.robotoLight, styles.text3)}`}>{data.leverage}x</span>
                    </div>
                    <span className={css(theme.fonts.robotoMed, styles.text2)}>
                        Outcome in {outcome_time.hh ? `${outcome_time.hh}h` : ''} {outcome_time.mm ? `${outcome_time.mm}m` : ''}{' '}
                        {outcome_time.ss ? `${outcome_time.ss}s` : ''}
                    </span>
                </div>
                {/* SECTION 3 */}
                <div className={css(styles.section3Container)}>
                    <CustomChart type={'baseline'} values={assetPrice ? assetPrice['prices'] : null} />
                </div>
                {/* SECTION 4 */}
                <div className={css(globalStyles.columnContainer, styles.section4Container)}>
                    {data.total_commits > 0 && (
                        <div className={css(styles.commitsCounter, globalStyles.totalCenter)}>
                            <span className={css(theme.fonts.robotoMonoMed, styles.text4)}>{data.total_commits}</span>
                        </div>
                    )}
                    <span className={css(theme.fonts.robotoMonoMed, styles.text1)}>$ {total_commitment_funds}</span>
                    <span className={css(theme.fonts.robotoMed, styles.text2)}>Total commitment funds</span>
                </div>
            </div>
        </div>
    );
};

const styles = StyleSheet.create({
    wrapperContainer: {
        display: 'flex',
        background: 'linear-gradient(to bottom right, #535763, rgba(80, 83, 95, 0.2), #585C6B)',
        borderRadius: '0.5rem',
        marginBottom: '1rem',
        padding: '0.1rem',
        position: 'relative',
    },
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: theme.colors.background.card,
        borderRadius: '0.4rem',
    },
    separator: {
        height: '70%',
        borderRight: '1px dashed rgba(102, 110, 121, 0.5)',
    },
    section1Container: {
        padding: '1.5rem 1rem',
        '@media (min-width: 540px)': {
            width: '250px',
        },
        '@media (max-width: 540px)': {
            width: '0px',
        },
    },
    section2Container: {
        padding: '1.5rem 1.8rem',
    },
    section3Container: {
        display: 'flex',
        flex: 0.5,
        position: 'relative',
        padding: '30px 0px 10px 0px',
    },
    section4Container: {
        padding: '1.5rem 2rem',
        flex: 1,
        alignItems: 'flex-end',
    },
    text1: {
        color: 'white',
        fontSize: '22px',
        lineHeight: '26px',
    },
    text2: {
        color: theme.colors.ui.grey,
        fontSize: '14px',
    },
    text3: {
        color: 'white',
        fontSize: '16px',
    },
    text4: {
        color: 'white',
        fontSize: '10px',
    },
    commitsCounter: {
        position: 'absolute',
        top: 0,
        height: '20px',
        width: '25px',
        borderBottomRightRadius: '2rem',
        borderBottomLeftRadius: '2rem',
        backgroundColor: '#1C9DE8',
    },
});

export default TradeCard;
