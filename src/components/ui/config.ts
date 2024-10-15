import { Noir } from "../themes/Noir";

export const ui = {
  theme: {
    preset: Noir,
    options: {
      prefix: "p",
      darkModeSelector: "light",
      cssLayer: {
        name: "primevue",
        order: "tailwind-base, primevue, tailwind-utilities",
      },
    },
  },
};
