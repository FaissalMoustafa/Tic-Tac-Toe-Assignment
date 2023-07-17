document.addEventListener('DOMContentLoaded', () => {   //to wait for HTML document to be loaded and parsed
  const sqr_slot = document.querySelectorAll('.sqr-slot');
  const slotsArray=Array.from(sqr_slot);
  const player_1_input = document.getElementById('1st_player');
  const player_2_input = document.getElementById('2nd_player');
  const start_button = document.getElementById('start');
  const player_1_display = document.getElementById('player-1-display');
  const player_2_display = document.getElementById('player-2-display');
  const player_1_name = 'Player 1';
  const player_2_name = 'Player 2';
  let current_player = 'X';
  let player_1_score = 0;
  let player_2_score = 0;

  start_button.addEventListener('click', resetGame);
  
  function newRound() {
    // Updates players names on display
    player_1_display.textContent = `${player_1_name}: ${player_1_score}`;
    player_2_display.textContent = `${player_2_name}: ${player_2_score}`;

    // Resets the game board
    sqr_slot.forEach(sqr_slot => {
      sqr_slot.textContent = '';
    });

    // Resets the current player
    current_player = 'X';
  }
  
  function resetGame() {
    // Gets players names from input fields
    const player_1_name = player_1_input.value|| 'Player 1';
    const player_2_name = player_2_input.value|| 'Player 2';
    
    player_1_score = 0;
    player_2_score = 0;
    // Updates players names on display
    player_1_display.textContent = `${player_1_name}: ${player_1_score}`;
    player_2_display.textContent = `${player_2_name}: ${player_2_score}`;

    // Resets the game board
    sqr_slot.forEach(sqr_slot => {
      sqr_slot.textContent = '';
    });

    current_player = 'X';
  };

  sqr_slot.forEach(sqr_slot => {
      sqr_slot.addEventListener('click', clickInstance);
  });
  
  function checkFull(){
    let full=true;
    for (let i = 0; i < slotsArray.length; i++) {
      const element = slotsArray[i];
      if (element.textContent===''){
        full=false;
      }
    }
    return full
  }
  function clickInstance(e) {
    const clicked_slot = e.target;
        // Checks if the cell is empty before placing a mark
      if (clicked_slot.textContent === '') {
          clicked_slot.textContent = current_player;
        
          if (checkWin(current_player)) {
            // Increment the score for the winning player
            if (current_player === 'X') {
              player_1_score++;
              // player_1_display.textContent = `${player_1_name}: ${player_1_score}`;
              return newRound()
            } else {
              player_2_score++;
              // player_2_display.textContent = `${player_2_name}: ${player_2_score}`;
              return newRound()
            }
          }
        // Toggles between X and O for the next turn
        if (current_player === 'X') {
          current_player = 'O';
        } else {
          current_player = 'X';
        }
      }
      if (checkFull()){
        newRound()
      }
    };
  function checkWin(player) {
  for (let i = 0; i < 3; i++) {
    if (
      sqr_slot[i * 3].textContent === player &&
      sqr_slot[i * 3 + 1].textContent === player &&
      sqr_slot[i * 3 + 2].textContent === player
    ) {
      return true; // Player wins horizontally
    }
  }

  for (let j = 0; j < 3; j++) {
    if (
      sqr_slot[j].textContent === player &&
      sqr_slot[j + 3].textContent === player &&
      sqr_slot[j + 6].textContent === player
    ) {
      return true; // Player wins vertically
    }
  }

  // Check for diagonal lines
  if (
    ( sqr_slot[0].textContent === player &&
      sqr_slot[4].textContent === player &&
      sqr_slot[8].textContent === player) ||
    ( sqr_slot[2].textContent === player &&
      sqr_slot[4].textContent === player &&
      sqr_slot[6].textContent === player)
  ) {
    return true; // Player wins diagonally
  }

  return false; // No winning condition
} 
  });