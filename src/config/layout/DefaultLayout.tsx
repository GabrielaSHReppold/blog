import { Box, Container } from "@mui/material";
import { Footer } from "../../components/Footer/index";
import { Header } from "../../components/Header/index";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Container sx={{ py: 10, flexGrow: 1 }}>{children}</Container>
      <Footer />
    </Box>
  );
}
