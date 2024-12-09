// import { NextApiRequest, NextApiResponse } from "next";

// export interface IConfig {
//     /** @see NodeJS.ProcessEnv.PUBLIC_API_ROOT_WITHOUT_VERSION */
//     API_ROOT_WITHOUT_VERSION: string;
//   }
  
//   const config: IConfig = {
//     API_ROOT_WITHOUT_VERSION: process.env.NEXT_PUBLIC_API_ROOT_WITHOUT_VERSION,
//   };

// /** Can handle both client and serverside retrieval of config */
// export const getConfig = () => (typeof window === 'undefined' ? config : window.publicConfig);

// /** Should only be used to retrieve public environment variables */
// export const getConfigVariable = <T>(variable: keyof IConfig) => getConfig()?.[variable] as T;

// const handler = (_req: NextApiRequest, res: NextApiResponse) => {
//   return res.status(200).send(`window.publicConfig = ${JSON.stringify(config)}`);
// };

// export default handler;