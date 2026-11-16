import './styles/main.scss';

const app = document.querySelector('#app');

if (app) {
  const heading = document.createElement('h1');
  heading.textContent = 'Webpack-проект работает';

  const text = document.createElement('p');
  text.textContent = 'Проект собран с помощью Webpack.';

  app.append(heading, text);
}

console.log('Проект собран через Webpack');