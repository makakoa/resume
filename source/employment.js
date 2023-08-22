const util = require("./util");

module.exports = function addEmployment({
	icon,
	position,
	location,
	subtitle,
	links,
	start,
	end,
	bullets,
}) {
	return [
		"section",
		[
			"section-header",
			[
				"left",
				["position", ["span", { style: { margin: "0 4px" } }, icon], position],
				["section-name", " " + location],
				["section-description", " " + subtitle],
			],
			[
				"right",
				...links.map((l) => {
					return [
						"a",
						{
							class: l.disable ? "broken-link" : "",
							href: l.url,
						},
						l.disable
							? null
							: [
									"span",
									{ style: { margin: "0 4px", "font-size": "11px" } },
									util.icon("link"),
							  ],
						l.display,
					];
				}),
				` ${start} - ${end}`,
			],
		],
		["section-content", util.list(bullets)],
	];
};
