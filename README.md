# CaratLane Internal Assistant 🔷
**AI-powered chatbot for CaratLane customer-facing employees**

> Internal tool only · Built on Claude AI · Deployed via GitHub + Vercel (free)

---

## What This Bot Does

| Prefix | Purpose |
|---|---|
| `/support` | Step-by-step process guides for employees |
| `/customer` | Professional customer-facing replies |
| `/policy` | Policy answers with source links |
| `/goldrate` | Gold rate, OGE, Treasure Chest, Digital Gold |

---

## HOW TO DEPLOY (Step-by-Step — No Coding Needed)

### STEP 1 — Create a GitHub Account
1. Go to **github.com** → Click **Sign Up**
2. Create a free account with your work email

### STEP 2 — Create a New Repository
1. Click the **+** icon (top right) → **New repository**
2. Name it: `caratLane-assistant`
3. Set to **Private** (important for security)
4. Check ✅ **Add a README file**
5. Click **Create repository**

### STEP 3 — Upload the Files
1. In your new repository, click **Add file** → **Upload files**
2. Upload `index.html` (the main chatbot file)
3. Click **Commit changes**

> That's it for GitHub. Now set up the live website:

### STEP 4 — Deploy on Vercel (Free)
1. Go to **vercel.com** → Sign up with your GitHub account
2. Click **Add New Project**
3. Select your `caratLane-assistant` repository
4. Click **Deploy** (leave all settings as default)
5. Wait ~30 seconds → Your live URL is ready! 🎉

Example URL: `caratLane-assistant.vercel.app`

### STEP 5 — Add Your API Key (One-time setup)
The chatbot needs a Claude API key to work.

1. Go to **console.anthropic.com** → Sign up free
2. Click **API Keys** → **Create Key** → Copy it
3. In Vercel: Go to your project → **Settings** → **Environment Variables**
4. Add variable: Name = `ANTHROPIC_API_KEY` | Value = your key
5. Click **Save** → **Redeploy**

> ⚠️ NEVER paste your API key directly in the HTML file. Use Vercel environment variables only.

---

## HOW TO UPDATE POLICIES (No Coding Needed!)

When a policy changes:

1. Go to your **GitHub repository**
2. Open `index.html` → Click the **pencil icon** (Edit)
3. Find the `const KB = \`` section (around line 160)
4. Update the relevant policy text inside it
5. Click **Commit changes** at the bottom
6. Vercel automatically rebuilds the live site in ~30 seconds ✅

---

## FILE STRUCTURE

```
caratLane-assistant/
├── index.html          ← Complete chatbot (single file)
└── README.md           ← This guide
```

---

## FEATURES

- ✅ CaratLane diamond logo + brand colours
- ✅ Dark mode / Light mode toggle
- ✅ 4 prefix commands with distinct tones
- ✅ Quick question sidebar
- ✅ Source links on every bot response
- ✅ Mobile-friendly (works on tablets for store staff)
- ✅ Full knowledge base: Returns, Exchange, T&C, FAQ, xCLusive, Digital Gold, OGE, Treasure Chest, Postcards, TAH, Shipping
- ✅ Conversation memory within a session
- ✅ Read-only for users — only you can edit via GitHub

---

## KNOWLEDGE BASE SOURCES

| Topic | Official URL |
|---|---|
| Returns & Exchanges | https://www.caratlane.com/returns-exchanges |
| Terms & Conditions | https://www.caratlane.com/terms-and-conditions |
| FAQs | https://www.caratlane.com/frequently-asked-questions |
| xCLusive Program | https://www.caratlane.com/xclusive |
| Digital Gold | https://www.caratlane.com/caratlane-digital-gold |
| Gold Gift Card | https://www.caratlane.com/caratlane-digital-gold/gift-card |
| Old Gold Exchange | https://www.caratlane.com/gold-exchange |
| Treasure Chest | https://www.caratlane.com/treasure-chest-gold-scheme |
| Postcards | https://www.caratlane.com/postcards |
| Shipping Policy | https://www.caratlane.com/customer-service/shipping-policy |
| Gold Rate | https://www.caratlane.com/gold-rate |

---

## SECURITY

- GitHub repository is set to **Private**
- Users only receive the Vercel URL — no code access
- API key stored as Vercel environment variable — never exposed
- No login required for employees (URL-based access)

---

## WHEN MANAGEMENT APPROVES — SCALING OPTIONS

| Feature | Tool | Cost |
|---|---|---|
| Custom domain | Vercel + domain registrar | ~₹800/year |
| Password protection | Vercel password protection | Free (Pro plan) |
| Usage analytics | Vercel Analytics | Free tier |
| Larger knowledge base | Supabase vector DB | Free tier |
| Role-based access | Clerk auth | Free tier |

---

*Built for CaratLane Quality Analyst team · Beta v1.0*
*Powered by Anthropic Claude AI*
