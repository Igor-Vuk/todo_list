// toggle the checkbox and completed class
$("ul").on("click", "i", function () {
	$(this).parent().toggleClass("completed");

	$(this).toggleClass("fa-square-o fa-check-square-o");
});

//delete the task
$("ul").on("click", "span", function () {
	$(this).parent().fadeOut(200, function () {
		$(this).remove();
	})
})


//add the task
$("input[type='text']").on("keypress", function (event) {
	if(event.which===13) {
		if ($.trim($("input[type='text']").val())!=="") {
			inputData=$("input[type='text']").val();
			//empty the input
			$("input[type='text']").val("");
			$("ul").append("<li><i class='fa fa-square-o' aria-hidden='true'></i> " + inputData + "<span><i class='fa fa-trash'></i></span></li>")
		} else { // fadeIn and Out warningSign
				$("#warningSign").fadeIn (700, function () {
					$("#warningSign").fadeOut(700);
				})

		}
	}
});


//toggle input with plus sign
$(".fa-plus").on("click", function () {
	if($("#input1").css("opacity") === "1") {
		$("#input1").css("opacity", "0")
		$(".fa-plus").css("transform", "rotate(0deg)")
		$("#input1").prop("disabled", true)

	} else {
			$("#input1").css("opacity", "1")
			$(".fa-plus").css("transform", "rotate(45deg)")
			$("#input1").prop("disabled", false)
		}
})

//make text editable
$("ul").on("click", "li", function(){
	$(this).prop("contentEditable", true);
});

$("ul").on("keypress", "li", function (event) {
	if(event.which === 13) {
		$(this).prop("contentEditable", false);
	}
});

//turn off contentEditable if li is empty
//if text().length of li is equal to 1, next keydown on backspace will delete ti li
//1 in length is the spacein front of the text in html
$("ul").on("click", "li", function (event) {
	$(this).on("keydown", function (event) {
		if (event.which === 8) {
			if($(this).text().length === 1) {
				$(this).fadeOut(200, function () {
					$(this).remove();
				})
			}
		}
	})
});


