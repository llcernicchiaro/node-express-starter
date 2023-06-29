import { cleanEnv, port } from "envalid";

const validateEnv = (): void => {
  cleanEnv(process.env, {
    PORT: port(),
  });
};

export default validateEnv;
