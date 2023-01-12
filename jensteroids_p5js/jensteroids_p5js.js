class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  }
  update() {
    this.z -= starSpeed;
    if (this.z<1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }
  show() {
    fill(255);
    noStroke();
    let sx = map(this.x/this.z, 0, 1, 0, width);
    let sy = map(this.y/this.z, 0, 1, 0, height);
    let r = map(this.z, 0, width, 16, 0);
    //ellipse(sx, sy, r, r);
    let px = map(this.x/this.pz, 0, 1, 0, width);
    let py = map(this.y/this.pz, 0, 1, 0, height);
    this.pz = this.z;
    stroke(255);
    line(px, py, sx, sy);
  }
}

const GameModes = {
  MENU:
0,
  PLAY:
1,
  GAME_OVER:
2,
  PAUSE:
3
  };

function preload() {
  // load images
  jens = loadImage("data/images/smiley.png", "png");
  space = loadImage("data/images/space.jpg", "jpg");
  asteroid = loadImage("data/images/asteroid2_small.png", "png");
  explosionpng = loadImage("data/images/explosion.png", "png");
  rocketIMG = loadImage("data/images/rocket_small.png", "png");
  UFOIMG = loadImage("data/images/UFO_small.png", "png");
  menu_background = loadImage("data/images/menu_background.jpg", "jpg");
  stats_bar = loadImage("data/images/stats_bar.jpg", "jpg");

  // load sounds
  explosion = loadSound("data/sounds/explosion.mp3");
  gameover = loadSound("data/sounds/gameover.mp3");
  restart = loadSound("data/sounds/restart.mp3");
  backgroundmusic = loadSound("data/sounds/backgroundmusic.mp3");
}

