const util = require("./util");

module.exports = function createEmployment(entries) {
	return [
		"div",
		{
			class: "segment",
			style: {
				display: "flex",
				"flex-direction": "column",
				"justify-content": "space-between",
			},
		},
		["h2", "Work", util.icon("calendar-check", false)],

		...entries.map(
			({ icon, position, location, subtitle, links, start, end, bullets }) => {
				return [
					"section",
					[
						"section-header",
						[
							"left",
							[
								"position",
								[
									"span",
									{
										style: {
											display: "inline-flex",
											"justify-content": "center",
											"align-items": "center",
											"vertical-align": "middle",
											margin: "0 8px 0 0",
											width: "20px",
											height: "20px",
										},
									},
									icon,
								],
								position,
							],
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
									l.display,
									l.disable
										? null
										: [
												"span",
												{ style: { margin: "0 3px", "font-size": l.customIcon ? "" : "11px" } },
												l.customIcon || util.icon("link"),
										  ],
								];
							}),
							start,
							' - ',
							end
						],
					],
					["section-content", util.list(bullets)],
				];
			}
		),
	];
};
