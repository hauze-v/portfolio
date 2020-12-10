function makeWords() {
	var words = [
		{
			text: "VS Code",
			weight: 12.5
		}, {
			text: "Terminal for beginners",
			weight: 12
		}, {
			text: "Git",
			weight: 13
		}, {
			text: "Adding favicons",
			weight: 10
		}, {
			text: "HTML elements",
			weight: 11
		}, {
			text: "JS definition vs. declaration",
			weight: 11.2
		}, {
			text: "HTML attributes",
			weight: 10.25
		}, {
			text: "Anatomy of HTML document",
			weight: 10.5
		}, {
			text: "GitHub",
			weight: 11.5
		},
		{
			text: "CSS box model",
			weight: 11.8
		}, {
			text: "Bash profile alias",
			weight: 10.8
		}
	];
	return words;
}

function makeWordCloud(words) {
	$('.teaching-domains').jQCloud(words, {delay: 120});
}

function displayWordCloud() {
	var count = 1;
	$(window).on('scroll', function() {
		var y_scroll_pos = window.pageYOffset;
		var scroll_pos_test = 2000; // set to whatever you want it to be
		var words = makeWords();
		if (y_scroll_pos > scroll_pos_test && count <= 1) {
			makeWordCloud(words);
			count++;
		}
	});
}

function designForm() {
	$("#my-modal form").addClass("my-form");
}

$(document).ready(function() {
	Typed.new("#writing-text", {
		strings: [
			"am a front end web developer.", "love learning new things.", "share knowledge each week on my blog.", "am passionate about code."
		],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 1,
		contentType: 'text',
		callback: function() {
			$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
		},
		preStringTyped: function() {},
		onStringTyped: function() {}
	});

	displayWordCloud();
})
