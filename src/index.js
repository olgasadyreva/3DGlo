import './style.css';
import './modules/one';
import './modules/two';

// import Logo from './assets/logo.png';

console.log('Webpack работает!');

if (module.hot) {
    module.hot.accept();
}
