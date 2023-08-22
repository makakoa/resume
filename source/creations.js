const util = require("./util");

module.exports = [
  "div",
  { class: "segment" },
  { style: { position: "relative" } },
  ["h2", "Creations", util.icon("code-fork")],

  [
    "section",
    [
      "section-header",
      { style: { "margin-bottom": 0 } },
      [
        "left",
          [
            "img",
            {
              src: "./vyz-icon.png",
              width: "16px",
              style: { "vertical-align": "middle", 'margin-right': "4px" },
            },
          ],
        ["section-name", "Vyz"],
        ["section-description", " MacOS Music Visualizer"],
      ],
      [
        "right",
        [
          "a",
          {
            href: "https://apps.apple.com/us/app/vyz/id6454350559",
          },
          util.brand("app-store"),
          ["span", { style: { "margin-left": "5px" } }, "app store"],
        ],
      ],
    ],
  ],

  [
    "section",
    [
      "section-header",
      { style: { "margin-bottom": 0 } },
      [
        "left",
        [
          "img",
          {
            src: "./enviz-z.png",
            width: "16px",
            style: { "vertical-align": "middle", 'margin-right': "4px" },
          },
        ],
      ["section-name", "Enviz"],
        ["section-description", " Machine Learning Powered Image Feed"],
      ],
      [
        "right",
        [
          "a",
          {
            class: 'broken-link',
            href: "http://lbby.us/enviz",
          },
          "enviz.herokuapp.com",
        ],
      ],
    ],
  ],

  [
    "section",
    [
      "section-header",
      { style: { "margin-bottom": 0 } },
      [
        "left",
        [
          "img",
          {
            src: "./braincryption.png",
            width: "16px",
            style: { "vertical-align": "middle", 'margin-right': "4px" },
          },
        ],
        ["section-name", "Braincryption"],
        ["section-description", " Software Driven Visual Encryption"],
      ],
      [
        "right",
        [
          "a",
          {
            href: "http://makakoa.github.io/braincryption/app/",
          },
          util.icon("link"),
          ["span", { style: { "margin-left": "5px" } }, "demo"],
        ],
        [
          "a",
          {
            href: "https://chrome.google.com/webstore/detail/braincryption/cdhppfjjeickpbhjmjplnddeklonjhkj",
          },
          util.icon("chrome"),
          ["span", { style: { "margin-left": "5px" } }, "chrome extension"],
        ],
      ],
      // ],
      // [
      //   'section-content',
      //   util.list([
      //     'Web App built with Vanilla JavaScript, HTML, and CSS '
      //     + 'with custom built fonts',
      //     'Created Chrome Extension to extend the app'
      //   ])
    ],
  ],

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
        class: 'secret-link',
        href: "https://github.com/makakoa",
      },
      "on GitHub)",
    ],
  ],
];