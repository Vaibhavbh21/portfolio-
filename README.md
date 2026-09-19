# 🤖 Professional AI Engineer Portfolio Website - Vaibhav Bhardwaj
AI Engineer Portfolio
A premium, modern portfolio website designed for an **AI Engineer** with a dark obsidian aesthetic (`#05070b`), subtle ambient lighting, Bento-grid layouts, and glassmorphism.

## ✨ Features

- **Dark Bento AI Theme** - Obsidian dark backgrounds (`#07090e`), Indigo, Violet, and Cyan ambient lighting
- **Bento Grid Architecture** - Modern rounded card system with 1px translucent borders
- **Fully Responsive** - Flawless layout adaptation across desktop, tablet, and mobile
- **Smooth Micro-Animations** - Powered by Framer Motion & Lucide React
- **Floating Glassmorphic Navbar** - Rounded backdrop blur navigation
- **Sections**:
  - **Home**: Hero section with AI Agent Core graphic and 8 Bento Expertise cards
  - **About**: AI Engineer narrative, Experience timeline, 8 Bento Skill categories, and Currently Learning cards
  - **Portfolio**: 5 numbered Bento project cards with category filters
  - **Blog**: AI engineering and technology articles
  - **Contact**: Direct WhatsApp and Email contact CTA

## 🎨 Design Elements

- Obsidian dark charcoal backgrounds (`#05070b`, `#07090e`, `#0f1420`)
- Subtle Indigo (`#6366f1`), Cyan (`#06b6d4`), and Violet (`#8b5cf6`) accents
- Thin 1px subtle borders (`border-white/10`)
- Glassmorphism cards with backdrop blur
- Clean typography and generous spacing

## 🛠️ Tech Stack

- **React 18** - UI framework
- **React Router** - Navigation
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📦 Installation

1. **Navigate to portfolio directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Open browser:**
   The app will open at `http://localhost:3000`

## 🚀 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📝 Customization

### Update Your Name
Replace "YOUR NAME" in:
- `src/components/Navbar.js`
- `src/components/Footer.js`
- `src/pages/Home.js`

### Update Hero Text
Edit the hero section in `src/pages/Home.js`:
- Change "DREAM DATA CAREER" to your desired headline
- Update the description text
- Modify CTA button text

### Add Your Projects
Edit `src/pages/Portfolio.js`:
- Update the `projects` array with your own projects
- Add project images, descriptions, and links

### Add Blog Posts
Edit `src/pages/Blog.js`:
- Update the `blogPosts` array with your articles
- Customize categories and content

### Update Social Links
Edit `src/components/Footer.js`:
- Add your actual social media links
- Update icons as needed

## 🎯 Key Components

- **Navbar** - Fixed navigation with mobile menu
- **Home** - Hero section with animated background
- **Portfolio** - Filterable project grid
- **Blog** - Featured and regular blog posts
- **Footer** - Social links and site information

## 🌈 Color Palette

- **Dark Background**: #0a0a0a, #1a1a1a, #2a2a2a
- **Neon Purple**: #a855f7
- **Neon Orange**: #fb923c
- **Neon Pink**: #ec4899
- **Neon Blue**: #3b82f6

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Animations

- Fade in/out transitions
- Smooth scroll animations
- Hover effects
- Glowing text effects
- Floating elements
- Gradient animations

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React and TailwindCSS**

