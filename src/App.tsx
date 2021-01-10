import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// THEME IMPORT
import * as theme from './Utils/theme';

// PAGE IMPORT
import Home from './Pages/Home/Home';

// DOTENV CONFIG
require('dotenv').config();

function App() {
    useEffect(() => {
        document.body.style.backgroundColor = theme.colors.background.dark;
    }, []);

    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
