declare namespace NodeJS {
    export interface ProcessEnv {
        /**
     * Url of main api
     * @example https://website.com/
     */
    NEXT_PUBLIC_API_ROOT_WITHOUT_VERSION: string;

    PARAMS: object;

    PATH: string;
    }
}

declare module 'process' {
    global {
      namespace NodeJS {
        interface ProcessEnv extends Dict<string> {
          /** @deprecated Do not use an environment variable without defining it. Define a typing for it inside of env.d.ts */
          [key: string]: unknown | undefined;
        }
      }
    }
  }