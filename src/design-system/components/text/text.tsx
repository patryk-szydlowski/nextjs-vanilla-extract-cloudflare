import { type RecipeVariants } from "@vanilla-extract/recipes";
import { type ReactNode } from "react";

import { text } from "./text.css";

type NativeProps = {
  children: ReactNode;
};

type VariantProps = Required<RecipeVariants<typeof text>>;

type Props = NativeProps & VariantProps;

export const Text = ({ children, color }: Props) => (
  <span className={text({ color })}>{children}</span>
);
