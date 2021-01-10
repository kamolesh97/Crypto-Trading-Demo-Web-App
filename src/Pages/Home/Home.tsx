import React, {useState, useEffect} from 'react';
import {css} from 'aphrodite';
import io from 'socket.io-client';

// THEME IMPORT
import * as theme from '../../Utils/theme';

// GLOBAL STYLE IMPORT
import globalStyles from '../../Utils/globalStyle.css';

// STYLE IMPORT
import styles from './Home.css';

// HELPER IMPORT
import * as helper from '../../Utils/helper';

// COMPONENTS IMPORT
import Header from '../../Components/Header';
import SidebarLeft from '../../Components/SidebarLeft';
import TradeCard from '../../Components/TradeCard';
import CustomButton from '../../Components/CustomButton';
import CustomToggle from '../../Components/CustomToggle';
import CustomPicker from '../../Components/CustomPicker';

// TS TYPES IMPORT
import * as types from '../../Constants/types';

// METHODS

// PROP TYPE DEF
interface HomeProps {}
interface ToolbarProps {}
interface TradeCardListProps {
    trades: types.TradeCard[] | null;
    assetPrices: types.assetPrices | null;
}

// COMPONENTS
const Toolbar: React.FC<ToolbarProps> = (): JSX.Element => {
    return (
        <div className={css(globalStyles.rowContainer, globalStyles.alignItemsCenter, styles.toolbarContainer)}>
            <div className={css(globalStyles.rowContainer, globalStyles.alignItemsCenter)}>
                <span className={css(theme.fonts.robotoMed, styles.label1)}>Select assets, types and period:</span>
                <CustomButton type={'outlined'} label={'FILTER'} onClick={() => {}} className={{container: 'ml-2'}} />
            </div>
            <div className={css(globalStyles.rowContainer, globalStyles.alignItemsCenter)}>
                <span className={css(theme.fonts.robotoMed, styles.label1)}>Units:</span>
                <CustomToggle data={[{label: '%'}, {label: '$'}]} selectedIndex={1} className={'ml-2 mr-5'} />
                <span className={css(theme.fonts.robotoMed, styles.label1)}>Sort by</span>
                <CustomPicker
                    className={'ml-2'}
                    options={[
                        {name: 'Trending', value: 'trending'},
                        {name: 'Highest', value: 'highest'},
                        {name: 'Lowest', value: 'lowest'},
                    ]}
                />
            </div>
        </div>
    );
};

const TradeCardList: React.FC<TradeCardListProps> = ({trades, assetPrices}): JSX.Element => {
    return (
        <div className={css(styles.tradeCardListContainer)}>
            {trades &&
                trades.map((item: types.TradeCard, index: number) => {
                    return <TradeCard key={index.toString()} data={item} assetPrice={assetPrices ? assetPrices[item.ticker_name] : null} />;
                })}
        </div>
    );
};

const Home: React.FC<HomeProps> = (): JSX.Element => {
    // STATE
    const [data, setData] = useState<types.TradeCard[] | null>(null);
    const [assetPrices, setAssetPrices] = useState<types.assetPrices | null>(null);

    // METHODS
    const listenUserPlanChanges = (): SocketIOClient.Socket | null => {
        if (helper.getApiUrl()) {
            const socket = io(helper.getApiUrl().slice(0, -1) + '?__sails_io_sdk_version=0.11.0', {transports: ['websocket']});
            socket.on('connect', () => {
                socket.emit('post', {
                    method: 'post',
                    headers: {},
                    data: {},
                    url: `${helper.getApiUrl()}ticker/joinSocket`,
                });
                socket.on('priceUpdate', (updatedAssetPrice: types.assetPrices) => {
                    setAssetPrices(updatedAssetPrice);
                });
            });
            // socket.on('error', (err: object) => console.log('error', err));
            // socket.on('connect_error', (err: object) => console.log('connect_error', err));
            return socket;
        }
        return null;
    };

    // HOOKS
    useEffect(() => {
        const socket = listenUserPlanChanges();
        setData([
            {
                name: 'ETH 48 hours',
                type: 'Crypto',
                leverage: 2.2,
                outcome_time: new Date(),
                total_commitment_funds: 34346,
                total_commits: 0,
                ticker_name: 'eth',
            },
            {
                name: 'ETH 48 hours',
                type: 'Crypto',
                leverage: 2.2,
                outcome_time: new Date(),
                total_commitment_funds: 340346,
                total_commits: 2,
                ticker_name: 'eth',
            },
            {
                name: 'BTC 48 hours',
                type: 'Crypto',
                leverage: 2.2,
                outcome_time: new Date(),
                total_commitment_funds: 34346,
                total_commits: 0,
                ticker_name: 'btc',
            },
            {
                name: 'ETH 48 hours',
                type: 'Crypto',
                leverage: 2.2,
                outcome_time: new Date(),
                total_commitment_funds: 340346,
                total_commits: 2,
                ticker_name: 'eth',
            },
            {
                name: 'BTC 48 hours',
                type: 'Crypto',
                leverage: 2.2,
                outcome_time: new Date(),
                total_commitment_funds: 34346,
                total_commits: 0,
                ticker_name: 'btc',
            },
            {
                name: 'ETH 48 hours',
                type: 'Crypto',
                leverage: 2.2,
                outcome_time: new Date(),
                total_commitment_funds: 340346,
                total_commits: 2,
                ticker_name: 'eth',
            },
            {
                name: 'ETH 48 hours',
                type: 'Crypto',
                leverage: 2.2,
                outcome_time: new Date(),
                total_commitment_funds: 34346,
                total_commits: 0,
                ticker_name: 'eth',
            },
            {
                name: 'ETH 48 hours',
                type: 'Crypto',
                leverage: 2.2,
                outcome_time: new Date(),
                total_commitment_funds: 340346,
                total_commits: 2,
                ticker_name: 'eth',
            },
        ]);

        return () => {
            socket?.disconnect();
        };
    }, []);

    return (
        <React.Fragment>
            <Header />
            <div className={css(globalStyles.rowContainer, styles.container)}>
                <SidebarLeft />
                <div className={css(globalStyles.columnContainer, styles.rightContainer)}>
                    <Toolbar />
                    <TradeCardList trades={data} assetPrices={assetPrices} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;
