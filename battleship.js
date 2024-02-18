<audio id="hit-sound" src="assets/hit.wav" preload="auto"></audio>
<audio id="miss-sound" src="assets/miss.wav" preload="auto"></audio>
<audio id="start-sound" src="assets/start.wav" preload="auto"></audio>
<audio id="start-sound" src="assets/restart.wav" preload="auto"></audio>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Battleship Game</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1 id="game-title">Welcome to My Battleship Game</h1>
    
    <div id="game-info">
      <h2>Turn: <span id="turn-display"></span></h2>
      <h2>Info: <span id="info"></span></h2>
    </div>
    <div id="gamesboard-container"></div>
    <div class="ships-container">
      <div id="0" class="display-destroyer destroyer" draggable="true"></div>
      <div id="1" class="display-submarine submarine" draggable="true"></div>
      <div id="2" class="display-cruiser cruiser" draggable="true"></div>
      <div id="3" class="display-battleship battleship" draggable="true"></div>
      <div id="4" class="display-carrier carrier" draggable="true"></div>
    </div>
    <button id="rotate-button">Rotate Ships</button>
    <button id="start-button">   Start Game</button>
    <button id="restart-game-button">Restart Game</button>
    <script src="battleship.js"></script>
  </body>
</html>

