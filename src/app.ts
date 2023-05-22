import config from "./config/index";

export const return_value = (a: number) => {
  console.log(config.test);
  return a;
};
