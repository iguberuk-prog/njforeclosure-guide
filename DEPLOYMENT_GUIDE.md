# NJ Foreclosure Guide ~ Deployment to Netlify

## Quick Start

Your website is built and ready to deploy! Follow these steps to get it live on Netlify.

---

## Step 1: Prepare Your GitHub Repo

1. Go to [github.com](https://github.com) and create a free account if you don't have one
2. Create a new repository called `njforeclosure-guide`
3. Clone it to your computer and copy all the files from this project into it
4. Run these commands:

```bash
cd njforeclosure-guide
git add .
git commit -m "Initial commit: NJ Foreclosure Guide website"
git push origin main
```

---

## Step 2: Connect Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up / log in (you can use your GitHub account)
3. Click "Add new site" > "Import an existing project"
4. Select GitHub, then choose your `njforeclosure-guide` repository
5. Netlify will auto-detect your build settings (already configured in `netlify.toml`)
6. Click "Deploy site"

**That's it!** Netlify will build and deploy your site automatically.

You'll get a URL like: `https://[random-name].netlify.app`

---

## Step 3: Connect Your GoDaddy Domain

1. Go to your [GoDaddy account](https://godaddy.com)
2. Find your `njforeclosureguide.org` domain
3. Go to "DNS Management"
4. Find the "Nameservers" section
5. Change the nameservers to Netlify's:
   - `dns1.p05.nsone.net`
   - `dns2.p06.nsone.net`
   - `dns3.p07.nsone.net`
   - `dns4.p08.nsone.net`

6. Go back to Netlify
7. In your site settings, go to "Domain management"
8. Click "Add domain" and enter `njforeclosureguide.org`
9. Netlify will guide you through adding the DNS records
10. Wait 24-48 hours for DNS to propagate

**Your domain will now point to your Netlify site!**

---

## Step 4: Set Up HTTPS (Free)

Netlify provides free HTTPS certificates automatically. In your Netlify site settings:

1. Go to "Domain management"
2. Find "HTTPS" section
3. Netlify should have already generated a certificate
4. Make sure "Force HTTPS" is enabled

---

## Ongoing Maintenance

### To update the website:

1. Make changes to files on your computer
2. Run `git add .` and `git commit -m "your message"`
3. Run `git push origin main`
4. Netlify automatically rebuilds and deploys! (takes ~30-60 seconds)

### To add more guides:

Create new files in `/app/guides/[slug]/page.tsx` following the same pattern as `foreclosure-101`.

### To add company pages:

Create new files in `/app/companies/[slug]/page.tsx` following the same pattern as `njoffer`.

---

## What's Inside

```
njforeclosure-guide/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Site layout & metadata
│   ├── quiz/page.tsx            # Quiz & routing logic
│   ├── guides/                  # All educational guides
│   │   ├── page.tsx             # Guides directory
│   │   ├── foreclosure-101/page.tsx
│   │   └── [more guides...]
│   ├── companies/               # Cash buyer company pages
│   │   ├── page.tsx             # Companies directory
│   │   ├── njoffer/page.tsx
│   │   └── [more companies...]
│   └── resources/               # (Future) Partner directory
├── netlify.toml                 # Netlify configuration
└── package.json                 # Dependencies
```

---

## Site Structure

**Homepage** → Explains the problem & links to quiz
**Quiz** → Routes people to company/resource recommendations
**Companies** → Pages for NJOffer, Home Equity Partners, Property Investors NJ
**Guides** → Educational content (Foreclosure 101, options, cash sales, etc.)
**Resources** → (Coming soon) Partner directory

---

## Next Steps to Personalize

1. **Add testimonials** ~ Replace example testimonials with real ones from NJOffer customers
2. **Add your phone/email** ~ Contact forms should route to your systems
3. **Add more guides** ~ Create pages for the remaining topics (loan modification, short sale, etc.)
4. **Add blog** ~ Create regular content for SEO
5. **Analytics** ~ Add Google Analytics to track visitor behavior
6. **Forms** ~ Connect form submissions to your CRM (Zapier integration)

---

## Support

If you run into issues:

1. **Netlify docs**: https://docs.netlify.com
2. **Next.js docs**: https://nextjs.org/docs
3. **GitHub issues**: Create a ticket if something breaks

---

**Your website is ready. Deploy it, drive traffic to it, and watch the leads flow in.** ~ Your $59k investment starts paying dividends now.
