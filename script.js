$(function() {

  $("#story").hide();
  
  $("#story2").hide();
  
  $("#questions").hide();
  

	
  $("#btn-click").click(function(e) {

    $(".color").empty().append($("input.color").val());
    $(".super").empty().append($("input.super").val());
    $(".adjective").empty().append($("input.adjective").val());
    $(".body").empty().append($("input.body").val());
    $(".part").empty().append($("input.part").val());
    $(".animal").empty().append($("input.animal").val());
	$(".adjective2").empty().append($("input.adjective2").val());
    $(".adjective2").empty().append($("input.adjective2").val());
    $(".adjective3").empty().append($("input.adjective3").val());
    $(".adjective4").empty().append($("input.adjective4").val());

    $("#story").show();

    $(':input').val('');

    $("#questions").hide();
  });



$("#play-btn").click(function(e) {
  $("#questions").show();
  $("#story").hide();
  $("#questions2").hide();
  $("#story2").hide();
});

  $("#btn-click2").click(function(c) {
		
    $(".name").empty().append($("input.name").val());
    $(".place").empty().append($("input.place").val());
    $(".adjective5").empty().append($("input.adjective5").val());
    $(".num").empty().append($("input.num").val());
    $(".num2").empty().append($("input.num2").val());
	num1 = document.getElementById("num").value; 
	num2 = document.getElementById("num2").value; 
	document.getElementById("result").innerHTML = Number(num1) - Number(num2);
										
	 $(".result").empty().append($("input.result").val());

		$("#story2").show();
	
		$(':input').val('');

    $("#	questions2").hide();


  });


 
	$("#play-btn2").click(function(c) {
      $("#questions2").show();
	  $("#story2").hide();
	  $("#questions").hide();
	  $("#story").hide();
	});

});