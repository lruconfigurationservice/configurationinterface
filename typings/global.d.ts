import { IConfig } from "../src/app/config";

export {};

declare global {
  interface Window {
    publicConfig: IConfig;
  }
}
