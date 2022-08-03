import { resolve } from "node:path";

type FancyTBX = string;

export default {
  fancyTBX(): FancyTBX {
    return `It’s very fancy. ${resolve(__filename)}`;
  },
};
