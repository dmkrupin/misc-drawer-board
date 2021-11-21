const board = document.querySelector('.container');
const SQUARES_NUMBER = 2052;
const colors = ['#00CC99', '#66CC00', '#CCFF33', '#00CCFF', '#3300CC', '#CC00FF', '#FF0066', '#FF6600', '#FFFF66'];

const generateColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
};

const setColor = (element) => {
    const color = generateColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}`;
};
const removeColor = (element) => {
    element.style.backgroundColor = 'lightgrey';
    element.style.boxShadow = `0 0 2px #000`;
};

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    board.appendChild(square);

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
}