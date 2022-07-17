import { recipe } from "@vanilla-extract/recipes";

import { sprinkles } from "@/design-system/core/properties.css";

export const background = recipe({
  variants: {
    color: {
      primary: sprinkles({ backgroundColor: "primary" }),
      secondary: sprinkles({ backgroundColor: "secondary" }),
    },
  },
});
