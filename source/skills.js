const util = require("./util");

var skills = {
	General: ["JavaScript", "Python", "PHP / Hack", "Git", "Mercurial", "ML"],
	"Front-end": ["React", "Flux / Redux", "Relay", "GraphQL", "HTML", "CSS"],
	"Back-end": [
		"Node",
		"Express / REST",
		"PostgreSQL",
		"Auth",
		"Sockets",
		"RPC",
	],
};

var expanded = {
	"Third Party": ["Heroku", "AWS", "GoogleAPIs", "OAuth", "PubNub"],
	DevOps: ["Webpack", "Make", "Grunt", "Gulp", "Livereload"],
	Testing: ["Jest-E2E", "Jest", "End-to-End", "Selenium", "Nightwatch"],
	Utility: [
		"Machine Learning",
		"Full-text Search",
		"Form Validation",
		"Rich Text Editing",
		"Push Notifications",
	],
	Media: ["Web Audio API", "WebGL", "Threejs", "Aframe", "AnalyserNode"],
	Platform: ["Web", "Mobile Web", "MacOS", "iOS", "Android"],
	Env: ["UNIX", "Emacs", "Bash", "Linux", "Xcode"],
};

module.exports = [
	"div",
	{
		class: "skills segment",
		style: { position: "relative" },
	},

	[
		"h2",
		"Programming",
		util.icon("code"),
		[
			"label",
			{
				id: "expandskills",
				for: "expandcheck",
				style: {
					'font-size': '12px', color: 'var(--gray)', 'margin-left': 'auto'
				}
			},
			'(see more)'
		],
	],

	[
		"table",
		{ id: "shortlist" },
		...util.mapObj(skills, function (k, v) {
			return [
				"tr",
				["th", k],
				...v.map(function (s) {
					return ["td", s];
				}),
			];
		}),
	],

	[
		"input",
		{
			id: "expandcheck",
			type: "checkbox",
		},
	],
	[
		"div",
		{ id: "expandedlist" },
		[
			"table",
			...util.mapObj(expanded, function (k, v) {
				return [
					"tr",
					["th", k],
					...v.map(function (s) {
						return ["td", s];
					}),
				];
			}),
		],
		[
			"label",
			{
				id: "expandskills",
				for: "expandcheck",
			},
			"Collapse",
		],
	],
];
