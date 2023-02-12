import { Content } from "./content"
import { Box } from "./box"
import { JsxElement } from "typescript";

type Child = { 
    children: any
}

export const Layout = ({ children } : Child) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <Content />
  </Box>
);