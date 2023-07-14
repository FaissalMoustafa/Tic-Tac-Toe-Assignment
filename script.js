document.addEventListener('DOMContentLoaded', () => {   //to wait for HTML document to be loaded and parsed
  const sqr_slot = document.querySelectorAll('.sqr-slot');
  const player_1_input = document.getElementById('1st_player');
  const player_2_input = document.getElementById('2nd_player');
  const start_button = document.getElementById('start');
  const player_1_display = document.getElementById('player-1-display');
  const player_2_display = document.getElementById('player-2-display');
  let current_player = 'X';
  let player_1_score = 0;
  let player_2_score = 0;

  start_button.addEventListener('click', startResetGame);
  
  function startResetGame() {
    // Gets players names from input fields
    const player_1_name = player_1_input.value|| 'Player 1';
    const player_2_name = player_2_input.value|| 'Player 2';

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

  sqr_slot.forEach(sqr_slot => {
      sqr_slot.addEventListener('click', clickInstance);
  });

  function clickInstance(e) {
    const clicked_slot = e.target;
        // Checks if the cell is empty before placing a mark
      if (clicked_slot.textContent === '') {
          clicked_slot.textContent = current_player;
    
        // Toggles between X and O for the next turn
        if (current_player === 'X') {
          current_player = 'O';
        } else {
          current_player = 'X';
        }
      }
    }
  });