# GroundDesk

A responsive landing page for a fictional finance and file-storage product, built from a Figma design as a practice project. It has a hero section, solution cards, a pricing section with a monthly/annual toggle, testimonials, a footer and a mobile menu.

![GroundDesk on desktop](screenshots/desktop.png)

**Live demo:** https://github.com/TheRianLabs/GroundDesk

## Built with

- HTML
- CSS (custom properties, Grid, Flexbox, media queries)
- JavaScript (no libraries)

## What it does

- Layout follows the Figma design at desktop, tablet and phone widths
- Hamburger menu on screens 900px and under. It opens and closes on click, closes on Escape, on link click, and when the window is resized to desktop
- Pricing toggle that switches the three plans between monthly and annual prices. The cards are built from a data array in `price.js`
- Keyboard-friendly: real buttons and links, visible focus styles, `aria-expanded` on the menu button and `role="switch"` on the pricing toggle

## Run it locally

1. Clone the repo:
   ```
   git clone https://github.com/TheRianLabs/GroundDesk.git
   ```
2. Open `index.html` in your browser, or use the Live Server extension in VS Code.

No build step or dependencies.

## Project structure

```
GroundDesk/
├── index.html
├── assets/        images, logos and icons
├── styles/
│   └── index.css
└── scripts/
    ├── index.js   mobile menu
    └── price.js   pricing data and toggle
```

## Design credit

Design by [designer name] on [Figma community link]. This is a practice clone and not a real product.

## How I built it

I wrote the first version myself in plain HTML and CSS. It was close to the design but had real problems: the whole page background was blue, the layout broke on small screens, and parts of the pricing section were built with the wrong HTML elements.

I then had the code reviewed with Claude (an AI assistant), which pointed out the mistakes and rewrote the CSS and markup into the current version. I wrote the mobile menu script myself, and the pricing script was fixed with AI help after I got stuck. The commit history shows the first version and the corrected one side by side.

## What I learned

- A full-width section needs a separate inner container, otherwise the background can't stretch edge to edge
- Colours, fonts and sizes should be taken from Figma and stored as CSS variables before writing any section
- Fixed widths break on small screens. `max-width`, `minmax()` and `clamp()` are safer
- One shared button class with small variants beats copy-pasted button styles
- A selector with a space (`.a .b`) and one without (`.a.b`) mean different things
- Use the browser console to find JavaScript errors instead of guessing

## Next steps

- Testimonial slider with working arrows
- Highlight the current section in the nav while scrolling
- Make the header solid after scrolling past the hero
- Scroll-reveal animations on the cards
