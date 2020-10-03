function InsertionSort() {
    var array = HeightArray;
    var size = ArraySize;
    var i = 1;
    var temp;
    var loop1 = function() {
         if (i < size) {
              var j = i;
              var loop2 = function() {
                   if (j > 0 && array[j - 1] > array[j]) {
                        temp = array[j];
                        array[j] = array[j - 1];
                        array[j - 1] = temp;
                        j--;
                        DrawCanvas();
                        requestAnimationFrame(loop2);
                   }
                   else {
                        i++;
                        loop1();
                   }
              };
              loop2();
         }
    };
    loop1();
}
