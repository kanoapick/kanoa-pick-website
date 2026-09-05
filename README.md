# Kanoa Pick Website

This is the editable source for Kanoa Pick's surfing and ocean science portfolio.

## First-time setup

1. Install [Visual Studio Code](https://code.visualstudio.com/) and [Node.js LTS](https://nodejs.org/).
2. Open this folder in Visual Studio Code.
3. Open **Terminal > New Terminal**.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local address shown in the terminal, usually `http://localhost:5173`.

If Terminal says `zsh: command not found: npm`, install Node.js (which includes npm). On a Mac with Homebrew, run `brew install node`, then open a new terminal. Run the npm commands from this folder, which contains `package.json`; from the parent `website` folder, first run `cd kanoa-pick-website-vscode-package`.

## Where to make changes

- Main text, links, and page structure: `src/App.tsx`
- Colors, spacing, typography, and image layout: `src/styles.css`
- Images, PDFs, and video: `public/`
- Scroll-triggered video behavior: `src/ScrollVideo.tsx`

Keep an existing filename when replacing an image or PDF if you want the website to update without changing the code.

## Publish for free with GitHub Pages

1. Create a new empty GitHub repository.
2. Upload or push the contents of this folder to its `main` branch, with `package.json` and the hidden `.github/workflows/deploy.yml` at the repository root. Do not upload the enclosing folder, `node_modules`, or `dist`.
3. In the repository, open **Settings > Pages**.
4. Under **Build and deployment**, select **GitHub Actions** as the source.
5. Open the **Actions** tab and wait for the deployment to finish.

The included workflow publishes the site after every push to `main`. If the first run fails before Pages is enabled, use **Actions > Deploy website to GitHub Pages > Run workflow** after selecting the Pages source. The project automatically detects the GitHub repository name when constructing asset paths, including the root path for a repository named `<username>.github.io`.

## Build before publishing

Run `npm run build` before pushing. A successful build creates the deployable site in `dist/`.

## Updating the CV

Replace `public/kanoa-pick-cv.pdf` with the new PDF and keep the same filename. Commit and push the replacement, and GitHub Pages will publish it automatically.
