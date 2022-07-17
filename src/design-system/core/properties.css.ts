import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { colors } from "./theme.css";

const colorProperties = defineProperties({
  properties: {
    backgroundColor: colors.background,
    color: colors.foreground,
  },
});

export const sprinkles = createSprinkles(colorProperties);
