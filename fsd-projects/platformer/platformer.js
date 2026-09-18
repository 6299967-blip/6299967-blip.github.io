$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(50, 300, 100, 10, "red");
    createPlatform(180, 350, 70, 10, "black");
createPlatform(300, 280, 70, 10, "red");
createPlatform(420, 380, 60, 10, "black");
createPlatform(520, 300, 70, 10, "red");
createPlatform(630, 220, 60, 10, "black");
createPlatform(730, 330, 60, 10, "red");
createPlatform(830, 250, 55, 10, "black");
createPlatform(930, 380, 60, 10, "red");
createPlatform(1030, 300, 55, 10, "black");
createPlatform(1120, 400, 70, 10, "red");
createPlatform(1220, 300, 60, 10, "black");







    // TODO 3 - Create Collectables
createCollectable("diamond", 200, 310, 0.5, 0.7);
createCollectable("diamond", 320, 240, 0.5, 0.7);
createCollectable("diamond", 440, 340, 0.5, 0.7);
createCollectable("diamond", 540, 260, 0.5, 0.7);
createCollectable("diamond", 650, 180, 0.5, 0.7);
createCollectable("diamond", 750, 290, 0.5, 0.7);
createCollectable("diamond", 850, 210, 0.5, 0.7);
createCollectable("diamond", 950, 340, 0.5, 0.7);
createCollectable("diamond", 1050, 260, 0.5, 0.7);
createCollectable("diamond", 1140, 360, 0.5, 0.7);
createCollectable("diamond", 1240, 260, 0.5, 0.7);



    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 800);
createCannon("top", 400, 1000);
createCannon("top", 650, 950);
createCannon("top", 800, 850);
createCannon("top", 1050, 780);
createCannon("right", 500, 1);
createCannon("right", 400, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
