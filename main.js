var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 500;

class Score {
  constructor() {
    this.x = canvas.width - 150;
    this.y = 50;
    this.width = 50;
    this.height = 50;
    this.score = 0;
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.font = "20px 'DotGothic16', sans-serif";
    const score = Math.floor(timer / 30);
    ctx.fillText(`score: ${score}`, this.x, this.y);
  }
}
/**************************************   CHARACTER   ********************************************/
var dinoImg = new Image();
dinoImg.src = "./images/dino.png";

var dino = {
  x: 20,
  y: 295,
  width: 45,
  height: 55,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);

    // 이미지 크기를 사각형의 크기에 맞게 조정
    var imageWidth = this.width + 4;
    var imageHeight = this.height + 4;

    // 이미지의 가로 크기가 사각형의 가로 크기보다 클 경우
    if (dinoImg.width > this.width) {
      imageWidth = this.width + 4;
      imageHeight = (dinoImg.height * this.width) / dinoImg.width + 4;
    }

    // 이미지의 세로 크기가 사각형의 세로 크기보다 클 경우
    if (dinoImg.height > this.height) {
      imageHeight = this.height + 4;
      imageWidth = (dinoImg.width * this.height) / dinoImg.height + 4;
    }

    // 이미지를 사각형 내에 가운데 위치시키기 위해 좌표 계산
    var imageX = this.x + (this.width - imageWidth) / 2;
    var imageY = this.y + (this.height - imageHeight) / 2;

    ctx.drawImage(dinoImg, imageX, imageY, imageWidth, imageHeight);
  },
};

//Ground

var groundImg = new Image();
groundImg.src = "./images/ground.png";

var ground = {
  x: 10,
  y: 335,
  width: 870,
  height: 32,
  draw() {
    ctx.fillStyle = "green";
    //ctx.fillRect(this.x, this.y, this.width, this.height);

    // 이미지 크기를 사각형의 크기에 맞게 조정
    var imageWidth = this.width + 4;
    var imageHeight = this.height + 4;

    // 이미지의 가로 크기가 사각형의 가로 크기보다 클 경우
    if (groundImg.width > this.width) {
      imageWidth = this.width + 4;
      imageHeight = (groundImg.height * this.width) / groundImg.width + 4;
    }

    // 이미지의 세로 크기가 사각형의 세로 크기보다 클 경우
    if (groundImg.height > this.height) {
      imageHeight = this.height + 4;
      imageWidth = (groundImg.width * this.height) / groundImg.height + 4;
    }

    // 이미지를 사각형 내에 가운데 위치시키기 위해 좌표 계산
    var imageX = this.x + (this.width - imageWidth) / 2;
    var imageY = this.y + (this.height - imageHeight) / 2;

    ctx.drawImage(groundImg, imageX, imageY, imageWidth, imageHeight);
  },
};

//명수
var sooImg = new Image();
sooImg.src = "./images/gun_dot.png";

class Soo {
  constructor() {
    this.x = canvas.width;
    this.y = 100;
    this.width = 300;
    this.height = 300;
  }
  draw() {
    ctx.fillStyle = "red";
    //ctx.fillRect(this.x, this.y, this.width, this.height);

    // 이미지 크기를 사각형의 크기에 맞게 조정
    var imageWidth = this.width + 4;
    var imageHeight = this.height + 4;

    // 이미지의 가로 크기가 사각형의 가로 크기보다 클 경우
    if (sooImg.width > this.width) {
      imageWidth = this.width + 4;
      imageHeight = (sooImg.height * this.width) / sooImg.width + 4;
    }

    // 이미지의 세로 크기가 사각형의 세로 크기보다 클 경우
    if (sooImg.height > this.height) {
      imageHeight = this.height + 4;
      imageWidth = (sooImg.width * this.height) / sooImg.height + 4;
    }

    // 이미지를 사각형 내에 가운데 위치시키기 위해 좌표 계산
    var imageX = this.x + (this.width - imageWidth) / 2;
    var imageY = this.y + (this.height - imageHeight) / 2;

    ctx.drawImage(sooImg, imageX, imageY, imageWidth, imageHeight);
  }
}

