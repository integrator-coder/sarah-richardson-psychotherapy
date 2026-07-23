# 🚀 Sarah Richardson Psychotherapy - Deployment Checklist

## Pre-Launch Checklist

### ✅ Content Updates (Required)

- [ ] Replace `sarah@example.com` with real email (2 places in HTML)
- [ ] Replace `(416) 555-1234` with real phone (2 places in HTML)
- [ ] Add CRPO registration number in footer
- [ ] Add session fee in FAQ section (search for `[INSERT FEE]`)
- [ ] Update "Toronto, Ontario" to specific location if needed
- [ ] Review all bio text - Sarah's approval needed
- [ ] Review service descriptions - Sarah's approval needed
- [ ] Review FAQ answers - Sarah's approval needed

### ✅ Legal & Compliance (Critical)

- [ ] Create Privacy Policy page
- [ ] Add Terms of Use page
- [ ] Add disclaimer about not providing crisis intervention
- [ ] Review CRPO advertising guidelines compliance
- [ ] Ensure PHIPA compliance (Ontario health privacy)
- [ ] Add cookie consent if using analytics
- [ ] Link to CRPO website/registry
- [ ] Add accessibility statement

### ✅ Images (Check Quality)

- [ ] Verify all 4 photos are high quality (not blurry)
- [ ] Optimize images (compress without quality loss)
- [ ] Recommended: Use TinyPNG or ImageOptim
- [ ] Check image file sizes (<500KB each ideally)
- [ ] Verify all images have proper alt text
- [ ] Consider WebP format for faster loading

### ✅ Testing (Before Launch)

- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge
- [ ] Test on iPhone (Safari mobile)
- [ ] Test on Android (Chrome mobile)
- [ ] Test navigation menu on mobile
- [ ] Click all navigation links
- [ ] Expand/collapse all FAQ items
- [ ] Test contact form submission
- [ ] Check all links work
- [ ] Test smooth scroll behavior
- [ ] Verify parallax effect on desktop
- [ ] Check text readability on all backgrounds
- [ ] Test with slow internet connection

### ✅ SEO Setup

- [ ] Update page title in `<head>`
- [ ] Update meta description
- [ ] Add Open Graph tags for social sharing
- [ ] Add Twitter Card tags
- [ ] Create and add favicon
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Google
- [ ] Add structured data (Person/ProfessionalService schema)

### ✅ Form Integration (Choose One)

**Option A: Formspree (Easiest)**
- [ ] Sign up at formspree.io
- [ ] Get form endpoint
- [ ] Update form action in HTML
- [ ] Remove JavaScript form handler
- [ ] Test form sends emails

**Option B: EmailJS**
- [ ] Sign up at emailjs.com
- [ ] Create email service
- [ ] Create email template
- [ ] Add EmailJS SDK to HTML
- [ ] Update service/template IDs in JS
- [ ] Test form sends emails

**Option C: Custom Backend**
- [ ] Set up backend endpoint
- [ ] Configure CORS if needed
- [ ] Update form action URL
- [ ] Add error handling
- [ ] Test form sends emails

### ✅ Analytics (Optional)

- [ ] Create Google Analytics account
- [ ] Add GA tracking code to HTML
- [ ] Set up goals/conversions
- [ ] Test analytics tracking works
- [ ] Add privacy policy mention of analytics
- [ ] Consider cookie consent requirement

### ✅ Domain & Hosting

**Option A: Netlify (Recommended)**
- [ ] Sign up at netlify.com
- [ ] Drag and drop sarah-website folder
- [ ] Get temporary URL (e.g., sarah-richardson.netlify.app)
- [ ] Purchase custom domain (or use existing)
- [ ] Connect domain in Netlify settings
- [ ] Verify DNS propagation
- [ ] Ensure HTTPS is enabled (automatic with Netlify)

**Option B: GitHub Pages**
- [ ] Create GitHub account
- [ ] Create new repository
- [ ] Upload all files
- [ ] Enable GitHub Pages in settings
- [ ] Optional: Connect custom domain
- [ ] Verify site is live

