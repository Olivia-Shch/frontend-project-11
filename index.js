import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

document.getElementById('rss-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const rssUrl = document.getElementById('rss-url').value;
  alert(`Добавлен RSS-поток: ${rssUrl}`);
});