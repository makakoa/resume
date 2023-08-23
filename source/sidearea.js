const util = require("./util");

const PDF_PATH = "https://makakoa.github.io/resume/resume-redacted.pdf";

const missingContact = !util.getPhone() || !util.getEmail();

module.exports = [
	"side-area",
	[
		"profile",
		[
			"img",
			{
				src: missingContact ? "funshot.jpg" : "headshot.png",
			},
		],
		["div", ["name", "Cameron Yee"], ["label", "Full-Stack Developer"]],
	],

	[
		"iframe",
		{
			style: {
				display: "none",
			},
			name: "pdf",
			id: "pdf",
			src: PDF_PATH,
		},
	],

	[
		"actions",
		{ style: { position: "relative" } },
		[
			"span",
			{
				style: {
					position: "absolute",
					top: "100%",
					color: "var(--gray)",
					margin: "8px",
					"font-size": "12px",
					"letter-spacing": "0px",
				},
			},
			missingContact
				? [
						"span",
						{ style: { color: "var(--soft-warn)" } },
						"*Note: Contact info is provided by URL Params online",
				  ]
				: "*Contact redacted in online PDFs",
			[
				"div",
				{ style: { margin: "8px 0" } },
				missingContact
					? ""
					: util.isChromeBased()
					? "Use Print to Save as PDF with contact info (Chrome only)"
					: null,
			],
		],

		require("./darkmode"),

		util.isChromeBased()
			? [
					"button",
					{
						class: "action",
						onClick: "window.print()",
					},
					"Print",
			  ]
			: null,

		[
			"a",
			{
				class: "action",
				target: "_blank",
				href: PDF_PATH,
			},
			"Online PDF",
			missingContact ? "" : ["span", { style: { color: "var(--gray)" } }, "*"],
		],

		[
			"a",
			{
				class: "action",
				href: PDF_PATH,
				download: null,
			},
			"Download PDF",
			missingContact ? "" : ["span", { style: { color: "var(--gray)" } }, "*"],
		],
	],
];
