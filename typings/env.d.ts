declare namespace NodeJS {
    export interface ProcessEnv {
        /**
     * Url of main api
     * @example https://website.com/
     */
    PUBLIC_API_ROOT_WITHOUT_VERSION: string;

    PARAMS: object;

    PATH: string;
    }
}