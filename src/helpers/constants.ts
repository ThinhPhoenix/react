export const envVar = {
  isProd: process.env.PUBLIC_BUN_ENV === 'production',
  bunEnv: process.env.PUBLIC_BUN_ENV,
  base: process.env.PUBLIC_BASE,
  apiUrl: process.env.PUBLIC_API,
  apiTimeout: Number(process.env.PUBLIC_API_TIMEOUT),
};
