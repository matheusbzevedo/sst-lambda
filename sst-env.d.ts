/* tslint:disable */
/* eslint-disable */
import 'sst';
declare module 'sst' {
  export interface Resource {
    Hello: {
      name: string;
      type: 'sst.aws.Function';
      url: string;
    };
    test: {
      type: 'sst.aws.ApiGatewayV2';
      url: string;
    };
    testParamsApi: {
      type: 'sst.aws.ApiGatewayV2';
      url: string;
    };
    testPostBodyApi: {
      type: 'sst.aws.ApiGatewayV2';
      url: string;
    };
    testQuerystringApi: {
      type: 'sst.aws.ApiGatewayV2';
      url: string;
    };
  }
}
export {};
