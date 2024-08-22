/* tslint:disable */

import "sst";
declare module "sst" {
	export interface Resource {
		Hello: {
			name: string;
			type: "sst.aws.Function";
			url: string;
		};
	}
}
export {};
