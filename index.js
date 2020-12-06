var canvas = document.getElementById('array');
var header = document.getElementById('header');
var footer = document.getElementById('footer');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 64;
var drawing = canvas.getContext('2d');
var head = header.getContext('2d');
var foot = footer.getContext('2d');
header.width = window.innerWidth;
header.height = 32;
footer.width = window.innerWidth;
footer.height = 32;

head.font = "24px Arial";
head.fillStyle = '#fa8072';
head.fillText("Sorting Visualizer", (header.width / 2) - 90, 24);
foot.font = "14px Arial";
foot.fillStyle = '#fa8072';
foot.fillText("Developed by NILAY GUPTA.", (header.width / 2) - 90, footer.height - 10);

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
     var x = (ArraySize * 6) + 55;
     if (cx > x && cx < (x + 135)) {
          if (cy > 105 && cy < 135)
               Render();
     }
     if (cx > x && cx < (x + 75)) {
          if (cy > 105 + 75 && cy < 135 + 75)
               QuickSort();
     }
     if (cx > x && cx < (x + 105)) {
          if (cy > 105 + 150 && cy < 135 + 150)
               BubbleSort();
     }
     if (cx > x && cx < (x + 120)) {
          if (cy > 105 + 225 && cy < 135 + 225)
               InsertionSort();
     }
     /*if (cx > x && cx < (x + 75)) {
          if (cy > 105 + 300 && cy < 135 + 300)
               MergeSort();
     }*/
}

function Buttons() {
     var x = (ArraySize * 6) + 60;
     var y = 100;
     drawing.font = "30px Arial";
     drawing.fillStyle = '#fe4a49';
     drawing.fillText("Generate", x, y);
     drawing.fillStyle = '#851e3e';
     drawing.fillText("Quick", x, y + 75);
     drawing.fillText("Bubble", x, y + 150);
     drawing.fillText("Insertion", x, y + 225);
     drawing.fillText("Merge", x, y + 300);
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