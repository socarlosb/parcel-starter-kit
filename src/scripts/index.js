import './../styles/index.scss';
import footer from './components/footer';
import header from './components/header';

const app = document.querySelector('#app');

app.innerHTML = header.header + footer.footer;
