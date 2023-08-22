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
				class: ["header-info-item", "contact", phone ? "" : "redacted"].join(" "),
				href: "tel:" + phone,
			},
			util.icon("phone"),
			[
				"span",
				{
					id: "phone",
				},
				phone || "555-123-4567",
			],
		],
		[
			"a",
			{
				id: "email-link",
				class: ["header-info-item", "contact", email ? "" : "redacted"].join(" "),
				href: "mailto:" + email,
			},
			util.icon("envelope", true),
			[
				"span",
				{
					id: "email",
				},
				email || "email@example.com",
			],
		],
		[
			"span",
			{
				class: "header-info-item",
			},
			util.icon("location-dot", true),
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
			util.brand("github", false),
			"github.com/makakoa",
		],
		[
			"a",
			{
				class: "header-info-item",
				href: "https://www.linkedin.com/in/makakoa",
			},
			util.brand("linkedin"),
			"linkedin.com/in/makakoa",
		],
	],
];