//Cactus
var cactusImg = new Image();
cactusImg.src = "./images/hat_dot.png";

class Cactus {
  constructor() {
    this.x = canvas.width;
    this.y = 300;
    this.width = 30;
    this.height = 48;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);

    // 이미지 크기를 사각형의 크기에 맞게 조정
    var imageWidth = this.width + 4;
    var imageHeight = this.height + 4;

    // 이미지의 가로 크기가 사각형의 가로 크기보다 클 경우
    if (cactusImg.width > this.width) {
      imageWidth = this.width + 4;
      imageHeight = (cactusImg.height * this.width) / cactusImg.width + 4;
    }

    // 이미지의 세로 크기가 사각형의 세로 크기보다 클 경우
    if (cactusImg.height > this.height) {
      imageHeight = this.height + 4;
      imageWidth = (cactusImg.width * this.height) / cactusImg.height + 4;
    }

    // 이미지를 사각형 내에 가운데 위치시키기 위해 좌표 계산
    var imageX = this.x + (this.width - imageWidth) / 2;
    var imageY = this.y + (this.height - imageHeight) / 2;

    ctx.drawImage(cactusImg, imageX, imageY, imageWidth, imageHeight);
  }
}
//Cat

var catImg = new Image();
catImg.src = "./images/face_dot.png";

class Cat {
  constructor() {
    this.x = canvas.width;
    this.y = 316;
    this.width = 55;
    this.height = 35;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);

    // 이미지 크기를 사각형의 크기에 맞게 조정
    var imageWidth = this.width + 10;
    var imageHeight = this.height + 10;

    // 이미지의 가로 크기가 사각형의 가로 크기보다 클 경우
    if (catImg.width > this.width) {
      imageWidth = this.width + 10;
      imageHeight = (catImg.height * this.width) / catImg.width + 10;
    }

    // 이미지의 세로 크기가 사각형의 세로 크기보다 클 경우
    if (catImg.height > this.height) {
      imageHeight = this.height + 10;
      imageWidth = (catImg.width * this.height) / catImg.height + 10;
    }

    // 이미지를 사각형 내에 가운데 위치시키기 위해 좌표 계산
    var imageX = this.x + (this.width - imageWidth) / 2;
    var imageY = this.y + (this.height - imageHeight) / 2;

    ctx.drawImage(catImg, imageX, imageY, imageWidth, imageHeight);
  }
}

/**************************************   Game   ********************************************/
var score = 0;
var timer = 0;
var obstacleArray = [];
var jumpTimer = 0;
var animation;
var obstacleSpeed = 5;
var jumpSpeed = 8;
var downSpeed = 6;
var jumpHeight = 20;
var soo = new Soo();
var sooTimer = 0;
var currentTimer = 60;
var delay = 70;
var randomIndex;
var interval = [8, 8, 30, 70, 70, 75, 75, 150, 150];
var tapTimer = 0;

