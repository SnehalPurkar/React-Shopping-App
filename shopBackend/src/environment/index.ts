import * as path from 'path';
import * as fs from 'fs';
import { ServerConstant } from '../config/server';

const env = process.env.NODE_ENV || ServerConstant.ENV.DEV;
let envconfig;

switch (env) {
    case ServerConstant.ENV.DEV: envconfig = fs.readFileSync(path.resolve(__dirname, "environment/dev.json"), "utf-8"); break;
    case ServerConstant.ENV.PROD: envconfig = fs.readFileSync(path.resolve(__dirname, "environment/prod.json")); break;
    case ServerConstant.ENV.UAT: envconfig = fs.readFileSync(path.resolve(__dirname, "environment/uat.json")); break;
}
export const ENVConfig = JSON.parse(envconfig);