# 🧪 Quick Visual Test Checklist

Open `index.html` in your browser and verify:

## 1️⃣ Hero Section
- [ ] Navigation bar visible at top (fixed)
- [ ] "Sarah Richardson" logo on left
- [ ] Menu items on right: Home, About, Services, FAQ, Book Consultation
- [ ] Headline: "Find Clarity, Connection, and Peace"
- [ ] Sarah's bench photo on right (circular crop)
- [ ] "Book Your Free Consultation" button (sand color)
- [ ] Subtle leaf pattern visible bottom right

## 2️⃣ About Section
- [ ] Full-width mood image of Sarah on couch (botanical art visible on wall)
- [ ] "About Sarah" title overlaid on image
- [ ] Bio text loads below image
- [ ] Credential line at bottom: "Sarah Richardson, MA, RP"
- [ ] **Scroll test**: Image should have parallax effect (moves slower than page)

## 3️⃣ Services Section
- [ ] Background is taupe/greige (not white)
- [ ] "How I Can Help" heading
- [ ] 6 service cards in grid layout:
  - Anxiety & Stress
  - Depression & Low Mood
  - Relationship Issues
  - Life Transitions
  - Self-Esteem & Identity
  - Trauma & Healing
- [ ] Forest green "Session Information" box at bottom
- [ ] Text is white inside green box

## 4️⃣ Grounding Image Section
- [ ] Full-width beach photo (Sarah on driftwood, golden hour)
- [ ] Quote overlaid at bottom: "Therapy is a space to pause, reflect..."
- [ ] Quote text is white, italic, serif font
- [ ] Dark gradient at bottom makes text readable

## 5️⃣ FAQ Section
- [ ] 6 FAQ items with cream/sand backgrounds
- [ ] Each has a "+" symbol on right
- [ ] **Click test**: Click any question → should expand to show answer
- [ ] **Click test**: "+" changes to "−" when expanded
- [ ] **Click test**: Only one FAQ open at a time

## 6️⃣ Contact Section
- [ ] Two-column layout (form left, details right)
- [ ] Form fields: Name, Email, Phone, Contact Preference (radio), Message
- [ ] "Send Message" button (sand color)
- [ ] Photo of Sarah (restaurant, circular) on right
- [ ] Contact details: email, phone, location
- [ ] Crisis disclaimer text at bottom of right column

## 7️⃣ Footer
- [ ] Dark charcoal background
- [ ] Cream/light text
- [ ] "Sarah Richardson, MA, RP" centered
- [ ] Navigation links centered
- [ ] Copyright notice
- [ ] Crisis resources disclaimer

## 🎨 Color Spot Check
- [ ] Page background: Warm cream (not stark white)
- [ ] CTA buttons: Sandy/tan color
- [ ] Services section: Taupe background (not cream)
- [ ] Session info box: Forest green background
- [ ] Footer: Dark charcoal/black

## ✨ Interaction Tests
- [ ] **Hover test**: Hover over "Book Consultation" button → turns forest green
- [ ] **Hover test**: Hover over service cards → slight lift/shadow effect
- [ ] **Click test**: Click any nav menu item → smooth scroll to section
- [ ] **Click test**: Submit form (empty) → browser validation should catch it
- [ ] **Click test**: Submit form (filled) → shows alert "Thank you..."

## 📱 Mobile Test (Resize Browser)
- [ ] Shrink browser to ~400px width
- [ ] Navigation collapses to hamburger menu (☰)
- [ ] Click hamburger → menu drops down
- [ ] Hero section: photo stacks above text
- [ ] Service cards: stack vertically (one column)
- [ ] Contact form: stacks above photo
- [ ] All text remains readable (not too small)
- [ ] No horizontal scrolling

## 🖼️ Image Check
- [ ] All 4 photos visible (no broken images)
- [ ] sarah-bench.jpg: circular, hero section
- [ ] sarah-couch.jpg: full-width, about section
- [ ] sarah-outdoors.jpg: full-width, beach scene
- [ ] sarah-restaurant.jpg: circular, contact section
- [ ] No "placeholder" SVG visible

## 🚀 Performance Check
- [ ] Page loads quickly (under 3 seconds)
- [ ] Smooth scroll animations (not janky)
- [ ] No console errors (open DevTools: Cmd+Option+I)
- [ ] No layout shifts when loading

## ⚠️ Common Issues to Watch For

**If navigation doesn't work:**
- Check JavaScript console for errors
- Verify `js/script.js` file exists

**If images don't show:**
- Verify images are in `images/` folder
- Check exact filenames match HTML

**If form doesn't respond:**
- This is normal - it's a placeholder
- Backend needed for real email sending

**If parallax doesn't work:**
- Try on desktop (disabled on mobile for performance)
- Scroll past the about section

**If FAQ doesn't expand:**
- Check JavaScript console
- Verify `js/script.js` is loaded

---

## ✅ All Good?

If everything above checks out, the site is working perfectly and ready to show Sarah!

**Next steps:**
1. Show Sarah the site
2. Gather her feedback on content
3. Update contact info placeholders
4. Integrate contact form backend
5. Add legal pages
6. Deploy!

---

**Testing completed by:** _____________  
**Date:** _____________  
**Browser tested:** _____________  
**Mobile device tested:** _____________  

🤖 Built by Wall·E
