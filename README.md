# Invictus Solutions — Angular Project

## 📁 Project Structure
```
src/
├── app/
│   ├── core/components/
│   │   ├── topbar/         ← Topbar (privacy + social links)
│   │   ├── navbar/         ← Full navbar with dropdowns
│   │   └── footer/         ← Footer with newsletter
│   ├── pages/home/
│   │   ├── home.component.ts         ← Home page shell
│   │   └── components/
│   │       ├── hero/                 ← Hero section
│   │       ├── stats/                ← Counter stats
│   │       ├── what-we-do/           ← Services grid
│   │       ├── how-we-do-it/         ← Process steps
│   │       ├── testimonials/         ← Swiper carousel
│   │       ├── projects/             ← Portfolio tiles
│   │       ├── clients/              ← Logo grid
│   │       └── cta/                  ← Let's Build Together
│   ├── app.component.ts    ← Root shell
│   ├── app.config.ts       ← Angular config
│   └── app.routes.ts       ← Routing
├── assets/                 ← PUT Sandbox assets/ folder contents HERE
│   ├── css/
│   ├── js/
│   ├── img/
│   └── images/             ← Invictus images (from zip)
├── index.html
├── main.ts
└── styles.css              ← Global overflow + Invictus CSS additions
```

## ⚡ Setup & Run

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Copy Sandbox assets
Copy your Sandbox `assets/` folder into `src/assets/`:
```
src/assets/css/plugins.css
src/assets/css/style.css
src/assets/css/colors/purple.css
src/assets/js/plugins.js
src/assets/js/theme.js
src/assets/img/         ← all Sandbox images
```

### Step 3 — Run locally
```bash
ng serve
# Open: http://localhost:4200
```

### Step 4 — Build for production
```bash
ng build
# Output: dist/invictus-solutions/
```

## 🚀 Deploy to Vercel

### Option A — Vercel Dashboard (recommended for team preview)
1. Push this project to GitHub
2. Go to https://vercel.com → New Project → Import repo
3. Set **Build Command**: `ng build`
4. Set **Output Directory**: `dist/invictus-solutions/browser`
5. Click Deploy → get live URL like `invictus-solutions.vercel.app`
6. Every `git push` auto-redeploys — teammates always see latest

### Option B — Vercel CLI
```bash
npm install -g vercel
vercel          # first deploy
vercel --prod   # update deploy
```

## 📝 Adding New Pages
```bash
# Generate a new page component
ng generate component pages/about --standalone
ng generate component pages/services --standalone
ng generate component pages/portfolio --standalone

# Then add route in app.routes.ts
{ path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) }
```

## 🔄 Next Steps
- [ ] Replace Sandbox placeholder images with Invictus assets
- [ ] Build About, Services, Portfolio, Careers, Training, Contact, Blog pages
- [ ] Add Angular animations for scroll cues (replace Sandbox JS)
- [ ] Connect contact form to backend/email service
