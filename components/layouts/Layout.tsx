import Box from "@mui/material/Box";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar, Sidebar } from "../ui";

interface Props extends PropsWithChildren {
  title?: string;
}
export const Layout: FC<Props> = ({ title = "Open Jira", children }) => {
  return (
    <Box
      sx={{
        flexFlow: 1,
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>

      {/* Navbar */}
      <Navbar />
      {/* Sidebar */}
      <Sidebar />
      <Box
        sx={{
          padding: "10px 20px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
