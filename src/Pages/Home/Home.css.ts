import {StyleSheet} from 'aphrodite';

// THEME IMPORT
import * as theme from '../../Utils/theme';

const styles = StyleSheet.create({
    container: {
        height: '100vh',
    },
    rightContainer: {
        flex: 1,
        padding: '0 2.5rem 5rem 2.5rem',
        marginRight: '-20px',
        // overflowX: 'hidden',
        overflowY: 'scroll',
    },
    toolbarContainer: {
        width: '100%',
        padding: '2rem 0rem',
        justifyContent: 'space-between',
    },
    label1: {
        color: theme.colors.ui.grey,
        fontSize: '14px',
    },
    tradeCardListContainer: {},
});

export default styles;
