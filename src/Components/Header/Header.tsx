import React, {useState} from 'react';
import {StyleSheet, css} from 'aphrodite';

// THEME IMPORT
import * as theme from '../../Utils/theme';

// GLOBAL STYLE IMPORT
import globalStyles from '../../Utils/globalStyle.css';

// HELPER IMPORT
import * as helper from '../../Utils/helper';

// COMPONENTS IMPORT
import CustomIcon from './../CustomIcon';
import CustomToggle from './../CustomToggle';
import CustomButton from './../CustomButton';

// PROPS TYPE DEF
interface HeaderProps {}

// TYPE DEF
type tradeOption = {
    name: string;
    value: string;
};

// COMPONENTS
const Avatar: React.FC<HeaderProps> = (): JSX.Element => {
    return (
        <div style={{position: 'relative'}}>
            <img
                src={
                    'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=lachlan-dempsey-6VPEOdpFNAs-unsplash.jpg&w=640'
                }
                alt="avatar"
                className={`ml-4 ${css(styles.avatar)}`}
            />
            <div className={css(styles.notiCountContainer, globalStyles.totalCenter)}>
                <span className={css(theme.fonts.robotoMed, styles.notiCountLabel)}>12</span>
            </div>
        </div>
    );
};

const Header: React.FC<HeaderProps> = (): JSX.Element => {
    // STATE
    // eslint-disable-next-line
    const [options, setOptions] = useState<tradeOption[] | null>([
        {
            name: 'Crypto',
            value: 'crypto',
        },
        {
            name: 'Сommodities',
            value: 'commodities',
        },
        {
            name: 'Stock',
            value: 'stock',
        },
        {
            name: 'Index',
            value: 'index',
        },
        {
            name: 'Currency',
            value: 'currency',
        },
    ]);
    const [showAll, setShowAll] = useState<boolean>(false);
    const [selectedOptionIndexes, setSelectedOptionIndexes] = useState<boolean[]>([true, false, true, false, false]);

    // METHODS
    const toggleTradeOptions = (index: number): void => {
        let newSelectedOptionIndexes = [...selectedOptionIndexes];
        newSelectedOptionIndexes[index] = !newSelectedOptionIndexes[index];
        setSelectedOptionIndexes(newSelectedOptionIndexes);
        if (helper.arrAllValChecker(newSelectedOptionIndexes, true)) {
            setShowAll(true);
        } else {
            setShowAll(false);
        }
    };

    const showAllTradeOptions = (): void => {
        setSelectedOptionIndexes(new Array(5).fill(true));
        setShowAll(true);
    };

    return (
        <div className={css(globalStyles.rowContainer, globalStyles.justifyContentSpaceBetween, styles.header)}>
            {/* SECTION 1 */}
            <div className={css(globalStyles.rowContainer, globalStyles.alignItemsCenter)}>
                <CustomIcon type={'logo'} />
                <CustomToggle
                    data={[{label: 'Training Mode'}, {label: 'Live Mode'}]}
                    selectedIndex={0}
                    className={'ml-4'}
                    contentContainterStyle={styles.toggleContainer}
                    selectedContainerStyle={styles.selectedContainerStyle}
                    selectedLabelStyle={styles.selectedLabelStyle}
                    nonSelectedContainerStyle={styles.nonSelectedContainerStyle}
                    nonSelectedLabelStyle={styles.nonSelectedLabelStyle}
                />
            </div>

            {/* SECTION 2 */}
            <div className={css(globalStyles.rowContainer, globalStyles.alignItemsCenter)}>
                <CustomButton
                    type={showAll ? 'solid' : 'outlined'}
                    label={'Show All'}
                    className={{
                        container: 'ml-1 mr-1',
                    }}
                    style={{
                        container: showAll ? styles.solidButton : styles.outlinedButton,
                        label: showAll ? styles.solidButtonLabel : styles.outlinedButtonLabel,
                    }}
                    onClick={() => {
                        showAllTradeOptions();
                    }}
                />
                {options?.map((item: tradeOption, index: number) => {
                    return (
                        <CustomButton
                            key={index.toString()}
                            type={selectedOptionIndexes[index] ? 'solid' : 'outlined'}
                            label={item.name}
                            className={{
                                container: 'ml-1 mr-1',
                            }}
                            style={{
                                container: selectedOptionIndexes[index] ? styles.solidButton : styles.outlinedButton,
                                label: selectedOptionIndexes[index] ? styles.solidButtonLabel : styles.outlinedButtonLabel,
                            }}
                            onClick={() => {
                                toggleTradeOptions(index);
                            }}
                        />
                    );
                })}
            </div>

            {/* SECTION 3 */}
            <div className={css(globalStyles.rowContainer, globalStyles.alignItemsCenter)}>
                <CustomIcon type={'search'} className={`ml-3 mr-3 ${css(globalStyles.hover)}`} />
                <CustomIcon type={'star'} fill={'white'} className={`ml-3 mr-3 ${css(globalStyles.hover)}`} />
                <CustomIcon type={'graduate'} fill={'white'} className={`ml-3 mr-3 ${css(globalStyles.hover)}`} />
                <Avatar />
            </div>
        </div>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: '1rem 1.5rem',
        borderBottom: `3px ${theme.colors.ui.green} solid`,
    },
    toggleContainer: {
        width: '120px',
    },
    selectedContainerStyle: {
        backgroundColor: 'white',
    },
    selectedLabelStyle: {
        color: 'black',
    },
    nonSelectedContainerStyle: {
        borderColor: 'white',
    },
    nonSelectedLabelStyle: {
        color: 'white',
    },
    solidButton: {
        backgroundColor: 'white',
        background: 'white',
    },
    solidButtonLabel: {
        color: 'black',
        fontSize: '12px',
    },
    outlinedButton: {
        borderColor: 'white',
    },
    outlinedButtonLabel: {
        color: 'white',
        fontSize: '12px',
    },
    avatar: {
        height: '35px',
        width: '35px',
        borderRadius: '20px',
        position: 'relative',
    },
    notiCountContainer: {
        position: 'absolute',
        height: '16px',
        width: '16px',
        borderRadius: '10px',
        backgroundColor: theme.colors.ui.blue,
        top: -3,
        right: -3,
    },
    notiCountLabel: {
        color: 'white',
        fontSize: '9px',
    },
});

export default Header;