function setup() {
  createCanvas(1000, 600);
  setAttributes('perPixelLighting', false);

  // width and height of the walkable area
  viewWidth = width - 200;
  viewHeight = height;

  // player variables
  jens_x = 400;
  jens_y = 300;
  jens_r = 30;
  jens_speed = 8;

  // GUI variables
  startButton_x = 400;
  startButton_y = 300;
  score_x = 620;
  randomizer = 0;

  // run/pause
  hasRun = false;
  hasRunPause = true;

  // drawing surface for collision checking
  pC = createGraphics(width, height);
  pC.pixelDensity(200 / width);

  // game variables
  state = GameModes.MENU;
  liveTime = 0;
  hp = 100; //health points
  count = 4; //timer for the asteroids
  score = 0;
  scoreByTime = 0;
  level = 1;

  // stars for background
  stars = Array(700).fill(new Star());
  starSpeed = 20;

  // game object lists
  asteroids = [];
  rockets = [];
  UFOs = [];
  explosions = [];

  // create stars
  for (let i = 0; i<stars.length; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  level = liveTime/20 + 1;
  if (state != GameModes.GAME_OVER) {
    if (scoreByTime==30) {
      scoreByTime = 0;
      score++;
      liveTime++;
    }
    scoreByTime++;
  }

  // start/restart with SPACE
  if (keyIsDown(32)) {
    if (state == GameModes.MENU || state == GameModes.GAME_OVER) {
      state = GameModes.PLAY;
      restartGame();
    }
  }

  if ( state == GameModes.MENU) {
    menu();
  }


  if (state == GameModes.GAME_OVER) {
    gameOver();
  }

  if (state == GameModes.PAUSE) {
    fill(255);
    textSize(80);
    textAlign(CENTER, CENTER);
    text("GAME PAUSED", width/2 - 100, height/2 - 20);
  }

  if (state == GameModes.PLAY) {
    //score++;
    cursor(ARROW);
    hasRun = false;

    // background
    //image(space, 400, 300);
    drawStars();

    // test graphics buffer
    //image(pC, width/2, height/2, width, height);

    gameover.stop();
    if (!(backgroundmusic.isPlaying())) {
      backgroundmusic.play();
    }

    // Reduce counter or reset once at 0
    if (count==0) {
      count = 4;
    } else {
      count--;
    }

    moveJens();
    checkEdgesJens();
    drawJens();

    // TODO
    removeAsteroids();
    drawAsteroids();
    moveAsteroids();
    removeCrashedAsteroids();

    drawRockets();
    moveRockets();

    drawUFOs();
    moveUFOs();

    drawExplosions();

    spawnStuff();

    if (hp <= 0) {
      state = GameModes.GAME_OVER;
    }


    //stats_bar
    image(stats_bar, 900, 300);
    //Health points
    fill(255);
    if (hp < 40) fill(255, 0, 0);
    if (hp < 20) fill (random(255), random(255), random(255)) ;

    textSize(30);
    textAlign(CENTER, CENTER);

    text(liveTime, viewWidth+100, 340);
    text(score, viewWidth+100, 220);
    text(ceil(hp), viewWidth+100, 100);
  }
}

function menu() {
  image(menu_background, 0, 0);
  fill(255);

  textAlign(CENTER, CENTER);
  textSize(100);

  text("JENSTEROIDS!", width/2, 150);
  rectMode(CENTER);
  fill(255, 0, 0);
  rect(width/2, startButton_y, 100, 50 );
  fill(255);
  textSize(25);
  text("START", width/2, startButton_y);
  textSize(15);
  text("Ben&Jens Corporation BETA version 2.1", 695, height-20 );

  let onButton = insideBox(mouseX, mouseY, width/2-50, startButton_y-25, width/2+50, startButton_y+25);
  if (mouseIsPressed && onButton) {
    state = GameModes.PLAY;
  }
  if (!onButton) {
    cursor(ARROW);
  }
  if (onButton) {
    cursor(HAND);
    rectMode(CENTER);
    fill(255);
    rect(width/2, startButton_y, 100, 50);
    fill(255, 0, 0);
    textSize(25);
    text("START", width/2, startButton_y);
  }
}

function drawStars() {
  //starSpeed = map(mouseX , 0 , width , 0 , 40);
  background(0);
  push();
  translate(viewWidth/2, height/2, -10);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  pop();
}

//// JENS

function moveJens() {
  let move_horizontal = 0;
  let move_vertical = 0;
  if (keyIsDown(DOWN_ARROW)) {
    move_vertical += 1;
  }
  if (keyIsDown(UP_ARROW)) {
    move_vertical -= 1;
  }
  if (keyIsDown(LEFT_ARROW)) {
    move_horizontal -= 1;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    move_horizontal += 1;
  }
  let move_normalized = createVector(move_horizontal, move_vertical).normalize();
  jens_x += move_normalized.x * jens_speed;
  jens_y += move_normalized.y * jens_speed;
}

function checkEdgesJens() {
  if (jens_x < 40) {
    jens_x = 40;
  }
  if (jens_x > 760) {
    jens_x = 760;
  }
  if (jens_y < 40 ) {
    jens_y = 40;
  }
  if (jens_y > 560) {
    jens_y = 560;
  }
}

function drawJens() {
  drawJensOn(undefined);
}

function drawJensOn(pG) {
  if (pG == undefined) {
    imageMode(CENTER);
    image(jens, jens_x, jens_y, jens_r*2, jens_r*2);
  } else {
    pG.imageMode(CENTER);
    pG.image(jens, jens_x, jens_y, jens_r*2, jens_r*2);
  }
}

//// EXPLOSIONS

class Explosion {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
}

function spawnExplosion(x, y, r) {
  explosion.play();
  explosions.push(new Explosion( x, y, r));
}

function drawExplosions() {
  let i = 0;
  while (i < explosions.length) {
    let expl = explosions[i];
    imageMode(CENTER);
    image(explosionpng, expl.x, expl.y, expl.r*2*2, expl.r*2*2);
    if (expl.r < 0) {
      explosions.splice(i, 1);
      continue;
    }
    expl.r = expl.r*0.9 - 0.2;
    i++;
  }
}

//// ASTEROIDS

class Asteroid {
  constructor(x, y, r, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }
}

function drawAsteroids() {
  asteroids.forEach(a => {
    imageMode(CENTER);
    image(asteroid, a.x, a.y, a.r*2, a.r*2);
  }
  );
}

function moveAsteroids() {
  asteroids.forEach(a => {
    a.x += a.xSpeed;
    a.y += a.ySpeed;
  }
  );
}

function removeCrashedAsteroids() {
  let i = 0;
  while (i < asteroids.length) {
    let a = asteroids[i];
    if (collisionCircleJens( a)) {
      hp -= pow(asteroids[i].r/7, 2);
      asteroids.splice(i, 1);
      score++;
      spawnExplosion(a.x, a.y, a.r);
      continue;
    }
    i++;
  }
}

function removeAsteroids() {
  let i = 0;
  while (i < asteroids.length) {
    let a = asteroids[i];
    if (a.x < -150  || a.x > viewWidth+150 || a.y < -150 || a.y > viewHeight+150) {
      asteroids.splice(i, 1);
      score++;
      continue;
    }
    i++;
  }
}


//// ROCKETS

class Rocket {
  constructor(x, y, xSpeed, ySpeed) {
    this.pos = createVector(x, y);
    this.speed = createVector(xSpeed, ySpeed);
  }
  update() {
    if (this.pos.x < -500 || this.pos.x > viewWidth+500 || this.pos.y < -500 || this.pos.y > viewHeight+500)
    {
      rockets.splice(rockets.indexOf(this), 1);
    }
    this.pos.add(this.speed);
    if (this.collWithPlayer()) {
      hp -= 20;
      spawnExplosion(this.pos.x, this.pos.y, 50);
      rockets.splice(rockets.indexOf(this), 1);
    }
  }
  draw() {
    this.drawOn(undefined);
  }
  drawOn(pG) {
    if (pG == undefined) {
      push();
      translate(this.pos.x, this.pos.y);
      rotate(this.speed.x<0 ? PI : 0);
      imageMode(CENTER);
      image(rocketIMG, 0, 0);
      pop();
    } else {
      pG.push();
      pG.translate(this.pos.x, this.pos.y);
      pG.rotate(this.speed.x<0 ? PI : 0);
      pG.imageMode(CENTER);
      pG.image(rocketIMG, 0, 0);
      pG.pop();
    }
  }
  collWithPlayer() {
    if (dist(this.pos.x, this.pos.y, jens_x, jens_y) > rocketIMG.width/2 + jens_r) {
      return false;
    }
    pC.clear(0);

    pC.tint(0, 255, 0, 200);
    drawJensOn(pC);
    pC.tint(255, 0, 0, 200);
    this.drawOn(pC);

    //pC.rect(100,100,100,100);

    pC.loadPixels();


    for (let i = 0; i<pC.pixels.length; i+=4) {
      let red = pC.pixels[i];
      let green = pC.pixels[i+1];
      if ((red>0)&&(green>0)) {
        return true;
      }
    }
    return false;

    //let xMin = int(this.pos.x-rocketIMG.width/2);
    //let xMax = int(this.pos.x+rocketIMG.width/2);
    //let yMin = int(this.pos.y-rocketIMG.height/2);
    //let yMax = int(this.pos.y+rocketIMG.height/2);

    //for (let y = yMin; y<yMax; y++) {
    //  if (y<0 || y>=viewHeight) {
    //    continue;
    //  }

    //for (let x = xMin; x<xMax; x++) {
    //  if (x<0 || x>=viewWidth) {
    //    continue;
    //  }

    //let red = pC.pixels[(y*width+x) * 4];
    //let green = pC.pixels[(y*width+x) * 4 + 1];
    //if ((red>0)&&(green>0)) {
    //  return true;
    //  }
    //}
    //}

    //return false;
  }
}

function drawRockets() {
  rockets.forEach(r => {
    r.draw();
  }
  );
}

function moveRockets() {
  let i = 0;
  while (i<rockets.length) {
    let prevSize = rockets.length;
    rockets[i].update();
    if (rockets.length==prevSize) {
      i++;
    }
  }
}

//// UFOS

class UFO {
  constructor(x, y, xSpeed, ySpeed) {
    this.revolveCenter = createVector(x, y);
    this.pos = createVector(x, y);
    this.speed = createVector(xSpeed, ySpeed);
    this.startingAngle = random(TWO_PI);
  }
  update() {
    if (this.pos.x < -500 || this.pos.x > viewWidth+500 || this.pos.y < -500 || this.pos.y > viewHeight+500)
    {
      UFOs.splice(UFOs.indexOf(this), 1);
    }
    this.revolveCenter.add(this.speed);
    this.pos = this.revolveCenter.copy();
    this.pos.x += 200*sin(this.startingAngle+frameCount/30);
    if (this.collWithPlayer()) {
      hp -= 20;
      spawnExplosion(this.pos.x, this.pos.y, 50);
      UFOs.splice(UFOs.indexOf(this),1);
    }
  }
  draw() {
    this.drawOn(undefined);
  }
  drawOn(pG) {
    if (pG == undefined) {
      push();
      translate(this.pos.x, this.pos.y);
      imageMode(CENTER);
      image(UFOIMG, 0, 0);
      pop();
    } else {
      pG.push();
      pG.translate(this.pos.x, this.pos.y);
      pG.imageMode(CENTER);
      pG.image(UFOIMG, 0, 0);
      pG.pop();
    }
  }
  collWithPlayer() {
    if (dist(this.pos.x, this.pos.y, jens_x, jens_y) > UFOIMG.width/2 + jens.width/2) {
      return false;
    }

    pC.clear(0);

    pC.tint(0, 255, 0, 200);
    drawJensOn(pC);
    pC.tint(255, 0, 0, 200);
    this.drawOn(pC);

    pC.loadPixels();


    for (let i = 0; i<pC.pixels.length; i+=4) {
      let red = pC.pixels[i];
      let green = pC.pixels[i+1];
      if ((red>0)&&(green>0)) {
        return true;
      }
    }

    return false;
  }
}

function spawnUFO() {
  let pos = posTopOrBottom();
  UFOs.push(new UFO(pos[0], pos[1], 0, pos[1]<0?3:-3));
}

function drawUFOs() {
  UFOs.forEach(u => {
    u.draw();
  }
  );
}

function moveUFOs() {
  let i = 0;
  while (i<UFOs.length) {
    let prevSize = UFOs.length;
    UFOs[i].update();
    if (UFOs.length==prevSize) {
      i++;
    }
  }
}


//// SPAWNING

function spawnAsteroid() {
  let pos = posOutsideRoom();
  randomizer = pow(random(0, 1), 2);
  let speed = createVector(random(0, viewWidth)-pos[0], random(0, viewHeight)-pos[1]).setMag(1+3*randomizer);
  randomizer = pow(random(0, 1), 7);
  let radius = 20 + random(0, level*10)*randomizer;
  asteroids.push(new Asteroid( pos[0], pos[1], radius, speed.x, speed.y));
}

function spawnRocket() {
  let pos = posLeftOrRight();
  rockets.push(new Rocket(pos[0], pos[1], pos[0]<0?10:-10, 0));
}

function spawnStuff() {
  if (level==0) {
    level = 1;
  }

  if (level>=1) {
    if (frameCount % (30) == 0) {
      spawnAsteroid();
    }
  }
  if (level>=2) {
    if ((frameCount % int(150 - 120*pow(0.3, 2/(level-1)))) == 0) {
      spawnRocket();
    }
  }
  if (level>=6) {
    if ((frameCount % int(900 - 800*pow(0.3, 2/(level-5)))) == 0) {
      spawnUFO();
    }
  }
}


//// GAME STATES

function gameOver() {
  //int player = 1;
  //if (player == 1) gameover.play(0);
  backgroundmusic.stop();
  background(0);

  textAlign(CENTER, CENTER);

  fill(255);
  textSize(30);
  text("Press SPACE to restart", width/2, 170);

  textSize(100);
  fill(random(255), random(255), random(255));
  text("GAME OVER", width/2, 250);

  fill(255);
  textSize(40);
  text("YOUR SCORE WAS:", width/2, 360);
  text(score, width/2, 415);

  if (!(gameover.isPlaying())) {
    gameover.play();
  }
}


//// MISC

function restartGame() {
  rockets = [];
  UFOs = [];
  asteroids = [];
  explosions = [];

  hp = 100;
  score = 0;
  liveTime = 0;
  restart.play(0);
  state = GameModes.PLAY;
  jens_x = 400;
  jens_y = 300;
  if (hasRun == false) {
    //backgroundmusic.rewind();
    hasRun = true;
  }
}


//// UTILITY

function insideBox(x, y, xMin, yMin, xMax, yMax) {
  if (x < xMin || x > xMax || y < yMin || y > yMax) {
    return false;
  }
  return true;
}

function posOutsideRoom() {
  let pos = [0, 0];

  if (int(random(0, 2)) == 0) {
    if (int(random(0, 2)) == 0) {
      pos[0] = -100;
    } else {
      pos[0] = width+100;
    }
    pos[1] = random(0, height);
  } else {
    if (int(random(0, 2))==0) {
      pos[1] = -100;
    } else {
      pos[1] = height+100;
    }
    pos[0] = random(0, width);
  }

  return pos;
}

function getDistance(x1, y1, x2, y2 ) {
  return sqrt( (pow( x1-x2, 2)) + (pow( y1-y2, 2)) );
}

function collisionCircleJens(circle) {
  let distance = getDistance(jens_x, jens_y, circle.x, circle.y);
  if (distance < jens_r + circle.r)
  {
    return true;
  } else
  {
    return false;
  }
}

function  posLeftOrRight() {
  let pos = [0, 0];

  pos[1] = random(0, viewHeight);
  if (int(random(2)) == 0) {
    pos[0] = -100;
  } else {
    pos[0] = viewWidth+100;
  }

  return pos;
}

function posTopOrBottom() {
  let pos = [0, 0];

  pos[0] = random(100, viewWidth-100);
  if (int(random(0, 2))==0) {
    pos[1] = -100;
  } else {
    pos[1] = viewHeight+100;
  }

  return pos;
}
