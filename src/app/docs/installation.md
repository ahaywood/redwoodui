---
title: Installation
slug: installation
---

## Install

[Install Tailwind]()

You can follow the installation Tailwind instructions or use the RWSDK Tools script:

```bash
npx rwsdk-tools tailwind
```

Install [Base-UI](https://base-ui.com)

```bash
pnpm i @base-ui-components/react
```

Install [Lucide Icons](https://lucide.dev/)

```bash
pnpm i lucide-react
```

Within your `Document.tsx` file, add a `className="root"` to the `body` tag:

```tsx
<body className="root">
```

Within your `styles.css` file, add a `.root` class:

```css
@import "tailwindcss";

.root {
  isolation: isolate;
}
```

