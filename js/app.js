function Random() {

    function random(minVal, maxVal) {
        var res = minVal - 0.5 + Math.random() * (maxVal - minVal + 1);
        res = Math.round(res);
        return res;
    }

    a = (random(0, 100));
    b = (random(0, 100));
    c = (random(0, 100));

    var ValArr = [a, b, c];
    sortedValArr = ValArr.slice(0);
    sortedValArr.sort(function (a, b) {
        return b - a;
    });
    var names = ["Red", "Blue", "Green"];
    var names1 = ["Red Text", "Blue Text", "Green Text"];

    var html = "";

    html = "<table>";
    for (var i = 0; i < 3; ++i) {
        for (var j = 0; j < 3; ++j) {
            if (ValArr[j] === sortedValArr[i]) {
                html += initTr(sortedValArr[i], names[j]);
                break;
            }
        }
    }

    html += "</table>";
    document.getElementById('container').innerHTML = html;
    function initTr(valueColumn, nameColumn) {
        return "<tr><td>" + nameColumn + "</td><td><em>" + valueColumn + " %</em></td></tr> ";
    }

    var html2 = ""
    html2 = "<table>";
    for (var i = 100; i >= 0; --i) {
        for (var j = 0; j < 3; ++j) {
            if (ValArr[j] == [i]) {
                html2 += ViewLine(ValArr[j], names1[j], names[j]);
            }
        }
        html2 += View([i]);
    }


    function View(valueColumn) {
        return "<tr><td><em></em><td></td></td></tr>";
    }

    function ViewLine(valueColumn, nameColumn, img) {
        return "<tr><td> <img src='images/ring_" + img + ".svg' class='ring" + img + "' /></td><td>" + nameColumn + "</td><td>" + valueColumn + " %</td></tr> ";
    }

    html2 += "</table>";
    document.getElementById('container2').innerHTML = html2;
}

//function randomIntegerTwo(min, max) {
//    var rand = min + Math.random() * (max - min)
//    rand = Math.round(rand);
//    return rand;
//}
//b = (randomIntegerTwo(0, 100));

//function randomIntegerTree(min, max) {
//    var rand = min + Math.random() * (max + 1 - min);
//    rand = Math.floor(rand);
//    return rand;
//}
//c = (randomIntegerTree(0, 100));