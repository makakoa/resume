const util = require("./util");

module.exports = function addCreations(creations) {
	return [
		"div",
		{ class: "segment" },
		{ style: { position: "relative" } },
		["h2", "Creations", util.icon("code-fork")],

		...creations.map((creation) => {
			return [
				"section",
				[
					"section-header",
					{ style: { "margin-bottom": 0 } },
					[
						"left",
						{ style: { display: "flex", "align-items": "center" } },
						[
							"img",
							{
								src: creation.iconSrc,
								width: "20px",
								style: { "vertical-align": "middle" },
							},
						],
						["section-name", { style: { margin: "0 8px" } }, creation.name],
						["section-description", creation.subtitle],
					],
					[
						"right",
						...creation.links.map((l) => {
							return [
								"a",
								{
									class: l.disable ? "broken-link" : "",
									href: l.url,
								},
								l.icon || null,
								["span", { style: { "margin-left": "5px" } }, l.name],
							];
						}),
					],
				],
			];
		}),

		// ],
		// [
		//   'section-content',
		//   util.list([
		//     'Web App built with Vanilla JavaScript, HTML, and CSS '
		//     + 'with custom built fonts',
		//     'Created Chrome Extension to extend the app'
		//   ])

		// [
		//   'section',
		//   [
		//     'section-header',
		//     {style: {'margin-bottom': 0}},
		//     [
		//       'left',
		//       ['section-name', 'Ekko'],
		//       ['section-description', ' Synesthesia Simulator (VR Audio Visualizer)']
		//     ],
		//     [
		//       'right',
		//       ['a', {
		//         href: 'http://lbby.us/ekko-chamber'
		//       }, 'ekko-chamber.herokuapp.com']
		//     ]
		//   // ],
		//   // [
		//   //   'section-content',
		//   //   util.list([
		//   //     '3D / VR Audio Visualizer with SoundCloud API using ' +
		//   //     'Aframe, Threejs, WebGL, Web Audio API'
		//   //   ])
		//   ]
		// ],

		// [
		//   'section',
		//   [
		//     'section-header',
		//     {style: {'margin-bottom': 0}},
		//     [
		//       'left',
		//       ['section-name', 'Banger Management'],
		//       ['section-description', ' Real-time Top-down Web Game']
		//     ],
		//     [
		//       'right',
		//       ['a', {
		//         href: 'http://lbby.us/banger-mgmt'
		//       }, 'banger-mgmt.herokuapp.com']
		//     ]
		//   ]
		// ],

		// ['input', {
		//   id: 'projectsexpanded',
		//   type: 'checkbox'
		// }],
		// [
		//   'div',
		//   {id: 'expandedprojects'},

		//   [
		//     'section',
		//     [
		//       'section-header',
		//       {style: {'margin-bottom': 0}},
		//       [
		//         'left',
		//         ['section-name', 'The Council'],
		//         ['section-description', ' Crowd-Sourced Coin Flipping']
		//       ],
		//       [
		//         'right',
		//         ['a', {
		//           href: 'http://thecouncil.herokuapp.com'
		//         }, 'thecouncil.herokuapp.com'],
		//         ' & ',
		//         ' on iOS'
		//       ]
		//     ],
		//     [
		//       'section-content',
		//       util.list([
		//         'SPA built with React + Flux on Node + Express + Socket.io API',
		//         'Ported app to iOS with Cordova and published on App Store'
		//       ])
		//     ]
		//   ],

		//   [
		//     'section',
		//     [
		//       'section-header',
		//       {style: {'margin-bottom': 0}},
		//       [
		//         'left',
		//         ['section-name', 'YeezyHTML'],
		//         ['section-description', ' HTML that thinks it\'s JS']
		//       ],
		//       [
		//         'right',
		//         ['a', {
		//           href: 'https://makakoa.github.io/yeezyhtml/'
		//         }, 'makakoa.github.io/yeezyhtml'],
		//       ]
		//     ],
		//     [
		//       'section-content',
		//       util.list([
		//         'JS to static HTML + CSS compiler '
		//           + 'used to build this resume (source in project page)'
		//       ])
		//     ]
		//   ],

		//   ['label', {
		//     id: 'expandprojects',
		//     for: 'projectsexpanded'
		//   }, 'Collapse']

		// ],

		// ['label', {
		//   id: 'expandprojects',
		//   for: 'projectsexpanded'
		// }, 'More'],

		[
			"span",
			{
				style: {
					width: "100%",
					"text-align": "right",
					display: "inline-block",
					position: "absolute",
					margin: "0 0 8px",
					color: "gray",
				},
			},
			"(More Projects and Sources ",
			[
				"a",
				{
					class: "secret-link",
					href: "https://github.com/makakoa",
				},
				"on GitHub)",
			],
		],
	];
};
