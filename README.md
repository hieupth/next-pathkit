# next-pathkit

Comprehensive toolkit for Next.js path management in static exports. Provides components, hooks, and utilities to handle asset paths, navigation, and CSS URLs when hosting on sub-paths like **GitHub Pages**.

## ✨ Features

### Components
- **`<Image>`** → Auto-prefix basePath for image assets
- **`<Link>`** → Enhanced navigation with basePath support
- **`<Anchor>`** → Safe prefix for download links
- **`<Bg>`** → Helper for inline background-image styles
- **`<Script>`**, **`<Audio>`**, **`<Video>`**, **`<Iframe>`** → Media components with path handling
- **`<Form>`** → Form action with basePath support

### Hooks
- **`useAssetPath()`** → Advanced asset path management with utilities
- **`useRouter()`** → Enhanced router with automatic basePath handling
- **`usePathname()`** → Pathname hook for sub-path routing
- **`useAsset()`**, **`useAssets()`** → Simple hooks for single/multiple assets

### Utilities
- **Path utilities**: `getPrefixPath`, `getPrefixUrlObject`, `getBasePath`
- **CSS utilities**: `processCss`, `css` template tag, `useProcessedCss`
- **Asset detection**: External URL detection, conditional path handling

## 🚀 Install

Install directly from GitHub:

```bash
npm install hieupth/next-pathkit#main
```

## 🛠️ Usage

### Component Examples
```tsx
import { Image, Link, Anchor, Bg, Script } from "next-pathkit/components";

// Image with auto-prefixed src
<Image src="/logo.svg" alt="Logo" width={180} height={38} />

// Enhanced navigation
<Link href="/dashboard">Dashboard</Link>

// Download links
<Anchor href="/files/report.pdf" download>Download Report</Anchor>

// Background images
<Bg bg="/images/hero.jpg" className="hero-section" />

// Scripts with path handling
<Script src="/scripts/analytics.js" strategy="afterInteractive" />
```

### Hook Examples
```tsx
import { useAssetPath, useRouter, useAsset } from "next-pathkit/hooks";

function Gallery() {
  const { getPaths, getCssUrl, resolvePath } = useAssetPath();
  const router = useRouter();
  const heroImage = useAsset('/hero.jpg');

  const images = getPaths(['/img1.jpg', '/img2.jpg']);
  const bgStyle = { backgroundImage: getCssUrl('/pattern.svg') };

  return (
    <div style={bgStyle}>
      <img src={heroImage} alt="Hero" />
      {images.map(src => <img key={src} src={src} />)}
      <button onClick={() => router.push('/gallery')}>
        View Gallery
      </button>
    </div>
  );
}
```

### CSS-in-JS Support
```tsx
import { css, useProcessedCss } from "next-pathkit/utils/css";

// Template literal tag
const styles = css`
  background: url('/images/bg.jpg');
  content: url('/icons/star.svg');
`;

// Hook for dynamic CSS
function Component() {
  const processedCss = useProcessedCss(`
    background-image: url('/dynamic-bg.jpg');
  `);

  return <div style={{ css: processedCss }}>Content</div>;
}
```

### Utility Functions
```tsx
import { getPrefixPath, getPrefixCssUrl, getPrefixUrlObject } from "next-pathkit";

// Path prefixing
const imagePath = getPrefixPath('/assets/logo.png');

// CSS URL processing
const css = getPrefixCssUrl('background: url("/images/bg.jpg")');

// URL object handling
const urlObj = getPrefixUrlObject({
  pathname: '/dashboard',
  query: { id: '123' }
});
```

## 🎯 Use Cases

- **GitHub Pages hosting** - Deploy Next.js static exports to sub-directories
- **Multi-tenant applications** - Different basePath for different customers
- **CDN deployments** - Assets served from different domains/paths
- **CSS-in-JS integration** - Automatic basePath handling in styled components
- **Dynamic asset loading** - Runtime asset path resolution
- **API calls from static sites** - Proper endpoint path resolution

## 📝 License

[GNU AGPL v3.0](LICENSE).
Copyright © 2025 [Hieu Pham](https://github.com/hieupth). All rights reserved.