function makeArray() {
    var items = [];

    for (var i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };

        items.push(item);
    }

    return items;
}
var arr = makeArray();
arr[1]();
arr[3]();
arr[7]();

// меняем в условии цикла var на let

function makeArray1() {
    var items = [];

    for (let i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };

        items.push(item);
    }

    return items;
}
var arr1 = makeArray1();
arr1[1]();
arr1[3]();
arr1[7]();