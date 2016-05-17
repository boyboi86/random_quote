$("document").ready(function() {
							  var quotes = [
							    "Mom knows EVERYTHING",
							    "Nothing I do is my fault.",
							    "To make a bad day worse, spend it wishing for the impossible.",
							    "Weekends don't count unless you spend them doing something completely pointless.",
							    "If we wanted more leisure, we'd invent machines that do things less efficiently.",
							    "The only skills I have patience to learn are those that have no real application in life.",
							    "My ethicator machine must've had a built-in moral compromise spectral release phantasmatron! I'm a genius!"
							  ];

							  $("#generate").click(function() {
							    $(".panel-body").html(quotes[Math.floor(Math.random() * quotes.length)])
							  });
							});