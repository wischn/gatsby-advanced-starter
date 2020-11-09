const config = {
	siteTitle: "breite 12 - Gemeinschaftsbüro im Leipziger Osten", // Site title.
	siteTitleShort: "breite12", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
	siteTitleAlt: "kreatives Digitalbüro in Reudnitz - 12breite", // Alternative site title for SEO.
	siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
	siteUrl: "https://breite12.work", // Domain of your website without pathPrefix.
	pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
	siteDescription:
		"Symbiose aus Webdesign und -Entwicklung mit Kopf, direkt bei euch in Leipzig, von der Gen Y für Unternehmen, die ihre Gen Y Kunden ansprechen wollen. ", // Website description used for RSS feeds/meta description tag.
	// siteRss: "/rss.xml", // Path to the RSS file.
	// siteRssTitle: "Gatsby Advanced Starter RSS feed", // Title of the RSS feed
	// siteFBAppID: "1825356251115265", // FB Application ID for using app insights
	googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
	disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
	dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
	dateFormat: "DD/MM/YYYY", // Date format for display.
	postsPerPage: 4, // Amount of posts displayed per listing page.
	userName: "Annika & Magnus", // Username to display in the author segment.
	userEmail: "hi@breite12.work", // Email used for RSS feed's author segment
	userTwitter: "wischn_", // Optionally renders "Follow Me" in the UserInfo segment.
	userLocation: "Leipzig, Deutschland", // User location to display in the author segment.
	userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
	userDescription:
		"Hi! Wir sind Annika und Magnus, beschäftigen uns mit allen Dingen digital und wollen mit unserem kleinen Gemeinschaftsbüro einen Ort für Kreativität und Zusammenkunft schaffen. Schau doch mal vorbei!", // User description to display in the author segment.
	// Links to social profiles/projects you want to display in the author segment/navigation bar.
	userLinks: [
		{
			label: "GitHub",
			url: "https://github.com/Vagr9K/wischn",
			iconClassName: "fa fa-github",
		},
		{
			label: "Twitter",
			url: "https://twitter.com/wischn_",
			iconClassName: "fa fa-twitter",
		},
		{
			label: "Email",
			url: "mailto:hi@breite12.work",
			iconClassName: "fa fa-envelope",
		},
	],
	copyright: "Copyright © 2020. Magnus & Annika", // Copyright string for the footer of the website and RSS feed.
	themeColor: "#c62828", // Used for setting manifest and progress theme colors.
	backgroundColor: "#e0e0e0", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
	config.pathPrefix = "";
} else {
	// Make sure pathPrefix only contains the first forward slash
	config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
	config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
	config.siteRss = `/${config.siteRss}`;

module.exports = config;
