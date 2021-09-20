let cells = document.querySelectorAll(".row > div");
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}
let counter = 0;
let cellcount=0;
let possiblemoves=8;
function cellClicked(event) {
    if (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X'
        || cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X'
        || cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X'
        || cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X'
        || cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X'
        || cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X'
        || cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X'
        || cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X')
        return alert('X Has Won the Game');
    if (cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O'
        || cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O'
        || cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O'
        || cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O'
        || cells[2].textContent === 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O'
        || cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O'
        || cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O'
        || cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O')
        return alert('O Has Won the Game');
     if (cellcount > possiblemoves)
       return alert ('Tie Game');
       console.log(cellcount);
        cellcount++;
    if (event.target.textContent === 'X' || event.target.textContent === 'O') {
        return;
    }
    if (counter % 2 === 0) {
        event.target.textContent = 'X';
    } else{
        event.target.textContent = 'O';
    }
    console.log(counter);
    counter++;

}
