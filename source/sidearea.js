const util = require("./util");

var resumePath =
	"https://makakoa.github.io/website/resume/resume/cameron-yee-resume-redacted.pdf";

const missingContact = !util.getPhone() || !util.getEmail();

module.exports = [
	"side-area",
	[
		"profile",
		[
			"img",
			{
				src:
					"https://res.cloudinary.com/flybox-local/image/upload/1-4d50d0d" +
					"96102b3bc8f6dd2f1556b0daaf355c24acfee4a26f0f1921f53149cd2.png",
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
			src: resumePath,
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
          'letter-spacing': '0px',
				},
			},
			missingContact
				? ['span', {style:{color: 'var(--soft-warn)'}}, "*Note: Contact info is provided by URL Params online"]
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
				href: resumePath,
			},
			"Online PDF",
			missingContact ? "" : ["span", { style: { color: "var(--gray)" } }, "*"],
		],

		[
			"a",
			{
				class: "action",
				href: resumePath,
				download: null,
			},
			"Download PDF",
			missingContact ? "" : ["span", { style: { color: "var(--gray)" } }, "*"],
		],
	],
];
