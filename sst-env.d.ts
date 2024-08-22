/* tslint:disable */
/* eslint-disable */
import "sst";
declare module "sst" {
	export interface Resource {
		GetName: {
			name: string;
			type: "sst.aws.Function";
			url: string;
		};
		Hello: {
			name: string;
			type: "sst.aws.Function";
			url: string;
		};
		test: {
			name: string;
			type: "sst.aws.Function";
			url: string;
		};
	}
}
export {};
