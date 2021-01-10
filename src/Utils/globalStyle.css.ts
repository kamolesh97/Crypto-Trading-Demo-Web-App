import {StyleSheet} from 'aphrodite';

// THEME IMPORT
import * as theme from './theme';

const styles = StyleSheet.create({
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    columnContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    alignItemsCenter: {
        alignItems: 'center',
    },
    justifyContentSpaceBetween: {
        justifyContent: 'space-between',
    },
    totalCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hover: {
        ':hover': {
            cursor: 'pointer',
        },
    },
});

export default styles;