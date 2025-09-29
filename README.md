# Next Static Path

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15%2B-black.svg)](https://nextjs.org/)

Next.js path management toolkit for static exports with i18n support. Handle basePath, locales, and assets for subdirectory hosting like GitHub Pages.

## Features

- **Internationalization**: Client-side locale detection with SEO-friendly URLs
- **Enhanced Components**: Drop-in replacements for Next.js Link, Image, Script, etc.
- **Powerful Hooks**: useRouter, useLocale, usePathname with automatic basePath handling
- **Path Utilities**: Automatic basePath and locale prefixing for all assets

## Installation

```bash
npm install hieupth/next-static-path#main
```

## Setup

### Environment

```bash
# .env.local
NEXT_PUBLIC_BASE_PATH=/your-repo-name
```


## Usage

### Navigation

```tsx
import { Link, useRouter } from "next-static-path";

// Auto-prefixes with basePath and locale
<Link href="/about">About</Link>
<Link href={{ pathname: "/blog", query: { id: "1" } }}>Blog</Link>

// Programmatic navigation
const router = useRouter();
router.push("/contact");
```

### Assets

```tsx
import { Image, useAssetPath } from "next-static-path";

// Auto-prefixes image paths
<Image src="/logo.png" alt="Logo" width={180} height={38} />

// CSS background images
const { getCssUrl } = useAssetPath();
const style = { backgroundImage: getCssUrl('/bg.jpg') };
```

### Media Components

```tsx
import { Audio, Video, Script, Iframe } from "next-static-path";

<Audio src="/audio.mp3" controls />
<Video src="/video.mp4" poster="/thumb.jpg" controls />
<Script src="/analytics.js" />
<Iframe src="/embed.html" width="600" height="400" />
```

### Utilities

```tsx
import {
  getBasePath,
  getPrefixPath,
  getLocalePath,
  parseLocaleFromPath
} from "next-static-path";

const basePath = getBasePath(); // "/repo-name"
const path = getPrefixPath('/assets/image.png'); // "/repo-name/assets/image.png"
const localePath = getLocalePath('/about', 'vi'); // "/repo-name/vi/about"
const { path, locale } = parseLocaleFromPath('/repo-name/vi/about');
```

## API

### Components
- `Link` - Enhanced Next.js Link with basePath + locale
- `Image` - Enhanced Next.js Image with basePath
- `Script`, `Audio`, `Video`, `Iframe` - Media components with path handling
- `Form`, `Anchor`, `Bg`, `Source` - Additional utility components

### Hooks
- `useRouter()` - Enhanced router with automatic path handling
- `useLocale()` - Locale detection and switching
- `usePathname()` - Clean pathname without basePath
- `useAssetPath()` - Asset path management

### Utilities
- `getBasePath()`, `getPrefixPath()` - Base path utilities
- `getLocalePath()`, `parseLocaleFromPath()` - Locale utilities
- `getPrefixCssUrl()` - CSS processing

## Development

```bash
# Build library
npm run build

# Run examples
cd examples/next-intl-example
npm install
npm run dev
```

## Contributing

Contributions welcome! Please feel free to submit a Pull Request.

## License

[GNU AGPL v3.0](LICENSE).<br>
Copyright &copy; 2025 [Hieu Pham](https://github.com/hieupth). All rights reserved.