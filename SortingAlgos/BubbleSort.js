function BubbleSort() {
    var array = HeightArray;
    var size = ArraySize;
    var i = 0;
    var swap = false;
    var loop1 = function() {
         if (i < size) {
              if (array[i] > array[i + 1]) {
                   var temp = array[i];
                   array[i] = array[i + 1];
                   array[i + 1] = temp;
                   swap = true;
              }
              i++;
              DrawCanvas();
              requestAnimationFrame(loop1);
         }
         else if(swap) {
              swap = false;
              size--;
              i = 0;
              loop1();
         }
    };
    loop1();
}

