const util = require("./util");

var email = util.getEmail() || null;
var phone = util.getPhone() || null;

module.exports = [
	"header",
	[
		"left",
		["h1", "Cameron ", ["span", { id: "last-name" }, "Yee"]],
		["header-title", "Full-Stack Developer"],
	],

	[
		"middle",
		[
			"a",
			{
				id: "phone-link",
				class: ["header-info-item", "contact"].join(" "),
				href: "tel:" + phone,
			},
			util.icon("phone"),
			[
				"span",
				{
					id: "phone",
					class: phone ? "" : "redacted",
				},
				phone || "555-123-4567",
			],
		],
		[
			"a",
			{
				id: "email-link",
				class: ["header-info-item", "contact"].join(" "),
				href: "mailto:" + email,
			},
			util.icon("envelope-o"),
			[
				"span",
				{
					id: "email",
					class: email ? "" : "redacted",
				},
				email || "email@example.com",
			],
		],
		[
			"span",
			{
				class: "header-info-item",
			},
			util.icon("map-marker"),
			"New York, NY",
		],
	],

	[
		"right",
		[
			"a",
			{
				class: "header-info-item",
				href: "https://makakoa.github.io/website/",
			},
			util.icon("home"),
			"makakoa.github.io/website/",
		],
		[
			"a",
			{
				class: "header-info-item",
				href: "https://github.com/makakoa",
			},
			util.icon("github"),
			"github.com/makakoa",
		],
		[
			"a",
			{
				class: "header-info-item",
				href: "https://www.linkedin.com/in/makakoa",
			},
			util.icon("linkedin"),
			"linkedin.com/in/makakoa",
		],
	],
];