//매 프레임마다 함수 실행시킴(모니터 fps에 따라 다름)
function doEveryFrame() {
  animation = requestAnimationFrame(doEveryFrame);

  //프레임이 진행될때마다 타이머 ++
  timer++;

  //캔버스 지우기
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //랜덤으로 장애물 생성
  // normal-mode
  if (Math.floor(timer / 1500) % 2 === 0 || timer < 1500) {
    if (timer == 30) {
      sooStart();
    }
    // normal-mode
    //0~1499  3000~4499
    if (timer % 1500 == 0) {
      currentTimer = timer;
      tapTimer = timer;
      dino.x = 20;
      dino.y = 295;
      moveOk = false;
      bgm_normal.play();
      bgm_hard.pause();
      sooStart();
    }
    if (timer - tapTimer == 1400) {
      sooEnd();
    }

    if (timer === currentTimer + delay) {
      randomIndex = Math.floor(Math.random() * interval.length);
      delay = interval[randomIndex];
      currentTimer = timer;
      if (Math.random() < 0.5) {
        var cat = new Cat();
        obstacleArray.push(cat);
      } else {
        var cactus = new Cactus();
        obstacleArray.push(cactus);
      }
    }
  } else {
    //hard-mode
    //1500~2999 4500~5999
    if (timer % 1500 == 0) {
      moveOk = true;
      bgm_normal.pause();
      bgm_hard.play();
    }
  }

  obstacleArray.forEach((a, i, o) => {
    //x좌표가 0미만이면 어레이에서 삭제
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x -= obstacleSpeed;
    colDetection(dino, a);
    a.draw();
  });

  // 좌우 키 입력에 따른 dino.x 위치 업데이트
  if (leftKeyPressed && dino.x > 10) {
    dino.x -= moveSpeed;
  } else if (rightKeyPressed && dino.x < canvas.width - dino.width - 10) {
    dino.x += moveSpeed;
  }

  if (doJump) {
    dino.y -= jumpSpeed;
    jumpTimer++;
  }
  if (!doJump) {
    if (dino.y < 295) {
      dino.y += downSpeed;
      if (dino.y >= 295) {
        jumpCount = 0;
        dino.y = 295;
      }
    }
  }
  if (jumpTimer > jumpHeight) {
    doJump = false;
    jumpTimer = 0;
  }
  if (doSoo) {
    soo.x -= 2.5;
    sooTimer++;
  }

  if (doSoo && sooTimer > 100) {
    doSoo = false;
    sooTimer = 0;
  }
  if (endSoo) {
    soo.x += 2.5;
    sooTimer++;
  }

  if (endSoo && sooTimer > 100) {
    endSoo = false;
    sooTimer = 0;
  }

  // 화면 업데이트
  var scoreObj = new Score();
  scoreObj.draw();
  ground.draw();
  dino.draw();
  soo.draw();
}

doEveryFrame();

//충돌감지
function colDetection(dino, obstacle) {
  if (
    dino.x < obstacle.x + obstacle.width &&
    dino.x + dino.width > obstacle.x &&
    dino.y < obstacle.y + obstacle.height &&
    dino.y + dino.height > obstacle.y
  ) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
    if (!bgm_hard.paused) {
      bgm_hard.pause(); // 재생 중인 경우 멈춤
    }

    if (!bgm_normal.paused) {
      bgm_normal.pause(); // 재생 중인 경우 멈춤
    }
    gameover.play();
  }
}
//명수 시작
var doSoo = false;
var endSoo = false;
function sooStart() {
  doSoo = true;
}
function sooEnd() {
  endSoo = true;
}
/**************************************   MOVE   ********************************************/
//점프 이벤트
var doJump = false;
var jumpCount = 0;
document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && jumpCount < 2) {
    doJump = true;
    if (jumpCount == 0) jumpAudio1.play();
    if (jumpCount == 1) jumpAudio2.play();
    jumpCount++;
  }
});

// 좌우 키 관련 변수
var leftKeyPressed = false;
var rightKeyPressed = false;
var moveSpeed = 4;
var moveOk = false;

// 좌우키 이벤트 리스너 등록
document.addEventListener("keydown", function (event) {
  if (moveOk && event.key === "ArrowLeft") {
    leftKeyPressed = true;
  } else if (moveOk && event.key === "ArrowRight") {
    rightKeyPressed = true;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "ArrowLeft") {
    leftKeyPressed = false;
  } else if (event.key === "ArrowRight") {
    rightKeyPressed = false;
  }
});

/**************************************   MUSIC   ********************************************/
const bgm_normal = document.getElementById("bgm_normal");
const bgm_hard = document.getElementById("bgm_hard");
const gameover = document.getElementById("gameover");
var bgm = document.getElementById("bgm");
const jumpAudio1 = new Audio("./bgm/jump.mp3");
const jumpAudio2 = new Audio("./bgm/jump.mp3");

//자동 노래시작
window.onload = function () {
  bgm_normal.play();
};

//노래 반복 재생
bgm_normal.addEventListener("ended", function () {
  bgm_normal.currentTime = 0; // 처음부터 재생
  bgm_normal.play(); // 자동 재생
});

bgm_hard.addEventListener("ended", function () {
  bgm_hard.currentTime = 0; // 처음부터 재생
  bgm_hard.play(); // 자동 재생
});

/**************************************   CONTROLS   ********************************************/

//function ()
