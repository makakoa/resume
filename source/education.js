const util = require("./util");

module.exports = [
	"div",
	{ class: "segment" },
	["h2", "Education", util.icon("graduation-cap")],

	[
		"section",
		[
			"section-header",
			["left", "Code Fellows: Full-Stack JavaScript"],
			["right", "Fall 2014"],
		],
	],

	[
		"section",
		[
			"section-header",
			[
				"left",
				"University of Washington: Bachelor of Science in Neurobiology ",
				// ["num", "(3.7)"],
			],
			["right", "2010 - 2014"],
		],
	],
];
