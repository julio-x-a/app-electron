const w = window;
const d = document;

w.addEventListener('DOMContentLoaded', () => {
  const $btn = d.getElementById('btn');
  const $p = d.querySelector('p');
  $btn.onclick = () => {
    $p.textContent = 'Something';
  };
});
