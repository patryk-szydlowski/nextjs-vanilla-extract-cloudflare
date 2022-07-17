import { recipe } from "@vanilla-extract/recipes";

import { sprinkles } from "@/design-system/core/properties.css";

export const text = recipe({
  variants: {
    color: {
      primary: sprinkles({ color: "primary" }),
      secondary: sprinkles({ color: "secondary" }),
    },
  },
});
