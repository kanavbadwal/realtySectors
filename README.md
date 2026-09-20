# Realty Sectors

> Connecting You to Your Dream Property – Where Deals Meet Desires!

Official website for **Realty Sectors** – featuring verified real estate listings, luxury villas, modern condominiums, commercial SCOs, and planned townships across Chandigarh, Mohali, Panchkula, New Chandigarh, and Zirakpur.

---

## 🚀 Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Icons**: React Icons (`react-icons/fa`)
- **Deployment**: GitHub Pages (`gh-pages`)
- **Domain**: [greatermohali.com](https://greatermohali.com)

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Check for Lint Errors
```bash
npm run lint
```

### 4. Build for Production Locally
```bash
npm run build
```

---

## 📦 Deployment Guide (GitHub Pages)

The production website is deployed to GitHub Pages and served under the custom domain **`greatermohali.com`**.

### Branch Structure

- **`main`**: Contains the source code (`src/`, `public/`, `package.json`, etc.).
- **`gh-pages`**: An automated deployment branch that holds only the compiled production build artifacts (`dist/` output: `index.html`, bundled assets, and `CNAME`).

> [!IMPORTANT]
> **Do not** push or merge the `main` branch directly into the `gh-pages` branch using `git push origin main:gh-pages`. They have separate commit histories and file structures.

---

### Step-by-Step Deployment Workflow

Whenever you make changes to the source code on `main`, follow these steps to deploy:

#### Step 1: Commit and Push Source Changes to `main`
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

#### Step 2: Deploy to GitHub Pages
Run the deploy script:
```bash
npm run deploy
```

### What `npm run deploy` Does:
1. **`predeploy` (`npm run build`)**: Vite compiles the React source code, optimizes images, and outputs the production bundle into the `dist/` directory.
2. **`deploy` (`gh-pages -d dist`)**: Pushes the contents of the `dist/` directory directly to the `gh-pages` branch on GitHub.
3. GitHub Pages automatically detects the new commit on `gh-pages` and updates the live site at [greatermohali.com](https://greatermohali.com).

---

## 🌐 Custom Domain Configuration (`CNAME`)

- The custom domain is set to `greatermohali.com`.
- The `CNAME` file is located at `public/CNAME`.
- Vite automatically copies all files from `public/` into `dist/` during every build, ensuring the domain configuration is preserved on every deployment.

---

## 🛠️ Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Vite development server |
| `npm run build` | Builds the app for production in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to verify code quality |
| `npm run deploy` | Builds the app and deploys to the `gh-pages` branch |
