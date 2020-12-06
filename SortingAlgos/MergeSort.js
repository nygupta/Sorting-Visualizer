/*function MergeSort(left, right) {
    if (left < right) {
        var mid = Math.floor(right + left) / 2;
        MergeSort(left, mid);
        MergeSort(mid + 1, right);
        Merge(left, mid, right);
    }
}

function Merge(left, mid, right) {
    var array = HeightArray;
    var i, j, k;
    var size1 = mid - left + 1;
    var size2 = right - mid;
    var larray = [];
    var rarray = [];
    for (i = 0; i < size1; i++)
        larray[i] = array[left + 1];
    for (j = 0; j < size2; j++) 
        rarray[j] = array[mid + 1 + j];
    i = 0;
    j = 0;
    k = 0;
    var loop = function() {
        if (i < size1 && j < size2) {
            if (larray[i] <= rarray[j]) {
                array[k] = larray[i];
                i++;
            }
            else {
                array[k] = rarray[j];
                j++;
            }
            k++;
        }
        DrawCanvas();
        requestAnimationFrame(loop);
    };
    loop();
}
function MergeSort() {
    var divide = function(arr, l, r) {
        if (l < r) {
            var m = (l + r) / 2;
            divide(arr, l, m);
            divide(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    };
    var merge = function(arr, l, m, r) {
        var k;
        var n1 = m - l + 1;
        var n2 = r - m;
        var le = [];
        var ri = [];
        var i;
        var j;
        for (i = 0; i < n1; i++)
            le.push(arr[i]);
        for (i = 0; i < n2; i++)
            ri.push(arr[m + 1 + i]);
        i = 0;
        j = 0;
        var first = function() {
            if (i < n1 && j < n2) {
                if (le[i] < ri[j]) {
                    arr[k] = le[i];
                    i++;
                }
                else {
                    arr[k] = ri[j];
                    j++
                }
                k++;
                DrawArray();
                requestAnimationFrame(first);
            }
        };
        var second = function() {
            if (i < n1) {
                arr[k] = le[i];
                i++;
                k++;
            }
            DrawArray();
            requestAnimationFrame(second);
        }
        var third = function() {
            if (j < n2) {
                arr[k] = ri[j];
                j++;
                k++;
            }
            DrawArray();
            requestAnimationFrame(third);
        }
        first();
        second();
        third();
    }
    divide(HeightArray, 0, ArraySize);
}*/