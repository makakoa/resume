const hyptiotes = require("../hyptiotes");
const root = document.getElementById("root");

const util = require("./util");
const _ = require("lodash");

const addEmployment = require("./employment");

var webResumeURL = "https://makakoa.github.io/website/resume/";
var webResumeText = "makakoa.github.io/website/resume";

var keywords = "";

var brokenLink = {
	style: {
		"text-decoration": "line-through",
		color: "gray",
		opacity: "50%",
		"pointer-events": "none",
	},
};

hyptiotes.mount(root, [
	"div",
	require("./styles"),
	require("./media.styles"),

	require("./header"),

	require("./skills"),

	require("./employment")([
		{
			icon: util.brand("meta"),
			position: "Software Engineer at ",
			location: "Meta",
			subtitle: "Instagram & Facebook Web",
			links: [
				{
					display: "ig.com",
					url: "https://www.instagram.com",
				},
				{
					display: "fb.com",
					url: "https://www.facebook.com",
				},
			],
			start: "July 2017",
			end: "Feb 2023",
			bullets: [
				"Lead dozens of engineers on consolidation of Instagram Web and Facebook Web Infrastructure",
				"Drove facebook web ad rendering and reliability efforts increasing web revenue by 10%+ ($100Ms)",
				"Ran completion of web likes / comments rewrite as precursor to the facebook.com React rewrite",
				"Developed insights and analyses and coordinated across dozens of stakeholders and teams",
				"Pioneered engineering culture on Instagram Web and community building on Mixed@ DEI club",
			],
		},
		{
			icon: ["img", { src: "./flybox.png", height: 20 }],
			position: "Creator of",
			location: "Flybox",
			subtitle: "Email & Messaging Hybrid Platform",
			links: [
				{
					display: "flybox.online",
					disable: true,
					url: "https://alpha.flybox.online/about",
				},
			],
			start: "July 2016",
			end: "July 2017",
			bullets: [
				// 'Features: Rich Messaging, Email, Profiles, Search & Filter, Composition, Contacts, Animations, Tagging, Invites, Attachments, Embedding',
				"Designed and built responsive SPA in React for desktop web, mobile web, iOS, and Android",
				"Constructed Node API with PubNub for push notifications and real-time updates between clients",
				"Architected data model and synchronization logistics for an email compatible message platform",
				// 'Programmed mock third party APIs for realistic End-to-End testing with Nightwatch.js',
				// "Leveraged AWS S3 to replace email attachments with secure file hosting feature",
				"Integrated AWS, Heroku, Cloudinary, Cloudflare, and Postgres",
			],
		},
		{
			icon: util.icon("id-badge"),
			position: "Freelance Engineer",
			location: "",
			subtitle: "Unbubble Project & Placed App",
			links: [
				{
					display: "unbubble.io",
					disable: true,
					url: "https://unbubble.io",
				},
				{
					display: "placedapp.com",
					disable: true,
					url: "https://placedapp.com",
				},
			],
			start: "Jan 2017",
			end: "July 2017",
			bullets: [
				"Created powerful React sugar library to accelerate and simplify development of a hybrid SPA",
				"Built lightweight JS to CSS transpiler with PostCSS integration and flexible media query handles",
				"Extended web app created with a home rolled reactive framework for dual mode resume browsing",
				"Maintained Python machine learning algorithm for classifying attachments as resumes",
			],
		},
		{
			icon: ["img", { src: "./nomic.png", width: 20 }],
			position: "Software Engineer at",
			location: "Nomic",
			subtitle: "Recruiting Platform Startup",
			links: [
				{
					display: "nomic.com",
					disable: true,
					url: "https://nomic.com",
					// },
					// {
					//   display: 'nomic',
					//   url: "https://www.linkedin.com/company/2197996/"
				},
			],
			start: "April 2015",
			end: "July 2016",
			bullets: [
				"Owned internal tool development and worked on multiple web apps built with reactive framework",
				"Made contributions to UI and feature design for handling recruiting candidate pipelines",
				"Interviewed and lead new hires through onboarding, pair programming, and code review",
			],
		},
		{
			icon: util.icon("dna"),
			position: "Research Assistant",
			location: "at Garmire Lab",
			subtitle: "Bioinformatics Lab",
			links: [
				{
					display: "research paper",
					url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003851",
				},
			],
			start: "May 2013",
			end: "August 2013",
			bullets: [
				"Published co-author in pilot study to correlate breast cancer subtypes and genes of interest",
				"Programmed testing frameworks in R and Perl to find statistical correlations in genomic data",
			],
		},
	]),

	require("./creations")([
		{
			iconSrc: "./vyz-icon.png",
			name: "Vyz",
			subtitle: "MacOS Audio Visualizer",
			links: [
				{
					url: "https://apps.apple.com/us/app/vyz/id6454350559",
					icon: util.brand("app-store"),
					name: "app store",
				},
			],
		},
		{
			iconSrc: "./enviz-z.png",
			name: "Enviz",
			subtitle: "Machine Learning Powered Image Feed",
			links: [
				{
					url: "http://lbby.us/enviz",
					disable: true,
					name: "enviz.herokuapp.com",
				},
			],
		},
		{
			iconSrc: "./braincryption.png",
			name: "Braincryption",
			subtitle: "Software Driven Visual Encryption",
			links: [
				{
					url: "http://makakoa.github.io/braincryption/app/",
					icon: util.icon("link"),
					name: "demo",
				},
				{
					url: "https://chrome.google.com/webstore/detail/braincryption/cdhppfjjeickpbhjmjplnddeklonjhkj",
					icon: util.brand("chrome"),
					name: "chrome extension",
				},
			],
		},
	]),

	require("./education"),

	[
		"hyptiotes-tag",
		"built with my own ",
		[
			"a",
			{
				href: "https://github.com/makakoa/resume",
			},
			"hyptiotes.js",
			[
				"img",
				{
					src: "./hyptiotes-small.png",
					width: "20px",
					style: { margin: "0 8px" },
				},
			],
		],
		" (w/ ",
		[
			"a",
			{
				href: "https://fonts.google.com/specimen/Nunito/about",
			},
			"googlefonts",
		],
		" and ",
		[
			"a",
			{
				href: "https://fontawesome.com/",
			},
			"fontawesome",
		],
		")",
	],

	require("./sidearea"),

	require("./keywords"),

	[
		"a",
		{
			id: "online-tag",
			href: webResumeURL + window.location.search,
		},
    "web version: ",
		webResumeText + window.location.search,
	],
]);
