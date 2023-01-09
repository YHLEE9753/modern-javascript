function test() {
    alert("hi");
}
function test1(from, text = "no text is given") {
    alert(`${from} to ${text}`);
}

test1(10);
test(undefined, 20);

let a = function (a) {
    return a++;
};

function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
        return;
    }
    no();
}

function yes() {
    alert("yes");
}
function no() {
    alert("no");
}


ask(
    function () { true },
    function () { alert(1) },
    function () { alert(2) }
)





