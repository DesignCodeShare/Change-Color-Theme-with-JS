
const headerChngColor = document.getElementById('headerChngColor');
const changeColorBtn = document.getElementById('changeColorBtn');
const hexAColor = document.getElementById('hexAColor');

changeColorBtn.addEventListener('click', () => {
  headerChngColor.style.color = hexAColor.value;
});
