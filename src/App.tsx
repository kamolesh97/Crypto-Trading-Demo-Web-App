import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// THEME IMPORT
import * as theme from './Utils/theme';

// PAGE IMPORT
import Home from './Pages/Home';

// DOTENV CONFIG
require('dotenv').config();

function App() {
    useEffect(() => {
        document.body.style.backgroundColor = theme.colors.background.dark;
        document.body.style.overflow = 'hidden';
    }, []);

    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
