import { cleanEnv, str, num } from 'envalid';

export const envs = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ['development', 'production', 'test'],
    default: 'development',
  }),
  PORT: num({ default: 3000 }),
  MONGO_URL: str({ default: 'mongodb://localhost:27017/test' }),
});
