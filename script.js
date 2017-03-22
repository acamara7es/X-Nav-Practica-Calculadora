var valid_keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "+", "-", "*", "/", "Enter", "Delete", "Escape"];
var operations = ["+", "-", "*", "/"];
var calculated = false;

$(".number").click(function() {
    add_number(this.textContent)
});

$("#submit").click(calculate);

$("#back").click(back);

$(".operation").click(function() {
    operation(this.textContent);
});

$("#ac").click(clear_all)

$(document).keydown(function(event) {
    var key_pressed = event.key;
    clean();
    if (valid_keys.indexOf(key_pressed) === -1) {
        return;
    }
    if (key_pressed === "Enter") {
        calculate();
    } else if (key_pressed === "Escape") {
        clear_all();
    } else if (key_pressed === "Delete") {
        back();
    } else if (operations.indexOf(key_pressed) !== -1) {
        operation(key_pressed);
    } else {
        add_number(key_pressed);
    }
});

function back() {
    var value = $("#display").val();
    $("#display").val(value.slice(0, -1));
}

function clear_all() {
    $("#display").val("");
}

function operation(text) {
    var op = text;
    if (op === "x") {
        op = "*";
    }
    var last_char = $("#display").val().slice(-1);
    if (operations.indexOf(last_char) !== -1) {
        back();
    }
    $("#display").val($("#display").val() + op);
}

function add_number(text) {
    clean();
    $("#display").val(function(index, value) {
        return value + text;
    });
}

function calculate() {
    var value = $("#display").val();
    var result;
    try {
        result = eval(value);
    } catch (e) {
        result = "Error";
    } finally {
        $("#display").val(function(index, value) {
            return value + "=" + result;
        });
    }
    calculated=true;
}

function clean(){
    if(calculated){
        clear_all();
        calculated = false;
    }
}
