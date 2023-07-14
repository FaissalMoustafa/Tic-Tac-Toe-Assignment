current_player = 'X';
const sqrSlot = Array.from(document.getElementsByClassName('sqr-slot'));

sqrSlot.forEach(sqrSlot => {
    sqrSlot.addEventListener('click', clickInstance);
});

function clickInstance(e) {
  const clickedSlot = e.target;
      // Check if the cell is empty before placing a mark
    if (clickedSlot.textContent === '') {
        clickedSlot.textContent = current_player;
  
      // Toggle between X and O for the next turn
      if (current_player === 'X') {
        current_player = 'O';
      } else {
        current_player = 'X';
      }
    }
  }