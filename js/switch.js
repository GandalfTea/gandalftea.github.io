
// LOCATION TRACKERS
var mainMenu = true;
var item = false;


// INITIAL ANIMATION
// ps: I have no clue what is going on. You have 0 chance to get what is happening in this animation.

$('#text').text(text_1);

var index = 0;

setInterval( function() {
	// if not in main menu, hide after flashing.
	if(!mainMenu) {
		if(index>30){
			$('#text').hide();
			return;
		}
	}
	if( index > 30) return;
	index % 2 === 0 ? $('#text').text(text_1) : index % 3 === 0 ?  $('#text').text(text_2) : $('#text').text(text_3);
	index++;
},50);


setTimeout( function() {
	$('#text').css("transition", "0s");
	$('#text').css("line-height", "100px");
	$('#text').css("font-size", "100px");
	$('#text').css("line-height", "100px");
	$('#text').css("width", "100%");
}, 50);

setTimeout( function() {
	$('#text').css("transition", "0s");
	$('#text').css("font-size", "10px");
	$('#text').css("line-height", "9px");
	$('#text').css("width", "60%");
}, 100);

setTimeout( function() {
	$('#text').css("transition", "0s");
	$('#text').css("line-height", "100px");
	$('#text').css("font-size", "100px");
	$('#text').css("width", "100%");
}, 200);

setTimeout( function() {
	$('#text').css("transition", "0s");
	$('#text').css("font-size", "10px");
	$('#text').css("line-height", "9px");
	$('#text').css("width", "60%");
}, 300);
setTimeout( function() {
	$('#text').css("transition", "0s");
	$('#text').css("font-size", "100px");
	$('#text').css("width", "100%");
},500);

setTimeout( function() {
	$('#text').css("transition", "0s");
	$('#text').css("font-size", "10px");
	$('#text').css("line-height", "9px");
	$('#text').css("width", "60%");
},600);


setTimeout( function() {
	$('#text').css("transition", "0s");
	$('#text').css("font-size", "100px");
	$('#text').css("width", "100%");
},1000);

setTimeout( function() {
	$('#text').css("transition", "0s");
	$('#text').css("font-size", "10px");
	$('#text').css("line-height", "9px");
	$('#text').css("width", "60%");
}, 1200);

// TODO: EXIT
setInterval( function() {
	if(!mainMenu) return;
	if(Math.random() < 0.5) {
		$('#text').css("transition", "0s");
		$('#text').css("font-size", "100px");
		$('#text').css("width", "100%");

		setTimeout( function() {
			$('#text').css("transition", "0s");
			$('#text').css("font-size", "10px");
			$('#text').css("line-height", "9px");
			$('#text').css("width", "60%");
		}, 100);
		setTimeout( function() {
			$('#text').css("transition", "10s");
		}, 200);
		index = 21;

	} else {
		setTimeout( function() {
			$('#text').css("transition", "0s");
			$('#text').css("line-height", "100px");
			$('#text').css("font-size", "100px");
			$('#text').css("line-height", "100px");
			$('#text').css("width", "100%");
		}, 50);
	
		setTimeout( function() {
			$('#text').css("transition", "0s");
			$('#text').css("font-size", "10px");
			$('#text').css("line-height", "9px");
			$('#text').css("width", "60%");
		}, 100);
		setTimeout( function() {
			$('#text').css("transition", "10s");
		}, 200);
		index = 20;
	}
	index++;
}, 5000);


// TODO: EXIT
setInterval( function() {
	if(!mainMenu) {
		// it is hidden from the main function
		$('#text').show();
	}
	index = 10;
}, 3000);

setTimeout(function() {
	$('#text').css("transition", "10s");
}, 900);

setTimeout(function() {
	$('#text').css("transition", "10s");
}, 1400);




// CHANGE PROJECT ANIMATION

// array of projects

var projects = {
	"Claritatea" : "./img/claritatea.png",
	"Divorce" : "./img/divorce.png",
	"Snake" : "./img/snake.png",
	"ToDo" : "./img/todo.png",
	"Stejar" : "./img/stejar.png"
};

var projectNames = ["Claritatea", "Divorce", "Snake", "ToDo", "Stejar"];

var projectIdx = 0;


// LEFT CLICK
$(document).ready(function() {
	$('#click__left').click( function() {

		mainMenu = false;
		var projectSelected = projects[projectNames[projectIdx % 5]];
		projectIdx++;

		// Background moving text
		$('#text').css("transition", "0s");
		$('#text').css("width", "0%");
		$('#text').css("background-image", "url(./img/background.jpg");


		// Dummy text for animation
		var dummyText = document.createElement("p");
		dummyText.id = "item";
		$('body').append(dummyText);
		$('#item').text(text_1.repeat(5));	// set size per project
		$('#item').css("background", projectSelected);


		setTimeout(function() {
			$('#item').css("transition", "0s");
			$('#item').css("line-height", "100px");
			$('#item').css("font-size", "100px");
			$('#item').css("line-height", "100px");
			$('#item').css("width", "100%");
		}, 450);

		setTimeout( function() {
			$('#item').css("transition", "0s");
			$('#item').css("font-size", "10px");
			$('#item').css("line-height", "9px");
			$('#item').css("width", "60%");
		}, 500);

		setTimeout(function() {
			$('#item').css("font-size", "5px");
			$('#item').css("line-height", "2px");
		}, 700);


		setTimeout( function() {
			$('#item').hide();
			var img = document.createElement("img");
			img.src = "./img/divorce.png";
			img.id = "item-png";
			$("body").append(img);
		}, 1600);

		// TODO: EXIT
		setInterval(function() {
			$('#text').css("width", "100%");
		}, 500);

		// TODO: EXIT
		setInterval(function() {
			if(Math.random() < 0.5) {
				$('#item').css("font-size", "5px");
				$('#item').css("line-height", "2px");
				$('#item-png').hide();
				$('#item').show();
			}

			setTimeout(function() {
				$('#item-png').show();
				$('#item').hide();
			}, 300);
		}, 5000)
	});
});


$('#click_right').click( function() {

})


// Listen for click
// Animate
// Change content
