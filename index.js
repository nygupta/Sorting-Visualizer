var canvas = document.getElementById('array');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var drawing = canvas.getContext('2d');
canvas.addEventListener('mousedown', onDown, false);
var diff = canvas.width / 4;
var width = 5;
var ArraySize = Math.floor(canvas.width - diff) / (width + 1);
var startX = 16;
var HeightArray = [];

function GenerateArray() {
     HeightArray = [];
     for (var i = 0; i < ArraySize; i++) {
          var h = (Math.random() * (canvas.height - 64)) + 15;
          HeightArray.push(h);
     }
}

function DrawArray() {
     drawing.fillStyle = '#3caea3';
     drawing.fillRect(0, 0, canvas.width, canvas.height);
     var diffX = 0;
     for (var i = 0; i < ArraySize; i++) {
          drawing.fillStyle = '#f6d55c'; 
          drawing.fillRect(startX + diffX, (canvas.height - 16) - HeightArray[i], width, HeightArray[i]);
          diffX += (width + 1);
     }
}

function onDown(event) {
     var cx = event.pageX;
     var cy = event.pageY;
     var x = (ArraySize * 6) + 70;
     if (cx > x && cx < (x + 135)) {
          if (cy > 105 && cy < 135)
               Render();
     }
     if (cx > x && cx < (x + 75)) {
          if (cy > 105 + 75 && cy < 135 + 75)
               QuickSort();
     }
     if (cx > x && cx < (x + 100)) {
          if (cy > 105 + 150 && cy < 135 + 150)
               BubbleSort();
     }
     if (cx > x && cx < (x + 115)) {
          if (cy > 105 + 225 && cy < 135 + 225)
               InsertionSort();
     }
}

function Buttons() {
     var x = (ArraySize * 6) + 75;
     var y = 130;
     drawing.font = "30px Arial";
     drawing.fillStyle = '#173f5f';
     drawing.fillText("Generate", x, y);
     drawing.fillText("Quick", x, y + 75);
     drawing.fillText("Bubble", x, y + 150);
     drawing.fillText("Insertion", x, y + 225);
}

function DrawCanvas() {
     DrawArray();
     Buttons();
}

function Render() {
     GenerateArray();
     DrawCanvas();
}

Render();