**Option C: Traditional Hosting**
- [ ] Purchase hosting plan
- [ ] Purchase domain name
- [ ] Upload files via FTP/cPanel
- [ ] Configure DNS settings
- [ ] Install SSL certificate
- [ ] Test site is accessible

### ✅ Post-Launch

- [ ] Test contact form receives emails
- [ ] Monitor form submissions
- [ ] Check Google Search Console for errors
- [ ] Set up Google Business Profile
- [ ] List in Psychology Today directory
- [ ] List in CRPO directory
- [ ] Share website with colleagues
- [ ] Add website to email signature
- [ ] Add website to business cards
- [ ] Update social media profiles with new URL

### ✅ Ongoing Maintenance

- [ ] Check form submissions weekly
- [ ] Review analytics monthly
- [ ] Update content as needed
- [ ] Monitor site speed/performance
- [ ] Renew domain/hosting annually
- [ ] Keep CRPO registration current
- [ ] Update testimonials (if added)
- [ ] Refresh photos periodically

## 🚨 Critical Security Notes

### Email Protection
- [ ] Don't put raw email in HTML without obfuscation
- [ ] Consider using contact form only (no visible email)
- [ ] Or use JavaScript to assemble email address
- [ ] Protects against spam bots

### Form Security
- [ ] Add reCAPTCHA to prevent spam (optional)
- [ ] Never send sensitive health info via form
- [ ] Include disclaimer about not using form for emergencies
- [ ] Store form submissions securely if using database

### HTTPS
- [ ] Ensure entire site uses HTTPS
- [ ] No mixed content warnings
- [ ] SSL certificate valid and current
- [ ] Force HTTPS redirect (hosting setting)

## 📞 Resources

**CRPO Resources:**
- College website: https://www.crpo.ca
- Advertising guidelines: https://www.crpo.ca/advertising/
- Registry search: https://www.crpo.ca/find-a-therapist/

**Web Tools:**
- Google Analytics: https://analytics.google.com
- Google Search Console: https://search.google.com/search-console
- Formspree: https://formspree.io
- EmailJS: https://www.emailjs.com
- TinyPNG (image compression): https://tinypng.com

**Hosting Platforms:**
- Netlify: https://www.netlify.com
- Vercel: https://vercel.com
- GitHub Pages: https://pages.github.com

**Domain Registrars:**
- Namecheap: https://www.namecheap.com
- Google Domains: https://domains.google.com
- GoDaddy: https://www.godaddy.com

## 📝 Recommended Next Steps (Post-Launch)

1. **Week 1**: Monitor form submissions, fix any issues
2. **Week 2**: Submit to directories (Psychology Today, CRPO)
3. **Month 1**: Review analytics, see where traffic comes from
4. **Month 3**: Consider adding blog/resources section
5. **Month 6**: Gather testimonials, add to site (with permission)
6. **Year 1**: Refresh photos, update bio, review all content

## 🎯 Launch Day Plan

1. **Morning**: Final content review with Sarah
2. **Noon**: Upload to hosting platform
3. **1pm**: Test everything thoroughly
4. **2pm**: Connect domain (if ready)
5. **3pm**: Submit to Google Search Console
6. **4pm**: Announce on social media / email list
7. **Evening**: Monitor for any issues
8. **Next Day**: Check analytics tracking works

## ✨ Success Metrics

**Week 1:**
- Site loads without errors
- Form submissions work
- No broken links
- Mobile responsive

**Month 1:**
- 5+ contact form inquiries
- Listed in 2+ directories
- Google indexed the site
- Analytics tracking works

**Month 3:**
- Regular organic traffic
- Positive feedback from visitors
- Conversion rate: 5-10% (visitors → inquiries)
- Site loads in <3 seconds

---

**Ready to Launch?** 🚀

Once all critical items are checked, you're ready to go live. Remember: launch is just the beginning. A website is never "done"—it evolves with your practice.

Good luck, Sarah! 🌿

---

Built with care by Wall·E 🤖
