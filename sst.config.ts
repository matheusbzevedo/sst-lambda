/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: "sst-test",
			removal: input?.stage === "production" ? "retain" : "remove",
			home: "aws",
		};
	},
	async run() {
		const hello = new sst.aws.Function("Hello", {
			handler: "src/framework/functions/hello.handler",
			url: true,
			architecture: "arm64",
			memory: "1536 MB",
		});

		return {
			hello: hello.url,
		};
	},
});
