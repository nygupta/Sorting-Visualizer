function QuickSort() {
    var array = HeightArray;
    var quickSort = function(left, right) {
         if (left < right) {
              var pivtInd = Math.floor(Math.random() * (right - left) + left);
              var pivtVal = array[pivtInd];
              var current = left;
              var i = left;
              var partLoop = function() {
                   if (i < right) {
                        if (array[i] < pivtVal) {
                             DrawCanvas();
                             Buttons();
                             var temp = array[i];
                             array[i] = array[current];
                             array[current] = temp;
                             current++;
                        }
                        DrawCanvas();
                        requestAnimationFrame(partLoop);
                   }
                   else {
                        array[right] = array[current];
                        array[current] = pivtVal;
                        quickSort(left, current - 1);
                        quickSort(current + 1, right);
                   }
                   DrawCanvas();
                   i++;
              };
              partLoop();
         }
    };
    quickSort(0, ArraySize);
}