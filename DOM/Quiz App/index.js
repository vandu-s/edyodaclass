function calcScore() {
    var q1 = document.forms["quiz"]["ans1"].value;
    var q2 = document.forms["quiz"]["ans2"].value;
    var q3 = document.forms["quiz"]["ans3"].value;
    var q4 = document.forms["quiz"]["ans4"].value;
    var q5 = document.forms["quiz"]["ans5"].value;

    var a1 = 2;
    var a2 = 2;
    var a3 = 2;
    var a4 = 2;
    var a5 = 2;

    if (q1 == a1) {
        var s1 = 1;
    } else {
        var s1 = 0;
    }

    if (q2 == a2) {
        var s2 = 1;
    } else {
        var s2 = 0;
    }

    if (q3 == a3) {
        var s3 = 1;
    } else {
        var s3 = 0;
    }

    if (q4 == a4) {
        var s4 = 1;
    } else {
        var s4 = 0;
    }

    if (q5 == a5) {
        var s5 = 1;
    } else {
        var s5 = 0;
    }

    var ts = s1 + s2 + s3 + s4 + s5;

    document.getElementById("qzs").innerHTML = ts;

}