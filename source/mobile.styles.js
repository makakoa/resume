module.exports = [
	"style",
	{
		// mobile styles
		"@media screen and (max-width: 640px)": {
			html: {
				display: "block",
				overflow: "auto",
				padding: 0,
				height: "100vh",
				width: "100vw",
				"-webkit-overflow-scrolling": "touch",
				body: {
					// overflow: 'auto',
					height: "initial",
					padding: "20px",
				},
			},

			"side-area": {
				display: "block",
				position: "initial",
				profile: {
					img: {
						display: "block",
						margin: "20px auto 0",
					},
					div: {
						margin: "10px",
					},
				},
				actions: {
					"margin-top": "0",
					"box-shadow": "none",

					".action": {
						padding: "20px",
					},
				},
			},

			header: {
				h1: {
					"font-size": "36px",
				},
				"header-title": {
					"letter-spacing": "1px",
					"font-size": "14px",
				},
				"text-align": "center",
				"flex-direction": "column",
				".header-info-item": {
					"margin-top": "8px",
					padding: "4px",
				},
				"a.header-info-item": {
					"border-radius": "4px",
					border: "1px solid #ddd",
				},
			},

			".segment": {
				"margin-top": "20px",
			},

			section: {
				"section-header": {
					"flex-direction": "column",
					"section-description": {
						margin: "4px 0",
						display: "block",
					},
				},
			},

			table: {
				display: "block",
				tr: {
					display: "block",
					"margin-bottom": "8px",
				},
				th: {
					display: "block",
				},
				td: {
					display: "inline-block",
					"margin-right": "4px",
				},
			},
			ul: {
				"padding-left": "20px",
				li: {
					margin: "4px 0",
				},
			},
		},

		"@media (min-width: 1150px)": {
			html: {
				"padding-right": "240px",
			},
			"side-area": {
				display: "block",
			},
		},

		"@media print": {
			html: {
				height: "100%",
				width: "100%",
				padding: 0,
				border: "none",
				body: {
					border: "none",
					height: "100%",
					width: "100%",
				},
			},
			h2: {
				"margin-top": "8px",
			},
			"#expandskills": {
				display: "none",
			},
			"qr-code": {
				// display: 'block'
			},
			"#online-tag": {
				color: "black",
				"text-decoration": "none",
				opacity: "0.5",
				"text-align": "right",
				display: "block",
			},
			"hyptiotes-tag": {
				display: "none",
			},
			"side-area": {
				display: "none",
			},

			"section-header": {
				a: {
					"text-decoration": "none",
					// 'border-bottom': '1px solid rgba(66,121,255,0.5)' // better on pdf
					"border-bottom": "none",
				},
			},
		},
	},
];
