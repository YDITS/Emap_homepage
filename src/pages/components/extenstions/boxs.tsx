import Content from "./content"
import Box from "./box"
import { JsxElement } from "typescript";


const Layout = () => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    <Content />
  </Box>
);

export default Layout;