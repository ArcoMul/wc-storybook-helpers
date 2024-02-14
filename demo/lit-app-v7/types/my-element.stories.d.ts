import type { StoryObj } from "@storybook/web-components";
import type { MyElement } from "./my-element";
import "./my-element";
import { ArgTypes, Args } from "@storybook/types";
declare const args: Args;
declare const meta: {
    title: string;
    component: string;
    args: Args;
    argTypes: ArgTypes<Args>;
    parameters: {
        actions: {
            handles: string[];
        };
    };
};
export default meta;
export declare const Default: StoryObj<MyElement & typeof args>;
