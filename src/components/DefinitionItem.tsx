import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    // <dt> </dt> (term) 和 <dd> </dd> (description)
    // HTML中的标签, 描述列表中的 "术语" 和 "描述"
    <Box marginY={5}>
      {/* as 指定Heading组件渲染的标签类型, 将以 <dt> 标签形式呈现 */}
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
