import { IConfig } from "../src/app/config";

export {};

declare global {
  interface Window {
    GGBApplet: typeof GGBApplet;
    publicConfig: IConfig;
    dataLayer?: object[];
  }
}
