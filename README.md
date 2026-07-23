# Sarah Richardson Psychotherapy Website

A beautiful, modern, and fully responsive static website for Sarah Richardson, MA, RP - Registered Psychotherapist in Toronto.

## 🎨 Design Features

- **Warm Botanical Palette**: Cream (#EDE6DC), Sand (#B8A582), Sage (#8B9B6E), Forest (#556B35), Taupe (#D4CFC4)
- **Elegant Typography**: Cormorant Garamond for headings, Lato for body text
- **Real Photography**: Four stunning photos of Sarah integrated throughout
- **Responsive Design**: Beautiful on all devices (desktop, tablet, mobile)
- **Smooth Animations**: Fade-in sections, parallax effects, smooth scrolling
- **Accessible**: Keyboard navigation, ARIA labels, semantic HTML

## 📁 File Structure

```
sarah-website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styles
├── js/
│   └── script.js           # Interactive features
├── images/
│   ├── sarah-bench.jpg     # Hero section
│   ├── sarah-couch.jpg     # About section (full-width mood image)
│   ├── sarah-outdoors.jpg  # Grounding image section break
│   ├── sarah-restaurant.jpg # Contact section
│   └── leaf-pattern.svg    # Decorative element
└── README.md               # This file
```

## 🚀 Getting Started

### Option 1: Open Locally (Simplest)

1. Download/clone this folder to your computer
2. Double-click `index.html` to open in your browser
3. That's it! The site works entirely locally.

### Option 2: Use a Local Server (Recommended for Development)

If you're making edits and want live reload:

```bash
# If you have Python installed:
python3 -m http.server 8000

# If you have Node.js installed:
npx serve

# If you have PHP installed:
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### Option 3: Deploy to the Web

#### Deploy to Netlify (Free, Easy, Recommended)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the entire `sarah-website` folder into Netlify
3. Done! You get a free HTTPS URL like `sarah-richardson.netlify.app`
4. Optional: Connect a custom domain

#### Deploy to GitHub Pages (Free)

1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Go to Settings → Pages
5. Select main branch → Save
6. Your site will be live at `username.github.io/repo-name`

#### Deploy to Vercel (Free)

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repo or drag and drop the folder
3. Done!

## ✏️ Customization Guide

### Before Going Live - Update These:

1. **Contact Information** (in `index.html`):
   - Replace `sarah@example.com` with real email
   - Replace `(416) 555-1234` with real phone
   - Update location/address if needed
   - Add CRPO registration number in footer

2. **Session Fees** (in `index.html`):
   - Search for `[INSERT FEE]` in the FAQ section
   - Replace with actual session fee

3. **Meta Tags** (in `index.html` `<head>`):
   - Update description
   - Add keywords if desired
   - Consider adding Open Graph tags for social sharing

4. **Google Analytics** (optional):
   - Add your tracking code before `</body>` tag

### Making Style Changes

All styles are in `css/styles.css`. Common changes:

```css
/* Change primary colors */
:root {
  --color-sand: #B8A582;  /* CTA buttons */
  --color-forest: #556B35; /* Dark accents */
  --color-sage: #8B9B6E;   /* Links */
}

/* Change fonts */
:root {
  --font-heading: 'Cormorant Garamond', serif;
  --font-body: 'Lato', sans-serif;
}
```

### Adding Form Functionality

The contact form currently shows an alert. To make it actually send emails:

#### Option 1: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form in `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

4. Remove the JavaScript form handler in `js/script.js`

#### Option 2: EmailJS (More Control)

1. Sign up at [emailjs.com](https://emailjs.com)
2. Create an email service and template
3. Uncomment the EmailJS code in `js/script.js`
4. Add your service ID and template ID

#### Option 3: Backend Integration

Connect to your own backend or use:
- Google Forms API
- AWS SES
- SendGrid API
- Custom PHP/Node.js backend

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Sufficient color contrast ratios (WCAG AA compliant)
- Alt text on all images
- Responsive font sizing

## 🔧 Technical Details

- **No Build Process Required**: Pure HTML/CSS/JS
- **No Dependencies**: Works entirely standalone
- **Lightweight**: Fast loading, minimal resources
- **SEO-Friendly**: Semantic markup, meta tags
- **Mobile-First**: Responsive from 320px to 4K

## 📝 Content Sections

1. **Hero**: First impression, CTA, main photo
2. **About**: Full-width mood image, bio, credentials
3. **Services**: Six service cards, session details
4. **Grounding Image**: Full-bleed inspirational photo break
5. **FAQ**: Six common questions with accordion
6. **Contact**: Form + contact details with photo
7. **Footer**: Links, credentials, crisis information

## 🎯 SEO Checklist

- [ ] Update page title in `<title>` tag
- [ ] Update meta description
- [ ] Add Open Graph tags for social sharing
- [ ] Add structured data (Person schema)
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Business Profile link
- [ ] Get listed in Psychology Today directory
- [ ] Get listed in CRPO directory

## 🔒 Privacy & Compliance

**Important**: Before going live:

- [ ] Add Privacy Policy page (required for collecting contact info)
- [ ] Add CRPO code of ethics link
- [ ] Ensure compliance with PHIPA (Ontario health privacy law)
- [ ] Add cookie consent if using analytics
- [ ] Review all content with CRPO advertising guidelines

## 🐛 Troubleshooting

**Images not showing?**
- Check that image paths are correct: `images/sarah-bench.jpg`
- Ensure images are in the `images/` folder
- Check browser console for 404 errors

**Parallax not working on mobile?**
- This is intentional - parallax disabled on mobile for performance
- Mobile uses `background-attachment: scroll` instead

**Form not submitting?**
- Check browser console for errors
- Remember: form needs backend integration to actually send emails
- Currently shows alert as placeholder

## 📞 Support

For questions about the website code or customization:
- Review this README
- Check inline comments in the code
- Google for specific CSS/HTML/JS questions

For psychotherapy practice questions:
- Contact CRPO (College of Registered Psychotherapists of Ontario)
- Review CRPO advertising guidelines

## 📄 License

This website template is created for Sarah Richardson's psychotherapy practice. 

---

**Built with care** 🤖 by Wall·E for Sarah Richardson, MA, RP
