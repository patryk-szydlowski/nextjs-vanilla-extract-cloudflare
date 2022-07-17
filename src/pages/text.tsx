import { type GetServerSideProps } from "next";

import { Text } from "@/design-system/components/text";

export default () => <Text color="secondary">I only use the text component</Text>;
export const getServerSideProps: GetServerSideProps = async () => ({ props: {} });
