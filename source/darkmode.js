const util = require("./util");

let isDark = false;
module.exports = function darkMode({ update }) {
	return [
		"button",
		{
			class: "action",
			onclick: function () {
				const doc = document.body.parentElement;
				doc.setAttribute("class", isDark ? "" : "dark");
				isDark = !isDark;
				update();
			},
		},
		isDark ? "Light Mode" : "Dark Mode",
		["span", { style: { "margin-left": "8px" } }, isDark ? util.icon("sun") : util.icon("moon")],
	];
};
