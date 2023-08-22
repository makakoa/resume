"use strict";

var _ = require("lodash");

function list(items, atts) {
	return [
		"ul",
		atts || null,
		..._.map(items, function (i) {
			return ["li", i];
		}),
	];
}

function icon(name, solid = true) {
  const prefix = solid ? 'fa-solid' : 'fa-regular';
	return ["i", { class: prefix + " fa-" + name}];
}
function brand(name, ) {
	return ["i", { class: "fa-brands fa-" + name}];
}

const urlparams = window.location.search
	.slice(1)
	.split("&")
	.map((pair) => pair.split("="))
	.reduce((params, [key, value]) => {
		params[key] = value;
		return params;
	}, {});
function getParam(key) {
	return urlparams[key];
}

function getEmail() {
	const shortEmail = getParam("g");
	if (shortEmail) return decodeURIComponent(shortEmail) + "@gmail.com";

	const plainEmail = getParam("e");
	if (plainEmail) return decodeURIComponent(plainEmail);
	const encodedEmail = getParam("email");
	if (!encodedEmail) return;
	return atob(decodeURIComponent(encodedEmail));
}

function getPhone() {
	const plainPhone = getParam("p");
	if (plainPhone) return formatPhone(decodeURIComponent(plainPhone));

	const encodedPhone = getParam("phone");
	if (!encodedPhone) return;
	return atob(decodeURIComponent(encodedPhone));
}

function isChromeBased() {
  return !!window.chrome;
}

function formatPhone(p) {
	return `(${p.slice(0, 3)}) ${p.slice(3, 6)}-${p.slice(6)}`;
}

module.exports = {
	list,
	icon,
  brand,
	getParam,
	getEmail,
	getPhone,
  isChromeBased
};
