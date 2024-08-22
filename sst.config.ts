/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'sst-test',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    };
  },
  async run() {
    const hello = new sst.aws.Function('Hello', {
      architecture: 'arm64',
      handler: 'src/framework/functions/hello.handler',
      memory: '1536 MB',
      runtime: 'nodejs20.x',
      timeout: '15 seconds',
      url: {
        cors: {
          allowMethods: ['POST'],
          allowOrigins: ['*'],
        },
      },
    });

    const testApi = new sst.aws.ApiGatewayV2('test', {
      cors: {
        allowOrigins: ['*'],
      },
      transform: {
        route: {
          handler: {
            architecture: 'arm64',
            memory: '1536 MB',
          },
        },
      },
    });

    testApi.route('GET /', 'src/framework/functions/test.handler');
    testApi.route('POST /', 'src/framework/functions/test.handler');

    const testPostBodyApi = new sst.aws.ApiGatewayV2('testPostBodyApi', {
      cors: {
        allowOrigins: ['*'],
      },
      transform: {
        route: {
          handler: {
            architecture: 'arm64',
            memory: '1536 MB',
          },
        },
      },
    });

    testPostBodyApi.route(
      'POST /',
      'src/framework/functions/test-post-body.handler',
    );

    const testQuerystringApi = new sst.aws.ApiGatewayV2('testQuerystringApi', {
      cors: {
        allowOrigins: ['*'],
      },
      transform: {
        route: {
          handler: {
            architecture: 'arm64',
            memory: '1536 MB',
          },
        },
      },
    });

    testQuerystringApi.route(
      'GET /',
      'src/framework/functions/test-querystring.handler',
    );

    const testParamsApi = new sst.aws.ApiGatewayV2('testParamsApi', {
      cors: {
        allowOrigins: ['*'],
      },
      transform: {
        route: {
          handler: {
            architecture: 'arm64',
            memory: '1536 MB',
          },
        },
      },
    });

    testParamsApi.route(
      'GET /{id}',
      'src/framework/functions/test-params-route.handler',
    );

    return {
      hello: hello.url,
      testApi: testApi.url,
    };
  },
});
