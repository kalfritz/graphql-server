declare namespace NodeJS {
  export interface ProcessEnv {
    ACCESS_TOKEN_SECRET: string;
    REFRESH_TOKEN_SECRET: string;
    NODE_ENV: 'development' | 'production';
    PORT?: string;
    PWD: string;
  }
}
