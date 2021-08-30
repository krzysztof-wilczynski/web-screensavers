export default function getAllScreensavers(): string[] {
	const components = require.context('@/components/screensavers', true, /[A-Za-z0-9-_,\s]+\.vue$/i)
	console.log(components)
	return ['a', 'b'];
}
