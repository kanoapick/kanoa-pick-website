import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = repositoryName?.toLowerCase().endsWith(".github.io");

export default defineConfig({
  plugins: [react()],
  base: process.env.PAGES_BASE_PATH !== undefined
    ? `${process.env.PAGES_BASE_PATH.replace(/\/$/, "")}/`
    : repositoryName && !isUserSite ? `/${repositoryName}/` : "/",
});
