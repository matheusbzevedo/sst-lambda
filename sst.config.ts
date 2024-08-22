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
			architecture: "arm64",
			handler: "src/framework/functions/hello.handler",
			memory: "1536 MB",
			runtime: "nodejs20.x",
			timeout: "15 seconds",
			url: {
				cors: {
					allowMethods: ["POST"],
					allowOrigins: ["*"],
				},
			},
		});

		const test = new sst.aws.Function("test", {
			architecture: "arm64",
			handler: "src/framework/functions/test.handler",
			memory: "1536 MB",
			runtime: "nodejs20.x",
			timeout: "15 seconds",
			url: {
				cors: {
					allowMethods: ["GET"],
					allowOrigins: ["*"],
				},
			},
		});

		const getName = new sst.aws.Function("GetName", {
			architecture: "arm64",
			handler: "src/framework/functions/get-name.handler",
			memory: "1536 MB",
			runtime: "nodejs20.x",
			timeout: "15 seconds",
			url: {
				cors: {
					allowMethods: ["POST"],
					allowOrigins: ["*"],
				},
			},
		});

		return {
			getName: getName.url,
			hello: hello.url,
			test: test.url,
		};
	},
});
