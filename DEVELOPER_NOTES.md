<!-- DEVELOPER NOTES & BEST PRACTICES -->

## Portfolio Structure - Implementatie Details

### HTML Organisatie
- Alle content is in één `index.html` bestand voor makkelijk beheer
- Geen aparte HTML-bestanden nodig (alles is goed opgesplitst via CSS)
- Sections zijn semantisch correct met `id` attributen voor navigation

### CSS Architecture

#### 1. Global.css
- CSS Custom Properties (variables) voor consistent design
- Base animations (pulse, gradient effects)
- Utility classes (.glass, .chip, .accent)
- Responsive base settings

#### 2. Section-specific CSS Files
Elk bestand bundelt:
- Secties styling
- Section-specific animaties
- Responsive breakpoints
- Hover/active states

**Naamgeving Convention:**
- `hero.css` - Hero banner & intro
- `about.css` - About section met skills overview
- `skills.css` - Skills showcase grid
- `projects.css` - Project cards & portfolio
- `gallery.css` - Image gallery met Lightbox
- `testimonials.css` - Review/quote cards
- `timeline.css` - Timeline & traject sectie
- `contact.css` - Contact form & info

### Animation Strategy

#### Animate.css Library
Direct classes in HTML:
```html
<h1 class="animate__animated animate__fadeInDown">Titel</h1>
```

#### Custom CSS Keyframes
Voor complexe animaties in CSS-bestanden:
```css
@keyframes shine {
    0% { transform: translate(-100%, -100%) rotate(45deg); }
    100% { transform: translate(100%, 100%) rotate(45deg); }
}
```

#### JavaScript Triggers (main.js)
Intersection Observer voor scroll-triggered animations:
```javascript
observer.observe(element);  // Trigger when element enters viewport
element.classList.add('visible'); // Apply animation class
```

### Image Strategy

#### Hero Section
- Professional developer photo via Unsplash
- Dynamic via CSS background in hero container

#### Gallery Section
- Three professional images (Development, Design, Planning)
- Lightbox.js for modal viewing
- Responsive grid layout
- Lazy loading support

#### Testimonials
- Profile photos van team members
- Circular crop via CSS
- Hover scale animation

### JavaScript Implementation (main.js)

1. **Alpine.js Integration**
   - Dark mode toggle: `x-data="{ dark: false }"`
   - Reactive class binding: `:class="dark ? 'dark' : ''"`

2. **Intersection Observer**
   - Detects elements entering viewport
   - Triggers animations on-demand
   - Better performance dan scroll events

3. **Smooth Scroll**
   - Anchor links navigate smoothly
   - Prevents jarring jumps

4. **Navbar Highlighting**
   - Active section indicator
   - Updates as user scrolls

5. **Form Handling**
   - Contact form validation
   - Submit alert feedback

6. **Lightbox Integration**
   - Image modal viewer
   - Touch device support

### Responsive Design

#### Breakpoints
- **xs**: < 576px (Mobile)
- **sm**: >= 576px (Small phone)
- **md**: >= 768px (Tablet)
- **lg**: >= 992px (Laptop)
- **xl**: >= 1200px (Desktop)
- **xxl**: >= 1400px (Large desktop)

#### Bootstrap Classes Used
- `.container` - Max-width wrapper
- `.row` / `.col-*` - Grid system
- `.gap-*` - Spacing utilities
- `.d-flex` / `.flex-*` - Flexbox utilities
- `.mb-*, .mt-*, .p-*` - Margin/padding

#### Mobile-First CSS
All styles start mobile, then enhance:
```css
.card { /* Mobile default */ }
@media (min-width: 768px) {
    .card { /* Tablet+ enhancements */ }
}
```

### CDN Services Used

1. **Bootstrap** - CSS Framework
   ```html
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
   ```

2. **Alpine.js** - Reactive framework
   ```html
   <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
   ```

3. **Bootstrap Icons** - Icon library
   ```html
   <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
   ```

4. **Animate.css** - Animation library
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
   ```

5. **Lightbox2** - Image modal
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css"/>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js"></script>
   ```

### Color System

**Primary Colors:**
- `--accent: #6c5ce7` (Purple)
- `--accent-2: #00d4ff` (Cyan)

**Dark Mode:**
- `--bg-dark: #0f1224` (Very dark blue)
- `--text-dark: #dfe6e9` (Light gray)
- `--card-bg-dark: #151833` (Slightly lighter)

**Light Mode:**
- `--bg-light: #ffffff`
- `--text-light: #2d3436` (Dark gray)

### Typography

- **Font Stack**: System fonts (optimized for speed)
  ```css
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  ```

- **Font Sizes**:
  - `.display-5` - Largest (hero title)
  - `.lead` - Larger (intro text)
  - `h1-h6` - Headings
  - `.small` - Smaller text

- **Font Weights**:
  - 400 - Regular (body)
  - 600 - Medium (labels)
  - 700 - Bold (headings)
  - 800 - Extra bold (section titles)
  - 900 - Black (display text)

### Performance Optimizations

1. **CSS**
   - No unused Bootstrap classes
   - Custom properties instead of hardcoded values
   - Minimal media query overrides

2. **JavaScript**
   - Debounced scroll events
   - Cached DOM selectors
   - Event delegation where possible

3. **Images**
   - External CDN (Unsplash) for hosting
   - Responsive sizes (400px-1200px)
   - Lazy loading support

4. **Animations**
   - GPU-accelerated (transform & opacity)
   - requestAnimationFrame for smoothness
   - will-change hints for heavy animations

### Accessibility Features

✅ **Semantic HTML**
- `<section>`, `<header>`, `<footer>` tags
- Proper heading hierarchy (h1, h2, h3)
- Form labels with proper associations

✅ **ARIA**
- `aria-expanded` on toggle buttons
- `role="progressbar"` on progress bars
- Skip links potential

✅ **Keyboard Navigation**
- Tab through interactive elements
- Enter to submit forms
- Escape for modals (Lightbox)

✅ **Color Contrast**
- Min 4.5:1 ratio for text
- Purple accent on dark bg passes WCAG AA

### Deployment Checklist

- [ ] Test all animations on slow connections
- [ ] Verify Lightbox functionality
- [ ] Check dark mode toggle works
- [ ] Test form submission
- [ ] Verify responsive layout on mobile
- [ ] Check all external images load
- [ ] Minify CSS in production
- [ ] Enable compression (gzip)
- [ ] Add favicons
- [ ] Configure 404 handling

### Future Enhancements

1. **Form Backend**
   - Connect to email service (SendGrid, Resend)
   - Store submissions in database

2. **Animations**
   - Add Three.js 3D models
   - More complex GSAP animations
   - Scroll-jacking effects

3. **Features**
   - Dark mode preference persistence
   - Language switcher (NL/EN)
   - Project filtering
   - Blog section

4. **Performance**
   - Implement service worker for PWA
   - Critical CSS inlining
   - Image optimization pipeline

5. **SEO**
   - Schema markup (JSON-LD)
   - Sitemap.xml generation
   - Social media meta tags
