$(document).ready(function() {
 // all your jQuery code goes in here!
 $('#ticker-text').typeIt({
     speed: 40,
})
	.tiType('UC Berkeley <strong>Cognitive Science</strong> Student,')
	.tiPause(300)
	.tiType(' Snapchat Chef,')
	.tiPause(300)
	.tiType(' Intramural Basketball Player,')
	.tiPause(750)
	.tiDelete(7)
	.tiPause(200)
	.tiSettings({speed:120})
	.tiType('Superstar,')
	.tiSettings({speed:40})
	.tiPause(300)
	.tiType(' Web Design TA,')
	.tiPause(300)
	.tiType(' Peanut Butter Enthusiast,')
	.tiPause(300)
	.tiType(' & <strong> Human Centered Product Designer</strong>.');

})
