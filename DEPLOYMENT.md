# Connecting Your Hostinger Domain to GitHub via DNS

When you host your site on **GitHub** (using GitHub Pages) and connect your domain purchased on **Hostinger**, you don't need any paid web hosting servers or FTP credentials. GitHub builds and hosts your website for free with a global CDN and automatic SSL, while Hostinger manages your domain DNS!

---

## Complete Step-by-Step Guide

### Step 1: Push Your Code to GitHub
Run the following in your local terminal:
```bash
git init
git add .
git commit -m "Deploy Restorations by Henderson & Co to GitHub Pages"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
git push -u origin main
```

---

### Step 2: Configure GitHub Pages
1. Go to your repository on **GitHub.com**.
2. Click **Settings** (tab at the top right).
3. In the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - Change **Source** from "Deploy from a branch" to **GitHub Actions**.
   *(We have already provided `.github/workflows/deploy-pages.yml` in the project, so GitHub will now automatically build and publish your Vite site on every push!)*

---

### Step 3: Configure DNS in Hostinger hPanel

1. Log in to **Hostinger** and go to **hPanel** (https://hpanel.hostinger.com).
2. Go to **Domains** and click on your domain name.
3. In the left menu, click **DNS / Nameservers** (or **DNS Zone Editor**).
4. You need to configure the **A Records** (for the root domain) and a **CNAME Record** (for `www`).

#### A Records (Apex / Root Domain `@`)
Look for any existing `A` records pointing `@` to Hostinger's default IP. Edit or delete them, and add these **4 GitHub Pages IP addresses**:

| Type | Name | Points to / Content | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` | 14400 (or default) |
| **A** | `@` | `185.199.109.153` | 14400 (or default) |
| **A** | `@` | `185.199.110.153` | 14400 (or default) |
| **A** | `@` | `185.199.111.153` | 14400 (or default) |

#### CNAME Record (For `www`)
Add or edit the `CNAME` record for `www` to point to your GitHub user domain:

| Type | Name | Points to / Content | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `<YOUR_GITHUB_USERNAME>.github.io` | 14400 (or default) |

*(Replace `<YOUR_GITHUB_USERNAME>` with your actual GitHub username, e.g. `johnsmith.github.io`)*

Click **Save** or **Add Record** for each.

---

### Step 4: Add Your Custom Domain in GitHub Pages

1. Return to your GitHub repository: **Settings** → **Pages**.
2. Scroll down to **Custom domain**.
3. Enter your domain (e.g. `yourdomain.com` or `www.yourdomain.com`).
4. Click **Save**.
   - GitHub will check the DNS records you added in Hostinger. (DNS propagation typically takes 5 to 30 minutes).
5. Once DNS check passes, tick the checkbox **Enforce HTTPS** to enable free automatic SSL/TLS encryption.

---

### Step 5: Automatic Updates

Any time you make a change and run `git push`, the GitHub Actions workflow will:
1. Automatically pull the latest code.
2. Run `npm run build`.
3. Publish the updated site live to your Hostinger domain.


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
