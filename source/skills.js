const _ = require("lodash");
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
	Testing: ["Mocha", "Chai", "End-to-End", "Selenium", "Nightwatch"],
	Utility: [
		"Machine Learning",
		"Full-text Search",
		"Form Validation",
		"Rich Text Editing",
		"Push Notifications",
	],
	Media: ["Web Audio API", "WebGL", "Threejs", "Aframe", "AnalyserNode"],
	Platform: ["Web", "Mobile Web", "iOS", "Android", "Cloud"],
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
		..._.map(skills, function (v, k) {
			return [
				"tr",
				["th", k],
				..._.map(v, function (s) {
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
			..._.map(expanded, function (v, k) {
				return [
					"tr",
					["th", k],
					..._.map(v, function (s) {
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
