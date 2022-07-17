import { type RecipeVariants } from "@vanilla-extract/recipes";
import { type ReactNode } from "react";

import { background } from "./background.css";

type NativeProps = {
  children: ReactNode;
};

type VariantProps = Required<RecipeVariants<typeof background>>;

type Props = NativeProps & VariantProps;

export const Background = ({ children, color }: Props) => (
  <div className={background({ color })}>{children}</div>
);
