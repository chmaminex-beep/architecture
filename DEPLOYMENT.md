# Deploying "Restored by Todd" to Hostinger via GitHub

This project is a React SPA built with Vite. Hostinger serves static files from the `public_html` directory.

---

### Method 1: Automatic Deployment with GitHub Actions (Recommended)

Every time you push changes to your `main` branch, GitHub Actions will automatically compile the website and upload the production files to Hostinger.

#### Step 1: Push your code to GitHub
If you haven't initialized your Git repository yet:
```bash
git init
git add .
git commit -m "Initial commit of Restored by Todd"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

#### Step 2: Get your Hostinger FTP credentials
1. Log in to your **Hostinger hPanel**.
2. Select your website/domain.
3. In the search bar or sidebar, go to **Files** → **FTP Accounts**.
4. Note your:
   - **FTP Host / Server** (e.g., `ftp.yourdomain.co.nz` or the IP address shown)
   - **FTP Username** (e.g., `u123456789`)
   - **FTP Password** (click *Change password* if you don't remember it)

#### Step 3: Add Secrets to GitHub
1. In your GitHub repository, click **Settings** (tab at the top).
2. In the left sidebar, navigate to **Secrets and variables** → **Actions**.
3. Click **New repository secret** and add these three secrets:
   - Name: `HOSTINGER_FTP_SERVER` | Value: *(Your FTP host/IP)*
   - Name: `HOSTINGER_FTP_USERNAME` | Value: *(Your FTP username)*
   - Name: `HOSTINGER_FTP_PASSWORD` | Value: *(Your FTP password)*

#### Step 4: Trigger the Deployment
- Make any push to `main`, or go to the **Actions** tab on GitHub, select **Deploy to Hostinger via FTP**, and click **Run workflow**.
- GitHub will install dependencies, build the production files into `dist/`, and automatically upload them into Hostinger's `public_html/`.

---

### Method 2: Manual Build & Direct Upload (Alternative)

If you prefer to build locally and upload directly:

1. Run the build command locally:
   ```bash
   npm install
   npm run build
   ```
2. This creates a `dist/` folder containing `index.html`, `assets/`, and `.htaccess`.
3. Open **Hostinger File Manager** in hPanel.
4. Navigate to `public_html/`.
5. Upload all the contents inside the `dist/` folder into `public_html/`.

---

### Note on SPA Routing (.htaccess)
The project includes a `public/.htaccess` file that automatically gets bundled into `dist/.htaccess`. This ensures that refreshing any section or URL rewrite on Hostinger's Apache/LiteSpeed web server routes properly without 404 errors.
