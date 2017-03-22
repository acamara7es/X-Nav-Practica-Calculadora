$(".number").click(function() {
	var text = this.textContent;
	$("#display").val(function(index, value) {
		return value + text;
	});
});

$("#submit").click(function() {
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
});
