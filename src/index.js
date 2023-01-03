import React from 'react';
import ReactDOM from 'react-dom';
// для изменения темы импортирую
import { ThemeProvider, createTheme } from '@mui/material';

import './index.css';
import App from './components/App';

// создаю свои значения для темы
const theme = createTheme({
    palette: {
        primary: {
            main: '#8292a1'
        }, 
        secondary: {
            main: '#DCDCDC'
        }
    }
})

// оберну приложение в ThemeProvider
ReactDOM.render(
    <React.StrictMode>      
        <ThemeProvider theme={theme}>  
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
