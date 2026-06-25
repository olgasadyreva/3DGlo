import './bootstrap.min.css';
import './style.min.css';
import timer from './modules/timer';
// import './modules/two';

// import Logo from './assets/logo.png';

timer('31 december 2026');
// two();

if (module.hot) {
    module.hot.accept();
}
