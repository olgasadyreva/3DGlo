import './bootstrap.min.css';
import './style.min.css';
import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';

// import Logo from './assets/logo.png';

timer('31 december 2026');
menu();
modal();

if (module.hot) {
    module.hot.accept();
}
