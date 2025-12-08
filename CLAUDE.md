# CLAUDE.md - Context for Future Sessions

## Project Overview

This is a single-page portfolio website for Maximilien Le Clei, hosted on GitHub Pages. The website displays:
- Profile photo and name in the header
- Social links (Email, GitHub, Google Scholar, LinkedIn) - centered and alphabetically ordered
- Embedded CV PDF viewer
- Dark theme (#000000 black background)

## Key Files

### Website Files
- **index.html**: Main portfolio page with photo, social links, and embedded PDF
- **cv.html**: CV source file (edit this to update CV content)
- **cv.pdf**: Auto-generated PDF from cv.html (committed to repo)
- **photo.jpg**: Profile photo (also used as favicon)
- **styles.css**: Portfolio page styling (dark theme)

### Automation
- **.github/workflows/generate-pdf.yml**: GitHub Actions workflow that auto-generates cv.pdf when cv.html is pushed

## How CV Updates Work

1. **Edit cv.html** - This is the source of truth for CV content
2. **Push to GitHub** - Commit and push cv.html to main branch
3. **GitHub Actions automatically**:
   - Detects changes to cv.html
   - Runs Puppeteer to convert cv.html → cv.pdf
   - Commits the generated PDF back to repo
   - GitHub Pages deploys everything
4. **Website updates** in 2-3 minutes

## Important CV Formatting Specifications

### Font Sizes (carefully tuned to fit on one page)
- Body text: 9.5pt
- Position/job titles: 10.5pt (bold)
- Section headers (Professional Experience, Education, Skills): 15pt (font-weight: 600)
- Name (h1): 21pt (bold)
- PhD/Previous position subtitle: 10pt
- Email/contact line: 9pt

### Spacing (carefully tuned to fit on one page)
- Line height: 1.25
- Page padding: 20px top, 15px bottom, 0px left/right
- Print padding: 15px top, 10px bottom, 0px left/right (minimal margins for PDF)
- Section header (h2) spacing: 12px top, 7px bottom
- Space between job positions: 5px
- Space between universities: 8px

### PDF Settings
- Paper size: **Letter** (21.6 x 27.9 cm / 8.5 x 11 inches)
- Format in Puppeteer: `'Letter'` (not A4)
- PDF margins: 20mm top/bottom, 15mm left/right

### Design Constraints
- **Must fit on one page** - This is critical
- Minimal horizontal margins (0px body padding) to fit long text lines
- Dark background (#000000) for portfolio page (index.html)
- White background for CV (cv.html) for printing

## CV Content Structure

### Header
- Name centered, large
- Two subtitle lines (PhD info, Previous position)
- Contact info: Underlined labels (Email/Website, Google Scholar, GitHub, LinkedIn) with "link" as actual hyperlinks

### Sections
- Professional Experience
- Education
- Skills

### Styling Conventions
- Job titles: Bold company/position name + regular weight location
- Dates: Right-aligned on same line as job title
- Bullet points: Custom bullet character (•)
- Links: Blue (#0000EE), underlined
- Open-source contributions: Plain text, no hyperlinks

## GitHub Setup

### Required Permissions
- **GitHub Actions**: Settings → Actions → General → Workflow permissions
  - Set to "Read and write permissions" (allows workflow to commit PDF)

### GitHub Pages
- **Settings** → **Pages**
- Source: Deploy from `main` branch, `/ (root)` folder
- Custom domain: `pro.maximilien.leclei.net`

### DNS Configuration
- Type: CNAME
- Name: `pro`
- Target: `[USERNAME].github.io`

## Profile Links (for reference)
- GitHub: https://github.com/MaximilienLC/
- LinkedIn: https://www.linkedin.com/in/maximilienleclei/
- Google Scholar: https://scholar.google.com/citations?user=Pm054IoAAAAJ&hl=en
- Email: pro.maximilien@leclei.net

## Common Modifications

### Update CV Content
- Edit `cv.html` directly
- Use HTML tags: `<h2>`, `<h3>`, `<ul>`, `<li>`, `<strong>`, `<em>`, `<a>`
- Maintain existing structure for consistent formatting

### Update Social Links
- Edit `index.html`
- Update href attributes in the social-links nav section

### Update Profile Photo
- Replace `photo.jpg` (keep filename)
- Used in both header and as favicon

### Change Colors (Portfolio Page)
- Edit `styles.css`
- Background color: currently `#000000` (black)
- Text color: currently `#ffffff` (white)

### Adjust Spacing (if CV doesn't fit)
- Edit spacing variables in `cv.html` `<style>` section
- Test locally before pushing
- **Warning**: Changes may cause overflow to 2 pages

## Important Notes

1. **Do not change paper size** - Must stay Letter format
2. **Minimize horizontal margins** - Text lines are at maximum width
3. **Test PDF generation locally** - Verify it fits on one page before pushing
4. **CV must fit on one page** - This is a hard requirement
5. **GitHub Actions workflow** - Uses `[skip ci]` tag to prevent infinite loops
6. **Embedded PDF on website** - Uses `<embed>` tag, works in all modern browsers

## File Locations to Ignore
- `.gitignore` includes: `node_modules/`, `package.json`, `package-lock.json`
- `.claude/`, `.git/` - Standard directories

## Technology Stack
- HTML5/CSS3
- GitHub Pages (static hosting)
- GitHub Actions (CI/CD)
- Puppeteer (HTML to PDF conversion)
- Node.js (for Puppeteer)

## Workflow Summary
```
User edits cv.html
  ↓
Git commit & push
  ↓
GitHub Actions triggers
  ↓
Puppeteer generates cv.pdf
  ↓
PDF committed to repo [skip ci]
  ↓
GitHub Pages deploys
  ↓
Website live with new CV (2-3 min)
```
