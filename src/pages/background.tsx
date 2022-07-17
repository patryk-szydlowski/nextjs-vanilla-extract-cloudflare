import { type GetStaticProps } from "next";

import { Background } from "@/design-system/components/background";

export default () => <Background color="secondary">I only use the background component</Background>;

export const getStaticProps: GetStaticProps = async () => ({ props: {} });
