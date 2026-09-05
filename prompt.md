Project Path: aseralashams

Source Tree:

```txt
aseralashams
├── Caddyfile
├── components.json
├── db
├── download
├── eslint.config.mjs
├── mini-services
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── prisma
│   └── schema.prisma
├── public
├── scripts
├── src
│   ├── app
│   │   ├── about
│   │   │   └── page.tsx
│   │   ├── admin
│   │   │   └── page.tsx
│   │   ├── api
│   │   │   └── route.ts
│   │   ├── contact
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── products
│   │   │   ├── category
│   │   │   │   └── [id]
│   │   │   │       └── page.tsx
│   │   │   └── page.tsx
│   │   └── projects
│   │       ├── [id]
│   │       │   └── page.tsx
│   │       └── page.tsx
│   ├── components
│   │   ├── admin
│   │   │   └── AdminPanel.tsx
│   │   ├── site
│   │   │   ├── About.tsx
│   │   │   ├── BrandsCarousel.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── CountUp.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroCarousel.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── PageHero.tsx
│   │   │   ├── PageLayout.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Reveal.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyUs.tsx
│   │   │   └── data.ts
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       └── tooltip.tsx
│   ├── hooks
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   └── lib
│       ├── db.ts
│       ├── seed-data.ts
│       ├── store.ts
│       ├── types.ts
│       └── utils.ts
├── tailwind.config.ts
├── tests
├── tsconfig.json
└── upload

```

`Caddyfile`:

```
:81 {
	@transform_port_query {
		query XTransformPort=*
	}

	handle @transform_port_query {
		reverse_proxy localhost:{query.XTransformPort} {
			header_up Host {host}
			header_up X-Forwarded-For {remote_host}
			header_up X-Forwarded-Proto {scheme}
			header_up X-Real-IP {remote_host}
		}
	}

	handle {
		reverse_proxy localhost:3000 {
			header_up Host {host}
			header_up X-Forwarded-For {remote_host}
			header_up X-Forwarded-Proto {scheme}
			header_up X-Real-IP {remote_host}
		}
	}
}

```
`components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```
`eslint.config.mjs`:

```mjs
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript, {
  rules: {
    // TypeScript rules
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/prefer-as-const": "off",
    "@typescript-eslint/no-unused-disable-directive": "off",
    
    // React rules
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/purity": "off",
    "react/no-unescaped-entities": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "react-compiler/react-compiler": "off",
    
    // Next.js rules
    "@next/next/no-img-element": "off",
    "@next/next/no-html-link-for-pages": "off",
    
    // General JavaScript rules
    "prefer-const": "off",
    "no-unused-vars": "off",
    "no-console": "off",
    "no-debugger": "off",
    "no-empty": "off",
    "no-irregular-whitespace": "off",
    "no-case-declarations": "off",
    "no-fallthrough": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-redeclare": "off",
    "no-undef": "off",
    "no-unreachable": "off",
    "no-useless-escape": "off",
  },
}, {
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts", "examples/**", "skills"]
}];

export default eslintConfig;

```
`next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
```
`package-lock.json`:

```json
{
  "name": "asr-al-shams",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "asr-al-shams",
      "version": "1.0.0",
      "dependencies": {
        "@dnd-kit/core": "^6.3.1",
        "@dnd-kit/sortable": "^10.0.0",
        "@dnd-kit/utilities": "^3.2.2",
        "@hookform/resolvers": "^5.1.1",
        "@mdxeditor/editor": "^3.39.1",
        "@prisma/client": "^6.11.1",
        "@radix-ui/react-accordion": "^1.2.11",
        "@radix-ui/react-alert-dialog": "^1.1.14",
        "@radix-ui/react-aspect-ratio": "^1.1.7",
        "@radix-ui/react-avatar": "^1.1.10",
        "@radix-ui/react-checkbox": "^1.3.2",
        "@radix-ui/react-collapsible": "^1.1.11",
        "@radix-ui/react-context-menu": "^2.2.15",
        "@radix-ui/react-dialog": "^1.1.14",
        "@radix-ui/react-dropdown-menu": "^2.1.15",
        "@radix-ui/react-hover-card": "^1.1.14",
        "@radix-ui/react-label": "^2.1.7",
        "@radix-ui/react-menubar": "^1.1.15",
        "@radix-ui/react-navigation-menu": "^1.2.13",
        "@radix-ui/react-popover": "^1.1.14",
        "@radix-ui/react-progress": "^1.1.7",
        "@radix-ui/react-radio-group": "^1.3.7",
        "@radix-ui/react-scroll-area": "^1.2.9",
        "@radix-ui/react-select": "^2.2.5",
        "@radix-ui/react-separator": "^1.1.7",
        "@radix-ui/react-slider": "^1.3.5",
        "@radix-ui/react-slot": "^1.2.3",
        "@radix-ui/react-switch": "^1.2.5",
        "@radix-ui/react-tabs": "^1.1.12",
        "@radix-ui/react-toast": "^1.2.14",
        "@radix-ui/react-toggle": "^1.1.9",
        "@radix-ui/react-toggle-group": "^1.1.10",
        "@radix-ui/react-tooltip": "^1.2.7",
        "@reactuses/core": "^6.0.5",
        "@tanstack/react-query": "^5.82.0",
        "@tanstack/react-table": "^8.21.3",
        "class-variance-authority": "^0.7.1",
        "clsx": "^2.1.1",
        "cmdk": "^1.1.1",
        "date-fns": "^4.1.0",
        "embla-carousel-react": "^8.6.0",
        "framer-motion": "^12.23.2",
        "input-otp": "^1.4.2",
        "lucide-react": "^0.525.0",
        "next": "^16.1.1",
        "next-auth": "^4.24.11",
        "next-intl": "^4.3.4",
        "next-themes": "^0.4.6",
        "prisma": "^6.11.1",
        "react": "^19.0.0",
        "react-day-picker": "^9.8.0",
        "react-dom": "^19.0.0",
        "react-hook-form": "^7.60.0",
        "react-markdown": "^10.1.0",
        "react-resizable-panels": "^3.0.3",
        "react-syntax-highlighter": "^15.6.1",
        "recharts": "^2.15.4",
        "sharp": "^0.34.3",
        "sonner": "^2.0.6",
        "tailwind-merge": "^3.3.1",
        "tailwindcss-animate": "^1.0.7",
        "uuid": "^11.1.0",
        "vaul": "^1.1.2",
        "z-ai-web-dev-sdk": "^0.0.18",
        "zod": "^4.0.2",
        "zustand": "^5.0.6"
      },
      "devDependencies": {
        "@tailwindcss/postcss": "^4",
        "@types/react": "^19",
        "@types/react-dom": "^19",
        "bun-types": "^1.3.4",
        "eslint": "^9",
        "eslint-config-next": "^16.1.1",
        "tailwindcss": "^4",
        "tw-animate-css": "^1.3.5",
        "typescript": "^5"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.29.7.tgz",
      "integrity": "sha512-Aup7aUOfpbAUg2ROOJN6Iw5f9DMBlzu0mIkm/malLQFN/YQgO48wCj0Kxa3sEHJvPVFg7siR+qRInwXd2qhQKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.29.7",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.29.7.tgz",
      "integrity": "sha512-locTkQyKvwIEgBzVrn8693ebc97F2U8ZHjbXwDXJ5Fn2TCpNwTlKcaKLkdHop5c/icOFE7qt7Q9JC5hnKNa6Gg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.29.7.tgz",
      "integrity": "sha512-RgHBCvtjbOK2gXSNBNIkNoEc9qoVEtau3hj8gEqKQuL3HZAibKarWFEI3Lfm6EYKkLalOh8eSrj9b+ch9H/VBA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.7",
        "@babel/helper-compilation-targets": "^7.29.7",
        "@babel/helper-module-transforms": "^7.29.7",
        "@babel/helpers": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/template": "^7.29.7",
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.29.8.tgz",
      "integrity": "sha512-gZbepsdh3WDtgZKWL+vTPh71LSBrm/Y4/QDZBVCcYfmeTEEuoOYwlSy+G1StfJg+/Zy550u/3TATbm7qDbbMtg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.8",
        "@babel/types": "^7.29.8",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.29.7.tgz",
      "integrity": "sha512-wem6WaBj4NaVYVdNhLPPVacES6ZJ+KBBfSkTMD3YZxbP3rm3Di85tJU5ljaUNhaOynt+Aj0xruhYuzQBt8n71g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.29.7",
        "@babel/helper-validator-option": "^7.29.7",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.29.7.tgz",
      "integrity": "sha512-3nQVUAtvkKH9zahfWgw96Jc/uFOmjACE1kQz82E2lqWmHBgjzbNlsC22nuQTfahmWeQtTq5nQ/4Nnd2A1wj4zA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.29.7.tgz",
      "integrity": "sha512-ejHwrQQYcm9xnTivShn2IDOlIzInN34AXskvq9QicvCtEzq1Vzclu/tKF8Jq1Cg8JG2GL6/EmjgsCT7lXepE3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.29.7.tgz",
      "integrity": "sha512-UPUVSyXbOh627KiCIGQSgwWzGeBKLkaJ9PJEdrngIwMSzxLR4jS4+f1f1jb7VzBbg8nFLaYotvVPFCTqdrmTAg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.29.7.tgz",
      "integrity": "sha512-Pb5ijPrZ89GDH8223L4UP8i6QApWxs04RbPQJTeWDV0/keR2E36MeKnyr6LYmUUvqRRI+Iv87SuF1W6ErINzYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.29.7.tgz",
      "integrity": "sha512-qehxGkRj55h/ff8EMaJ+cYhyaKlHIxqYDn682wQD7RNp9UujOQsHog2uS0r2vzr4pW+sXf90NeeayjcNaX3fFg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.29.7.tgz",
      "integrity": "sha512-N9ZErrD+yW5geCDtBqnOoxmR8+tNKiGuxKlDpuJxfsqpa2dFcexaziGAE/qoHLiDDreVNMupxGmSoNlyvsA3gw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.29.7.tgz",
      "integrity": "sha512-1k2lAGRMfHTcwuNYcCNUmaUffmQv8KWMfh2iJUUeRlwlwH4FdNG7mfPI10NPfLHJFThE4Tyr4mv7kTNZOiPuBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.29.8.tgz",
      "integrity": "sha512-E8lTAYNB1KW+FH+VGJuZM1ioAx2E6oVlvQFRrf5P8ZZmsiJXYAD9vTFV7yyEURNzgh1dFqMZuO6tUwcARbqFCA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.8"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.29.7.tgz",
      "integrity": "sha512-Nq8OhGWiZIZGV6hLHoyAKLLcJihP/xFeBMGJoUrxTX2psI8dCifzLhZISFb+VWS3wFMRDmCGw5R+dOySCqPLhw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.29.7.tgz",
      "integrity": "sha512-puq+Gf35oI24FeN11LkoUQFqv9uwNeWpxXZi/Ji3rRIoKAzKnxRaZ+Gkj0vKS9ZCiTESfng1N9LyOyXvo+m+Gg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.29.8.tgz",
      "integrity": "sha512-I5z7H3bf/41ktsNVLtpN0wAa336HkqIHQ5BuPLEhTkt1jVSyZpeNKIzTgEWmlxjdg81R0IgUCcaE+Ok3NvrfZg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.8",
        "@babel/helper-globals": "^7.29.7",
        "@babel/parser": "^7.29.8",
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.8",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.29.8.tgz",
      "integrity": "sha512-Vj1jF3cPfxg7OAfoI7QnVKLoILlm2JF9pnVHrX8qx7AHMiYWT+NDAA7jChlNgRS4WTLc/fD1lXLmPixluj+3Gg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@codemirror/autocomplete": {
      "version": "6.20.3",
      "resolved": "https://registry.npmjs.org/@codemirror/autocomplete/-/autocomplete-6.20.3.tgz",
      "integrity": "sha512-tlosUqb+3BbxCxZdu4tKeRghPFC+QM7q4X5YhKV2eCmPG+1r2F3f4AaSz5sCrFqUtX4Jh20VFTKecl16MgiV9g==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/language": "^6.0.0",
        "@codemirror/state": "^6.0.0",
        "@codemirror/view": "^6.17.0",
        "@lezer/common": "^1.0.0"
      }
    },
    "node_modules/@codemirror/commands": {
      "version": "6.11.0",
      "resolved": "https://registry.npmjs.org/@codemirror/commands/-/commands-6.11.0.tgz",
      "integrity": "sha512-/K4Rl5BN0OtTiPWmJCdqODu38XnDMsDxKY5rgrPnCkutPTJf2wVbkoixLfealF5Kwse/s8P8M5jAiURiwSwnFA==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/language": "^6.0.0",
        "@codemirror/state": "^6.7.0",
        "@codemirror/view": "^6.27.0",
        "@lezer/common": "^1.1.0"
      }
    },
    "node_modules/@codemirror/lang-angular": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-angular/-/lang-angular-0.1.4.tgz",
      "integrity": "sha512-oap+gsltb/fzdlTQWD6BFF4bSLKcDnlxDsLdePiJpCVNKWXSTAbiiQeYI3UmES+BLAdkmIC1WjyztC1pi/bX4g==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/lang-html": "^6.0.0",
        "@codemirror/lang-javascript": "^6.1.2",
        "@codemirror/language": "^6.0.0",
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.3.3"
      }
    },
    "node_modules/@codemirror/lang-cpp": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-cpp/-/lang-cpp-6.0.3.tgz",
      "integrity": "sha512-URM26M3vunFFn9/sm6rzqrBzDgfWuDixp85uTY49wKudToc2jTHUrKIGGKs+QWND+YLofNNZpxcNGRynFJfvgA==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/language": "^6.0.0",
        "@lezer/cpp": "^1.0.0"
      }
    },
    "node_modules/@codemirror/lang-css": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-css/-/lang-css-6.3.1.tgz",
      "integrity": "sha512-kr5fwBGiGtmz6l0LSJIbno9QrifNMUusivHbnA1H6Dmqy4HZFte3UAICix1VuKo0lMPKQr2rqB+0BkKi/S3Ejg==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/autocomplete": "^6.0.0",
        "@codemirror/language": "^6.0.0",
        "@codemirror/state": "^6.0.0",
        "@lezer/common": "^1.0.2",
        "@lezer/css": "^1.1.7"
      }
    },
    "node_modules/@codemirror/lang-go": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-go/-/lang-go-6.0.1.tgz",
      "integrity": "sha512-7fNvbyNylvqCphW9HD6WFnRpcDjr+KXX/FgqXy5H5ZS0eC5edDljukm/yNgYkwTsgp2busdod50AOTIy6Jikfg==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/autocomplete": "^6.0.0",
        "@codemirror/language": "^6.6.0",
        "@codemirror/state": "^6.0.0",
        "@lezer/common": "^1.0.0",
        "@lezer/go": "^1.0.0"
      }
    },
    "node_modules/@codemirror/lang-html": {
      "version": "6.4.12",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-html/-/lang-html-6.4.12.tgz",
      "integrity": "sha512-pw2ReWKUqSkbvh76RAT4NYxiogRu+PWkR2ukAwO9uOgrm8uipkzjtKKtNpyeAQwHOqxEeSvAXZ6vr3AfyB9y/w==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/autocomplete": "^6.0.0",
        "@codemirror/lang-css": "^6.0.0",
        "@codemirror/lang-javascript": "^6.0.0",
        "@codemirror/language": "^6.4.0",
        "@codemirror/state": "^6.0.0",
        "@codemirror/view": "^6.17.0",
        "@lezer/common": "^1.0.0",
        "@lezer/css": "^1.1.0",
        "@lezer/html": "^1.3.12"
      }
    },
    "node_modules/@codemirror/lang-java": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-java/-/lang-java-6.0.2.tgz",
      "integrity": "sha512-m5Nt1mQ/cznJY7tMfQTJchmrjdjQ71IDs+55d1GAa8DGaB8JXWsVCkVT284C3RTASaY43YknrK2X3hPO/J3MOQ==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/language": "^6.0.0",
        "@lezer/java": "^1.0.0"
      }
    },
    "node_modules/@codemirror/lang-javascript": {
      "version": "6.2.5",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-javascript/-/lang-javascript-6.2.5.tgz",
      "integrity": "sha512-zD4e5mS+50htS7F+TYjBPsiIFGanfVqg4HyUz6WNFikgOPf2BgKlx+TQedI1w6n/IqRBVBbBWmGFdLB/7uxO4A==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/autocomplete": "^6.0.0",
        "@codemirror/language": "^6.6.0",
        "@codemirror/lint": "^6.0.0",
        "@codemirror/state": "^6.0.0",
        "@codemirror/view": "^6.17.0",
        "@lezer/common": "^1.0.0",
        "@lezer/javascript": "^1.0.0"
      }
    },
    "node_modules/@codemirror/lang-jinja": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-jinja/-/lang-jinja-6.0.1.tgz",
      "integrity": "sha512-P5kyHLObzjtbGj16h+hyvZTxJhSjBEeSx4wMjbnAf3b0uwTy2+F0zGjMZL4PQOm/mh2eGZ5xUDVZXgwP783Nsw==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/autocomplete": "^6.0.0",
        "@codemirror/lang-html": "^6.0.0",
        "@codemirror/language": "^6.0.0",
        "@codemirror/state": "^6.0.0",
        "@codemirror/view": "^6.0.0",
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.2.0",
        "@lezer/lr": "^1.4.0"
      }
    },
    "node_modules/@codemirror/lang-json": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-json/-/lang-json-6.0.2.tgz",
      "integrity": "sha512-x2OtO+AvwEHrEwR0FyyPtfDUiloG3rnVTSZV1W8UteaLL8/MajQd8DpvUb2YVzC+/T18aSDv0H9mu+xw0EStoQ==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/language": "^6.0.0",
        "@lezer/json": "^1.0.0"
      }
    },
    "node_modules/@codemirror/lang-less": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-less/-/lang-less-6.0.2.tgz",
      "integrity": "sha512-EYdQTG22V+KUUk8Qq582g7FMnCZeEHsyuOJisHRft/mQ+ZSZ2w51NupvDUHiqtsOy7It5cHLPGfHQLpMh9bqpQ==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/lang-css": "^6.2.0",
        "@codemirror/language": "^6.0.0",
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.0.0"
      }
    },
    "node_modules/@codemirror/lang-liquid": {
      "version": "6.3.2",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-liquid/-/lang-liquid-6.3.2.tgz",
      "integrity": "sha512-6PDVU3ZnfeYyz1at1E/ttorErZvZFXXt1OPhtfe1EZJ2V2iDFa0CwPqPgG5F7NXN0yONGoBogKmFAafKTqlwIw==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/autocomplete": "^6.0.0",
        "@codemirror/lang-html": "^6.0.0",
        "@codemirror/language": "^6.0.0",
        "@codemirror/state": "^6.0.0",
        "@codemirror/view": "^6.0.0",
        "@lezer/common": "^1.0.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.3.1"
      }
    },
    "node_modules/@codemirror/lang-markdown": {
      "version": "6.5.2",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-markdown/-/lang-markdown-6.5.2.tgz",
      "integrity": "sha512-AwBOdkWYuA//WcM0xO5PfHPUcmz/O2i5o0Nsg1U69SII/loCJlFI1Romd9xp2HYb1kYJRGZotyqRghuHH5n8Kw==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/autocomplete": "^6.7.1",
        "@codemirror/lang-html": "^6.0.0",
        "@codemirror/language": "^6.3.0",
        "@codemirror/state": "^6.0.0",
        "@codemirror/view": "^6.0.0",
        "@lezer/common": "^1.2.1",
        "@lezer/markdown": "^1.0.0"
      }
    },
    "node_modules/@codemirror/lang-php": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-php/-/lang-php-6.0.2.tgz",
      "integrity": "sha512-ZKy2v1n8Fc8oEXj0Th0PUMXzQJ0AIR6TaZU+PbDHExFwdu+guzOA4jmCHS1Nz4vbFezwD7LyBdDnddSJeScMCA==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/lang-html": "^6.0.0",
        "@codemirror/language": "^6.0.0",
        "@codemirror/state": "^6.0.0",
        "@lezer/common": "^1.0.0",
        "@lezer/php": "^1.0.0"
      }
    },
    "node_modules/@codemirror/lang-python": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-python/-/lang-python-6.2.1.tgz",
      "integrity": "sha512-IRjC8RUBhn9mGR9ywecNhB51yePWCGgvHfY1lWN/Mrp3cKuHr0isDKia+9HnvhiWNnMpbGhWrkhuWOc09exRyw==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/autocomplete": "^6.3.2",
        "@codemirror/language": "^6.8.0",
        "@codemirror/state": "^6.0.0",
        "@lezer/common": "^1.2.1",
        "@lezer/python": "^1.1.4"
      }
    },
    "node_modules/@codemirror/lang-rust": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-rust/-/lang-rust-6.0.2.tgz",
      "integrity": "sha512-EZaGjCUegtiU7kSMvOfEZpaCReowEf3yNidYu7+vfuGTm9ow4mthAparY5hisJqOHmJowVH3Upu+eJlUji6qqA==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/language": "^6.0.0",
        "@lezer/rust": "^1.0.0"
      }
    },
    "node_modules/@codemirror/lang-sass": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-sass/-/lang-sass-6.0.2.tgz",
      "integrity": "sha512-l/bdzIABvnTo1nzdY6U+kPAC51czYQcOErfzQ9zSm9D8GmNPD0WTW8st/CJwBTPLO8jlrbyvlSEcN20dc4iL0Q==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/lang-css": "^6.2.0",
        "@codemirror/language": "^6.0.0",
        "@codemirror/state": "^6.0.0",
        "@lezer/common": "^1.0.2",
        "@lezer/sass": "^1.0.0"
      }
    },
    "node_modules/@codemirror/lang-sql": {
      "version": "6.10.0",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-sql/-/lang-sql-6.10.0.tgz",
      "integrity": "sha512-6ayPkEd/yRw0XKBx5uAiToSgGECo/GY2NoJIHXIIQh1EVwLuKoU8BP/qK0qH5NLXAbtJRLuT73hx7P9X34iO4w==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/autocomplete": "^6.0.0",
        "@codemirror/language": "^6.0.0",
        "@codemirror/state": "^6.0.0",
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.0.0"
      }
    },
    "node_modules/@codemirror/lang-vue": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-vue/-/lang-vue-0.1.3.tgz",
      "integrity": "sha512-QSKdtYTDRhEHCfo5zOShzxCmqKJvgGrZwDQSdbvCRJ5pRLWBS7pD/8e/tH44aVQT6FKm0t6RVNoSUWHOI5vNug==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/lang-html": "^6.0.0",
        "@codemirror/lang-javascript": "^6.1.2",
        "@codemirror/language": "^6.0.0",
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.3.1"
      }
    },
    "node_modules/@codemirror/lang-wast": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-wast/-/lang-wast-6.0.2.tgz",
      "integrity": "sha512-Imi2KTpVGm7TKuUkqyJ5NRmeFWF7aMpNiwHnLQe0x9kmrxElndyH0K6H/gXtWwY6UshMRAhpENsgfpSwsgmC6Q==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/language": "^6.0.0",
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.0.0"
      }
    },
    "node_modules/@codemirror/lang-xml": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-xml/-/lang-xml-6.1.0.tgz",
      "integrity": "sha512-3z0blhicHLfwi2UgkZYRPioSgVTo9PV5GP5ducFH6FaHy0IAJRg+ixj5gTR1gnT/glAIC8xv4w2VL1LoZfs+Jg==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/autocomplete": "^6.0.0",
        "@codemirror/language": "^6.4.0",
        "@codemirror/state": "^6.0.0",
        "@codemirror/view": "^6.0.0",
        "@lezer/common": "^1.0.0",
        "@lezer/xml": "^1.0.0"
      }
    },
    "node_modules/@codemirror/lang-yaml": {
      "version": "6.1.3",
      "resolved": "https://registry.npmjs.org/@codemirror/lang-yaml/-/lang-yaml-6.1.3.tgz",
      "integrity": "sha512-AZ8DJBuXGVHybpBQhmZtgew5//4hv3tdkXnr3vDmOUMJRuB6vn/uuwtmTOTlqEaQFg3hQSVeA90NmvIQyUV6FQ==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/autocomplete": "^6.0.0",
        "@codemirror/language": "^6.0.0",
        "@codemirror/state": "^6.0.0",
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.2.0",
        "@lezer/lr": "^1.0.0",
        "@lezer/yaml": "^1.0.0"
      }
    },
    "node_modules/@codemirror/language": {
      "version": "6.12.4",
      "resolved": "https://registry.npmjs.org/@codemirror/language/-/language-6.12.4.tgz",
      "integrity": "sha512-1q4PaT+o6PbgpkJt4Q8Fv5XJxTy4FUZ4MWETtyiDw3J0Pyr9E2vqcKL+k9wcvjNTIsauxvE7OfmWj3FRPHQ76A==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/state": "^6.0.0",
        "@codemirror/view": "^6.23.0",
        "@lezer/common": "^1.5.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.0.0",
        "style-mod": "^4.0.0"
      }
    },
    "node_modules/@codemirror/language-data": {
      "version": "6.5.2",
      "resolved": "https://registry.npmjs.org/@codemirror/language-data/-/language-data-6.5.2.tgz",
      "integrity": "sha512-CPkWBKrNS8stYbEU5kwBwTf3JB1kghlbh4FSAwzGW2TEscdeHHH4FGysREW86Mqnj3Qn09s0/6Ea/TutmoTobg==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/lang-angular": "^0.1.0",
        "@codemirror/lang-cpp": "^6.0.0",
        "@codemirror/lang-css": "^6.0.0",
        "@codemirror/lang-go": "^6.0.0",
        "@codemirror/lang-html": "^6.0.0",
        "@codemirror/lang-java": "^6.0.0",
        "@codemirror/lang-javascript": "^6.0.0",
        "@codemirror/lang-jinja": "^6.0.0",
        "@codemirror/lang-json": "^6.0.0",
        "@codemirror/lang-less": "^6.0.0",
        "@codemirror/lang-liquid": "^6.0.0",
        "@codemirror/lang-markdown": "^6.0.0",
        "@codemirror/lang-php": "^6.0.0",
        "@codemirror/lang-python": "^6.0.0",
        "@codemirror/lang-rust": "^6.0.0",
        "@codemirror/lang-sass": "^6.0.0",
        "@codemirror/lang-sql": "^6.0.0",
        "@codemirror/lang-vue": "^0.1.1",
        "@codemirror/lang-wast": "^6.0.0",
        "@codemirror/lang-xml": "^6.0.0",
        "@codemirror/lang-yaml": "^6.0.0",
        "@codemirror/language": "^6.0.0",
        "@codemirror/legacy-modes": "^6.4.0"
      }
    },
    "node_modules/@codemirror/legacy-modes": {
      "version": "6.5.3",
      "resolved": "https://registry.npmjs.org/@codemirror/legacy-modes/-/legacy-modes-6.5.3.tgz",
      "integrity": "sha512-xCsmIzH78MyWkib9jlPaaun57XNkfbMIhagfaZVd0iLTqlpw3jXaIcbZm72MTmmn64eTZpBVNjbyYh+QXnxRsg==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/language": "^6.0.0"
      }
    },
    "node_modules/@codemirror/lint": {
      "version": "6.9.7",
      "resolved": "https://registry.npmjs.org/@codemirror/lint/-/lint-6.9.7.tgz",
      "integrity": "sha512-28/+iWLYxKxsvGYhSYL7zaCZqLz5+FFFDq9tVsvGv9kv8RY4fFAchJ5WX9M3YrrRlTIsECjsXPqeNgnSmNP2dg==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/state": "^6.0.0",
        "@codemirror/view": "^6.42.0",
        "crelt": "^1.0.5"
      }
    },
    "node_modules/@codemirror/merge": {
      "version": "6.12.2",
      "resolved": "https://registry.npmjs.org/@codemirror/merge/-/merge-6.12.2.tgz",
      "integrity": "sha512-V8JvyAPjHbPupqP7BeMcsdsYCbyPij74jxIbaIJDORI+VZzW44zFmon8bF+oxGWvOKhcRmkiUMXd8MxHr3YA2w==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/language": "^6.0.0",
        "@codemirror/state": "^6.0.0",
        "@codemirror/view": "^6.17.0",
        "@lezer/highlight": "^1.0.0",
        "style-mod": "^4.1.0"
      }
    },
    "node_modules/@codemirror/search": {
      "version": "6.7.1",
      "resolved": "https://registry.npmjs.org/@codemirror/search/-/search-6.7.1.tgz",
      "integrity": "sha512-uMe5UO6PamJtSHrXhhHOzSX3ReWtiJrva6GnPMwSOrZtiExb5X5eExhr2OUZQVvdxPsKpY3Ro2mFbQadpPWmHA==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/state": "^6.0.0",
        "@codemirror/view": "^6.37.0",
        "crelt": "^1.0.5"
      }
    },
    "node_modules/@codemirror/state": {
      "version": "6.7.1",
      "resolved": "https://registry.npmjs.org/@codemirror/state/-/state-6.7.1.tgz",
      "integrity": "sha512-9QzNDgE4EYDnAHfrTlR2lwiPciiOymLtwKK+8yHQzCc7GXhAP9xdEbEJFy2IWB1j9UGUl9BsgMmTo/ImA02T7A==",
      "license": "MIT",
      "dependencies": {
        "@marijn/find-cluster-break": "^1.0.0"
      }
    },
    "node_modules/@codemirror/view": {
      "version": "6.43.9",
      "resolved": "https://registry.npmjs.org/@codemirror/view/-/view-6.43.9.tgz",
      "integrity": "sha512-sTuUzTpPMFebRhg6dawChoKKgndIwfjmJgKVxBefPElcU2NwQ6AFroupk0SFqEerQyZOGRfDNnSN8Dw/lMAsXw==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/state": "^6.7.0",
        "crelt": "^1.0.6",
        "style-mod": "^4.1.0",
        "w3c-keyname": "^2.2.4"
      }
    },
    "node_modules/@codesandbox/nodebox": {
      "version": "0.1.8",
      "resolved": "https://registry.npmjs.org/@codesandbox/nodebox/-/nodebox-0.1.8.tgz",
      "integrity": "sha512-2VRS6JDSk+M+pg56GA6CryyUSGPjBEe8Pnae0QL3jJF1mJZJVMDKr93gJRtBbLkfZN6LD/DwMtf+2L0bpWrjqg==",
      "license": "SEE LICENSE IN ./LICENSE",
      "dependencies": {
        "outvariant": "^1.4.0",
        "strict-event-emitter": "^0.4.3"
      }
    },
    "node_modules/@codesandbox/sandpack-client": {
      "version": "2.19.8",
      "resolved": "https://registry.npmjs.org/@codesandbox/sandpack-client/-/sandpack-client-2.19.8.tgz",
      "integrity": "sha512-CMV4nr1zgKzVpx4I3FYvGRM5YT0VaQhALMW9vy4wZRhEyWAtJITQIqZzrTGWqB1JvV7V72dVEUCUPLfYz5hgJQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@codesandbox/nodebox": "0.1.8",
        "buffer": "^6.0.3",
        "dequal": "^2.0.2",
        "mime-db": "^1.52.0",
        "outvariant": "1.4.0",
        "static-browser-server": "1.0.3"
      }
    },
    "node_modules/@codesandbox/sandpack-react": {
      "version": "2.20.0",
      "resolved": "https://registry.npmjs.org/@codesandbox/sandpack-react/-/sandpack-react-2.20.0.tgz",
      "integrity": "sha512-takd1YpW/PMQ6KPQfvseWLHWklJovGY8QYj8MtWnskGKbjOGJ6uZfyZbcJ6aCFLQMpNyjTqz9AKNbvhCOZ1TUQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@codemirror/autocomplete": "^6.4.0",
        "@codemirror/commands": "^6.1.3",
        "@codemirror/lang-css": "^6.0.1",
        "@codemirror/lang-html": "^6.4.0",
        "@codemirror/lang-javascript": "^6.1.2",
        "@codemirror/language": "^6.3.2",
        "@codemirror/state": "^6.2.0",
        "@codemirror/view": "^6.7.1",
        "@codesandbox/sandpack-client": "^2.19.8",
        "@lezer/highlight": "^1.1.3",
        "@react-hook/intersection-observer": "^3.1.1",
        "@stitches/core": "^1.2.6",
        "anser": "^2.1.1",
        "clean-set": "^1.1.2",
        "dequal": "^2.0.2",
        "escape-carriage": "^1.3.1",
        "lz-string": "^1.4.4",
        "react-devtools-inline": "4.4.0",
        "react-is": "^17.0.2"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17 || ^18 || ^19",
        "react-dom": "^16.8.0 || ^17 || ^18 || ^19"
      }
    },
    "node_modules/@date-fns/tz": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@date-fns/tz/-/tz-1.5.0.tgz",
      "integrity": "sha512-lwYN/vDPeNRULcepoE/LO2Pgx+7/RV+S9ARfbc9lr2DtGkOD7pAiruHvbR1RX3Qyf6ja47EWJDMsNK5vK08DJg==",
      "license": "MIT"
    },
    "node_modules/@dnd-kit/accessibility": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/@dnd-kit/accessibility/-/accessibility-3.1.1.tgz",
      "integrity": "sha512-2P+YgaXF+gRsIihwwY1gCsQSYnu9Zyj2py8kY5fFvUM1qm2WA2u639R6YNVfU4GWr+ZM5mqEsfHZZLoRONbemw==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "peerDependencies": {
        "react": ">=16.8.0"
      }
    },
    "node_modules/@dnd-kit/core": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/@dnd-kit/core/-/core-6.3.1.tgz",
      "integrity": "sha512-xkGBRQQab4RLwgXxoqETICr6S5JlogafbhNsidmrkVv2YRs5MLwpjoF2qpiGjQt8S9AoxtIV603s0GIUpY5eYQ==",
      "license": "MIT",
      "dependencies": {
        "@dnd-kit/accessibility": "^3.1.1",
        "@dnd-kit/utilities": "^3.2.2",
        "tslib": "^2.0.0"
      },
      "peerDependencies": {
        "react": ">=16.8.0",
        "react-dom": ">=16.8.0"
      }
    },
    "node_modules/@dnd-kit/sortable": {
      "version": "10.0.0",
      "resolved": "https://registry.npmjs.org/@dnd-kit/sortable/-/sortable-10.0.0.tgz",
      "integrity": "sha512-+xqhmIIzvAYMGfBYYnbKuNicfSsk4RksY2XdmJhT+HAC01nix6fHCztU68jooFiMUB01Ky3F0FyOvhG/BZrWkg==",
      "license": "MIT",
      "dependencies": {
        "@dnd-kit/utilities": "^3.2.2",
        "tslib": "^2.0.0"
      },
      "peerDependencies": {
        "@dnd-kit/core": "^6.3.0",
        "react": ">=16.8.0"
      }
    },
    "node_modules/@dnd-kit/utilities": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/@dnd-kit/utilities/-/utilities-3.2.2.tgz",
      "integrity": "sha512-+MKAJEOfaBe5SmV6t34p80MMKhjvUz0vRrvVJbPT0WElzaOJ/1xs+D+KDv+tD/NE5ujfrChEcshd4fLn0wpiqg==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "peerDependencies": {
        "react": ">=16.8.0"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.10.0.tgz",
      "integrity": "sha512-yq6OkJ4p82CAfPl0u9mQebQHKPJkY7WrIuk205cTYnYe+k2Z8YBh11FrbRG/H6ihirqcacOgl2BIO8oyMQLeXw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.1",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.11.3",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.11.3.tgz",
      "integrity": "sha512-Xz4Tpyki7XyrpbUK1jR1AhdAdaXyhhY4lZ3neLodmhpuWfy2PAQN5B46sAiU4liOXGLkHypn/qU+jvfWSCYYLA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.1.tgz",
      "integrity": "sha512-uTII7OYF+/Mes/MrcIOYp5yOtSMLBWSIoLPpcgwipoiKbli6k322tcoFsxoIIxPDqW01SQGAgko4EzZi2BNv2w==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.10.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.10.1.tgz",
      "integrity": "sha512-cuadcxVFE8sDK6iWJbs8Sn0av2Nrh2QSGQhVlBW9AaAHqHwjWsZHT8LJ4hFGPh7ASBV2deFdM7H/DPjulmh8rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.21.2",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.21.2.tgz",
      "integrity": "sha512-nJl2KGTlrf9GjLimgIru+V/mzgSK0ABCDQRvxw5BjURL7WfH5uoWmizbH7QB6MmnMBd8cIC9uceWnezL1VZWWw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^2.1.7",
        "debug": "^4.3.1",
        "minimatch": "^3.1.5"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.4.2.tgz",
      "integrity": "sha512-gBrxN88gOIf3R7ja5K9slwNayVcZgK6SOUORm2uBzTeIEfeVaIhOpCtTox3P6R7o2jLFwLFTLnC7kU/RGcYEgw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/core": {
      "version": "0.17.0",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.17.0.tgz",
      "integrity": "sha512-yL/sLrpmtDaFEiUj1osRP4TI2MDz1AddJL+jZ7KSqvBuliN4xqYY54IfdN8qD8Toa6g1iloph1fxQNkjOxrrpQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.3.6.tgz",
      "integrity": "sha512-l2Ul9PrHsPCKcEY/ac7VgFj9D80C7S68sOKc618SyHDPK36s1XcFebXY0iTzUVn4Yq+YbwvSnDmCz9yxjX+QrA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.14.0",
        "debug": "^4.3.2",
        "espree": "^10.0.1",
        "globals": "^14.0.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.3.0",
        "minimatch": "^3.1.5",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/ajv": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.15.0.tgz",
      "integrity": "sha512-fgFx7Hfoq60ytK2c7DhnF8jIvzYgOMxfugjLOSMHjLIPgenqa7S7oaagATUq99mV6IYvN2tRmC0wnTYX6iPbMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/js-yaml": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.3.1.tgz",
      "integrity": "sha512-CY6crGq313MX8GkwvB7tzgp99vjQxY1++5y10/BKN/GUfHqWaOGQMNZkBvqSzsZKWk/ijwHlWzzkLulsGHhjWQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/puzrin"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/nodeca"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@eslint/js": {
      "version": "9.39.5",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.39.5.tgz",
      "integrity": "sha512-QywQuszQh77pIXCsq998c8hbhSTI/azTty1Z6N53dmAudKHhy573j3yvRLsX2BSp8YpLtoCEG8E9DJe+8zUh4A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "2.1.7",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.7.tgz",
      "integrity": "sha512-VtAOaymWVfZcmZbp6E2mympDIHvyjXs/12LqWYjVw6qjrfF+VK+fyG33kChz3nnK+SU5/NeHOqrTEHS8sXO3OA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.4.1.tgz",
      "integrity": "sha512-43/qtrDUokr7LJqoF2c3+RInu/t4zfrpYdoSDfYyhg52rwLV6TnOvdG4fXm7IkSB3wErkcmJS9iEhjVtOSEjjA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@floating-ui/core": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.8.0.tgz",
      "integrity": "sha512-0CIZ5itps/8x7BG8dEIhs53BvCUH2PCoogtakwRTut+Arm58sJooJ0AuZhLw2HJYIR5cMLNPBSS728sPho2khQ==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/utils": "^0.2.12"
      }
    },
    "node_modules/@floating-ui/dom": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.8.0.tgz",
      "integrity": "sha512-yXSrzeHZBTZadLOlfyhCkJHNeLJnHRnRInwdZ40L7ZiaAtrBwoYlsDrX3v5zB1Utk7CLfzcOVnVVWoXEky7Ceg==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/core": "^1.8.0",
        "@floating-ui/utils": "^0.2.12"
      }
    },
    "node_modules/@floating-ui/react": {
      "version": "0.27.20",
      "resolved": "https://registry.npmjs.org/@floating-ui/react/-/react-0.27.20.tgz",
      "integrity": "sha512-CMqMy7OaXl9W0eq1Uy7L7i2Y/anPvHmFmESd2CEw0t5YvZhcVCeo4MBevAmswRllX7Y2dEidA4ozGPunLSTQpw==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/react-dom": "^2.1.9",
        "@floating-ui/utils": "^0.2.12",
        "tabbable": "^6.0.0"
      },
      "peerDependencies": {
        "react": ">=17.0.0",
        "react-dom": ">=17.0.0"
      }
    },
    "node_modules/@floating-ui/react-dom": {
      "version": "2.1.9",
      "resolved": "https://registry.npmjs.org/@floating-ui/react-dom/-/react-dom-2.1.9.tgz",
      "integrity": "sha512-JDjEFGCpImxDCA7JJKviA0M9+RtmJdj0m/NVU5IMgBK+AmZouAQQ7/+2GLH0GXXY0YMw9oXPB8hKdbPYg5QLYg==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/dom": "^1.8.0"
      },
      "peerDependencies": {
        "react": ">=16.8.0",
        "react-dom": ">=16.8.0"
      }
    },
    "node_modules/@floating-ui/utils": {
      "version": "0.2.12",
      "resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.12.tgz",
      "integrity": "sha512-HpCo8tmWzLVad5s2d19EhAz5zqrrQ6s69qd6moPMQvkOuSwDT1YgRfWSVuc4ennqrgv3OHppiOGMQ7oC13yIww==",
      "license": "MIT"
    },
    "node_modules/@formatjs/fast-memoize": {
      "version": "3.1.7",
      "resolved": "https://registry.npmjs.org/@formatjs/fast-memoize/-/fast-memoize-3.1.7.tgz",
      "integrity": "sha512-zXfhLpvA6T7+efdt9JLbBwZ00tT7NsBMDVnDu8rpHeNNv8KfRZAMo2gkG0k9lK/Nzc//3kJ9pImsfuJxk3KhUA==",
      "license": "MIT"
    },
    "node_modules/@formatjs/icu-messageformat-parser": {
      "version": "3.5.17",
      "resolved": "https://registry.npmjs.org/@formatjs/icu-messageformat-parser/-/icu-messageformat-parser-3.5.17.tgz",
      "integrity": "sha512-cN9jhVqT7u0K9tix43fhjoUwL0nazyW6zsNIXs2QdPADr+nurPfYyssUiMqcSCGlPcCiqnYVxgSn7zBSuI+5Bg==",
      "license": "MIT",
      "dependencies": {
        "@formatjs/icu-skeleton-parser": "2.1.11"
      }
    },
    "node_modules/@formatjs/icu-skeleton-parser": {
      "version": "2.1.11",
      "resolved": "https://registry.npmjs.org/@formatjs/icu-skeleton-parser/-/icu-skeleton-parser-2.1.11.tgz",
      "integrity": "sha512-j8cUmOJzVgkHuS0QiQ6ga76UIoLOFSAMWhs7aZJztH3aAdCOAE6vpC8KVvFB4cU10ON0y2/5oOVmPJ43s2lTwA==",
      "license": "MIT"
    },
    "node_modules/@formatjs/intl-localematcher": {
      "version": "0.8.13",
      "resolved": "https://registry.npmjs.org/@formatjs/intl-localematcher/-/intl-localematcher-0.8.13.tgz",
      "integrity": "sha512-kHEAFOkeJSPNi7c5PaKaRjxcBrJwzzt81ifUu+8uve1EDW/VJl83KsxmqgqNZLzcFEhSliZGvx3+pk/RH0IOmg==",
      "license": "MIT",
      "dependencies": {
        "@formatjs/fast-memoize": "3.1.7"
      }
    },
    "node_modules/@hookform/resolvers": {
      "version": "5.9.1",
      "resolved": "https://registry.npmjs.org/@hookform/resolvers/-/resolvers-5.9.1.tgz",
      "integrity": "sha512-7b7vsbraJxKgjVSA1Nur9tLwj539WGJUBLA7QNvXnFoT2pM5Z7G+6rlukk4B2/QrTZy6huRtH6wKeESPKuIr6w==",
      "license": "MIT",
      "dependencies": {
        "@standard-schema/utils": "^0.3.0"
      },
      "peerDependencies": {
        "@sinclair/typebox": ">=0.25.24",
        "@standard-schema/spec": "^1.0.0",
        "@typeschema/main": ">=0.13.7",
        "@vinejs/vine": "^2.0.0 || ^3.0.0 || ^4.0.0",
        "ajv": "^8.12.0",
        "ajv-errors": "^3.0.0",
        "ajv-formats": "^2.1.1",
        "arktype": "^2.0.0",
        "ata-validator": "^1.2.0",
        "class-transformer": ">=0.4.0",
        "class-validator": ">=0.12.0",
        "computed-types": "^1.0.0",
        "effect": "^3.10.3",
        "fluentvalidation-ts": "^3.0.0",
        "fp-ts": "^2.7.0",
        "io-ts": "^2.0.0",
        "joi": "^17.0.0 || ^18.0.0",
        "nope-validator": ">=0.12.0",
        "react-hook-form": "^7.55.0",
        "superstruct": ">=0.12.0",
        "typanion": "^3.3.2",
        "valibot": ">=0.31.0 || ^1.0.0-beta.4 || ^1.0.0-rc",
        "vest": ">=6.0.0",
        "yup": "^1.0.0",
        "zod": "^3.25.0 || ^4.0.0"
      },
      "peerDependenciesMeta": {
        "@sinclair/typebox": {
          "optional": true
        },
        "@standard-schema/spec": {
          "optional": true
        },
        "@typeschema/main": {
          "optional": true
        },
        "@vinejs/vine": {
          "optional": true
        },
        "ajv": {
          "optional": true
        },
        "ajv-errors": {
          "optional": true
        },
        "ajv-formats": {
          "optional": true
        },
        "arktype": {
          "optional": true
        },
        "ata-validator": {
          "optional": true
        },
        "class-transformer": {
          "optional": true
        },
        "class-validator": {
          "optional": true
        },
        "computed-types": {
          "optional": true
        },
        "effect": {
          "optional": true
        },
        "fluentvalidation-ts": {
          "optional": true
        },
        "fp-ts": {
          "optional": true
        },
        "io-ts": {
          "optional": true
        },
        "joi": {
          "optional": true
        },
        "nope-validator": {
          "optional": true
        },
        "superstruct": {
          "optional": true
        },
        "typanion": {
          "optional": true
        },
        "valibot": {
          "optional": true
        },
        "vest": {
          "optional": true
        },
        "yup": {
          "optional": true
        },
        "zod": {
          "optional": true
        }
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.2",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.2.tgz",
      "integrity": "sha512-UhXNm+CFMWcbChXywFwkmhqjs3PRCmcSa/hfBgLIb7oQ5HNb1wS0icWsGtSAUNgefHeI+eBrA8I1fxmbHsGdvA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/types": "^0.15.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.8",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.8.tgz",
      "integrity": "sha512-gE1eQNZ3R++kTzFUpdGlpmy8kDZD/MLyHqDwqjkVQI0JMdI1D51sy1H958PNXYkM2rAac7e5/CnIKZrHtPh3BQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.2",
        "@humanfs/types": "^0.15.0",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/types": {
      "version": "0.15.0",
      "resolved": "https://registry.npmjs.org/@humanfs/types/-/types-0.15.0.tgz",
      "integrity": "sha512-ZZ1w0aoQkwuUuC7Yf+7sdeaNfqQiiLcSRbfI08oAxqLtpXQr9AIVX7Ay7HLDuiLYAaFPu8oBYNq/QIi9URHJ3Q==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@img/colour": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@img/colour/-/colour-1.1.0.tgz",
      "integrity": "sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.34.5.tgz",
      "integrity": "sha512-imtQ3WMJXbMY4fxb/Ndp6HBTNVtWCUI0WdobyheGf5+ad6xX8VIDO8u2xE4qc/fr08CKG/7dDseFtn6M6g/r3w==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.34.5.tgz",
      "integrity": "sha512-YNEFAF/4KQ/PeW0N+r+aVVsoIY0/qxxikF2SWdp+NRkmMB7y9LBZAVqQ4yhGCm/H3H270OSykqmQMKLBhBJDEw==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-freebsd-wasm32": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-freebsd-wasm32/-/sharp-freebsd-wasm32-0.35.3.tgz",
      "integrity": "sha512-lUxcqWIj2wMQ9BrwNjngcr1gWUr5xgaGThBRqPPalIC2n67Cqj1uPh8NnA/ZhAg8hUbKl+kVHKwgUIwe6ZYPrg==",
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "dependencies": {
        "@img/sharp-wasm32": "0.35.3"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-freebsd-wasm32/node_modules/@img/sharp-wasm32": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.35.3.tgz",
      "integrity": "sha512-cZ0XkcYGpHZkqW6iCkqTcmUC0CD9DhD5d/qeZlZkfRBn6GnHniZXLUo5+9xw8Iv76YE6LQFN9YNBlKREcCG76w==",
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.11.1"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.2.4.tgz",
      "integrity": "sha512-zqjjo7RatFfFoP0MkQ51jfuFZBnVE2pRiaydKJ1G/rHZvnsrHAOcQALIi9sA5co5xenQdTugCvtb1cuf78Vf4g==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.2.4.tgz",
      "integrity": "sha512-1IOd5xfVhlGwX+zXv2N93k0yMONvUlANylbJw1eTah8K/Jtpi15KC+WSiaX/nBmbm2HxRM1gZ0nSdjSsrZbGKg==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.2.4.tgz",
      "integrity": "sha512-bFI7xcKFELdiNCVov8e44Ia4u2byA+l3XtsAj+Q8tfCwO6BQ8iDojYdvoPMqsKDkuoOo+X6HZA0s0q11ANMQ8A==",
      "cpu": [
        "arm"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.2.4.tgz",
      "integrity": "sha512-excjX8DfsIcJ10x1Kzr4RcWe1edC9PquDRRPx3YVCvQv+U5p7Yin2s32ftzikXojb1PIFc/9Mt28/y+iRklkrw==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.2.4.tgz",
      "integrity": "sha512-FMuvGijLDYG6lW+b/UvyilUWu5Ayu+3r2d1S8notiGCIyYU/76eig1UfMmkZ7vwgOrzKzlQbFSuQfgm7GYUPpA==",
      "cpu": [
        "ppc64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-riscv64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-riscv64/-/sharp-libvips-linux-riscv64-1.2.4.tgz",
      "integrity": "sha512-oVDbcR4zUC0ce82teubSm+x6ETixtKZBh/qbREIOcI3cULzDyb18Sr/Wcyx7NRQeQzOiHTNbZFF1UwPS2scyGA==",
      "cpu": [
        "riscv64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.2.4.tgz",
      "integrity": "sha512-qmp9VrzgPgMoGZyPvrQHqk02uyjA0/QrTO26Tqk6l4ZV0MPWIW6LTkqOIov+J1yEu7MbFQaDpwdwJKhbJvuRxQ==",
      "cpu": [
        "s390x"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.2.4.tgz",
      "integrity": "sha512-tJxiiLsmHc9Ax1bz3oaOYBURTXGIRDODBqhveVHonrHJ9/+k89qbLl0bcJns+e4t4rvaNBxaEZsFtSfAdquPrw==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.2.4.tgz",
      "integrity": "sha512-FVQHuwx1IIuNow9QAbYUzJ+En8KcVm9Lk5+uGUQJHaZmMECZmOlix9HnH7n1TRkXMS0pGxIJokIVB9SuqZGGXw==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.2.4.tgz",
      "integrity": "sha512-+LpyBk7L44ZIXwz/VYfglaX/okxezESc6UxDSoyo2Ks6Jxc4Y7sGjpgU9s4PMgqgjj1gZCylTieNamqA1MF7Dg==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.34.5.tgz",
      "integrity": "sha512-9dLqsvwtg1uuXBGZKsxem9595+ujv0sJ6Vi8wcTANSFpwV/GONat5eCkzQo/1O6zRIkh0m/8+5BjrRr7jDUSZw==",
      "cpu": [
        "arm"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.34.5.tgz",
      "integrity": "sha512-bKQzaJRY/bkPOXyKx5EVup7qkaojECG6NLYswgktOZjaXecSAeCWiZwwiFf3/Y+O1HrauiE3FVsGxFg8c24rZg==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.34.5.tgz",
      "integrity": "sha512-7zznwNaqW6YtsfrGGDA6BRkISKAAE1Jo0QdpNYXNMHu2+0dTrPflTLNkpc8l7MUP5M16ZJcUvysVWWrMefZquA==",
      "cpu": [
        "ppc64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-riscv64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-riscv64/-/sharp-linux-riscv64-0.34.5.tgz",
      "integrity": "sha512-51gJuLPTKa7piYPaVs8GmByo7/U7/7TZOq+cnXJIHZKavIRHAP77e3N2HEl3dgiqdD/w0yUfiJnII77PuDDFdw==",
      "cpu": [
        "riscv64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-riscv64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.34.5.tgz",
      "integrity": "sha512-nQtCk0PdKfho3eC5MrbQoigJ2gd1CgddUMkabUj+rBevs8tZ2cULOx46E7oyX+04WGfABgIwmMC0VqieTiR4jg==",
      "cpu": [
        "s390x"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.34.5.tgz",
      "integrity": "sha512-MEzd8HPKxVxVenwAa+JRPwEC7QFjoPWuS5NZnBt6B3pu7EG2Ge0id1oLHZpPJdn3OQK+BQDiw9zStiHBTJQQQQ==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.34.5.tgz",
      "integrity": "sha512-fprJR6GtRsMt6Kyfq44IsChVZeGN97gTD331weR1ex1c1rypDEABN6Tm2xa1wE6lYb5DdEnk03NZPqA7Id21yg==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.34.5.tgz",
      "integrity": "sha512-Jg8wNT1MUzIvhBFxViqrEhWDGzqymo3sV7z7ZsaWbZNDLXRJZoRGrjulp60YYtV4wfY8VIKcWidjojlLcWrd8Q==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.34.5.tgz",
      "integrity": "sha512-OdWTEiVkY2PHwqkbBI8frFxQQFekHaSSkUIJkwzclWZe64O1X4UlUjqqqLaPbUpMOQk6FBu/HtlGXNblIs0huw==",
      "cpu": [
        "wasm32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.7.0"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-webcontainers-wasm32": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-webcontainers-wasm32/-/sharp-webcontainers-wasm32-0.35.3.tgz",
      "integrity": "sha512-2rnq7bX3NzeR2T4YWgz8qiG4h3TSdMe+vN1iQXpJleSJ3SM5zQ8Fy2SyyXAWlbxpEZ2Y+Z4u1BePgJEYbSy80Q==",
      "cpu": [
        "wasm32"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/sharp-wasm32": "0.35.3"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-webcontainers-wasm32/node_modules/@img/sharp-wasm32": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.35.3.tgz",
      "integrity": "sha512-cZ0XkcYGpHZkqW6iCkqTcmUC0CD9DhD5d/qeZlZkfRBn6GnHniZXLUo5+9xw8Iv76YE6LQFN9YNBlKREcCG76w==",
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.11.1"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.34.5.tgz",
      "integrity": "sha512-WQ3AgWCWYSb2yt+IG8mnC6Jdk9Whs7O0gxphblsLvdhSpSTtmu69ZG1Gkb6NuvxsNACwiPV6cNSZNzt0KPsw7g==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.34.5.tgz",
      "integrity": "sha512-FV9m/7NmeCmSHDD5j4+4pNI8Cp3aW+JvLoXcTUo0IqyjSfAZJ8dIUmijx1qaJsIiU+Hosw6xM5KijAWRJCSgNg==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.34.5.tgz",
      "integrity": "sha512-+29YMsqY2/9eFEiW93eqWnuLcWcufowXewwSNIT6UwZdUUCrM3oFjMWH/Z6/TMmb4hlFenmfAVbpWeup2jryCw==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@lexical/clipboard": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/clipboard/-/clipboard-0.35.0.tgz",
      "integrity": "sha512-ko7xSIIiayvDiqjNDX6fgH9RlcM6r9vrrvJYTcfGVBor5httx16lhIi0QJZ4+RNPvGtTjyFv4bwRmsixRRwImg==",
      "license": "MIT",
      "dependencies": {
        "@lexical/html": "0.35.0",
        "@lexical/list": "0.35.0",
        "@lexical/selection": "0.35.0",
        "@lexical/utils": "0.35.0",
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/code": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/code/-/code-0.35.0.tgz",
      "integrity": "sha512-ox4DZwETQ9IA7+DS6PN8RJNwSAF7RMjL7YTVODIqFZ5tUFIf+5xoCHbz7Fll0Bvixlp12hVH90xnLwTLRGpkKw==",
      "license": "MIT",
      "dependencies": {
        "@lexical/utils": "0.35.0",
        "lexical": "0.35.0",
        "prismjs": "^1.30.0"
      }
    },
    "node_modules/@lexical/devtools-core": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/devtools-core/-/devtools-core-0.35.0.tgz",
      "integrity": "sha512-C2wwtsMCR6ZTfO0TqpSM17RLJWyfHmifAfCTjFtOJu15p3M6NO/nHYK5Mt7YMQteuS89mOjB4ng8iwoLEZ6QpQ==",
      "license": "MIT",
      "dependencies": {
        "@lexical/html": "0.35.0",
        "@lexical/link": "0.35.0",
        "@lexical/mark": "0.35.0",
        "@lexical/table": "0.35.0",
        "@lexical/utils": "0.35.0",
        "lexical": "0.35.0"
      },
      "peerDependencies": {
        "react": ">=17.x",
        "react-dom": ">=17.x"
      }
    },
    "node_modules/@lexical/dragon": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/dragon/-/dragon-0.35.0.tgz",
      "integrity": "sha512-SL6mT5pcqrt6hEbJ16vWxip5+r3uvMd0bQV5UUxuk+cxIeuP86iTgRh0HFR7SM2dRTYovL6/tM/O+8QLAUGTIg==",
      "license": "MIT",
      "dependencies": {
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/hashtag": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/hashtag/-/hashtag-0.35.0.tgz",
      "integrity": "sha512-LYJWzXuO2ZjKsvQwrLkNZiS2TsjwYkKjlDgtugzejquTBQ/o/nfSn/MmVx6EkYLOYizaJemmZbz3IBh+u732FA==",
      "license": "MIT",
      "dependencies": {
        "@lexical/utils": "0.35.0",
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/history": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/history/-/history-0.35.0.tgz",
      "integrity": "sha512-onjDRLLxGbCfHexSxxrQaDaieIHyV28zCDrbxR5dxTfW8F8PxjuNyuaG0z6o468AXYECmclxkP+P4aT6poHEpQ==",
      "license": "MIT",
      "dependencies": {
        "@lexical/utils": "0.35.0",
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/html": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/html/-/html-0.35.0.tgz",
      "integrity": "sha512-rXGFE5S5rKsg3tVnr1s4iEgOfCApNXGpIFI3T2jGEShaCZ5HLaBY9NVBXnE9Nb49e9bkDkpZ8FZd1qokCbQXbw==",
      "license": "MIT",
      "dependencies": {
        "@lexical/selection": "0.35.0",
        "@lexical/utils": "0.35.0",
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/link": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/link/-/link-0.35.0.tgz",
      "integrity": "sha512-+0Wx6cBwO8TfdMzpkYFacsmgFh8X1rkiYbq3xoLvk3qV8upYxaMzK1s8Q1cpKmWyI0aZrU6z7fiK4vUqB7+69w==",
      "license": "MIT",
      "dependencies": {
        "@lexical/utils": "0.35.0",
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/list": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/list/-/list-0.35.0.tgz",
      "integrity": "sha512-owsmc8iwgExBX8sFe8fKTiwJVhYULt9hD1RZ/HwfaiEtRZZkINijqReOBnW2mJfRxBzhFSWc4NG3ISB+fHYzqw==",
      "license": "MIT",
      "dependencies": {
        "@lexical/selection": "0.35.0",
        "@lexical/utils": "0.35.0",
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/mark": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/mark/-/mark-0.35.0.tgz",
      "integrity": "sha512-W0hwMTAVeexvpk9/+J6n1G/sNkpI/Meq1yeDazahFLLAwXLHtvhIAq2P/klgFknDy1hr8X7rcsQuN/bqKcKHYg==",
      "license": "MIT",
      "dependencies": {
        "@lexical/utils": "0.35.0",
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/markdown": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/markdown/-/markdown-0.35.0.tgz",
      "integrity": "sha512-BlNyXZAt4gWidMw0SRWrhBETY1BpPglFBZI7yzfqukFqgXRh7HUQA28OYeI/nsx9pgNob8TiUduUwShqqvOdEA==",
      "license": "MIT",
      "dependencies": {
        "@lexical/code": "0.35.0",
        "@lexical/link": "0.35.0",
        "@lexical/list": "0.35.0",
        "@lexical/rich-text": "0.35.0",
        "@lexical/text": "0.35.0",
        "@lexical/utils": "0.35.0",
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/offset": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/offset/-/offset-0.35.0.tgz",
      "integrity": "sha512-DRE4Df6qYf2XiV6foh6KpGNmGAv2ANqt3oVXpyS6W8hTx3+cUuAA1APhCZmLNuU107um4zmHym7taCu6uXW5Yg==",
      "license": "MIT",
      "dependencies": {
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/overflow": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/overflow/-/overflow-0.35.0.tgz",
      "integrity": "sha512-B25YvnJQTGlZcrNv7b0PJBLWq3tl8sql497OHfYYLem7EOMPKKDGJScJAKM/91D4H/mMAsx5gnA/XgKobriuTg==",
      "license": "MIT",
      "dependencies": {
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/plain-text": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/plain-text/-/plain-text-0.35.0.tgz",
      "integrity": "sha512-lwBCUNMJf7Gujp2syVWMpKRahfbTv5Wq+H3HK1Q1gKH1P2IytPRxssCHvexw9iGwprSyghkKBlbF3fGpEdIJvQ==",
      "license": "MIT",
      "dependencies": {
        "@lexical/clipboard": "0.35.0",
        "@lexical/selection": "0.35.0",
        "@lexical/utils": "0.35.0",
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/react": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/react/-/react-0.35.0.tgz",
      "integrity": "sha512-uYAZSqumH8tRymMef+A0f2hQvMwplKK9DXamcefnk3vSNDHHqRWQXpiUo6kD+rKWuQmMbVa5RW4xRQebXEW+1A==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/react": "^0.27.8",
        "@lexical/devtools-core": "0.35.0",
        "@lexical/dragon": "0.35.0",
        "@lexical/hashtag": "0.35.0",
        "@lexical/history": "0.35.0",
        "@lexical/link": "0.35.0",
        "@lexical/list": "0.35.0",
        "@lexical/mark": "0.35.0",
        "@lexical/markdown": "0.35.0",
        "@lexical/overflow": "0.35.0",
        "@lexical/plain-text": "0.35.0",
        "@lexical/rich-text": "0.35.0",
        "@lexical/table": "0.35.0",
        "@lexical/text": "0.35.0",
        "@lexical/utils": "0.35.0",
        "@lexical/yjs": "0.35.0",
        "lexical": "0.35.0",
        "react-error-boundary": "^3.1.4"
      },
      "peerDependencies": {
        "react": ">=17.x",
        "react-dom": ">=17.x"
      }
    },
    "node_modules/@lexical/rich-text": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/rich-text/-/rich-text-0.35.0.tgz",
      "integrity": "sha512-qEHu8g7vOEzz9GUz1VIUxZBndZRJPh9iJUFI+qTDHj+tQqnd5LCs+G9yz6jgNfiuWWpezTp0i1Vz/udNEuDPKQ==",
      "license": "MIT",
      "dependencies": {
        "@lexical/clipboard": "0.35.0",
        "@lexical/selection": "0.35.0",
        "@lexical/utils": "0.35.0",
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/selection": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/selection/-/selection-0.35.0.tgz",
      "integrity": "sha512-mMtDE7Q0nycXdFTTH/+ta6EBrBwxBB4Tg8QwsGntzQ1Cq//d838dpXpFjJOqHEeVHUqXpiuj+cBG8+bvz/rPRw==",
      "license": "MIT",
      "dependencies": {
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/table": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/table/-/table-0.35.0.tgz",
      "integrity": "sha512-9jlTlkVideBKwsEnEkqkdg7A3mije1SvmfiqoYnkl1kKJCLA5iH90ywx327PU0p+bdnURAytWUeZPXaEuEl2OA==",
      "license": "MIT",
      "dependencies": {
        "@lexical/clipboard": "0.35.0",
        "@lexical/utils": "0.35.0",
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/text": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/text/-/text-0.35.0.tgz",
      "integrity": "sha512-uaMh46BkysV8hK8wQwp5g/ByZW+2hPDt8ahAErxtf8NuzQem1FHG/f5RTchmFqqUDVHO3qLNTv4AehEGmXv8MA==",
      "license": "MIT",
      "dependencies": {
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/utils": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/utils/-/utils-0.35.0.tgz",
      "integrity": "sha512-2H393EYDnFznYCDFOW3MHiRzwEO5M/UBhtUjvTT+9kc+qhX4U3zc8ixQalo5UmZ5B2nh7L/inXdTFzvSRXtsRA==",
      "license": "MIT",
      "dependencies": {
        "@lexical/list": "0.35.0",
        "@lexical/selection": "0.35.0",
        "@lexical/table": "0.35.0",
        "lexical": "0.35.0"
      }
    },
    "node_modules/@lexical/yjs": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/@lexical/yjs/-/yjs-0.35.0.tgz",
      "integrity": "sha512-3DSP7QpmTGYU9bN/yljP0PIao4tNIQtsR4ycauWNSawxs/GQCZtSmAPcLRnCm6qpqsDDjUtKjO/1Ej8FRp0m0w==",
      "license": "MIT",
      "dependencies": {
        "@lexical/offset": "0.35.0",
        "@lexical/selection": "0.35.0",
        "lexical": "0.35.0"
      },
      "peerDependencies": {
        "yjs": ">=13.5.22"
      }
    },
    "node_modules/@lezer/common": {
      "version": "1.5.2",
      "resolved": "https://registry.npmjs.org/@lezer/common/-/common-1.5.2.tgz",
      "integrity": "sha512-sxQE460fPZyU3sdc8lafxiPwJHBzZRy/udNFynGQky1SePYBdhkBl1kOagA9uT3pxR8K09bOrmTUqA9wb/PjSQ==",
      "license": "MIT"
    },
    "node_modules/@lezer/cpp": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/@lezer/cpp/-/cpp-1.1.6.tgz",
      "integrity": "sha512-vh9gWWJOXFVY8HBHK3Twzq8MgwG2iN4GSyzBP9sCGTe37P15x2R14VaBQk0VA0ezTRN1KHYBBsHhvpGZ2Xy/pA==",
      "license": "MIT",
      "dependencies": {
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.0.0"
      }
    },
    "node_modules/@lezer/css": {
      "version": "1.3.6",
      "resolved": "https://registry.npmjs.org/@lezer/css/-/css-1.3.6.tgz",
      "integrity": "sha512-YJE78Wcg+zX8f10hiHWQ4Az48Qr/c13eId0VtRQYLBpxHDmDeSrXIlkbl+fJGW42rWC/uoUco9mhBZeVWP/A1g==",
      "license": "MIT",
      "dependencies": {
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.3.0"
      }
    },
    "node_modules/@lezer/go": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@lezer/go/-/go-1.0.1.tgz",
      "integrity": "sha512-xToRsYxwsgJNHTgNdStpcvmbVuKxTapV0dM0wey1geMMRc9aggoVyKgzYp41D2/vVOx+Ii4hmE206kvxIXBVXQ==",
      "license": "MIT",
      "dependencies": {
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.3.0"
      }
    },
    "node_modules/@lezer/highlight": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@lezer/highlight/-/highlight-1.2.3.tgz",
      "integrity": "sha512-qXdH7UqTvGfdVBINrgKhDsVTJTxactNNxLk7+UMwZhU13lMHaOBlJe9Vqp907ya56Y3+ed2tlqzys7jDkTmW0g==",
      "license": "MIT",
      "dependencies": {
        "@lezer/common": "^1.3.0"
      }
    },
    "node_modules/@lezer/html": {
      "version": "1.3.13",
      "resolved": "https://registry.npmjs.org/@lezer/html/-/html-1.3.13.tgz",
      "integrity": "sha512-oI7n6NJml729m7pjm9lvLvmXbdoMoi2f+1pwSDJkl9d68zGr7a9Btz8NdHTGQZtW2DA25ybeuv/SyDb9D5tseg==",
      "license": "MIT",
      "dependencies": {
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.0.0"
      }
    },
    "node_modules/@lezer/java": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@lezer/java/-/java-1.1.3.tgz",
      "integrity": "sha512-yHquUfujwg6Yu4Fd1GNHCvidIvJwi/1Xu2DaKl/pfWIA2c1oXkVvawH3NyXhCaFx4OdlYBVX5wvz2f7Aoa/4Xw==",
      "license": "MIT",
      "dependencies": {
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.0.0"
      }
    },
    "node_modules/@lezer/javascript": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/@lezer/javascript/-/javascript-1.5.4.tgz",
      "integrity": "sha512-vvYx3MhWqeZtGPwDStM2dwgljd5smolYD2lR2UyFcHfxbBQebqx8yjmFmxtJ/E6nN6u1D9srOiVWm3Rb4tmcUA==",
      "license": "MIT",
      "dependencies": {
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.1.3",
        "@lezer/lr": "^1.3.0"
      }
    },
    "node_modules/@lezer/json": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@lezer/json/-/json-1.0.3.tgz",
      "integrity": "sha512-BP9KzdF9Y35PDpv04r0VeSTKDeox5vVr3efE7eBbx3r4s3oNLfunchejZhjArmeieBH+nVOpgIiBJpEAv8ilqQ==",
      "license": "MIT",
      "dependencies": {
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.0.0"
      }
    },
    "node_modules/@lezer/lr": {
      "version": "1.4.10",
      "resolved": "https://registry.npmjs.org/@lezer/lr/-/lr-1.4.10.tgz",
      "integrity": "sha512-rnCpTIBafOx4mRp43xOxDJbFipJm/c0cia/V5TiGlhmMa+wsSdoGmUN3w5Bqrks/09Q/D4tNAmWaT8p6NRi77A==",
      "license": "MIT",
      "dependencies": {
        "@lezer/common": "^1.0.0"
      }
    },
    "node_modules/@lezer/markdown": {
      "version": "1.7.2",
      "resolved": "https://registry.npmjs.org/@lezer/markdown/-/markdown-1.7.2.tgz",
      "integrity": "sha512-iTkYvoVcKt3WkeL7qUDyXHONZEwLio4wj8KTNi2dnjQEXBZKMV63BpQrPqfsM+OkvuRbiSTAcycYAsQzLhRNoQ==",
      "license": "MIT",
      "dependencies": {
        "@lezer/common": "^1.5.0",
        "@lezer/highlight": "^1.0.0"
      }
    },
    "node_modules/@lezer/php": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/@lezer/php/-/php-1.0.5.tgz",
      "integrity": "sha512-W7asp9DhM6q0W6DYNwIkLSKOvxlXRrif+UXBMxzsJUuqmhE7oVU+gS3THO4S/Puh7Xzgm858UNaFi6dxTP8dJA==",
      "license": "MIT",
      "dependencies": {
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.1.0"
      }
    },
    "node_modules/@lezer/python": {
      "version": "1.1.19",
      "resolved": "https://registry.npmjs.org/@lezer/python/-/python-1.1.19.tgz",
      "integrity": "sha512-MhQIURHRytsNzP/YXnqpYKW6la6voAH3kyplTOOiCdjyFY6cWWGFVmYVdHIPrElqSDf4iCDktQCockB9FxuhzQ==",
      "license": "MIT",
      "dependencies": {
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.0.0"
      }
    },
    "node_modules/@lezer/rust": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/@lezer/rust/-/rust-1.0.2.tgz",
      "integrity": "sha512-Lz5sIPBdF2FUXcWeCu1//ojFAZqzTQNRga0aYv6dYXqJqPfMdCAI0NzajWUd4Xijj1IKJLtjoXRPMvTKWBcqKg==",
      "license": "MIT",
      "dependencies": {
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.0.0"
      }
    },
    "node_modules/@lezer/sass": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@lezer/sass/-/sass-1.1.0.tgz",
      "integrity": "sha512-3mMGdCTUZ/84ArHOuXWQr37pnf7f+Nw9ycPUeKX+wu19b7pSMcZGLbaXwvD2APMBDOGxPmpK/O6S1v1EvLoqgQ==",
      "license": "MIT",
      "dependencies": {
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.0.0"
      }
    },
    "node_modules/@lezer/xml": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/@lezer/xml/-/xml-1.0.6.tgz",
      "integrity": "sha512-CdDwirL0OEaStFue/66ZmFSeppuL6Dwjlk8qk153mSQwiSH/Dlri4GNymrNWnUmPl2Um7QfV1FO9KFUyX3Twww==",
      "license": "MIT",
      "dependencies": {
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.0.0"
      }
    },
    "node_modules/@lezer/yaml": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@lezer/yaml/-/yaml-1.0.4.tgz",
      "integrity": "sha512-2lrrHqxalACEbxIbsjhqGpSW8kWpUKuY6RHgnSAFZa6qK62wvnPxA8hGOwOoDbwHcOFs5M4o27mjGu+P7TvBmw==",
      "license": "MIT",
      "dependencies": {
        "@lezer/common": "^1.2.0",
        "@lezer/highlight": "^1.0.0",
        "@lezer/lr": "^1.4.0"
      }
    },
    "node_modules/@marijn/find-cluster-break": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@marijn/find-cluster-break/-/find-cluster-break-1.0.3.tgz",
      "integrity": "sha512-FY+MKLBoTsLNJF/eLWaOsXGdz6uh3Iu1axjPf6TUq92IYumcTcXWHoS747JARLkcdlJ/Waiaxc5wQfFO8jC6NA==",
      "license": "MIT"
    },
    "node_modules/@mdxeditor/editor": {
      "version": "3.55.0",
      "resolved": "https://registry.npmjs.org/@mdxeditor/editor/-/editor-3.55.0.tgz",
      "integrity": "sha512-ziJY12OQVrrdAcWAwG8njV7gPy8orEIodGdFTXpQVlIOjdV/FOIHMcETMc5XXfON3hw3uO1CcHDb3TZQQSgfqg==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/commands": "^6.2.4",
        "@codemirror/lang-markdown": "^6.2.3",
        "@codemirror/language-data": "^6.5.1",
        "@codemirror/merge": "^6.4.0",
        "@codemirror/state": "^6.4.0",
        "@codemirror/view": "^6.23.0",
        "@codesandbox/sandpack-react": "^2.20.0",
        "@lexical/clipboard": "^0.35.0",
        "@lexical/link": "^0.35.0",
        "@lexical/list": "^0.35.0",
        "@lexical/markdown": "^0.35.0",
        "@lexical/plain-text": "^0.35.0",
        "@lexical/react": "^0.35.0",
        "@lexical/rich-text": "^0.35.0",
        "@lexical/selection": "^0.35.0",
        "@lexical/utils": "^0.35.0",
        "@mdxeditor/gurx": "^1.2.4",
        "@radix-ui/colors": "^3.0.0",
        "@radix-ui/react-dialog": "^1.1.11",
        "@radix-ui/react-icons": "^1.3.2",
        "@radix-ui/react-popover": "^1.1.11",
        "@radix-ui/react-popper": "^1.2.4",
        "@radix-ui/react-select": "^2.2.2",
        "@radix-ui/react-toggle-group": "^1.1.7",
        "@radix-ui/react-toolbar": "^1.1.7",
        "@radix-ui/react-tooltip": "^1.2.4",
        "classnames": "^2.3.2",
        "cm6-theme-basic-light": "^0.2.0",
        "codemirror": "^6.0.1",
        "downshift": "^7.6.0",
        "js-yaml": "4.1.1",
        "lexical": "^0.35.0",
        "mdast-util-directive": "^3.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-frontmatter": "^2.0.1",
        "mdast-util-gfm-strikethrough": "^2.0.0",
        "mdast-util-gfm-table": "^2.0.0",
        "mdast-util-gfm-task-list-item": "^2.0.0",
        "mdast-util-highlight-mark": "^1.2.2",
        "mdast-util-mdx": "^3.0.0",
        "mdast-util-mdx-jsx": "^3.0.0",
        "mdast-util-to-markdown": "^2.1.0",
        "micromark-extension-directive": "^3.0.0",
        "micromark-extension-frontmatter": "^2.0.0",
        "micromark-extension-gfm-strikethrough": "^2.0.0",
        "micromark-extension-gfm-table": "^2.0.0",
        "micromark-extension-gfm-task-list-item": "^2.0.1",
        "micromark-extension-highlight-mark": "^1.2.0",
        "micromark-extension-mdx-jsx": "^3.0.0",
        "micromark-extension-mdx-md": "^2.0.0",
        "micromark-extension-mdxjs": "^3.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.1",
        "micromark-util-symbol": "^2.0.0",
        "react-hook-form": "^7.56.1",
        "unidiff": "^1.0.2"
      },
      "engines": {
        "node": ">=16"
      },
      "peerDependencies": {
        "react": ">= 18 || >= 19",
        "react-dom": ">= 18 || >= 19"
      }
    },
    "node_modules/@mdxeditor/gurx": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@mdxeditor/gurx/-/gurx-1.2.4.tgz",
      "integrity": "sha512-9ZykIFYhKaXaaSPCs1cuI+FvYDegJjbKwmA4ASE/zY+hJY6EYqvoye4esiO85CjhOw9aoD/izD/CU78/egVqmg==",
      "license": "MIT",
      "engines": {
        "node": ">=16"
      },
      "peerDependencies": {
        "react": ">= 18 || >= 19",
        "react-dom": ">= 18 || >= 19"
      }
    },
    "node_modules/@microsoft/fetch-event-source": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/@microsoft/fetch-event-source/-/fetch-event-source-2.0.1.tgz",
      "integrity": "sha512-W6CLUJ2eBMw3Rec70qrsEW0jOm/3twwJv21mrmj2yORiaVmVYGS4sSS5yUwvQc1ZlDLYGPnClVWmUUMagKNsfA==",
      "license": "MIT"
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-1.2.3.tgz",
      "integrity": "sha512-UMduMbqO5s5zF2NkNacMT/yK5Y5QiKvWr2+50bzIIxFDwVJ2h49b+oyjaCGPhJxd2/gC2x39EHv/gHVuu36x2Q==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@tybys/wasm-util": "^0.10.3"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=23.5.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Brooooooklyn"
      },
      "peerDependencies": {
        "@emnapi/core": "^1.7.1 || ^2.0.0-alpha.4",
        "@emnapi/runtime": "^1.7.1 || ^2.0.0-alpha.4"
      }
    },
    "node_modules/@next/env": {
      "version": "16.3.1",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-16.3.1.tgz",
      "integrity": "sha512-35G3xwkQUb2oETSDjFXGrVugknoayLFBh7vSE+yAcl9IP2zT9wyGwq7297AYHR11kJld807t5f8AJBs6WBzXsQ==",
      "license": "MIT"
    },
    "node_modules/@next/eslint-plugin-next": {
      "version": "16.3.1",
      "resolved": "https://registry.npmjs.org/@next/eslint-plugin-next/-/eslint-plugin-next-16.3.1.tgz",
      "integrity": "sha512-B4SznlXwVpaLDa7Tbi6zLuueria2d/PmFDhXyDymPGrk2r1n/RMJmcn5FZq1L64k+Jsyte1lKvOr7lP9Xo80mQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "4.9.1",
        "fast-glob": "3.3.1"
      }
    },
    "node_modules/@next/eslint-plugin-next/node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz",
      "integrity": "sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@next/eslint-plugin-next/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "16.3.1",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-16.3.1.tgz",
      "integrity": "sha512-ABMIu2zQ7cnNIHm5ivKGwZwUrm0pAai3yiJ/gK/rF1c1VP9UOnj7XECbMKFdVKp9I9eMYq9NoDs1WXOoowxzJw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "16.3.1",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-16.3.1.tgz",
      "integrity": "sha512-gNG21e/UnrroeScbY/QndUEdl0mF1FRibW7BBeYUz/5ABCepjqDdEdgr592vpzMtCn/m7FTjYq3TN4TpyDnutw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "16.3.1",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-16.3.1.tgz",
      "integrity": "sha512-6B6Lw016iwNUQuaJoraMMTLh6TwHzFUtxipSScD1F3YyymcrRWkobodRS2ftIOkF5vrs4zNlyUrTC5YZQ9Lz5w==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "16.3.1",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-16.3.1.tgz",
      "integrity": "sha512-JUiPXZKK9wOhjf4MgDiH29GZLxfqOesbLtHq2pDxwH/WwscTRV2ToymnOTh1egzaZf0ueUf8T2+CeYTGHjW0Iw==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "16.3.1",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-16.3.1.tgz",
      "integrity": "sha512-Uog9jsrmIRIL/lfvIp9htmskSNC7JcQsMVucXL2V2YY1y/D9IUN3LPEafqy0zRJ2cIU1SQ0V6F6TlffQ+pLAGg==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "16.3.1",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-16.3.1.tgz",
      "integrity": "sha512-6yy3FT13KgUFOj5H8bl8w/6nKiJwHIvbtwh1V+1acsu+7y4tJjnemSa6mhsh53BeoVrlozE+fMgZhXH46WmjMA==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "16.3.1",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-16.3.1.tgz",
      "integrity": "sha512-iOoN1QecUoGNZik536U/vtK43YwgyrCsGIkth52yIkl612n+0C9MjSnJbQAikISpb+WYRooBVhaDlUW7iZoKog==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "16.3.1",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-16.3.1.tgz",
      "integrity": "sha512-d/k+PpAriUPaeMJJOG7HUSdqfEX46FEPWU1p3/nm2ACmXhj9hFEWdFODUBIpkuijXYkfL90qZzTqVPRp4BW/hw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nolyfill/is-core-module": {
      "version": "1.0.39",
      "resolved": "https://registry.npmjs.org/@nolyfill/is-core-module/-/is-core-module-1.0.39.tgz",
      "integrity": "sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.4.0"
      }
    },
    "node_modules/@open-draft/deferred-promise": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@open-draft/deferred-promise/-/deferred-promise-2.2.0.tgz",
      "integrity": "sha512-CecwLWx3rhxVQF6V4bAgPS5t+So2sTbPgAzafKkVizyi7tlwpcFpdFqq+wqF2OwNBmqFuu6tOyouTuxgpMfzmA==",
      "license": "MIT"
    },
    "node_modules/@panva/hkdf": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@panva/hkdf/-/hkdf-1.2.1.tgz",
      "integrity": "sha512-6oclG6Y3PiDFcoyk8srjLfVKyMfVCKJ27JwNPViuXziFpmdz+MZnZN/aKY0JGXgYuO/VghU0jcOAZgWXZ1Dmrw==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/panva"
      }
    },
    "node_modules/@parcel/watcher": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/@parcel/watcher/-/watcher-2.6.0.tgz",
      "integrity": "sha512-7FNeNl8NCE7aINx7WXiKQrPYZWC/hvrTsmk6zmxbI7LTXE7hVek/n8AfVgpe2y82zl3w0HvCHN0bVKMBoJcC0w==",
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "detect-libc": "^2.0.3",
        "is-glob": "^4.0.3",
        "node-addon-api": "^7.0.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "@parcel/watcher-android-arm64": "2.6.0",
        "@parcel/watcher-darwin-arm64": "2.6.0",
        "@parcel/watcher-darwin-x64": "2.6.0",
        "@parcel/watcher-freebsd-x64": "2.6.0",
        "@parcel/watcher-linux-arm-glibc": "2.6.0",
        "@parcel/watcher-linux-arm-musl": "2.6.0",
        "@parcel/watcher-linux-arm64-glibc": "2.6.0",
        "@parcel/watcher-linux-arm64-musl": "2.6.0",
        "@parcel/watcher-linux-x64-glibc": "2.6.0",
        "@parcel/watcher-linux-x64-musl": "2.6.0",
        "@parcel/watcher-win32-arm64": "2.6.0",
        "@parcel/watcher-win32-x64": "2.6.0"
      }
    },
    "node_modules/@parcel/watcher-android-arm64": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-android-arm64/-/watcher-android-arm64-2.6.0.tgz",
      "integrity": "sha512-trgpLSCKRC/huFjXX/Smh+0sWe4+YtKfktIToiMl59ghz7z+qkH6kMvNnUbLyRs9N11t8l4svSCs1+5B3rOAhA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-darwin-arm64": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-darwin-arm64/-/watcher-darwin-arm64-2.6.0.tgz",
      "integrity": "sha512-Y3QV0gl7Q1zbfueunkWIERICbEojQFCgpyG7YqOGNFLsckXyI1xu9mAIUpKY9QBYzBtSkN8dBPwd3yiAO9ovMw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-darwin-x64": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-darwin-x64/-/watcher-darwin-x64-2.6.0.tgz",
      "integrity": "sha512-Ohv6OpzhUfKYD7Beb8kDvG0jbIxORCYY1JRdZnaBtnjjkJxgD7ZVL0nw2sCYd0yTMKTvz3nnTnOF3cDifK+kvw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-freebsd-x64": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-freebsd-x64/-/watcher-freebsd-x64-2.6.0.tgz",
      "integrity": "sha512-5HmXvDgs8VK+74jF9y9/2FE3/OnlcKmc56tjmSrEuZjpSZOGL+fvAu+HKJBdPs9uwoP2hE6TlSUpXZ/C5jUFmQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-linux-arm-glibc": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm-glibc/-/watcher-linux-arm-glibc-2.6.0.tgz",
      "integrity": "sha512-Ps/hui3A+vMbjdqlqAowK2ZL8+BO8dBjxeWXj6npTBs3jx4wWmbPpaLuqwrQrSqIVMCnpWo238bJ1U37GhQOYg==",
      "cpu": [
        "arm"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-linux-arm-musl": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm-musl/-/watcher-linux-arm-musl-2.6.0.tgz",
      "integrity": "sha512-9c6AUHgHoG+IY88MRIHupztQiQnrbqHYQjkM2btA+Bf/wQnQMuiD0Wfk1EVv3TlNT3x41uU71rn6E4xh/+zvkw==",
      "cpu": [
        "arm"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-linux-arm64-glibc": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm64-glibc/-/watcher-linux-arm64-glibc-2.6.0.tgz",
      "integrity": "sha512-yHRqS2owEXe6Hic9z6Mh1ECsCd+ODVOGvZDyciqRd21+v+o+DnXMOrw50DSpIG2sb8GPEaPPmfeCAWKPJdq46g==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-linux-arm64-musl": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-linux-arm64-musl/-/watcher-linux-arm64-musl-2.6.0.tgz",
      "integrity": "sha512-WhB2e/V7rqdHHWZusBSPuy5Ei8S6lSz6FE5TKKQz5h3a0O+C+mhY7vxU9b/stqvMb8beLnPY82ZrFTLKs+SrKA==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-linux-x64-glibc": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-linux-x64-glibc/-/watcher-linux-x64-glibc-2.6.0.tgz",
      "integrity": "sha512-ulGE6x6Oz6iAwg75T8YQSoguBWasniIbX+QWpaYPcCnDOpdWX3k+4xbEYPZVLxOuoJI+svJJPD3sEj8G7lrQ3A==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-linux-x64-musl": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-linux-x64-musl/-/watcher-linux-x64-musl-2.6.0.tgz",
      "integrity": "sha512-tkBYKt7YQrjIJWYDnto2YgO8MRkjlMTSNoRHzsXinBqbLdeOM3L32wPZJvIZxqaLMfSlS/4sUjH/6STVP/XDLw==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-win32-arm64": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-win32-arm64/-/watcher-win32-arm64-2.6.0.tgz",
      "integrity": "sha512-gIZAP23jaHjGWasY/TY6yL7NHFClf0Ga7FN+iINvk+KN94rhm94lYZhFsbYFNcA04/onvGD9kKmiJLJB2HbNwQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher-win32-x64": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/@parcel/watcher-win32-x64/-/watcher-win32-x64-2.6.0.tgz",
      "integrity": "sha512-cA+/pXV2YkfxlIcXOQ5fSWqAzzPyD78/x5qbK/I0vUkrlYHA8TIz+MXjAbGouguKVSI4bOmkTSJ1/poVSsgt+A==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@parcel/watcher/node_modules/picomatch": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.5.tgz",
      "integrity": "sha512-RvwwcruNjI1ncT5xRakeyS9Lf8lcItv34KD+aif+VH9kduAyfYBipGh12274xtenIPZ119/R9BdTBa8gAwSh0A==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/@prisma/client": {
      "version": "6.19.3",
      "resolved": "https://registry.npmjs.org/@prisma/client/-/client-6.19.3.tgz",
      "integrity": "sha512-mKq3jQFhjvko5LTJFHGilsuQs+W+T3Gm451NzuTDGQxwCzwXHYnIu2zGkRoW+Exq3Rob7yp2MfzSrdIiZVhrBg==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "peerDependencies": {
        "prisma": "*",
        "typescript": ">=5.1.0"
      },
      "peerDependenciesMeta": {
        "prisma": {
          "optional": true
        },
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@prisma/config": {
      "version": "6.19.3",
      "resolved": "https://registry.npmjs.org/@prisma/config/-/config-6.19.3.tgz",
      "integrity": "sha512-CBPT44BjlQxEt8kiMEauji2WHTDoVBOKl7UlewXmUgBPnr/oPRZC3psci5chJnYmH0ivEIog2OU9PGWoki3DLQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "c12": "3.1.0",
        "deepmerge-ts": "7.1.5",
        "effect": "3.21.0",
        "empathic": "2.0.0"
      }
    },
    "node_modules/@prisma/debug": {
      "version": "6.19.3",
      "resolved": "https://registry.npmjs.org/@prisma/debug/-/debug-6.19.3.tgz",
      "integrity": "sha512-ljkJ+SgpXNktLG0Q/n4JGYCkKf0f8oYLyjImS2I8e2q2WCfdRRtWER062ZV/ixaNP2M2VKlWXVJiGzZaUgbKZw==",
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/engines": {
      "version": "6.19.3",
      "resolved": "https://registry.npmjs.org/@prisma/engines/-/engines-6.19.3.tgz",
      "integrity": "sha512-RSYxtlYFl5pJ8ZePgMv0lZ9IzVCOdTPOegrs2qcbAEFrBI1G33h6wyC9kjQvo0DnYEhEVY0X4LsuFHXLKQk88g==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "6.19.3",
        "@prisma/engines-version": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7",
        "@prisma/fetch-engine": "6.19.3",
        "@prisma/get-platform": "6.19.3"
      }
    },
    "node_modules/@prisma/engines-version": {
      "version": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7",
      "resolved": "https://registry.npmjs.org/@prisma/engines-version/-/engines-version-7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7.tgz",
      "integrity": "sha512-03bgb1VD5gvuumNf+7fVGBzfpJPjmqV423l/WxsWk2cNQ42JD0/SsFBPhN6z8iAvdHs07/7ei77SKu7aZfq8bA==",
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/fetch-engine": {
      "version": "6.19.3",
      "resolved": "https://registry.npmjs.org/@prisma/fetch-engine/-/fetch-engine-6.19.3.tgz",
      "integrity": "sha512-tKtl/qco9Nt7LU5iKhpultD8O4vMCZcU2CHjNTnRrL1QvSUr5W/GcyFPjNL87GtRrwBc7ubXXD9xy4EvLvt8JA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "6.19.3",
        "@prisma/engines-version": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7",
        "@prisma/get-platform": "6.19.3"
      }
    },
    "node_modules/@prisma/get-platform": {
      "version": "6.19.3",
      "resolved": "https://registry.npmjs.org/@prisma/get-platform/-/get-platform-6.19.3.tgz",
      "integrity": "sha512-xFj1VcJ1N3MKooOQAGO0W5tsd0W2QzIvW7DD7c/8H14Zmp4jseeWAITm+w2LLoLrlhoHdPPh0NMZ8mfL6puoHA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "6.19.3"
      }
    },
    "node_modules/@radix-ui/colors": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/@radix-ui/colors/-/colors-3.0.0.tgz",
      "integrity": "sha512-FUOsGBkHrYJwCSEtWRCIfQbZG7q1e6DgxCIOe1SUQzDe/7rXXeA47s8yCn6fuTNQAj1Zq4oTFi9Yjp3wzElcxg==",
      "license": "MIT"
    },
    "node_modules/@radix-ui/number": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/number/-/number-1.1.3.tgz",
      "integrity": "sha512-Road2bidD0uu/1BGDOWNdPI06g0lIRy6IF9GZcIrDK2KGItfor8IQwQa+yM2ERgHM1MmHxaxpTzk0/Jp42lNfA==",
      "license": "MIT"
    },
    "node_modules/@radix-ui/primitive": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.1.7.tgz",
      "integrity": "sha512-rqWnm76nYT8HoNNqEjpgJ7Pw/DrBj5iBTrmEPo6HTX5+VJyBNOqTdv4g89G63HuR5g0AaENoAcH7Is5fF2kZ8Q==",
      "license": "MIT"
    },
    "node_modules/@radix-ui/react-accordion": {
      "version": "1.2.20",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-accordion/-/react-accordion-1.2.20.tgz",
      "integrity": "sha512-jDhG9FvAEnlhnjrsINbNXcUa4G+L1KqSkJSunkbKEzFRcAb52jvM0PjPxPRvhe1HNc5F5yc0yzzWeeqlH4yBIg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-collapsible": "1.1.20",
        "@radix-ui/react-collection": "1.1.15",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-direction": "1.1.4",
        "@radix-ui/react-id": "1.1.4",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-controllable-state": "1.2.6"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-alert-dialog": {
      "version": "1.1.23",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-alert-dialog/-/react-alert-dialog-1.1.23.tgz",
      "integrity": "sha512-VAYOiQRqj3GPpYJE0I9J+X8Ip05cyVlNdKOFeiGS2Ou1HHGfpl0BxOyZm6nmVDyU+W+NF3/XLzmjHmVGydhwgA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-dialog": "1.1.23",
        "@radix-ui/react-primitive": "2.1.10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-arrow": {
      "version": "1.1.15",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-arrow/-/react-arrow-1.1.15.tgz",
      "integrity": "sha512-v4zggRcjadnI+ClKDuijlQEW4tw3NoaeHc/PwpKnLoLLKNUG4InLegkstooLcRIUWCs+8L22dGURCVuFfOKfnA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-primitive": "2.1.10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-aspect-ratio": {
      "version": "1.1.15",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-aspect-ratio/-/react-aspect-ratio-1.1.15.tgz",
      "integrity": "sha512-fy+dyVR+90nelK8rqIznFlxzx7uPcGbhxH8Nfr2bHb4UfSe+e3hklOC0luK0hDwVwnRX7xTRySpsrQVeW+/oNQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-primitive": "2.1.10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-avatar": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-avatar/-/react-avatar-1.2.6.tgz",
      "integrity": "sha512-4ULOTJ/mqy2hT9GlWa/MFHxHSvH3nJzHnZM1waNsc5Bonv7i70aNenghXmD97S6OJ81ekXONGGt4nT1r0PfEdA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-callback-ref": "1.1.4",
        "@radix-ui/react-use-is-hydrated": "0.1.3",
        "@radix-ui/react-use-layout-effect": "1.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-checkbox": {
      "version": "1.3.11",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-checkbox/-/react-checkbox-1.3.11.tgz",
      "integrity": "sha512-Gnptr9pDDQxD3hgq2dtPbtrp/c2qH1mBwIzw3X/ivrMb2e1t0jMTi606fVEqFPaQR1ggXIVQWKj3P2WW9v7zGQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-presence": "1.1.10",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-controllable-state": "1.2.6",
        "@radix-ui/react-use-size": "1.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-collapsible": {
      "version": "1.1.20",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-collapsible/-/react-collapsible-1.1.20.tgz",
      "integrity": "sha512-mcGesGplBnzN2sbvJETzpCNfSMyPnb29q1GRLU+Ib7bJrpIG2ywmRoh2V5VbA2uNvKikKUlVbAPks7JDjz4A8Q==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-id": "1.1.4",
        "@radix-ui/react-presence": "1.1.10",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-controllable-state": "1.2.6",
        "@radix-ui/react-use-layout-effect": "1.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-collection": {
      "version": "1.1.15",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-collection/-/react-collection-1.1.15.tgz",
      "integrity": "sha512-9W+B9NPF0NaaPh/1NJd3+KqsnlLqU9H7T2rvww+fp+T/evVXdNAyYcnfRQZFOjkR1ajQp3yORlqnI8soawLvNA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-slot": "1.3.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-compose-refs": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.5.tgz",
      "integrity": "sha512-+48PbAAbq3didjJxa+OaWY2ZwgAKsNiRGyeHKszblZMQ+kcpd9pAaT11cMkGEie0vsOi3QdeTE6d5Fe3Gn61kA==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-context": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.2.2.tgz",
      "integrity": "sha512-RHCUGwKHDr0hDGg4X7ma4JG4/+12qxw8rkh5QKdDldlCvtja6nUx1Ef/8HVrJze81lEsgLQlqjzjGNHantgnQA==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-context-menu": {
      "version": "2.3.7",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-context-menu/-/react-context-menu-2.3.7.tgz",
      "integrity": "sha512-CtXP35dxaB5T3zXSd+E3uHe/QpXcpYnZmxp6OaIbfthtfW4wyb77M23BG+bwIJDtsMwEP/YssdsmNyZu7jhWew==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-menu": "2.1.24",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-controllable-state": "1.2.6"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-dialog": {
      "version": "1.1.23",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-dialog/-/react-dialog-1.1.23.tgz",
      "integrity": "sha512-Ksw4WeROkO4rC9k/onilX/Ao2Cr1ku1unMNH+XSCcP4jSXYu7HDsg9n4ojMjVb22XpYjAQ9qfrFlVbru1vXDUA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-dismissable-layer": "1.1.19",
        "@radix-ui/react-focus-guards": "1.1.6",
        "@radix-ui/react-focus-scope": "1.1.16",
        "@radix-ui/react-id": "1.1.4",
        "@radix-ui/react-portal": "1.1.17",
        "@radix-ui/react-presence": "1.1.10",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-slot": "1.3.3",
        "@radix-ui/react-use-controllable-state": "1.2.6",
        "@radix-ui/react-use-layout-effect": "1.1.4",
        "aria-hidden": "^1.2.4",
        "react-remove-scroll": "^2.7.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-direction": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-direction/-/react-direction-1.1.4.tgz",
      "integrity": "sha512-5pzg4FGQNpExhnhT2zlrP1wZFaYCd1K0nYWoFAdcYoYK868IEigqMX3B3f8yIoRlAhAeDWciLI6ZdCKHF9P4Vg==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-dismissable-layer": {
      "version": "1.1.19",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-dismissable-layer/-/react-dismissable-layer-1.1.19.tgz",
      "integrity": "sha512-8g4pfOL9HoKKLWGiypT+dphVqjFfmcXO5GBnhsG6zI+lxAx/8feQpr+1LSN8Re3hiZ+XkLNS4O9ztK11/LzQ6w==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-callback-ref": "1.1.4",
        "@radix-ui/react-use-effect-event": "0.0.5"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-dropdown-menu": {
      "version": "2.1.24",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-dropdown-menu/-/react-dropdown-menu-2.1.24.tgz",
      "integrity": "sha512-geq8l2rJkxvkXsT9RMgtUE3P8pITFpTsvYpbySi1IH4fZEABD/Gp85myayFgxk0ktljGMJnCbeFkyTusvSvv7g==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-id": "1.1.4",
        "@radix-ui/react-menu": "2.1.24",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-controllable-state": "1.2.6"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-focus-guards": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-focus-guards/-/react-focus-guards-1.1.6.tgz",
      "integrity": "sha512-RNOJjfZMTyBM6xYmV3IVGXkPjIhcBAuv48POevAXwrGJhkWZ9p1rFoIS1JFooPuT193AZmRsCPhpoVJxx6OPoQ==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-focus-scope": {
      "version": "1.1.16",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-focus-scope/-/react-focus-scope-1.1.16.tgz",
      "integrity": "sha512-wmRZ2WWLvmt6KHy2rNPOdPUjwq5xOHY02+m+udwJTn0aNIox/rkskAvJTyTLGhPK6KgrUjlJUJpgmx/+wFiFIQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-callback-ref": "1.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-hover-card": {
      "version": "1.1.23",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-hover-card/-/react-hover-card-1.1.23.tgz",
      "integrity": "sha512-H8qONfZd3ltrU3+jHCIgITbWo6e1iTKvP9DHdrvYbX48ooRM5FjEDTn16AMwdfuOGkWdZEhpl3PLL/Wk/AnHDQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-dismissable-layer": "1.1.19",
        "@radix-ui/react-popper": "1.3.7",
        "@radix-ui/react-portal": "1.1.17",
        "@radix-ui/react-presence": "1.1.10",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-controllable-state": "1.2.6"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-icons": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-icons/-/react-icons-1.3.2.tgz",
      "integrity": "sha512-fyQIhGDhzfc9pK2kH6Pl9c4BDJGfMkPqkyIgYDthyNYoNg3wVhoJMMh19WS4Up/1KMPFVpNsT2q3WmXn2N1m6g==",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.x || ^17.x || ^18.x || ^19.0.0 || ^19.0.0-rc"
      }
    },
    "node_modules/@radix-ui/react-id": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-id/-/react-id-1.1.4.tgz",
      "integrity": "sha512-TMQp2llA+RYn7JcjnrMnz7wN4pcVttPZnRZo52PLQsoLVKzNlVwUeHmfePgTgRluXFvlD3GD5g5MOVVTJCO0qA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-use-layout-effect": "1.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-label": {
      "version": "2.1.15",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-label/-/react-label-2.1.15.tgz",
      "integrity": "sha512-o/rdYEwZTTo5tjknnPeyQFU45kUC4i/XyeDPP+HGyi6XqpOP6Zf5Ya5vh/Yfe9Id5JiuWnnAx2XqIeD3UYZt0g==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-primitive": "2.1.10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-menu": {
      "version": "2.1.24",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-menu/-/react-menu-2.1.24.tgz",
      "integrity": "sha512-uW7RVuU6Lp/ZtfeY4b3kL32zccgEWvPv1+cf17ubYzHa9cL8AHokmk36cG/XEiH/smbQvumnieXX9j/e9RqJWA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-collection": "1.1.15",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-direction": "1.1.4",
        "@radix-ui/react-dismissable-layer": "1.1.19",
        "@radix-ui/react-focus-guards": "1.1.6",
        "@radix-ui/react-focus-scope": "1.1.16",
        "@radix-ui/react-id": "1.1.4",
        "@radix-ui/react-popper": "1.3.7",
        "@radix-ui/react-portal": "1.1.17",
        "@radix-ui/react-presence": "1.1.10",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-roving-focus": "1.1.19",
        "@radix-ui/react-slot": "1.3.3",
        "@radix-ui/react-use-callback-ref": "1.1.4",
        "aria-hidden": "^1.2.4",
        "react-remove-scroll": "^2.7.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-menubar": {
      "version": "1.1.24",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-menubar/-/react-menubar-1.1.24.tgz",
      "integrity": "sha512-eeVs0vf7cuqXaM0qLQCPcufImiJNVBXdJDLu7ZGYl2732UH23Qat/foNGrr6vYV3/DdTsBqASoggUFgH14OcZA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-collection": "1.1.15",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-direction": "1.1.4",
        "@radix-ui/react-id": "1.1.4",
        "@radix-ui/react-menu": "2.1.24",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-roving-focus": "1.1.19",
        "@radix-ui/react-use-controllable-state": "1.2.6"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-navigation-menu": {
      "version": "1.2.22",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-navigation-menu/-/react-navigation-menu-1.2.22.tgz",
      "integrity": "sha512-ou7iLEJ+yrhQndkkA4U21XIdS/CS45F4iXIkTZcb6/Ne9EMsOuDudVmCwmDnfFZZ+y1FZqXRNSIgBy+YMvZVZg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-collection": "1.1.15",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-direction": "1.1.4",
        "@radix-ui/react-dismissable-layer": "1.1.19",
        "@radix-ui/react-id": "1.1.4",
        "@radix-ui/react-presence": "1.1.10",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-callback-ref": "1.1.4",
        "@radix-ui/react-use-controllable-state": "1.2.6",
        "@radix-ui/react-use-layout-effect": "1.1.4",
        "@radix-ui/react-use-previous": "1.1.4",
        "@radix-ui/react-visually-hidden": "1.2.11"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-popover": {
      "version": "1.1.23",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-popover/-/react-popover-1.1.23.tgz",
      "integrity": "sha512-mw58MrBlyHWFisTOYignD0vf/3gdcgAR+9of1s9G/38CbFiUwH1nCDkc0AUM9IrXFgN5Ue8n45j9WCgyM1sbiQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-dismissable-layer": "1.1.19",
        "@radix-ui/react-focus-guards": "1.1.6",
        "@radix-ui/react-focus-scope": "1.1.16",
        "@radix-ui/react-id": "1.1.4",
        "@radix-ui/react-popper": "1.3.7",
        "@radix-ui/react-portal": "1.1.17",
        "@radix-ui/react-presence": "1.1.10",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-slot": "1.3.3",
        "@radix-ui/react-use-controllable-state": "1.2.6",
        "aria-hidden": "^1.2.4",
        "react-remove-scroll": "^2.7.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-popper": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-popper/-/react-popper-1.3.7.tgz",
      "integrity": "sha512-UsJrrd7w4wuKKTdvd/DNERVlwSlUcyXzjhyDwBk+3aPOsCjOY6ZSbxuw8E6lZTjjfP8Cpd0J8VVkrYUWyGYXyg==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/react-dom": "^2.0.0",
        "@radix-ui/react-arrow": "1.1.15",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-callback-ref": "1.1.4",
        "@radix-ui/react-use-layout-effect": "1.1.4",
        "@radix-ui/react-use-rect": "1.1.4",
        "@radix-ui/react-use-size": "1.1.4",
        "@radix-ui/rect": "1.1.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-portal": {
      "version": "1.1.17",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-portal/-/react-portal-1.1.17.tgz",
      "integrity": "sha512-vKQLcWypUnwZVvfV7UkGahH2g6ySe8M8R+zYBwPrv5byZ9QAW6cQVvNKo7GgmD+p8aYb6D9JBuvy8/WhOno2wQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-layout-effect": "1.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-presence": {
      "version": "1.1.10",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-presence/-/react-presence-1.1.10.tgz",
      "integrity": "sha512-3wyzCQ6+ubRA+D4uv9m95JYLXxmOHp05qjrkjeA7uKHHtjpPggQzc6DAb0URl7j67oR0K2foO4ip27TiX037Bw==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-use-layout-effect": "1.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-primitive": {
      "version": "2.1.10",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.10.tgz",
      "integrity": "sha512-MucOnzh6hR5mid6VpkbglRAMYMjKLqRnGBbjXkzjK52fuQDd1qbkx78a5P40mkcnVXJdEVxm26E9OPAiUq7nBg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.3.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-progress": {
      "version": "1.1.16",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-progress/-/react-progress-1.1.16.tgz",
      "integrity": "sha512-5XnomAsoZZCY+KNTxbIghpGqPruZvKFNlvcAljVAOdDRDsH4/OZQxhtwo5wdtoDM5R6MhJBb2sPnDuRFep3lzg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-primitive": "2.1.10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-radio-group": {
      "version": "1.4.7",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-radio-group/-/react-radio-group-1.4.7.tgz",
      "integrity": "sha512-cgYFEkntCxppHZgtSZ+7vh0wbZQ+IC7PPMw8DSnRG27B6kDd32/Zw0OJt7dGDigCoprMuWHjg2PvUn3PYvPFoQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-direction": "1.1.4",
        "@radix-ui/react-presence": "1.1.10",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-roving-focus": "1.1.19",
        "@radix-ui/react-use-controllable-state": "1.2.6",
        "@radix-ui/react-use-size": "1.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-roving-focus": {
      "version": "1.1.19",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-roving-focus/-/react-roving-focus-1.1.19.tgz",
      "integrity": "sha512-V9jI6hDjT7l3jsCQD9bLNvDLM3tH/gdbOTp7Tefp3hbbgCGQoK7tUvrWiRlcoBHIZ809ElXwNQwVo0B98LuTXQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-collection": "1.1.15",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-direction": "1.1.4",
        "@radix-ui/react-id": "1.1.4",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-callback-ref": "1.1.4",
        "@radix-ui/react-use-controllable-state": "1.2.6",
        "@radix-ui/react-use-is-hydrated": "0.1.3",
        "@radix-ui/react-use-layout-effect": "1.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-scroll-area": {
      "version": "1.2.18",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-scroll-area/-/react-scroll-area-1.2.18.tgz",
      "integrity": "sha512-Zn5Cd171wxsO3Dfg8HaW6RifTb9CYTKQJHs/G4+LN1GfmJpaQMZQyQxMprVPHpaz7QY4l9BxK2JwQuzHsXC8nA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/number": "1.1.3",
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-direction": "1.1.4",
        "@radix-ui/react-presence": "1.1.10",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-callback-ref": "1.1.4",
        "@radix-ui/react-use-layout-effect": "1.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-select": {
      "version": "2.3.7",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-select/-/react-select-2.3.7.tgz",
      "integrity": "sha512-WFGImkmbzcfxeIwq/+4HvRN0pizBwbwQUED4I13ezQsDdfl38ZntN6TmR8XaSzPBqoCToe8rF75j6NPNDSzhbg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/number": "1.1.3",
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-collection": "1.1.15",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-direction": "1.1.4",
        "@radix-ui/react-dismissable-layer": "1.1.19",
        "@radix-ui/react-focus-guards": "1.1.6",
        "@radix-ui/react-focus-scope": "1.1.16",
        "@radix-ui/react-id": "1.1.4",
        "@radix-ui/react-popper": "1.3.7",
        "@radix-ui/react-portal": "1.1.17",
        "@radix-ui/react-presence": "1.1.10",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-slot": "1.3.3",
        "@radix-ui/react-use-callback-ref": "1.1.4",
        "@radix-ui/react-use-controllable-state": "1.2.6",
        "@radix-ui/react-use-layout-effect": "1.1.4",
        "@radix-ui/react-use-previous": "1.1.4",
        "@radix-ui/react-visually-hidden": "1.2.11",
        "aria-hidden": "^1.2.4",
        "react-remove-scroll": "^2.7.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-separator": {
      "version": "1.1.15",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-separator/-/react-separator-1.1.15.tgz",
      "integrity": "sha512-jOLO4lssEzWpoDu7G+Ze4VjwMRUBt291pnZD0gmalREZipnTX3wadQo7Fy48GCTfe14/YRN6rw/rOJqrE85Wxw==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-primitive": "2.1.10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-slider": {
      "version": "1.4.7",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slider/-/react-slider-1.4.7.tgz",
      "integrity": "sha512-mTSLf1GC/C0moWjTbvCM6Qn/gBjvlFt1azuWF2v7MN5C3Zq2U2J2lN3ZEYkpujuOU5Ro7A28wkviSxaKnG0BYg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/number": "1.1.3",
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-collection": "1.1.15",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-direction": "1.1.4",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-controllable-state": "1.2.6",
        "@radix-ui/react-use-layout-effect": "1.1.4",
        "@radix-ui/react-use-previous": "1.1.4",
        "@radix-ui/react-use-size": "1.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-slot": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.3.3.tgz",
      "integrity": "sha512-qx7oqnYbxnK9kYI9m317qmFmEgo6ywqWvbTogdj7cL9p3/yx4M48p7Rnw5z3H890cL/ow/EeWJsuTykeZVXP5Q==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.5"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-switch": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-switch/-/react-switch-1.3.7.tgz",
      "integrity": "sha512-48tB/4dn2UVLBCYhTu9AuR63IHl73l/qLbLgxd86noTUor4/K4LFDAcYjK+isP5313qxaFpjPVogE7+Y0/V3Kw==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-controllable-state": "1.2.6",
        "@radix-ui/react-use-size": "1.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-tabs": {
      "version": "1.1.21",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-tabs/-/react-tabs-1.1.21.tgz",
      "integrity": "sha512-UKxJlZid7FVtsk/WTxj4i4uSEgj2Au+KBbS7SQyTlzMhhn+86Cz3tISZdTa87bfEfcuvZezf2ZsxD4xuEKtkog==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-direction": "1.1.4",
        "@radix-ui/react-id": "1.1.4",
        "@radix-ui/react-presence": "1.1.10",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-roving-focus": "1.1.19",
        "@radix-ui/react-use-controllable-state": "1.2.6"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-toast": {
      "version": "1.2.23",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-toast/-/react-toast-1.2.23.tgz",
      "integrity": "sha512-ofhyAsYaocRGOs/n0XWdUOSVzEAG6BfrMVM8z0c0kLEWY38w/0WuMFPTJP/HVaZPYkMvHZoKIIhNcjbTCBILPg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-collection": "1.1.15",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-dismissable-layer": "1.1.19",
        "@radix-ui/react-portal": "1.1.17",
        "@radix-ui/react-presence": "1.1.10",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-callback-ref": "1.1.4",
        "@radix-ui/react-use-controllable-state": "1.2.6",
        "@radix-ui/react-use-layout-effect": "1.1.4",
        "@radix-ui/react-visually-hidden": "1.2.11"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-toggle": {
      "version": "1.1.18",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-toggle/-/react-toggle-1.1.18.tgz",
      "integrity": "sha512-7lonPlKfSacd20GlOBx2ltuVKz9oqWYZz+oMQyOltw6t1y2nyftj2ZmwwUHYn49kqfDWcp8dNZm5NgV+5Z+mug==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-use-controllable-state": "1.2.6"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-toggle-group": {
      "version": "1.1.19",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-toggle-group/-/react-toggle-group-1.1.19.tgz",
      "integrity": "sha512-OtnwuSVjd1Ofi+AdnvhsjQdyuhCDwYs1w9RyB5BN/OavXOVQo42SYqQjwUnbPnaiPFBpQ9aX70dWeee+v2oBLA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-direction": "1.1.4",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-roving-focus": "1.1.19",
        "@radix-ui/react-toggle": "1.1.18",
        "@radix-ui/react-use-controllable-state": "1.2.6"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-toolbar": {
      "version": "1.1.19",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-toolbar/-/react-toolbar-1.1.19.tgz",
      "integrity": "sha512-Ph0IvtYw4VB12ZnZg+YtrGs8yJQsnizwo/zu0R4Y/nWugtJzA7Pg1eWeuDR9+LSqn+xjamss+UOSOJJJ4gx8jw==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-direction": "1.1.4",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-roving-focus": "1.1.19",
        "@radix-ui/react-separator": "1.1.15",
        "@radix-ui/react-toggle-group": "1.1.19"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-tooltip": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-tooltip/-/react-tooltip-1.2.16.tgz",
      "integrity": "sha512-6EamKFRRnlpdadndbZ6LMwycfwkwPte1B42hs6QA0gYhjaOKqW4PZ4pjaW9UrlDX5eVt/OjncE7BFTPL5nmZhg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.5",
        "@radix-ui/react-context": "1.2.2",
        "@radix-ui/react-dismissable-layer": "1.1.19",
        "@radix-ui/react-id": "1.1.4",
        "@radix-ui/react-popper": "1.3.7",
        "@radix-ui/react-portal": "1.1.17",
        "@radix-ui/react-presence": "1.1.10",
        "@radix-ui/react-primitive": "2.1.10",
        "@radix-ui/react-slot": "1.3.3",
        "@radix-ui/react-use-controllable-state": "1.2.6",
        "@radix-ui/react-use-layout-effect": "1.1.4",
        "@radix-ui/react-visually-hidden": "1.2.11"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-callback-ref": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-callback-ref/-/react-use-callback-ref-1.1.4.tgz",
      "integrity": "sha512-R6OUY2e2fA6Yn6s+VSx5KBV6Nx8LQEhu+cz7LCej18rQ1HLyg9PSC9jP/ZNx0o6FAIK9c0F1kHylzSxKsdlkrQ==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-controllable-state": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-controllable-state/-/react-use-controllable-state-1.2.6.tgz",
      "integrity": "sha512-uEQJGT97ZA/TgP/Hydw47lHu+/vQj6z/0jA+WeTbK1o9Rx45GImjpD0tc3W5ad3D6XTSR6e1yEO0FvGq6WQfVQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.7",
        "@radix-ui/react-use-effect-event": "0.0.5",
        "@radix-ui/react-use-layout-effect": "1.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-effect-event": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-effect-event/-/react-use-effect-event-0.0.5.tgz",
      "integrity": "sha512-7cshFL8HGS/7HEiHH+9kL9HBwp2sa9yX18Knwek6KYWmXwM7pegMgta2AXMQKI+rq3JnfSj9x8wYqFMTdG1Jgg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-use-layout-effect": "1.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-is-hydrated": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-is-hydrated/-/react-use-is-hydrated-0.1.3.tgz",
      "integrity": "sha512-umO/aJ+82CpOnhDZUTbILCQf7kU/g0iv+oGs/Q8jw7IkhWBzaEP4sA268PhFAJTFetbwp3ICc6ktpI4TqtxcIw==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-layout-effect": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.4.tgz",
      "integrity": "sha512-K20DkRkUwDnxEYMBPcg3Y6voLkEy5p5QQmszZgLngKKiC7dzBR/aEuK3w1qlx2JWDUNH6FluahYdgR3BP+QbYw==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-previous": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-previous/-/react-use-previous-1.1.4.tgz",
      "integrity": "sha512-XoSLhbRbqxFtgJoi2fNHA3C6pDlY34x508vUpUGoFZfvePfHXHbE1lC4FYFMnJWgiCRroSTw6fOsXQoVS9RwZg==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-rect": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-rect/-/react-use-rect-1.1.4.tgz",
      "integrity": "sha512-cSOCh6JlkmfjLyNcLiu2nB4v+nm+dkZ+Q5KHWk/soo4U7ZLiEQFKHK9/YmtBHjfCEaU43IBKQOc4/uJmCaiCTQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/rect": "1.1.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-size": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-size/-/react-use-size-1.1.4.tgz",
      "integrity": "sha512-D3anSY15EJoxrihpsXI6SMrmmonnQtR2ni7arO+Lfdg3O95b9hNXxONk8jA5C8ANdF/h5HMAxejgs8PWJ6rlhw==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-use-layout-effect": "1.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-visually-hidden": {
      "version": "1.2.11",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-visually-hidden/-/react-visually-hidden-1.2.11.tgz",
      "integrity": "sha512-NFS86RYYZb4/exihaESBGOpMJFz8MGLAfu3mOBSGByVnVPC9JPASfYubxd/8KbkQK0sYAv8lVQDEQukDX/qXvQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-primitive": "2.1.10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/rect": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/rect/-/rect-1.1.3.tgz",
      "integrity": "sha512-JtyZR+mqgBibTo8xea3B6ZRmzZiM/YeVBtUkas6zMuXjAlfIFIW2FgqeM9eLyvEaYX66vr6DJMK+4U6LV0KhNw==",
      "license": "MIT"
    },
    "node_modules/@react-hook/intersection-observer": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@react-hook/intersection-observer/-/intersection-observer-3.1.2.tgz",
      "integrity": "sha512-mWU3BMkmmzyYMSuhO9wu3eJVP21N8TcgYm9bZnTrMwuM818bEk+0NRM3hP+c/TqA9Ln5C7qE53p1H0QMtzYdvQ==",
      "license": "MIT",
      "dependencies": {
        "@react-hook/passive-layout-effect": "^1.2.0",
        "intersection-observer": "^0.10.0"
      },
      "peerDependencies": {
        "react": ">=16.8"
      }
    },
    "node_modules/@react-hook/passive-layout-effect": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@react-hook/passive-layout-effect/-/passive-layout-effect-1.2.1.tgz",
      "integrity": "sha512-IwEphTD75liO8g+6taS+4oqz+nnroocNfWVHWz7j+N+ZO2vYrc6PV1q7GQhuahL0IOR7JccFTsFKQ/mb6iZWAg==",
      "license": "MIT",
      "peerDependencies": {
        "react": ">=16.8"
      }
    },
    "node_modules/@reactuses/core": {
      "version": "6.5.2",
      "resolved": "https://registry.npmjs.org/@reactuses/core/-/core-6.5.2.tgz",
      "integrity": "sha512-oLhqof0nC1uYHtcv1a19jnB+wqfbr8ecIDrpn7KENMrsyGP44PoihfIVMxYIljJxMfeIzNQz0TxK1syIWcTuAw==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/childrentime"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/reactuse"
        }
      ],
      "license": "Unlicense",
      "dependencies": {
        "@microsoft/fetch-event-source": "^2.0.1",
        "js-cookie": "^3.0.5",
        "lodash-es": "^4.17.21",
        "screenfull": "^5.0.0",
        "use-sync-external-store": "^1.2.0"
      },
      "peerDependencies": {
        "qrcode": "^1.5",
        "react": "^16.8.0  || ^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "qrcode": {
          "optional": true
        }
      }
    },
    "node_modules/@rtsao/scc": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@rtsao/scc/-/scc-1.1.0.tgz",
      "integrity": "sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@schummar/icu-type-parser": {
      "version": "1.21.5",
      "resolved": "https://registry.npmjs.org/@schummar/icu-type-parser/-/icu-type-parser-1.21.5.tgz",
      "integrity": "sha512-bXHSaW5jRTmke9Vd0h5P7BtWZG9Znqb8gSDxZnxaGSJnGwPLDPfS+3g0BKzeWqzgZPsIVZkM7m2tbo18cm5HBw==",
      "license": "MIT"
    },
    "node_modules/@standard-schema/spec": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/spec/-/spec-1.1.0.tgz",
      "integrity": "sha512-l2aFy5jALhniG5HgqrD6jXLi/rUWrKvqN/qJx6yoJsgKhblVd+iqqU4RCXavm/jPityDo5TCvKMnpjKnOriy0w==",
      "license": "MIT"
    },
    "node_modules/@standard-schema/utils": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/utils/-/utils-0.3.0.tgz",
      "integrity": "sha512-e7Mew686owMaPJVNNLs55PUvgz371nKgwsc4vxE49zsODpJEnxgxRo2y/OKrqueavXgZNMDVj3DdHFlaSAeU8g==",
      "license": "MIT"
    },
    "node_modules/@stitches/core": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@stitches/core/-/core-1.2.8.tgz",
      "integrity": "sha512-Gfkvwk9o9kE9r9XNBmJRfV8zONvXThnm1tcuojL04Uy5uRyqg93DC83lDebl0rocZCfKSjUv+fWYtMQmEDJldg==",
      "license": "MIT"
    },
    "node_modules/@swc/core": {
      "version": "1.15.47",
      "resolved": "https://registry.npmjs.org/@swc/core/-/core-1.15.47.tgz",
      "integrity": "sha512-FbsO5JcfOjfH38W/rohBRBweJeERsAuIP4f377lmkmxTcq9exjtx4SkRuZY5CdfhR2CBVwDIJegBpJDffwNsOg==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/counter": "^0.1.3",
        "@swc/types": "^0.1.27"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/swc"
      },
      "optionalDependencies": {
        "@swc/core-darwin-arm64": "1.15.47",
        "@swc/core-darwin-x64": "1.15.47",
        "@swc/core-linux-arm-gnueabihf": "1.15.47",
        "@swc/core-linux-arm64-gnu": "1.15.47",
        "@swc/core-linux-arm64-musl": "1.15.47",
        "@swc/core-linux-ppc64-gnu": "1.15.47",
        "@swc/core-linux-s390x-gnu": "1.15.47",
        "@swc/core-linux-x64-gnu": "1.15.47",
        "@swc/core-linux-x64-musl": "1.15.47",
        "@swc/core-win32-arm64-msvc": "1.15.47",
        "@swc/core-win32-ia32-msvc": "1.15.47",
        "@swc/core-win32-x64-msvc": "1.15.47"
      },
      "peerDependencies": {
        "@swc/helpers": ">=0.5.17"
      },
      "peerDependenciesMeta": {
        "@swc/helpers": {
          "optional": true
        }
      }
    },
    "node_modules/@swc/core-darwin-arm64": {
      "version": "1.15.47",
      "resolved": "https://registry.npmjs.org/@swc/core-darwin-arm64/-/core-darwin-arm64-1.15.47.tgz",
      "integrity": "sha512-GsoMtan3ojGGMGFbl31mmRu5ctZ56re8grGE8mO/OHJ8O+JRkzod02fe7X6ZQ8JvamA3imkEkx/h3u+vsOgPgA==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-darwin-x64": {
      "version": "1.15.47",
      "resolved": "https://registry.npmjs.org/@swc/core-darwin-x64/-/core-darwin-x64-1.15.47.tgz",
      "integrity": "sha512-leTi7Rx3KF4zcC637iqWgk9SoV8VXAD8ppQYXsep63px5A/UftOcxLN1pmr8Z1si/YvX90ompP/rHgpYkgwXWg==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-linux-arm-gnueabihf": {
      "version": "1.15.47",
      "resolved": "https://registry.npmjs.org/@swc/core-linux-arm-gnueabihf/-/core-linux-arm-gnueabihf-1.15.47.tgz",
      "integrity": "sha512-hBqHuoWKKIsKmDBn9qVeWqj5GWZhtlcczVaqQmNRXsDfq+voR5CxKRfamA367QjJXtceYuliLFfEL8QsskRM2g==",
      "cpu": [
        "arm"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-linux-arm64-gnu": {
      "version": "1.15.47",
      "resolved": "https://registry.npmjs.org/@swc/core-linux-arm64-gnu/-/core-linux-arm64-gnu-1.15.47.tgz",
      "integrity": "sha512-TBxvRz+B4K205TWHHZxWVxkC2RFNP/Mz3PNcECBos5PsKwxjg3QSJzdoebr0VCf0Bfh8HOPldKxAP/8XkFe9gA==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-linux-arm64-musl": {
      "version": "1.15.47",
      "resolved": "https://registry.npmjs.org/@swc/core-linux-arm64-musl/-/core-linux-arm64-musl-1.15.47.tgz",
      "integrity": "sha512-3Yu3Uq/VgytqsPjTMbkPU1ExADytbdWbruJYhA584E9jrpE2Ki+R6VVPoZCeAVk1Cb7QxcRTgblw6bSa6a/R+w==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-linux-ppc64-gnu": {
      "version": "1.15.47",
      "resolved": "https://registry.npmjs.org/@swc/core-linux-ppc64-gnu/-/core-linux-ppc64-gnu-1.15.47.tgz",
      "integrity": "sha512-wfdMi5IaOaNtmh2/6geRoxIdNfqylUZFdtzTKS655y1axWfIWyx7As74vv0wVdjeCIZ3WmCI9odDd4rUttXOSQ==",
      "cpu": [
        "ppc64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-linux-s390x-gnu": {
      "version": "1.15.47",
      "resolved": "https://registry.npmjs.org/@swc/core-linux-s390x-gnu/-/core-linux-s390x-gnu-1.15.47.tgz",
      "integrity": "sha512-3hHYBY0yx8Ez7GMRrkhXHQzMdR5IZA6Wq5Ee4svlgwvSECLpnAJ9+0AimEGUFDvuLwE7nV/2+PYe8+Nm4rvNcQ==",
      "cpu": [
        "s390x"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-linux-x64-gnu": {
      "version": "1.15.47",
      "resolved": "https://registry.npmjs.org/@swc/core-linux-x64-gnu/-/core-linux-x64-gnu-1.15.47.tgz",
      "integrity": "sha512-TjfhjgP/jGCfFHYC3JQPhJA1HwErbIJ9JfREDc1KNkvY6P0LodCgKVIlQ5deeTbkG7ih3bF5PHJLuLpaZjdRyQ==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-linux-x64-musl": {
      "version": "1.15.47",
      "resolved": "https://registry.npmjs.org/@swc/core-linux-x64-musl/-/core-linux-x64-musl-1.15.47.tgz",
      "integrity": "sha512-CQpS8Ge/avfjZd0UEwG/sds83Uu32deQXcV1Jo3jD0mmvQQqtYAjpsDZXugmheeAwmt+YIuoVtVHro8LMYHqsQ==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-win32-arm64-msvc": {
      "version": "1.15.47",
      "resolved": "https://registry.npmjs.org/@swc/core-win32-arm64-msvc/-/core-win32-arm64-msvc-1.15.47.tgz",
      "integrity": "sha512-0W8IKHsUTYiT7G2RqtOoVWk+89yzZikIiDUb/sCK6BmQDBhN91hQSfyUtW12jhEWLzYgcfmisfsZrmZE+84U1A==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-win32-ia32-msvc": {
      "version": "1.15.47",
      "resolved": "https://registry.npmjs.org/@swc/core-win32-ia32-msvc/-/core-win32-ia32-msvc-1.15.47.tgz",
      "integrity": "sha512-ZIp49d2Z4/ka2jO9otOg4hDvTdPmp86kVOgS2M5FCPI7eKKZ1W0boxWn+8XeZrfERtFGW0AlMRm4JhlJa7l3NA==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/core-win32-x64-msvc": {
      "version": "1.15.47",
      "resolved": "https://registry.npmjs.org/@swc/core-win32-x64-msvc/-/core-win32-x64-msvc-1.15.47.tgz",
      "integrity": "sha512-2h8Iek95vnixkBRCo+H8p09+Q5ll2NgSMFrWTy0iKt7+/t+8/T5mBpiT6c0ZxSS7wcWjwZ9sGZkK70tTSYHdDw==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@swc/counter": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/@swc/counter/-/counter-0.1.3.tgz",
      "integrity": "sha512-e2BR4lsJkkRlKZ/qCHPw9ZaSxc0MVUd7gtbtaB7aMvHeJVYe8sOB8DBZkP2DtISHGSku9sCK6T6cnY0CtXrOCQ==",
      "license": "Apache-2.0"
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.23",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.23.tgz",
      "integrity": "sha512-5lSsMOTXURePglDfvuAQUqkGek9Hg2kksOYay2m0+XR++b2NWYL/4sWyuvVBIs8oKnJaxkdi9whaL/sqN13afw==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@swc/types": {
      "version": "0.1.28",
      "resolved": "https://registry.npmjs.org/@swc/types/-/types-0.1.28.tgz",
      "integrity": "sha512-V6Mnml8v09QALx6K0elJ7o9K/MkVDtW3t6L+7Ou/JcWtb3xwId2AH4FeOceySd2JaO87IMw4+6vSZxLm34LPbw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/counter": "^0.1.3"
      }
    },
    "node_modules/@tabby_ai/hijri-converter": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/@tabby_ai/hijri-converter/-/hijri-converter-1.0.5.tgz",
      "integrity": "sha512-r5bClKrcIusDoo049dSL8CawnHR6mRdDwhlQuIgZRNty68q0x8k3Lf1BtPAMxRf/GgnHBnIO4ujd3+GQdLWzxQ==",
      "license": "MIT",
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.3.3.tgz",
      "integrity": "sha512-/T8IKEsf9VTU6tLjgC7+sv2mOPtQxzE2jMw7u4Tt40Tx+QSZxpzh95/H6cMKoja9XuW7iMdLJYBB0o9G1CaAgg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.5",
        "enhanced-resolve": "^5.24.1",
        "jiti": "^2.7.0",
        "lightningcss": "1.32.0",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.3.3"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.3.3.tgz",
      "integrity": "sha512-krXjAikiaFSPaK/FkAQT5UTx3VormQaiZ5hBFlJZ9UFQGB/rwg1MZIhHAG9smMQRTdyJxP6Qt5MwMtdyU5FWrA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.3.3",
        "@tailwindcss/oxide-darwin-arm64": "4.3.3",
        "@tailwindcss/oxide-darwin-x64": "4.3.3",
        "@tailwindcss/oxide-freebsd-x64": "4.3.3",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.3.3",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.3.3",
        "@tailwindcss/oxide-linux-arm64-musl": "4.3.3",
        "@tailwindcss/oxide-linux-x64-gnu": "4.3.3",
        "@tailwindcss/oxide-linux-x64-musl": "4.3.3",
        "@tailwindcss/oxide-wasm32-wasi": "4.3.3",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.3.3",
        "@tailwindcss/oxide-win32-x64-msvc": "4.3.3"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.3.3.tgz",
      "integrity": "sha512-Y85A2gmPSkl5Ve5qR86GL4HT509cFqQh1aes9p3sSkyTPwt0Pppf3GkwGe4JPACcRYjgJIEhQgM6dBClnr0NYw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.3.3.tgz",
      "integrity": "sha512-BiaWatpBcERQFDlOjRDpIVXuFK5PJez5SA4JMg6VYZdBYU+qKfV/vqjcIs+IYmtitf1xYQZTwXvU/8y4lfZUGw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.3.3.tgz",
      "integrity": "sha512-fAeUqfV5ndhxRwai8cXGzdLvul9utWOmeTkv69unv4ZXixjn61Z+p9lCWdwOwA3TYboG3BwdVuN/RDjhBRl0mw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.3.3.tgz",
      "integrity": "sha512-iyf5bV6+wnAlflVeEy7R25dupxTNECZN5QMI0qNT6eT+EgaGdZcKhGkr5SdoaWiLJ3spLqIY9VCeSGrwmtg4kw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.3.3.tgz",
      "integrity": "sha512-aAYUprJAJQWWbRrPvtjdroZ56Md+JM8pMiopS6xGEwDfLhqj+2ver2p4nU4Mb3CRqcMmNBjo8KkUgcxhkzVQGQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.3.3.tgz",
      "integrity": "sha512-nDxldcEENOxZRzC2uu9jrutZdAAQtb+8WWDCSnWL1zvBk1+FN+x6MtDViPB5AJMfttVCUhehGWus3XBPgatM/w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.3.3.tgz",
      "integrity": "sha512-Md44bD6veX/PC5iyF8cDVnw4HBIANZepRZZ7a8DQOvkfo5WUBwcp6iAuCUz23u+4SUkhJlD3eL7hNdW8ezd/kA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.3.3.tgz",
      "integrity": "sha512-tx7us1muwOKAKWao2v/GaafFeQboE6aj88vC6ziN2NCGcRm8gWUhwjzg+YdVB1e4boAtdtma4L43onunI6NS4w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.3.3.tgz",
      "integrity": "sha512-SJxX60smvHgasZoBy11dX6YRjXJFovwWBoedhbQPOBzgFWBHGB+TVPWB9BxzR7TTxU8FQZAI2AyiNCMzFm8Img==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.3.3.tgz",
      "integrity": "sha512-jx1+rPhY/5Ympkktd656HBWEBLxP7dH06losBLjjf5vgCODXvi9KhtftWcMIwTFIDqBr7cRnQkdLnAG+IOlGvQ==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.11.1",
        "@emnapi/runtime": "^1.11.1",
        "@emnapi/wasi-threads": "^1.2.2",
        "@napi-rs/wasm-runtime": "^1.1.4",
        "@tybys/wasm-util": "^0.10.2",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.3.3.tgz",
      "integrity": "sha512-3rc292Ca2ceK6Ulcc/bAVnTs/3nDtoPhyEKlgPv+yQJQi/JS/AMJlqzxvlDacL1nekbrcf6bTqp/jV4qgnPxNQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.3.3.tgz",
      "integrity": "sha512-yJ0pwIVc/nYeGoV02WtsN8KYyLQv7kyI2wDnkezyJlGGjkd4QLwDGAwl47YpPJeuI0M0ObaXGSPjvWDPeTPggw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.3.3.tgz",
      "integrity": "sha512-JTSZZGQi1AyKirbLN3azmjVzef92tcX7h+iSqPdaeStyFpGpDlKvvpxeOE8njhbUanbRwr3z8DyzhICWnMtQeg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.3.3",
        "@tailwindcss/oxide": "4.3.3",
        "postcss": "^8.5.16",
        "tailwindcss": "4.3.3"
      }
    },
    "node_modules/@tanstack/query-core": {
      "version": "5.101.4",
      "resolved": "https://registry.npmjs.org/@tanstack/query-core/-/query-core-5.101.4.tgz",
      "integrity": "sha512-gNwcvOJcRbLWPOLG/2OBm+zM+Yv+MKsXKEOWC57USuZDEsI71hEErQsiEGx5wX9rzWWkfwM0fVSPoiIFSsxfiw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/react-query": {
      "version": "5.101.4",
      "resolved": "https://registry.npmjs.org/@tanstack/react-query/-/react-query-5.101.4.tgz",
      "integrity": "sha512-yRg2pfOCxIs4ZJW3XYYHU/WgtD04FHSnfHlpRT7h7pR77hwkdRG4wxbKe4aq6P0RvXUTBSQpQeadS1SUYUe+KA==",
      "license": "MIT",
      "dependencies": {
        "@tanstack/query-core": "5.101.4"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      },
      "peerDependencies": {
        "react": "^18 || ^19"
      }
    },
    "node_modules/@tanstack/react-table": {
      "version": "8.21.3",
      "resolved": "https://registry.npmjs.org/@tanstack/react-table/-/react-table-8.21.3.tgz",
      "integrity": "sha512-5nNMTSETP4ykGegmVkhjcS8tTLW6Vl4axfEGQN3v0zdHYbK4UfoqfPChclTrJ4EoK9QynqAu9oUf8VEmrpZ5Ww==",
      "license": "MIT",
      "dependencies": {
        "@tanstack/table-core": "8.21.3"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      },
      "peerDependencies": {
        "react": ">=16.8",
        "react-dom": ">=16.8"
      }
    },
    "node_modules/@tanstack/table-core": {
      "version": "8.21.3",
      "resolved": "https://registry.npmjs.org/@tanstack/table-core/-/table-core-8.21.3.tgz",
      "integrity": "sha512-ldZXEhOBb8Is7xLs01fR3YEc3DERiz5silj8tnGkFZytt1abEvl/GhUmCE0PMLaMPTa3Jk4HbKmRlHmu+gCftg==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.3",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.3.tgz",
      "integrity": "sha512-F3fo1MYrRJYL3zER0OUOmkutjr1Vp23m7OsSgp7nq4SP6OqX6C/56XFIPAl5bt3zaBRjmW7SGz3u/6LwFpYcOg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/d3-array": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/@types/d3-array/-/d3-array-3.2.2.tgz",
      "integrity": "sha512-hOLWVbm7uRza0BYXpIIW5pxfrKe0W+D5lrFiAEYR+pb6w3N2SwSMaJbXdUfSEv+dT4MfHBLtn5js0LAWaO6otw==",
      "license": "MIT"
    },
    "node_modules/@types/d3-color": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/@types/d3-color/-/d3-color-3.1.3.tgz",
      "integrity": "sha512-iO90scth9WAbmgv7ogoq57O9YpKmFBbmoEoCHDB2xMBY0+/KVrqAaCDyCE16dUspeOvIxFFRI+0sEtqDqy2b4A==",
      "license": "MIT"
    },
    "node_modules/@types/d3-ease": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/@types/d3-ease/-/d3-ease-3.0.2.tgz",
      "integrity": "sha512-NcV1JjO5oDzoK26oMzbILE6HW7uVXOHLQvHshBUW4UMdZGfiY6v5BeQwh9a9tCzv+CeefZQHJt5SRgK154RtiA==",
      "license": "MIT"
    },
    "node_modules/@types/d3-interpolate": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/@types/d3-interpolate/-/d3-interpolate-3.0.4.tgz",
      "integrity": "sha512-mgLPETlrpVV1YRJIglr4Ez47g7Yxjl1lj7YKsiMCb27VJH9W8NVM6Bb9d8kkpG/uAQS5AmbA48q2IAolKKo1MA==",
      "license": "MIT",
      "dependencies": {
        "@types/d3-color": "*"
      }
    },
    "node_modules/@types/d3-path": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/@types/d3-path/-/d3-path-3.1.1.tgz",
      "integrity": "sha512-VMZBYyQvbGmWyWVea0EHs/BwLgxc+MKi1zLDCONksozI4YJMcTt8ZEuIR4Sb1MMTE8MMW49v0IwI5+b7RmfWlg==",
      "license": "MIT"
    },
    "node_modules/@types/d3-scale": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@types/d3-scale/-/d3-scale-4.0.9.tgz",
      "integrity": "sha512-dLmtwB8zkAeO/juAMfnV+sItKjlsw2lKdZVVy6LRr0cBmegxSABiLEpGVmSJJ8O08i4+sGR6qQtb6WtuwJdvVw==",
      "license": "MIT",
      "dependencies": {
        "@types/d3-time": "*"
      }
    },
    "node_modules/@types/d3-shape": {
      "version": "3.1.8",
      "resolved": "https://registry.npmjs.org/@types/d3-shape/-/d3-shape-3.1.8.tgz",
      "integrity": "sha512-lae0iWfcDeR7qt7rA88BNiqdvPS5pFVPpo5OfjElwNaT2yyekbM0C9vK+yqBqEmHr6lDkRnYNoTBYlAgJa7a4w==",
      "license": "MIT",
      "dependencies": {
        "@types/d3-path": "*"
      }
    },
    "node_modules/@types/d3-time": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/@types/d3-time/-/d3-time-3.0.4.tgz",
      "integrity": "sha512-yuzZug1nkAAaBlBBikKZTgzCeA+k1uy4ZFwWANOfKw5z5LRhV0gNA7gNkKm7HoK+HRN0wX3EkxGk0fpbWhmB7g==",
      "license": "MIT"
    },
    "node_modules/@types/d3-timer": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/@types/d3-timer/-/d3-timer-3.0.2.tgz",
      "integrity": "sha512-Ps3T8E8dZDam6fUyNiMkekK3XUsaUEik+idO9/YjPtfj2qruF8tFBXS7XhtE4iIXBLxhmLjP3SXpLhVf21I9Lw==",
      "license": "MIT"
    },
    "node_modules/@types/debug": {
      "version": "4.1.13",
      "resolved": "https://registry.npmjs.org/@types/debug/-/debug-4.1.13.tgz",
      "integrity": "sha512-KSVgmQmzMwPlmtljOomayoR89W4FynCAi3E8PPs7vmDVPe84hT+vGPKkJfThkmXs0x0jAaa9U8uW8bbfyS2fWw==",
      "license": "MIT",
      "dependencies": {
        "@types/ms": "*"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.9.tgz",
      "integrity": "sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==",
      "license": "MIT"
    },
    "node_modules/@types/estree-jsx": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/@types/estree-jsx/-/estree-jsx-1.0.5.tgz",
      "integrity": "sha512-52CcUVNFyfb1A2ALocQw/Dd1BQFNmSdkuC3BkZ6iqhdMfQz7JWOFRuJFloOzjk+6WijU56m9oKXFAXc7o3Towg==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "*"
      }
    },
    "node_modules/@types/hast": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/@types/hast/-/hast-3.0.5.tgz",
      "integrity": "sha512-rp/ezSWaD1m44dPKICGhiskI13nVr7qTloFwDa/IYkhhf5nzwP+zIQcIJh3WIFSBOy/H1PzB40jPjMDksN4F+g==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "*"
      }
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json5": {
      "version": "0.0.29",
      "resolved": "https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz",
      "integrity": "sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/mdast": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/@types/mdast/-/mdast-4.0.4.tgz",
      "integrity": "sha512-kGaNbPh1k7AFzgpud/gMdvIm5xuECykRR+JnWKQno9TAXVa6WIVCGTPvYGekIDL4uwCZQSYbUxNBSb1aUo79oA==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "*"
      }
    },
    "node_modules/@types/ms": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/@types/ms/-/ms-2.1.0.tgz",
      "integrity": "sha512-GsCCIZDE/p3i96vtEqx+7dBUGXrc7zeSK3wwPHIaRThS+9OhWIXRqzs4d6k1SVU8g91DrNRWxWUGhp5KXQb2VA==",
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "26.2.0",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-26.2.0.tgz",
      "integrity": "sha512-5IviulTZeRNp2vAJ514cc/HUlY5nZ9fCbq9DMyC52BrhFZACo3nI0R7qBxhQmo/d27NFe96ur/b7Wwxklda+kg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~8.3.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.18",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.18.tgz",
      "integrity": "sha512-AnzbBERsrLKtk2XSfTbYRLjQPdy116Sty4q+T+Bp3IC4l6jNBvreVPAHmpq9qhXQM7CXZPjLVmGMw9sy+hxQ3w==",
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.4",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.4.tgz",
      "integrity": "sha512-Bsc+QHgp+P/F02XDzNCY9jnZNCUuLki36KT7VKrTXXLdHf+vHMNZnW1rVu5DNW/rCK+fya3DATySbLM4yhtKUw==",
      "devOptional": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@types/unist": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@types/unist/-/unist-3.0.3.tgz",
      "integrity": "sha512-ko/gIFJRv177XgZsZcBwnqJN5x/Gien8qNOn0D5bQU/zAzVf9Zt3BlcUiLqhV9y4ARk0GbT3tnUiPNgnTXzc/Q==",
      "license": "MIT"
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.67.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.67.0.tgz",
      "integrity": "sha512-Un7Heoyj65NREbKAyIrFxeM143NZpExWmy1Nep4DLeQOeLlTeumPjoNKnBrU5D5moWXbPJgRa5Uwcdu0faVNGQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.12.2",
        "@typescript-eslint/scope-manager": "8.67.0",
        "@typescript-eslint/type-utils": "8.67.0",
        "@typescript-eslint/utils": "8.67.0",
        "@typescript-eslint/visitor-keys": "8.67.0",
        "ignore": "^7.0.5",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.67.0",
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-7.0.6.tgz",
      "integrity": "sha512-BAg6QkE8W+TuQLrrw0Ugr7HegXduRuuj8/ti2kSOc+jz1dmx8/WNcjr6XGnq5YpDWxFwwaavqD0+jIUOKelTsw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.67.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.67.0.tgz",
      "integrity": "sha512-fUBfTuuEulWqX6V8+O3PtScV01tzYYRUDTAirHFKoRAt7nOzoGiPt0M/bB47wWNy0coOOcgEwAMUtBpykMxl6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.67.0",
        "@typescript-eslint/types": "8.67.0",
        "@typescript-eslint/typescript-estree": "8.67.0",
        "@typescript-eslint/visitor-keys": "8.67.0",
        "debug": "^4.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.67.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/project-service/-/project-service-8.67.0.tgz",
      "integrity": "sha512-cvE8c7ulYeXN9fYuszhCeCsbzyVEXuhrRCybnBre7TUmqb5nRmBfQAwCj0O3WJFDeyAZt4VYv51vMCC9LHSdYw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.67.0",
        "@typescript-eslint/types": "^8.67.0",
        "debug": "^4.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.67.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.67.0.tgz",
      "integrity": "sha512-EgvsleTwS4E+WzzSvem8fAUubLwatMNF1B5hHSLQxcvs7q2dtRhGyujHwLJSYlG41niJ7GP24Aha2+0mb1b2kg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.67.0",
        "@typescript-eslint/visitor-keys": "8.67.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.67.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/tsconfig-utils/-/tsconfig-utils-8.67.0.tgz",
      "integrity": "sha512-vV+LUSv5njUWsknE71fqKTlXUva+R76SaeORd6Zojcunk/6DvKFXONU3BrAs2H49mbygUXt6gbYunzwqNwlhdg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.67.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.67.0.tgz",
      "integrity": "sha512-aVWDXbRmdXO9siTfX4ditQI1T9+zVcNazT48EJCD0v40/9RIFoUgZ05CmGEq9H2gixRpjUn/iplwvlcvutJW/Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.67.0",
        "@typescript-eslint/typescript-estree": "8.67.0",
        "@typescript-eslint/utils": "8.67.0",
        "debug": "^4.4.3",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.67.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.67.0.tgz",
      "integrity": "sha512-sBtgslww8nsMYUjhdPBiSyUqSzT8uR6g93A2QXnQC8+cGdjz0CyaOdqHDRJb1AtORbZCNUJBBeFA/tNR2uQmww==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.67.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.67.0.tgz",
      "integrity": "sha512-EKQBCE9yNlRJYm7jdTW5AhDacDUmSwQb0FAJAmK2EKYrNXIsa2vxcSZx6PvJ/dEdI6lS+Y9W+EXckLj0iPFGcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/project-service": "8.67.0",
        "@typescript-eslint/tsconfig-utils": "8.67.0",
        "@typescript-eslint/types": "8.67.0",
        "@typescript-eslint/visitor-keys": "8.67.0",
        "debug": "^4.4.3",
        "minimatch": "^10.2.2",
        "semver": "^7.7.3",
        "tinyglobby": "^0.2.15",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "5.0.9",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.9.tgz",
      "integrity": "sha512-ScQ4IuvIEF1TMlP7Zt+vjJ//9zlPb2SDcxWxM3bk8s6t6GGdJ7KO1dCcTidOPJKePW30LE/2cT7wCyPho9/Wxg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "10.2.6",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.6.tgz",
      "integrity": "sha512-vpLQEs+VLCr1nU0BXS07maYoFwlDAH0gngQuuttxIwutDFEMHq2blX+8vpgxDdK3J1PwjCJiep77OitTZ4Ll1A==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.8"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.67.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.67.0.tgz",
      "integrity": "sha512-U9D1FdwEWBwok3hxxSdhclMb0twvt9QnjIQ0VfQ1AiX2epnpSgv2ubVDsayOFyY8K6FX+AQ7E0FKWVG3iKsj1A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.9.1",
        "@typescript-eslint/scope-manager": "8.67.0",
        "@typescript-eslint/types": "8.67.0",
        "@typescript-eslint/typescript-estree": "8.67.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.67.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.67.0.tgz",
      "integrity": "sha512-fkv8dHRDqfGtTHuJeebdrQ7cX6Ad4WAS00rgHh9UGvMycF1mjBfsxry1XsLIFhWZ6Judlh6UdzK+TYlbpCXgnA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.67.0",
        "eslint-visitor-keys": "^5.0.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys/node_modules/eslint-visitor-keys": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-5.0.1.tgz",
      "integrity": "sha512-tD40eHxA35h0PEIZNeIjkHoDR4YjjJp34biM0mDvplBe//mB+IHCqHDGV7pxF+7MklTvighcCPPZC7ynWyjdTA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.3.3.tgz",
      "integrity": "sha512-60YRaenCQcVjYEKOcG824+DRGGIQ3VKErcBoAEDJZz5bKIs2ZG+X/H9Nk+Q6EVkwJk5QNApxbrc5QtBSwtrXAg==",
      "license": "ISC"
    },
    "node_modules/@unrs/resolver-binding-android-arm-eabi": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm-eabi/-/resolver-binding-android-arm-eabi-1.12.2.tgz",
      "integrity": "sha512-g5T90pqg1bo/7mytQx6F4iBNC0Wsh9cu+z9veDbFjc7HjpesJFWD7QMS0NGStXM075+7dJPPVvBbpZlnrdpi/w==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-android-arm64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm64/-/resolver-binding-android-arm64-1.12.2.tgz",
      "integrity": "sha512-YGCRZv/9GLhwmz6mYDeTsm/92BAyR28l6c2ReweVW5pWgfsitWLY8upvfRlGdoyD8HjeTHSYJWyZGD4KJA/nFQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-arm64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-arm64/-/resolver-binding-darwin-arm64-1.12.2.tgz",
      "integrity": "sha512-u9DiNT1auQMO20A9SyTuG3wUgQWB9Z7KjAg0uFuCDR1FsAY8A0CG2S6JpHS1xwm/w1G08bjXZDcyOCjv1WAm2w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-x64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-x64/-/resolver-binding-darwin-x64-1.12.2.tgz",
      "integrity": "sha512-f7rPLi/T1HVKZu/u6t87lroib16n8vrSzcyxI7lg4BGO9UF26KhQL44sd9eOUgrTYhvRXtWOIZT5PejdPyJfUA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-freebsd-x64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-freebsd-x64/-/resolver-binding-freebsd-x64-1.12.2.tgz",
      "integrity": "sha512-BpcOjWCJub6nRZUS2zA20pmLvjtqAtGejETaIyRLiZiQf++cbrjltLA5NN/xaXfqeOBOSlMFbemIl5/S5tljmg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-gnueabihf": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-gnueabihf/-/resolver-binding-linux-arm-gnueabihf-1.12.2.tgz",
      "integrity": "sha512-vZTDvdSISZjJx66OzJqtsOhzifbqRjbmI1Mnu49fQDwog5GtDI4QidRiEAYbZCRj9C8YZEW+3ZjqsyS9GR4k2A==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-musleabihf": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-musleabihf/-/resolver-binding-linux-arm-musleabihf-1.12.2.tgz",
      "integrity": "sha512-BiPI+IrIlwcW4nLLMM21+B1dFPzd55yAVgVGrdgDjNef+ch03GdxrcyaIz8X9SsQirh/kCQ7mviyWlMxdh2D7g==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-gnu/-/resolver-binding-linux-arm64-gnu-1.12.2.tgz",
      "integrity": "sha512-zJc0H99FEPoFfSrNpa91HYfxzfAJCr502oxNK1cfdC9hlaFI43RT+JFCann9JUgZmLzzntChHyn13Sgn9ljHNg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-musl": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-musl/-/resolver-binding-linux-arm64-musl-1.12.2.tgz",
      "integrity": "sha512-KQ3Lki6l+Pz1k/eBipN41ES+YUK30beLGb9YqcB1O542cyLCNE6GaxrfcY3T6EezmGGk84wb5XyO9loTM9tkcA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-loong64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-loong64-gnu/-/resolver-binding-linux-loong64-gnu-1.12.2.tgz",
      "integrity": "sha512-3SJGEh1DborhG6pyxvhPzCT4bbSIVihsvgJc13P1bHG7KLdNDaF9T3gsTwFc7Jw/5Y5/iWOjkEx7Zy0NvCGX3Q==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-loong64-musl": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-loong64-musl/-/resolver-binding-linux-loong64-musl-1.12.2.tgz",
      "integrity": "sha512-jiuG/Obbel7uw1PwHNFfrkiKhLAF6mnyZ6aWlOAVN9WqKm8v0OFGnciJIHu8+CMvXLQ8AD51LPzAoUfT21D5Ew==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-ppc64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-ppc64-gnu/-/resolver-binding-linux-ppc64-gnu-1.12.2.tgz",
      "integrity": "sha512-q7xRvVpmcfeL+LlZg8Pbbo6QaTZwDU5BaGZbwfhkEsXJn3Was8xYfE0RBH266xZt0rM6B7i8xAYIvjthuUIWHg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-gnu/-/resolver-binding-linux-riscv64-gnu-1.12.2.tgz",
      "integrity": "sha512-0CVdx6lcnT3Q9inOH8tsMIOJ6ImndllMjqJHg8RLVdB7Vq4SfkEXl9mCSsVNuNA4MCYycRicCUxPCabVHJRr6A==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-musl": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-musl/-/resolver-binding-linux-riscv64-musl-1.12.2.tgz",
      "integrity": "sha512-iOwlRo9vnp6R6ohHQS11n0NnfdXx/omhkocmIfaPRpQhKZ+3BDMkkdRVh53qjkFkpPddf+FETA28NwGN7l5l+w==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-s390x-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-s390x-gnu/-/resolver-binding-linux-s390x-gnu-1.12.2.tgz",
      "integrity": "sha512-HYJtLfXq94q8iZNFT1lknx258wlkkWhZeUXJRqzKBBUJ00CvZ+N33zgbCqimLjsyw5Va6uUxhVa12mI+kaveEw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-gnu/-/resolver-binding-linux-x64-gnu-1.12.2.tgz",
      "integrity": "sha512-mPsUhunKKDih5O96Y6enDQyHc1SqBPlY1E/SfMWDM3EdJ95Z9CArPeCVwCCqbP45ljvivdEk8Fxn+SIb1rDAJQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-musl": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-musl/-/resolver-binding-linux-x64-musl-1.12.2.tgz",
      "integrity": "sha512-azrt6+5ydLd8Vt210AAFis/lZevSfPw93EJRIJG+xPu4WCJ8K0kppCTpMyLPcKT7H15M4Jnt2tMp5bOvCkRC6A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-openharmony-arm64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-openharmony-arm64/-/resolver-binding-openharmony-arm64-1.12.2.tgz",
      "integrity": "sha512-YZ9hP4O0X9PQb8eO980qmLNGH4zT3I9+SZTdt0Pr0YyuGQhYKoOZkV02VzrzyOZJ5xIJ3UFIenKkUkGg8GjgWQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@unrs/resolver-binding-wasm32-wasi": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-wasm32-wasi/-/resolver-binding-wasm32-wasi-1.12.2.tgz",
      "integrity": "sha512-tYFDIkMxSflfEc/h92ZWNsZlHSwgimbNHSO3PL2JWQHfCuC2q316jMyYU9TIWZsFK2bQwyK5VAdYgn8ygPj69A==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "1.10.0",
        "@emnapi/runtime": "1.10.0",
        "@napi-rs/wasm-runtime": "^1.1.4"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@unrs/resolver-binding-wasm32-wasi/node_modules/@emnapi/runtime": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.10.0.tgz",
      "integrity": "sha512-ewvYlk86xUoGI0zQRNq/mC+16R1QeDlKQy21Ki3oSYXNgLb45GV1P6A0M+/s6nyCuNDqe5VpaY84BzXGwVbwFA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@unrs/resolver-binding-win32-arm64-msvc": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-arm64-msvc/-/resolver-binding-win32-arm64-msvc-1.12.2.tgz",
      "integrity": "sha512-qzNyg3xL0VPQmCaUh+N5jSitce6k+uCBfMDesWRnlULOZaqUkaJ0ybdT+UqlAWJoQjuqfIU/0Ptx9bteN4D82g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-ia32-msvc": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-ia32-msvc/-/resolver-binding-win32-ia32-msvc-1.12.2.tgz",
      "integrity": "sha512-WD9sY00OfpHVGfsnHZoA8jVT+esS/Bg8z8jzxp5BnDCjjwsuKsPQrzswwpFy4J1AUJbXPRfkpcX0mXrzeXW79g==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-x64-msvc": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-x64-msvc/-/resolver-binding-win32-x64-msvc-1.12.2.tgz",
      "integrity": "sha512-nAB74NfSNKknqQ1RrYj6uz8FcXEomu/MATJZxh/x+BArzN2U3JbOYC0APYzUIGhVY3m5hRxA8VPNdPBoG8txlA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/acorn": {
      "version": "8.18.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.18.0.tgz",
      "integrity": "sha512-lGq+9yr1/GuAWaVYIHRjvvySG5/4VfKIvC8EWxStPdcDh/Ka7FG3twP6v4d5BkravUilhIAsG4Qj83t02LWUPQ==",
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "8.20.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.20.0.tgz",
      "integrity": "sha512-Thbli+OlOj+iMPYFBVBfJ3OmCAnaSyNn4M1vz9T6Gka5Jt9ba/HIR56joy65tY6kx/FCF5VXNB819Y7/GUrBGA==",
      "extraneous": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.3",
        "fast-uri": "^3.0.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/anser": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/anser/-/anser-2.3.5.tgz",
      "integrity": "sha512-vcZjxvvVoxTeR5XBNJB38oTu/7eDCZlwdz32N1eNgpyPF7j/Z7Idf+CUwQOkKKpJ7RJyjxgLHCM7vdIK0iCNMQ==",
      "license": "MIT"
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "license": "Python-2.0"
    },
    "node_modules/aria-hidden": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/aria-hidden/-/aria-hidden-1.2.6.tgz",
      "integrity": "sha512-ik3ZgC9dY/lYVVM++OISsaYDeg1tb0VtP5uL3ouh1koGOaUMDPpbFIei4JkFimWUFPn90sbMNMXQAIVOlnYKJA==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/aria-query": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
      "integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-buffer-byte-length/-/array-buffer-byte-length-1.0.2.tgz",
      "integrity": "sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "is-array-buffer": "^3.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-includes": {
      "version": "3.1.9",
      "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.1.9.tgz",
      "integrity": "sha512-FmeCCAenzH0KH381SPT5FZmiA/TmpndpcaShhfgEN9eCVjnFBqq3l1xrI42y8+PPLI6hypzou4GXw00WHmPBLQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.0",
        "es-object-atoms": "^1.1.1",
        "get-intrinsic": "^1.3.0",
        "is-string": "^1.1.1",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlast": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/array.prototype.findlast/-/array.prototype.findlast-1.2.5.tgz",
      "integrity": "sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlastindex": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/array.prototype.findlastindex/-/array.prototype.findlastindex-1.2.6.tgz",
      "integrity": "sha512-F/TKATkzseUExPlfvmwQKGITM3DGTK+vkAsCZoDc5daVygbJBnjEUCbgkAvVFsgfXfX4YIqZ/27G3k3tdXrTxQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-shim-unscopables": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flat": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.3.3.tgz",
      "integrity": "sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flatmap": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flatmap/-/array.prototype.flatmap-1.3.3.tgz",
      "integrity": "sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.tosorted": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/array.prototype.tosorted/-/array.prototype.tosorted-1.1.4.tgz",
      "integrity": "sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3",
        "es-errors": "^1.3.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/arraybuffer.prototype.slice": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/arraybuffer.prototype.slice/-/arraybuffer.prototype.slice-1.0.4.tgz",
      "integrity": "sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.1",
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "is-array-buffer": "^3.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/ast-types-flow": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/ast-types-flow/-/ast-types-flow-0.0.8.tgz",
      "integrity": "sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/async-function": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/async-function/-/async-function-1.0.0.tgz",
      "integrity": "sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.7.tgz",
      "integrity": "sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "possible-typed-array-names": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/axe-core": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.13.0.tgz",
      "integrity": "sha512-UzGt8zg7Ny8djbYMhxl2zuEevVa7r2gJjYY5Lwr1xM7+XU2nd6CkIWFTVcCIbAP63vSz71NaVyyuSk9lHKcy0A==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/axobject-query": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
      "integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/bail": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/bail/-/bail-2.0.2.tgz",
      "integrity": "sha512-0xO6mYd7JB2YesxDKplafRpsiOzPt9V02ddPCLbY1xYGPOX24NTyN50qnUxgCPcSoYMhKpAuBTjQoRZCAkUDRw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.11.15",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.11.15.tgz",
      "integrity": "sha512-FwMjJJ7HnyZpWe+oWxegG0fezZyBZUagI5LZEoO3GCbtbKNwRfMH9Ue5d5v01PNePBy1QSfPSDTTeVL0Hb9EzA==",
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.18",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.18.tgz",
      "integrity": "sha512-Edep/X9fGqVNmzKBVsDYIOtD+z1tuezV70LBjdCst9Tqu76lsnvRiZ6oTic1n+/BIwX6QDGAO94PN4N2SADvtw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.8",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.8.tgz",
      "integrity": "sha512-V2NpofLblG64mfOtSgDhOJESZEGogzDMBv/q+W6oc4LXWP/q75eOXoOaaOu1EOadB9U4Bwx/e0yzbvwKH8zalA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.11.12",
        "caniuse-lite": "^1.0.30001809",
        "electron-to-chromium": "^1.5.402",
        "node-releases": "^2.0.53",
        "update-browserslist-db": "^1.3.0"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/buffer": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-6.0.3.tgz",
      "integrity": "sha512-FTiCpNxtwiZZHEZbcbTIcZjERVICn9yq/pDFkTl95/AxzD1naBctN7YO68riM/gLSDY7sdrMby8hofADYuuqOA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "base64-js": "^1.3.1",
        "ieee754": "^1.2.1"
      }
    },
    "node_modules/bun-types": {
      "version": "1.3.14",
      "resolved": "https://registry.npmjs.org/bun-types/-/bun-types-1.3.14.tgz",
      "integrity": "sha512-4N0ig0fEomHt5R0KCFWjovxow98rIoRwKolrYdCcknNwMekCXRnWEUvgu5soYV8QXtVsrUD8B95MBOZGPvr6KQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/c12": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/c12/-/c12-3.1.0.tgz",
      "integrity": "sha512-uWoS8OU1MEIsOv8p/5a82c3H31LsWVR5qiyXVfBNOzfffjUWtPnhAb4BYI2uG2HfGmZmFjCtui5XNWaps+iFuw==",
      "license": "MIT",
      "dependencies": {
        "chokidar": "^4.0.3",
        "confbox": "^0.2.2",
        "defu": "^6.1.4",
        "dotenv": "^16.6.1",
        "exsolve": "^1.0.7",
        "giget": "^2.0.0",
        "jiti": "^2.4.2",
        "ohash": "^2.0.11",
        "pathe": "^2.0.3",
        "perfect-debounce": "^1.0.0",
        "pkg-types": "^2.2.0",
        "rc9": "^2.1.2"
      },
      "peerDependencies": {
        "magicast": "^0.3.5"
      },
      "peerDependenciesMeta": {
        "magicast": {
          "optional": true
        }
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.9.tgz",
      "integrity": "sha512-a/hy+pNsFUTR+Iz8TCJvXudKVLAnz/DyeSUo10I5yvFDQJBFU2s9uqQpoSrJlroHUKoKqzg+epxyP9lqFdzfBQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "get-intrinsic": "^1.3.0",
        "set-function-length": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001809",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001809.tgz",
      "integrity": "sha512-xxWVywk6a6Arlk+hymeycyn/VgqEfLDxupvhH/xiY5SJ/18kmi9o6MiO320DCUzypORHLtvh0I4i04tUhCNHNQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/ccount": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/ccount/-/ccount-2.0.1.tgz",
      "integrity": "sha512-eyrF0jiFpY+3drT6383f1qhkbGsLSifNAjA61IUjZjmLCWjItY6LB9ft9YhoDgwfmclB2zhu51Lc7+95b8NRAg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/character-entities": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/character-entities/-/character-entities-2.0.2.tgz",
      "integrity": "sha512-shx7oQ0Awen/BRIdkjkvz54PnEEI/EjwXDSIZp86/KKdbafHh1Df/RYGBhn4hbe2+uKC9FnT5UCEdyPz3ai9hQ==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/character-entities-html4": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/character-entities-html4/-/character-entities-html4-2.1.0.tgz",
      "integrity": "sha512-1v7fgQRj6hnSwFpq1Eu0ynr/CDEw0rXo2B61qXrLNdHZmPKgb7fqS1a2JwF0rISo9q77jDI8VMEHoApn8qDoZA==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/character-entities-legacy": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/character-entities-legacy/-/character-entities-legacy-3.0.0.tgz",
      "integrity": "sha512-RpPp0asT/6ufRm//AJVwpViZbGM/MkjQFxJccQRHmISF/22NBtsHqAWmL+/pmkPWoIUJdWyeVleTl1wydHATVQ==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/character-reference-invalid": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/character-reference-invalid/-/character-reference-invalid-2.0.1.tgz",
      "integrity": "sha512-iBZ4F4wRbyORVsu0jPV7gXkOsGYjGHPmAyv+HiHG8gi5PtC9KI2j1+v8/tlibRvjoWX027ypmG/n0HtO5t7unw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/chokidar": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-4.0.3.tgz",
      "integrity": "sha512-Qgzu8kfBvo+cA4962jnP1KkS6Dop5NS6g7R5LFYJr4b8Ub94PPQXUksCw9PvXoeXPRRddRNC5C1JQUR2SMGtnA==",
      "license": "MIT",
      "dependencies": {
        "readdirp": "^4.0.1"
      },
      "engines": {
        "node": ">= 14.16.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/citty": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/citty/-/citty-0.1.6.tgz",
      "integrity": "sha512-tskPPKEs8D2KPafUypv2gxwJP8h/OaJmC82QQGGDQcHvXX43xF2VDACcJVmZ0EuSxkpO9Kc4MlrA3q0+FG58AQ==",
      "license": "MIT",
      "dependencies": {
        "consola": "^3.2.3"
      }
    },
    "node_modules/class-variance-authority": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/class-variance-authority/-/class-variance-authority-0.7.1.tgz",
      "integrity": "sha512-Ka+9Trutv7G8M6WT6SeiRWz792K5qEqIGEGzXKhAE6xOWAY6pPH8U+9IY3oCMv6kqTmLsv7Xh/2w2RigkePMsg==",
      "license": "Apache-2.0",
      "dependencies": {
        "clsx": "^2.1.1"
      },
      "funding": {
        "url": "https://polar.sh/cva"
      }
    },
    "node_modules/classnames": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/classnames/-/classnames-2.5.1.tgz",
      "integrity": "sha512-saHYOzhIQs6wy2sVxTM6bUDsQO4F50V9RQ22qBpEdCW+I+/Wmke2HOl6lS6dTpdxVhb88/I6+Hs+438c3lfUow==",
      "license": "MIT"
    },
    "node_modules/clean-set": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/clean-set/-/clean-set-1.1.2.tgz",
      "integrity": "sha512-cA8uCj0qSoG9e0kevyOWXwPaELRPVg5Pxp6WskLMwerx257Zfnh8Nl0JBH59d7wQzij2CK7qEfJQK3RjuKKIug==",
      "license": "MIT"
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
      "license": "MIT"
    },
    "node_modules/clsx": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz",
      "integrity": "sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/cm6-theme-basic-light": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/cm6-theme-basic-light/-/cm6-theme-basic-light-0.2.0.tgz",
      "integrity": "sha512-1prg2gv44sYfpHscP26uLT/ePrh0mlmVwMSoSd3zYKQ92Ab3jPRLzyCnpyOCQLJbK+YdNs4HvMRqMNYdy4pMhA==",
      "license": "MIT",
      "peerDependencies": {
        "@codemirror/language": "^6.0.0",
        "@codemirror/state": "^6.0.0",
        "@codemirror/view": "^6.0.0",
        "@lezer/highlight": "^1.0.0"
      }
    },
    "node_modules/cmdk": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/cmdk/-/cmdk-1.1.1.tgz",
      "integrity": "sha512-Vsv7kFaXm+ptHDMZ7izaRsP70GgrW9NBNGswt9OZaVBLlE0SNpDq8eu/VGXyF9r7M0azK3Wy7OlYXsuyYLFzHg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "^1.1.1",
        "@radix-ui/react-dialog": "^1.1.6",
        "@radix-ui/react-id": "^1.1.0",
        "@radix-ui/react-primitive": "^2.0.2"
      },
      "peerDependencies": {
        "react": "^18 || ^19 || ^19.0.0-rc",
        "react-dom": "^18 || ^19 || ^19.0.0-rc"
      }
    },
    "node_modules/codemirror": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/codemirror/-/codemirror-6.0.2.tgz",
      "integrity": "sha512-VhydHotNW5w1UGK0Qj96BwSk/Zqbp9WbnyK2W/eVMv4QyF41INRGpjUhFJY7/uDNuudSc33a/PKr4iDqRduvHw==",
      "license": "MIT",
      "dependencies": {
        "@codemirror/autocomplete": "^6.0.0",
        "@codemirror/commands": "^6.0.0",
        "@codemirror/language": "^6.0.0",
        "@codemirror/lint": "^6.0.0",
        "@codemirror/search": "^6.0.0",
        "@codemirror/state": "^6.0.0",
        "@codemirror/view": "^6.0.0"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/comma-separated-tokens": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/comma-separated-tokens/-/comma-separated-tokens-2.0.3.tgz",
      "integrity": "sha512-Fu4hJdvzeylCfQPp9SGWidpzrMs7tTrlu6Vb8XGaRGck8QSNZJJp538Wrb60Lax4fPwR64ViY468OIUTbRlGZg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/compute-scroll-into-view": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/compute-scroll-into-view/-/compute-scroll-into-view-2.0.4.tgz",
      "integrity": "sha512-y/ZA3BGnxoM/QHHQ2Uy49CLtnWPbt4tTPpEEZiEmmiWBFKjej7nEyH8Ryz54jH0MLXflUYA3Er2zUxPSJu5R+g==",
      "license": "MIT"
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/confbox": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/confbox/-/confbox-0.2.4.tgz",
      "integrity": "sha512-ysOGlgTFbN2/Y6Cg3Iye8YKulHw+R2fNXHrgSmXISQdMnomY6eNDprVdW9R5xBguEqI954+S6709UyiO7B+6OQ==",
      "license": "MIT"
    },
    "node_modules/consola": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/consola/-/consola-3.4.2.tgz",
      "integrity": "sha512-5IKcdX0nnYavi6G7TtOhwkYzyjfJlatbjMjuLSfE2kYT5pMDOilZ4OvMhi637CcDICTmz3wARPoyhqyX1Y+XvA==",
      "license": "MIT",
      "engines": {
        "node": "^14.18.0 || >=16.10.0"
      }
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/crelt": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/crelt/-/crelt-1.0.7.tgz",
      "integrity": "sha512-aK6BbWfhf4U/wCcLHKPJl/xa6VkVstRaPywWtMKGwuOLc/wZTyQYuoxgvZnNsBvv7Kg3YTBQYYBCggcviQczuA==",
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "license": "MIT"
    },
    "node_modules/d": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/d/-/d-1.0.2.tgz",
      "integrity": "sha512-MOqHvMWF9/9MX6nza0KgvFH4HpMU0EF5uUDXqX/BtxtU8NfB0QzRtJ8Oe/6SuS4kbhyzVJwjd97EA4PKrzJ8bw==",
      "license": "ISC",
      "dependencies": {
        "es5-ext": "^0.10.64",
        "type": "^2.7.2"
      },
      "engines": {
        "node": ">=0.12"
      }
    },
    "node_modules/d3-array": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/d3-array/-/d3-array-3.2.4.tgz",
      "integrity": "sha512-tdQAmyA18i4J7wprpYq8ClcxZy3SC31QMeByyCFyRt7BVHdREQZ5lpzoe5mFEYZUWe+oq8HBvk9JjpibyEV4Jg==",
      "license": "ISC",
      "dependencies": {
        "internmap": "1 - 2"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-color": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/d3-color/-/d3-color-3.1.0.tgz",
      "integrity": "sha512-zg/chbXyeBtMQ1LbD/WSoW2DpC3I0mpmPdW+ynRTj/x2DAWYrIY7qeZIHidozwV24m4iavr15lNwIwLxRmOxhA==",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-ease": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-ease/-/d3-ease-3.0.1.tgz",
      "integrity": "sha512-wR/XK3D3XcLIZwpbvQwQ5fK+8Ykds1ip7A2Txe0yxncXSdq1L9skcG7blcedkOX+ZcgxGAmLX1FrRGbADwzi0w==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-format": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/d3-format/-/d3-format-3.1.2.tgz",
      "integrity": "sha512-AJDdYOdnyRDV5b6ArilzCPPwc1ejkHcoyFarqlPqT7zRYjhavcT3uSrqcMvsgh2CgoPbK3RCwyHaVyxYcP2Arg==",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-interpolate": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-interpolate/-/d3-interpolate-3.0.1.tgz",
      "integrity": "sha512-3bYs1rOD33uo8aqJfKP3JWPAibgw8Zm2+L9vBKEHJ2Rg+viTR7o5Mmv5mZcieN+FRYaAOWX5SJATX6k1PWz72g==",
      "license": "ISC",
      "dependencies": {
        "d3-color": "1 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-path": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/d3-path/-/d3-path-3.1.0.tgz",
      "integrity": "sha512-p3KP5HCf/bvjBSSKuXid6Zqijx7wIfNW+J/maPs+iwR35at5JCbLUT0LzF1cnjbCHWhqzQTIN2Jpe8pRebIEFQ==",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-scale": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/d3-scale/-/d3-scale-4.0.2.tgz",
      "integrity": "sha512-GZW464g1SH7ag3Y7hXjf8RoUuAFIqklOAq3MRl4OaWabTFJY9PN/E1YklhXLh+OQ3fM9yS2nOkCoS+WLZ6kvxQ==",
      "license": "ISC",
      "dependencies": {
        "d3-array": "2.10.0 - 3",
        "d3-format": "1 - 3",
        "d3-interpolate": "1.2.0 - 3",
        "d3-time": "2.1.1 - 3",
        "d3-time-format": "2 - 4"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-shape": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/d3-shape/-/d3-shape-3.2.0.tgz",
      "integrity": "sha512-SaLBuwGm3MOViRq2ABk3eLoxwZELpH6zhl3FbAoJ7Vm1gofKx6El1Ib5z23NUEhF9AsGl7y+dzLe5Cw2AArGTA==",
      "license": "ISC",
      "dependencies": {
        "d3-path": "^3.1.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-time": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/d3-time/-/d3-time-3.1.0.tgz",
      "integrity": "sha512-VqKjzBLejbSMT4IgbmVgDjpkYrNWUYJnbCGo874u7MMKIWsILRX+OpX/gTk8MqjpT1A/c6HY2dCA77ZN0lkQ2Q==",
      "license": "ISC",
      "dependencies": {
        "d3-array": "2 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-time-format": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/d3-time-format/-/d3-time-format-4.1.0.tgz",
      "integrity": "sha512-dJxPBlzC7NugB2PDLwo9Q8JiTR3M3e4/XANkreKSUxF8vvXKqm1Yfq4Q5dl8budlunRVlUUaDUgFt7eA8D6NLg==",
      "license": "ISC",
      "dependencies": {
        "d3-time": "1 - 3"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/d3-timer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/d3-timer/-/d3-timer-3.0.1.tgz",
      "integrity": "sha512-ndfJ/JxxMd3nw31uyKoY2naivF+r29V+Lc0svZxe1JvvIRmi8hUsrMvdOwgS1o6uBHmiz91geQ0ylPP0aj1VUA==",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/damerau-levenshtein": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.8.tgz",
      "integrity": "sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/data-view-buffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-buffer/-/data-view-buffer-1.0.2.tgz",
      "integrity": "sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/data-view-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-byte-length/-/data-view-byte-length-1.0.2.tgz",
      "integrity": "sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/inspect-js"
      }
    },
    "node_modules/data-view-byte-offset": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/data-view-byte-offset/-/data-view-byte-offset-1.0.1.tgz",
      "integrity": "sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/date-fns": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/date-fns/-/date-fns-4.4.0.tgz",
      "integrity": "sha512-+1UMbeh68lH1SegH83CGWwpb6OHHbpSgr3+s5Eww5M4CAgswBpoWS0AjTOfEJ33HiYKz1hdj/KTFprzXHmq/6w==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/kossnocorp"
      }
    },
    "node_modules/date-fns-jalali": {
      "version": "4.1.0-0",
      "resolved": "https://registry.npmjs.org/date-fns-jalali/-/date-fns-jalali-4.1.0-0.tgz",
      "integrity": "sha512-hTIP/z+t+qKwBDcmmsnmjWTduxCg+5KfdqWQvb2X/8C9+knYY6epN/pfxdDuyVlSVeFz0sM5eEfwIUQ70U4ckg==",
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decimal.js-light": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/decimal.js-light/-/decimal.js-light-2.5.1.tgz",
      "integrity": "sha512-qIMFpTMZmny+MMIitAB6D7iVPEorVw6YQRWkvarTkT4tBeSLLiHzcwj6q0MmYSFCiVpiqPJTJEYIrpcPzVEIvg==",
      "license": "MIT"
    },
    "node_modules/decode-named-character-reference": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/decode-named-character-reference/-/decode-named-character-reference-1.3.0.tgz",
      "integrity": "sha512-GtpQYB283KrPp6nRw50q3U9/VfOutZOe103qlN7BPP6Ad27xYnOIWv4lPzo8HCAL+mMZofJ9KEy30fq6MfaK6Q==",
      "license": "MIT",
      "dependencies": {
        "character-entities": "^2.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/deepmerge-ts": {
      "version": "7.1.5",
      "resolved": "https://registry.npmjs.org/deepmerge-ts/-/deepmerge-ts-7.1.5.tgz",
      "integrity": "sha512-HOJkrhaYsweh+W+e74Yn7YStZOilkoPb6fycpwNLKzSPtruFs48nYis0zy5yJz1+ktUhHxoRDJ27RQAWLIJVJw==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
      "integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/define-properties": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.2.1.tgz",
      "integrity": "sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.0.1",
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/defu": {
      "version": "6.1.7",
      "resolved": "https://registry.npmjs.org/defu/-/defu-6.1.7.tgz",
      "integrity": "sha512-7z22QmUWiQ/2d0KkdYmANbRUVABpZ9SNYyH5vx6PZ+nE5bcC0l7uFvEfHlyld/HcGBFTL536ClDt3DEcSlEJAQ==",
      "license": "MIT"
    },
    "node_modules/dequal": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/dequal/-/dequal-2.0.3.tgz",
      "integrity": "sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/destr": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/destr/-/destr-2.0.5.tgz",
      "integrity": "sha512-ugFTXCtDZunbzasqBxrK93Ik/DRYsO6S/fedkWEMKqt04xZ4csmnmwGDBAb07QWNaGMAmnTIemsYZCksjATwsA==",
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/detect-node-es": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/detect-node-es/-/detect-node-es-1.1.0.tgz",
      "integrity": "sha512-ypdmJU/TbBby2Dxibuv7ZLW3Bs1QEmM7nHjEANfohJLvE0XVujisn1qPJcZxg+qDucsr+bP6fLD1rPS3AhJ7EQ==",
      "license": "MIT"
    },
    "node_modules/devlop": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/devlop/-/devlop-1.1.0.tgz",
      "integrity": "sha512-RWmIqhcFf1lRYBvNmr7qTNuyCt/7/ns2jbpp1+PalgE/rDQcBT0fioSMUpJ93irlUhC5hrg4cYqe6U+0ImW0rA==",
      "license": "MIT",
      "dependencies": {
        "dequal": "^2.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/diff": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/diff/-/diff-5.2.2.tgz",
      "integrity": "sha512-vtcDfH3TOjP8UekytvnHH1o1P4FcUdt4eQ1Y+Abap1tk/OB2MWQvcwS2ClCd1zuIhc3JKOx6p3kod8Vfys3E+A==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/dom-helpers": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/dom-helpers/-/dom-helpers-5.2.1.tgz",
      "integrity": "sha512-nRCa7CK3VTrM2NmGkIy4cbK7IZlgBE/PYMn55rrXefr5xXDP0LdtfPnblFDoVdcAfslJ7or6iqAUnx0CCGIWQA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.8.7",
        "csstype": "^3.0.2"
      }
    },
    "node_modules/dotenv": {
      "version": "16.6.1",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.6.1.tgz",
      "integrity": "sha512-uBq4egWHTcTt33a72vpSG0z3HnPuIl6NqYcTrKEg2azoEyl2hpW0zqlxysq2pK9HlDIHyHyakeYaYnSAwd8bow==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/downshift": {
      "version": "7.6.2",
      "resolved": "https://registry.npmjs.org/downshift/-/downshift-7.6.2.tgz",
      "integrity": "sha512-iOv+E1Hyt3JDdL9yYcOgW7nZ7GQ2Uz6YbggwXvKUSleetYhU2nXD482Rz6CzvM4lvI1At34BYruKAL4swRGxaA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.14.8",
        "compute-scroll-into-view": "^2.0.4",
        "prop-types": "^15.7.2",
        "react-is": "^17.0.2",
        "tslib": "^2.3.0"
      },
      "peerDependencies": {
        "react": ">=16.12.0"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/effect": {
      "version": "3.21.0",
      "resolved": "https://registry.npmjs.org/effect/-/effect-3.21.0.tgz",
      "integrity": "sha512-PPN80qRokCd1f015IANNhrwOnLO7GrrMQfk4/lnZRE/8j7UPWrNNjPV0uBrZutI/nHzernbW+J0hdqQysHiSnQ==",
      "license": "MIT",
      "dependencies": {
        "@standard-schema/spec": "^1.0.0",
        "fast-check": "^3.23.1"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.408",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.408.tgz",
      "integrity": "sha512-SLoprcYpJ/OH2v2ps0+N5biv9H4/KBT3+YmmDew64TwK5y9j2wv7pMOFY7IorVkyMtEyLSCRlXKLsNlakeAlPw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/embla-carousel": {
      "version": "8.6.0",
      "resolved": "https://registry.npmjs.org/embla-carousel/-/embla-carousel-8.6.0.tgz",
      "integrity": "sha512-SjWyZBHJPbqxHOzckOfo8lHisEaJWmwd23XppYFYVh10bU66/Pn5tkVkbkCMZVdbUE5eTCI2nD8OyIP4Z+uwkA==",
      "license": "MIT"
    },
    "node_modules/embla-carousel-react": {
      "version": "8.6.0",
      "resolved": "https://registry.npmjs.org/embla-carousel-react/-/embla-carousel-react-8.6.0.tgz",
      "integrity": "sha512-0/PjqU7geVmo6F734pmPqpyHqiM99olvyecY7zdweCw+6tKEXnrE90pBiBbMMU8s5tICemzpQ3hi5EpxzGW+JA==",
      "license": "MIT",
      "dependencies": {
        "embla-carousel": "8.6.0",
        "embla-carousel-reactive-utils": "8.6.0"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.1 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      }
    },
    "node_modules/embla-carousel-reactive-utils": {
      "version": "8.6.0",
      "resolved": "https://registry.npmjs.org/embla-carousel-reactive-utils/-/embla-carousel-reactive-utils-8.6.0.tgz",
      "integrity": "sha512-fMVUDUEx0/uIEDM0Mz3dHznDhfX+znCCDCeIophYb1QGVM7YThSWX+wz11zlYwWFOr74b4QLGg0hrGPJeG2s4A==",
      "license": "MIT",
      "peerDependencies": {
        "embla-carousel": "8.6.0"
      }
    },
    "node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/empathic": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/empathic/-/empathic-2.0.0.tgz",
      "integrity": "sha512-i6UzDscO/XfAcNYD75CfICkmfLedpyPDdozrLMmQc5ORaQcdMoc21OnlEylMIqI7U8eniKrPMxxtj8k0vhmJhA==",
      "license": "MIT",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/enhanced-resolve": {
      "version": "5.24.5",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.24.5.tgz",
      "integrity": "sha512-L1l8TNvomm6UVW5B253AGxQagSQr+vGwhMlrrfRS2qmhx46AMpMVJKQYLvWYbysTMY8VoicOvzHzoHMbyzB+4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/es-abstract": {
      "version": "1.24.2",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.24.2.tgz",
      "integrity": "sha512-2FpH9Q5i2RRwyEP1AylXe6nYLR5OhaJTZwmlcP0dL/+JCbgg7yyEo/sEK6HeGZRf3dFpWwThaRHVApXSkW3xeg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.2",
        "arraybuffer.prototype.slice": "^1.0.4",
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "data-view-buffer": "^1.0.2",
        "data-view-byte-length": "^1.0.2",
        "data-view-byte-offset": "^1.0.1",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-set-tostringtag": "^2.1.0",
        "es-to-primitive": "^1.3.0",
        "function.prototype.name": "^1.1.8",
        "get-intrinsic": "^1.3.0",
        "get-proto": "^1.0.1",
        "get-symbol-description": "^1.1.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "internal-slot": "^1.1.0",
        "is-array-buffer": "^3.0.5",
        "is-callable": "^1.2.7",
        "is-data-view": "^1.0.2",
        "is-negative-zero": "^2.0.3",
        "is-regex": "^1.2.1",
        "is-set": "^2.0.3",
        "is-shared-array-buffer": "^1.0.4",
        "is-string": "^1.1.1",
        "is-typed-array": "^1.1.15",
        "is-weakref": "^1.1.1",
        "math-intrinsics": "^1.1.0",
        "object-inspect": "^1.13.4",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.7",
        "own-keys": "^1.0.1",
        "regexp.prototype.flags": "^1.5.4",
        "safe-array-concat": "^1.1.3",
        "safe-push-apply": "^1.0.0",
        "safe-regex-test": "^1.1.0",
        "set-proto": "^1.0.0",
        "stop-iteration-iterator": "^1.1.0",
        "string.prototype.trim": "^1.2.10",
        "string.prototype.trimend": "^1.0.9",
        "string.prototype.trimstart": "^1.0.8",
        "typed-array-buffer": "^1.0.3",
        "typed-array-byte-length": "^1.0.3",
        "typed-array-byte-offset": "^1.0.4",
        "typed-array-length": "^1.0.7",
        "unbox-primitive": "^1.1.0",
        "which-typed-array": "^1.1.19"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-abstract-get": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/es-abstract-get/-/es-abstract-get-1.0.0.tgz",
      "integrity": "sha512-6PMWXpdhshVvFp+FoWYs1EvG1Nj0tvk0dZM+XcK0xMEM1czRVcP6ohqPWHy6qPagSpC8j4+p89WXlT+xXJs/fg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.2",
        "is-callable": "^1.2.7",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-iterator-helpers": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/es-iterator-helpers/-/es-iterator-helpers-1.4.0.tgz",
      "integrity": "sha512-c/A0P0oxkACDc+cKWw8evLXK83oBKgn0qPOqCYT4x9uolpCIJAcYvJC9QYKNDRPsTeGyCrQ326jrvgZWdCdK5Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-errors": "^1.3.0",
        "es-set-tostringtag": "^2.1.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.3.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "iterator.prototype": "^1.1.5",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.2.tgz",
      "integrity": "sha512-HWcBoN6NileqtSydK2FqHbS/LoDd2pqrnQHLyJzBj4kOp/ky2MWMN694xOfkK8/SnUsW2DH7EfyVlydKCsm1Zw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-shim-unscopables": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/es-shim-unscopables/-/es-shim-unscopables-1.1.0.tgz",
      "integrity": "sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.3.4.tgz",
      "integrity": "sha512-yPDz7wqpg1/mmHLmS3tcfTfbw5f1eryXvyghYBffGdERwe+mV7ZcWzTR8LR17Kvqt3qfPurjlonmnq3MKXIOXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-abstract-get": "^1.0.0",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "is-callable": "^1.2.7",
        "is-date-object": "^1.1.0",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es5-ext": {
      "version": "0.10.64",
      "resolved": "https://registry.npmjs.org/es5-ext/-/es5-ext-0.10.64.tgz",
      "integrity": "sha512-p2snDhiLaXe6dahss1LddxqEm+SkuDvV8dnIQG0MWjyHpcMNfXKPE+/Cc0y+PhxJX3A4xGNeFCj5oc0BUh6deg==",
      "hasInstallScript": true,
      "license": "ISC",
      "dependencies": {
        "es6-iterator": "^2.0.3",
        "es6-symbol": "^3.1.3",
        "esniff": "^2.0.1",
        "next-tick": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/es6-iterator": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/es6-iterator/-/es6-iterator-2.0.3.tgz",
      "integrity": "sha512-zw4SRzoUkd+cl+ZoE15A9o1oQd920Bb0iOJMQkQhl3jNc03YqVjAhG7scf9C5KWRU/R13Orf588uCC6525o02g==",
      "license": "MIT",
      "dependencies": {
        "d": "1",
        "es5-ext": "^0.10.35",
        "es6-symbol": "^3.1.1"
      }
    },
    "node_modules/es6-symbol": {
      "version": "3.1.4",
      "resolved": "https://registry.npmjs.org/es6-symbol/-/es6-symbol-3.1.4.tgz",
      "integrity": "sha512-U9bFFjX8tFiATgtkJ1zg25+KviIXpgRvRHS8sau3GfhVzThRQrOeksPeT0BWW2MNZs1OEWJ1DPXOQMn0KKRkvg==",
      "license": "ISC",
      "dependencies": {
        "d": "^1.0.2",
        "ext": "^1.7.0"
      },
      "engines": {
        "node": ">=0.12"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-carriage": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/escape-carriage/-/escape-carriage-1.3.1.tgz",
      "integrity": "sha512-GwBr6yViW3ttx1kb7/Oh+gKQ1/TrhYwxKqVmg5gS+BK+Qe2KrOa/Vh7w3HPBvgGf0LfcDGoY9I6NHKoA5Hozhw==",
      "license": "MIT"
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "9.39.5",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.39.5.tgz",
      "integrity": "sha512-DgZS62aPLXKlnxILS/AYCoRvHaZeXceIzlXPkkGGzJWSow1aEk0lbTlxUSlyjC8jcaKxAdOnTDz+o1JFSBsyjw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.1",
        "@eslint/config-array": "^0.21.2",
        "@eslint/config-helpers": "^0.4.2",
        "@eslint/core": "^0.17.0",
        "@eslint/eslintrc": "^3.3.6",
        "@eslint/js": "9.39.5",
        "@eslint/plugin-kit": "^0.4.1",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.14.0",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^8.4.0",
        "eslint-visitor-keys": "^4.2.1",
        "espree": "^10.4.0",
        "esquery": "^1.5.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.5",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-config-next": {
      "version": "16.3.1",
      "resolved": "https://registry.npmjs.org/eslint-config-next/-/eslint-config-next-16.3.1.tgz",
      "integrity": "sha512-0vtrpwFVHFEkycUgV/DyrG29OS+HSRdah5Yu8YuZoiBMtlAT6NIiWzaLwDkJZxr2kGfx+9LIvfQ7KHAlEs0VsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@next/eslint-plugin-next": "16.3.1",
        "eslint-import-resolver-node": "^0.3.6",
        "eslint-import-resolver-typescript": "^3.5.2",
        "eslint-plugin-import": "^2.32.0",
        "eslint-plugin-jsx-a11y": "^6.10.0",
        "eslint-plugin-react": "^7.37.0",
        "eslint-plugin-react-hooks": "^7.0.0",
        "globals": "16.4.0",
        "typescript-eslint": "^8.46.0"
      },
      "peerDependencies": {
        "eslint": ">=9.0.0",
        "typescript": ">=3.3.1"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-config-next/node_modules/globals": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-16.4.0.tgz",
      "integrity": "sha512-ob/2LcVVaVGCYN+r14cnwnoDPUufjiYgSqRhiFD0Q1iI4Odora5RE8Iv1D24hAz5oMophRGkGz+yuvQmmUMnMw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint-import-resolver-node": {
      "version": "0.3.10",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.10.tgz",
      "integrity": "sha512-tRrKqFyCaKict5hOd244sL6EQFNycnMQnBe+j8uqGNXYzsImGbGUU4ibtoaBmv5FLwJwcFJNeg1GeVjQfbMrDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7",
        "is-core-module": "^2.16.1",
        "resolve": "^2.0.0-next.6"
      }
    },
    "node_modules/eslint-import-resolver-node/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-import-resolver-typescript": {
      "version": "3.10.1",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-typescript/-/eslint-import-resolver-typescript-3.10.1.tgz",
      "integrity": "sha512-A1rHYb06zjMGAxdLSkN2fXPBwuSaQ0iO5M/hdyS0Ajj1VBaRp0sPD3dn1FhME3c/JluGFbwSxyCfqdSbtQLAHQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@nolyfill/is-core-module": "1.0.39",
        "debug": "^4.4.0",
        "get-tsconfig": "^4.10.0",
        "is-bun-module": "^2.0.0",
        "stable-hash": "^0.0.5",
        "tinyglobby": "^0.2.13",
        "unrs-resolver": "^1.6.2"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint-import-resolver-typescript"
      },
      "peerDependencies": {
        "eslint": "*",
        "eslint-plugin-import": "*",
        "eslint-plugin-import-x": "*"
      },
      "peerDependenciesMeta": {
        "eslint-plugin-import": {
          "optional": true
        },
        "eslint-plugin-import-x": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils": {
      "version": "2.14.0",
      "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.14.0.tgz",
      "integrity": "sha512-W2WCRZ9Dqntd+2u8jJcVMV2PKulc6RdLgUUoh/yQr3uB6lo/ZOeGx11sv60/8S4QFFKNslAlWhr9u0Ef7ZW6Ig==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependenciesMeta": {
        "eslint": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import": {
      "version": "2.32.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.32.0.tgz",
      "integrity": "sha512-whOE1HFo/qJDyX4SnXzP4N6zOWn79WhnCUY/iDR0mPfQZO8wcYE4JClzI2oZrhBnnMUCBCHZhO6VQyoBU95mZA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rtsao/scc": "^1.1.0",
        "array-includes": "^3.1.9",
        "array.prototype.findlastindex": "^1.2.6",
        "array.prototype.flat": "^1.3.3",
        "array.prototype.flatmap": "^1.3.3",
        "debug": "^3.2.7",
        "doctrine": "^2.1.0",
        "eslint-import-resolver-node": "^0.3.9",
        "eslint-module-utils": "^2.12.1",
        "hasown": "^2.0.2",
        "is-core-module": "^2.16.1",
        "is-glob": "^4.0.3",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "object.groupby": "^1.0.3",
        "object.values": "^1.2.1",
        "semver": "^6.3.1",
        "string.prototype.trimend": "^1.0.9",
        "tsconfig-paths": "^3.15.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-jsx-a11y": {
      "version": "6.10.2",
      "resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.10.2.tgz",
      "integrity": "sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "aria-query": "^5.3.2",
        "array-includes": "^3.1.8",
        "array.prototype.flatmap": "^1.3.2",
        "ast-types-flow": "^0.0.8",
        "axe-core": "^4.10.0",
        "axobject-query": "^4.1.0",
        "damerau-levenshtein": "^1.0.8",
        "emoji-regex": "^9.2.2",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^3.3.5",
        "language-tags": "^1.0.9",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "safe-regex-test": "^1.0.3",
        "string.prototype.includes": "^2.0.1"
      },
      "engines": {
        "node": ">=4.0"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-react": {
      "version": "7.37.5",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react/-/eslint-plugin-react-7.37.5.tgz",
      "integrity": "sha512-Qteup0SqU15kdocexFNAJMvCJEfa2xUKNV4CC1xsVMrIIqEy3SQ/rqyxCWNzfrd3/ldy6HMlD2e0JDVpDg2qIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.8",
        "array.prototype.findlast": "^1.2.5",
        "array.prototype.flatmap": "^1.3.3",
        "array.prototype.tosorted": "^1.1.4",
        "doctrine": "^2.1.0",
        "es-iterator-helpers": "^1.2.1",
        "estraverse": "^5.3.0",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^2.4.1 || ^3.0.0",
        "minimatch": "^3.1.2",
        "object.entries": "^1.1.9",
        "object.fromentries": "^2.0.8",
        "object.values": "^1.2.1",
        "prop-types": "^15.8.1",
        "resolve": "^2.0.0-next.5",
        "semver": "^6.3.1",
        "string.prototype.matchall": "^4.0.12",
        "string.prototype.repeat": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7"
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-7.1.1.tgz",
      "integrity": "sha512-f2I7Gw6JbvCexzIInuSbZpfdQ44D7iqdWX01FKLvrPgqxoE7oMj8clOfto8U6vYiz4yd5oKu39rRSVOe1zRu0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.24.4",
        "@babel/parser": "^7.24.4",
        "hermes-parser": "^0.25.1",
        "zod": "^3.25.0 || ^4.0.0",
        "zod-validation-error": "^3.5.0 || ^4.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0 || ^10.0.0"
      }
    },
    "node_modules/eslint-scope": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.4.0.tgz",
      "integrity": "sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.1.tgz",
      "integrity": "sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint/node_modules/ajv": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.15.0.tgz",
      "integrity": "sha512-fgFx7Hfoq60ytK2c7DhnF8jIvzYgOMxfugjLOSMHjLIPgenqa7S7oaagATUq99mV6IYvN2tRmC0wnTYX6iPbMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/eslint/node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/esniff": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/esniff/-/esniff-2.0.1.tgz",
      "integrity": "sha512-kTUIGKQ/mDPFoJ0oVfcmyJn4iBDRptjNVIzwIFR7tqWXdVI9xfA2RMwY/gbSpJG3lkdWNEjLap/NqVHZiJsdfg==",
      "license": "ISC",
      "dependencies": {
        "d": "^1.0.1",
        "es5-ext": "^0.10.62",
        "event-emitter": "^0.3.5",
        "type": "^2.7.2"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/espree": {
      "version": "10.4.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-10.4.0.tgz",
      "integrity": "sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.15.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.7.0.tgz",
      "integrity": "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estree-util-is-identifier-name": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/estree-util-is-identifier-name/-/estree-util-is-identifier-name-3.0.0.tgz",
      "integrity": "sha512-hFtqIDZTIUZ9BXLb8y4pYGyk6+wekIivNVTcmvk8NoOh+VeRn5y6cEHzbURrWbfp1fIqdVipilzj+lfaadNZmg==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/estree-util-visit": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/estree-util-visit/-/estree-util-visit-2.0.0.tgz",
      "integrity": "sha512-m5KgiH85xAhhW8Wta0vShLcUvOsh3LLPI2YVwcbio1l7E09NTLL1EyMZFM1OyWowoH0skScNbhOPl4kcBgzTww==",
      "license": "MIT",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/event-emitter": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/event-emitter/-/event-emitter-0.3.5.tgz",
      "integrity": "sha512-D9rRn9y7kLPnJ+hMq7S/nhvoKwwvVJahBi2BPmx3bvbsEdK3W9ii8cBSGjP+72/LnM4n6fo3+dkCX5FeTQruXA==",
      "license": "MIT",
      "dependencies": {
        "d": "1",
        "es5-ext": "~0.10.14"
      }
    },
    "node_modules/eventemitter3": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.7.tgz",
      "integrity": "sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==",
      "license": "MIT"
    },
    "node_modules/exsolve": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/exsolve/-/exsolve-1.1.1.tgz",
      "integrity": "sha512-9U/jZUgjnSGyntRr6y5Muu1MJcwFl6kPu7k8qLF0IMNfLqvw0NZ4nnVDq0RVoZ0RvCyumib4Ez3KYrVfilrw+g==",
      "license": "MIT"
    },
    "node_modules/ext": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/ext/-/ext-1.7.0.tgz",
      "integrity": "sha512-6hxeJYaL110a9b5TEJSj0gojyHQAmA2ch5Os+ySCiA1QGdS697XWY1pzsrSjqA9LDEEgdB/KypIlR59RcLuHYw==",
      "license": "ISC",
      "dependencies": {
        "type": "^2.7.2"
      }
    },
    "node_modules/extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
      "license": "MIT"
    },
    "node_modules/fast-check": {
      "version": "3.23.2",
      "resolved": "https://registry.npmjs.org/fast-check/-/fast-check-3.23.2.tgz",
      "integrity": "sha512-h5+1OzzfCC3Ef7VbtKdcv7zsstUQwUDlYpUTvjeUsJAssPgLn7QzbboPtL5ro04Mq0rPOsMzl7q5hIbRs2wD1A==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/dubzzz"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fast-check"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "pure-rand": "^6.1.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/fast-equals": {
      "version": "5.4.1",
      "resolved": "https://registry.npmjs.org/fast-equals/-/fast-equals-5.4.1.tgz",
      "integrity": "sha512-DjlFSM5Pk9cGcL0q5QXl66eGzx0N6szNgaswwc5ZphlBohjTVJSnGgI+rJVOgOi65qUoQnDZN4nDqi33udtydQ==",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/fast-glob": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.1.tgz",
      "integrity": "sha512-kNFPyjhh5cKjrUltxs+wFx+ZkbRaxxmZ+X0ZU31SOsxCEtP9VPgtq2teZw1DebupL5GmDaNQ6yKMMVcM41iqDg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-uri": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/fast-uri/-/fast-uri-3.1.5.tgz",
      "integrity": "sha512-gHwA1O9LDIcKunMKhObS/HimwtehO1nPUECKAu5TpKgaO19fcWEl4bliWe1jWxVFvIXztJjjQ4L8XQ1EU9f7Jw==",
      "extraneous": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "BSD-3-Clause"
    },
    "node_modules/fastq": {
      "version": "1.20.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.20.1.tgz",
      "integrity": "sha512-GGToxJ/w1x32s/D2EKND7kTil4n8OVk/9mycTc4VDza13lOvpUZTGX3mFSCtV9ksdGBVzvsyAVLM6mHFThxXxw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fault": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/fault/-/fault-2.0.1.tgz",
      "integrity": "sha512-WtySTkS4OKev5JtpHXnib4Gxiurzh5NCGvWrFaZ34m6JehfTUhKZvn9njTfw48t6JumVQOmrKqpmGcdwxnhqBQ==",
      "license": "MIT",
      "dependencies": {
        "format": "^0.2.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.4.4",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.4.4.tgz",
      "integrity": "sha512-5+ybhBZANEJxaH3X5evAFatUxLfEHSr7n6kYJ+1Qd0mUqr4eu9gIf6GDbWHf8RJijHrjjO8G+la14SlL2SeS1Q==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/for-each": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.5.tgz",
      "integrity": "sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/format": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/format/-/format-0.2.2.tgz",
      "integrity": "sha512-wzsgA6WOq+09wrU1tsJ09udeR/YZRaeArL9e1wPbFg3GG2yDnC2ldKpxs4xunpFF9DgqCqOIra3bc1HWrJ37Ww==",
      "engines": {
        "node": ">=0.4.x"
      }
    },
    "node_modules/framer-motion": {
      "version": "12.43.0",
      "resolved": "https://registry.npmjs.org/framer-motion/-/framer-motion-12.43.0.tgz",
      "integrity": "sha512-1eaL3RvR/kAlbG7UYcpMptEyzPoENO0c6w7ZnB3/hh2vSAz/6uGAFn6fdoqTBguNstf3MsFhJHsD/0DHiclG+g==",
      "license": "MIT",
      "dependencies": {
        "motion-dom": "^12.43.0",
        "motion-utils": "^12.39.0",
        "tslib": "^2.4.0"
      },
      "peerDependencies": {
        "@emotion/is-prop-valid": "*",
        "react": "^18.0.0 || ^19.0.0",
        "react-dom": "^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/is-prop-valid": {
          "optional": true
        },
        "react": {
          "optional": true
        },
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function.prototype.name": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/function.prototype.name/-/function.prototype.name-1.2.0.tgz",
      "integrity": "sha512-jObKIik1P2QjPHP5nz5BaOtUlfgS0fWo8IUByNXkM+o+02sJOi94em77GwJKQSJ3gfPHdgzLNrHc1uokV4P/ew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2",
        "hasown": "^2.0.4",
        "is-callable": "^1.2.7",
        "is-document.all": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
      "integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/generator-function": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/generator-function/-/generator-function-2.0.1.tgz",
      "integrity": "sha512-SFdFmIJi+ybC0vjlHN0ZGVGHc3lgE0DxPAT0djjVg+kjOnSqclqmj0KQ7ykTOLP6YxoqOvuAODGdcHJn+43q3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-nonce": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-nonce/-/get-nonce-1.0.1.tgz",
      "integrity": "sha512-FJhYRoDaiatfEkUK8HKlicmu/3SGFD51q3itKDGoSTysQJBnfOcxU5GxnhE1E6soB76MbT0MBtnKJuXyAx+96Q==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.1.0.tgz",
      "integrity": "sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.14.3",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.14.3.tgz",
      "integrity": "sha512-++QEw4DIY7WGoukz+/+A/8dGYPT9l9yIadnmSgZ8Rjr3YVSVDipQSO9CdnJo9ePqFqUUqh+wk9uIaoiAwsiPkA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/giget": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/giget/-/giget-2.0.0.tgz",
      "integrity": "sha512-L5bGsVkxJbJgdnwyuheIunkGatUF/zssUoxxjACCseZYAVbaqdh9Tsmmlkl8vYan09H7sbvKt4pS8GqKLBrEzA==",
      "license": "MIT",
      "dependencies": {
        "citty": "^0.1.6",
        "consola": "^3.4.0",
        "defu": "^6.1.4",
        "node-fetch-native": "^1.6.6",
        "nypm": "^0.6.0",
        "pathe": "^2.0.3"
      },
      "bin": {
        "giget": "dist/cli.mjs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
      "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/globalthis/-/globalthis-1.0.4.tgz",
      "integrity": "sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.2.1",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/has-bigints": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.1.0.tgz",
      "integrity": "sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
      "integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.2.0.tgz",
      "integrity": "sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.4.tgz",
      "integrity": "sha512-T2UbfbBEF32wiepXIsMlTW9+dDYC6wMh/t/vYA4tuOMKqWz/n3vr1NFSxQiyP+zk2mXsoMA/i/7qV6LKut1t1A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/hast-util-parse-selector": {
      "version": "2.2.5",
      "resolved": "https://registry.npmjs.org/hast-util-parse-selector/-/hast-util-parse-selector-2.2.5.tgz",
      "integrity": "sha512-7j6mrk/qqkSehsM92wQjdIgWM2/BW61u/53G6xmC8i1OmEdKLHbk419QKQUjz6LglWsfqoiHmyMRkP1BGjecNQ==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-to-jsx-runtime": {
      "version": "2.3.6",
      "resolved": "https://registry.npmjs.org/hast-util-to-jsx-runtime/-/hast-util-to-jsx-runtime-2.3.6.tgz",
      "integrity": "sha512-zl6s8LwNyo1P9uw+XJGvZtdFF1GdAkOg8ujOw+4Pyb76874fLps4ueHXDhXWdk6YHQ6OgUtinliG7RsYvCbbBg==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "@types/hast": "^3.0.0",
        "@types/unist": "^3.0.0",
        "comma-separated-tokens": "^2.0.0",
        "devlop": "^1.0.0",
        "estree-util-is-identifier-name": "^3.0.0",
        "hast-util-whitespace": "^3.0.0",
        "mdast-util-mdx-expression": "^2.0.0",
        "mdast-util-mdx-jsx": "^3.0.0",
        "mdast-util-mdxjs-esm": "^2.0.0",
        "property-information": "^7.0.0",
        "space-separated-tokens": "^2.0.0",
        "style-to-js": "^1.0.0",
        "unist-util-position": "^5.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-whitespace": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/hast-util-whitespace/-/hast-util-whitespace-3.0.0.tgz",
      "integrity": "sha512-88JUN06ipLwsnv+dVn+OIYOvAuvBMy/Qoi6O7mQHxdPXpjy+Cd6xRkWwux7DKO+4sYILtLBRIKgsdpS2gQc7qw==",
      "license": "MIT",
      "dependencies": {
        "@types/hast": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hastscript": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/hastscript/-/hastscript-6.0.0.tgz",
      "integrity": "sha512-nDM6bvd7lIqDUiYEiu5Sl/+6ReP0BMk/2f4U/Rooccxkj0P5nm+acM5PrGJ/t5I8qPGiqZSE6hVAwZEdZIvP4w==",
      "license": "MIT",
      "dependencies": {
        "@types/hast": "^2.0.0",
        "comma-separated-tokens": "^1.0.0",
        "hast-util-parse-selector": "^2.0.0",
        "property-information": "^5.0.0",
        "space-separated-tokens": "^1.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hastscript/node_modules/@types/hast": {
      "version": "2.3.10",
      "resolved": "https://registry.npmjs.org/@types/hast/-/hast-2.3.10.tgz",
      "integrity": "sha512-McWspRw8xx8J9HurkVBfYj0xKoE25tOFlHGdx4MJ5xORQrMGZNqJhVQWaIbm6Oyla5kYOXtDiopzKRJzEOkwJw==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2"
      }
    },
    "node_modules/hastscript/node_modules/@types/unist": {
      "version": "2.0.11",
      "resolved": "https://registry.npmjs.org/@types/unist/-/unist-2.0.11.tgz",
      "integrity": "sha512-CmBKiL6NNo/OqgmMn95Fk9Whlp2mtvIv+KNpQKN2F4SjvrEesubTRWGYSg+BnWZOnlCaSTU1sMpsBOzgbYhnsA==",
      "license": "MIT"
    },
    "node_modules/hastscript/node_modules/comma-separated-tokens": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/comma-separated-tokens/-/comma-separated-tokens-1.0.8.tgz",
      "integrity": "sha512-GHuDRO12Sypu2cV70d1dkA2EUmXHgntrzbpvOB+Qy+49ypNfGgFQIC2fhhXbnyrJRynDCAARsT7Ou0M6hirpfw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/hastscript/node_modules/property-information": {
      "version": "5.6.0",
      "resolved": "https://registry.npmjs.org/property-information/-/property-information-5.6.0.tgz",
      "integrity": "sha512-YUHSPk+A30YPv+0Qf8i9Mbfe/C0hdPXk1s1jPVToV8pk8BQtpw10ct89Eo7OWkutrwqvT0eicAxlOg3dOAu8JA==",
      "license": "MIT",
      "dependencies": {
        "xtend": "^4.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/hastscript/node_modules/space-separated-tokens": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/space-separated-tokens/-/space-separated-tokens-1.1.5.tgz",
      "integrity": "sha512-q/JSVd1Lptzhf5bkYm4ob4iWPjx0KiRe3sRFBNrVqbJkFaBm5vbbowy1mymoPNLRa52+oadOhJ+K49wsSeSjTA==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/hermes-estree": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-estree/-/hermes-estree-0.25.1.tgz",
      "integrity": "sha512-0wUoCcLp+5Ev5pDW2OriHC2MJCbwLwuRx+gAqMTOkGKJJiBCLjtrvy4PWUGn6MIVefecRpzoOZ/UV6iGdOr+Cw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/hermes-parser": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-parser/-/hermes-parser-0.25.1.tgz",
      "integrity": "sha512-6pEjquH3rqaI6cYAXYPcz9MS4rY6R4ngRgrgfDshRptUZIc3lw0MCIJIGDj9++mfySOuPTHB4nrSW99BCvOPIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hermes-estree": "0.25.1"
      }
    },
    "node_modules/highlight.js": {
      "version": "10.7.3",
      "resolved": "https://registry.npmjs.org/highlight.js/-/highlight.js-10.7.3.tgz",
      "integrity": "sha512-tzcUFauisWKNHaRkN4Wjl/ZA07gENAjFl3J/c480dprkGTg5EQstgaNFqBfUqCq54kZRIEcreTsAgF/m2quD7A==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/highlightjs-vue": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/highlightjs-vue/-/highlightjs-vue-1.0.0.tgz",
      "integrity": "sha512-PDEfEF102G23vHmPhLyPboFCD+BkMGu+GuJe2d9/eH4FsCwvgBpnc9n0pGE+ffKdph38s6foEZiEjdgHdzp+IA==",
      "license": "CC0-1.0"
    },
    "node_modules/html-url-attributes": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/html-url-attributes/-/html-url-attributes-3.0.1.tgz",
      "integrity": "sha512-ol6UPyBWqsrO6EJySPz2O7ZSr856WDrEzM5zMqp+FJJLGMW35cLYmmZnl0vztAZxRUoNZJFTCohfjuIJ8I4QBQ==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/icu-minify": {
      "version": "4.13.7",
      "resolved": "https://registry.npmjs.org/icu-minify/-/icu-minify-4.13.7.tgz",
      "integrity": "sha512-X9gLFtipsP4HHbmy9urh+palImTR9P6lyhvmgbP6iym8i0IwhcsS4Z6KMjkEoCU6O16OJT5JIZkd8xfDROYo/A==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/amannn"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@formatjs/icu-messageformat-parser": "^3.4.0"
      }
    },
    "node_modules/ieee754": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
      "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "BSD-3-Clause"
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inline-style-parser": {
      "version": "0.2.7",
      "resolved": "https://registry.npmjs.org/inline-style-parser/-/inline-style-parser-0.2.7.tgz",
      "integrity": "sha512-Nb2ctOyNR8DqQoR0OwRG95uNWIC0C1lCgf5Naz5H6Ji72KZ8OcFZLz2P5sNgwlyoJ8Yif11oMuYs5pBQa86csA==",
      "license": "MIT"
    },
    "node_modules/input-otp": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/input-otp/-/input-otp-1.4.2.tgz",
      "integrity": "sha512-l3jWwYNvrEa6NTCt7BECfCm48GvwuZzkoeG3gBL2w4CHeOXW3eKFmf9UNYkNfYc3mxMrthMnxjIE07MT0zLBQA==",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0.0 || ^19.0.0-rc"
      }
    },
    "node_modules/internal-slot": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.1.0.tgz",
      "integrity": "sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "hasown": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/internmap": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/internmap/-/internmap-2.0.3.tgz",
      "integrity": "sha512-5Hh7Y1wQbvY5ooGgPbDaL5iYLAPzMTUrjMulskHLH6wnv/A+1q5rgEaiuqEjB+oxGXIVZs1FF+R/KPN3ZSQYYg==",
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/intersection-observer": {
      "version": "0.10.0",
      "resolved": "https://registry.npmjs.org/intersection-observer/-/intersection-observer-0.10.0.tgz",
      "integrity": "sha512-fn4bQ0Xq8FTej09YC/jqKZwtijpvARlRp6wxL5WTA6yPe2YWSJ5RJh7Nm79rK2qB0wr6iDQzH60XGq5V/7u8YQ==",
      "deprecated": "The Intersection Observer polyfill is no longer needed and can safely be removed. Intersection Observer has been Baseline since 2019.",
      "license": "W3C-20150513"
    },
    "node_modules/intl-messageformat": {
      "version": "11.2.14",
      "resolved": "https://registry.npmjs.org/intl-messageformat/-/intl-messageformat-11.2.14.tgz",
      "integrity": "sha512-9f2VD1HFuxUvMw0RxsaP8WmMns6JRTnsNB/zghTFrp11ZktiXWwVDeZBPQchBKEmo+Gx/ZhxI7Qht7YglFD4PA==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "@formatjs/fast-memoize": "3.1.7",
        "@formatjs/icu-messageformat-parser": "3.5.17"
      }
    },
    "node_modules/is-alphabetical": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-alphabetical/-/is-alphabetical-2.0.1.tgz",
      "integrity": "sha512-FWyyY60MeTNyeSRpkM2Iry0G9hpr7/9kD40mD/cGQEuilcZYS4okz8SN2Q6rLCJ8gbCt6fN+rC+6tMGS99LaxQ==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/is-alphanumerical": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-alphanumerical/-/is-alphanumerical-2.0.1.tgz",
      "integrity": "sha512-hmbYhX/9MUMF5uh7tOXyK/n0ZvWpad5caBA17GsC6vyuCqaWliRG5K1qS9inmUhEMaOBIW7/whAnSwveW/LtZw==",
      "license": "MIT",
      "dependencies": {
        "is-alphabetical": "^2.0.0",
        "is-decimal": "^2.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/is-array-buffer/-/is-array-buffer-3.0.5.tgz",
      "integrity": "sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-async-function": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-async-function/-/is-async-function-2.1.1.tgz",
      "integrity": "sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "async-function": "^1.0.0",
        "call-bound": "^1.0.3",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bigint": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.1.0.tgz",
      "integrity": "sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-bigints": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.2.2.tgz",
      "integrity": "sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bun-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-bun-module/-/is-bun-module-2.0.0.tgz",
      "integrity": "sha512-gNCGbnnnnFAUGKeZ9PdbyeGYJqewpmc2aKHUEMO5nQPWU9lOmv7jcmQIv+qHD8fXW6W7qfuCwX4rY9LNRjXrkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.7.1"
      }
    },
    "node_modules/is-bun-module/node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.7.tgz",
      "integrity": "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.16.2",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.2.tgz",
      "integrity": "sha512-evOr8xfXKxE6qSR0hSXL2r3sd7ALj8+7jQEUvPYcm5sgZFdJ+AYzT6yNmJenvIYQBgIGwfwz08sL8zoL7yq2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-view": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-data-view/-/is-data-view-1.0.2.tgz",
      "integrity": "sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.1.0.tgz",
      "integrity": "sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-decimal": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-decimal/-/is-decimal-2.0.1.tgz",
      "integrity": "sha512-AAB9hiomQs5DXWcRB1rqsxGUstbRroFOPPVAomNk/3XHR5JyEZChOyTWe2oayKnsSsr/kcGqF+z6yuH6HHpN0A==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/is-document.all": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-document.all/-/is-document.all-1.0.0.tgz",
      "integrity": "sha512-+XSoyS05OdBbhFuELhgTCpFNHkpBOJqtsZfUFFpe5QTw+9Sjbh8zitxhQkYAo6wV7e1Vb8cAPvpCk9jGam/82g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-finalizationregistry": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-finalizationregistry/-/is-finalizationregistry-1.1.1.tgz",
      "integrity": "sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-generator-function": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/is-generator-function/-/is-generator-function-1.1.2.tgz",
      "integrity": "sha512-upqt1SkGkODW9tsGNG5mtXTXtECizwtS2kA161M+gJPc1xdb/Ax629af6YrTwcOeQHbewrPNlE5Dx7kzvXTizA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4",
        "generator-function": "^2.0.0",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-hexadecimal": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-hexadecimal/-/is-hexadecimal-2.0.1.tgz",
      "integrity": "sha512-DgZQp241c8oO6cA1SbTEWiXeoxV42vlcJxgH+B3hi1AiqqKruZR3ZGF8In3fj4+/y/7rHvlOZLZtgJ/4ttYGZg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/is-map": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-map/-/is-map-2.0.3.tgz",
      "integrity": "sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.3.tgz",
      "integrity": "sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.1.1.tgz",
      "integrity": "sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-plain-obj": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-4.1.0.tgz",
      "integrity": "sha512-+Pgi+vMuUNkJyExiMBt5IlFoMyKnr5zhJ4Uspz58WOhBF5QoIZkFyNHIbBAtHwzVAgk5RtndVNsDRN61/mmDqg==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-regex": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.2.1.tgz",
      "integrity": "sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-set": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-set/-/is-set-2.0.3.tgz",
      "integrity": "sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.4.tgz",
      "integrity": "sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-string": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.1.1.tgz",
      "integrity": "sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.1.1.tgz",
      "integrity": "sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-symbols": "^1.1.0",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.15",
      "resolved": "https://registry.npmjs.org/is-typed-array/-/is-typed-array-1.1.15.tgz",
      "integrity": "sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakmap": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/is-weakmap/-/is-weakmap-2.0.2.tgz",
      "integrity": "sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.1.1.tgz",
      "integrity": "sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakset": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-weakset/-/is-weakset-2.0.4.tgz",
      "integrity": "sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/isarray": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.5.tgz",
      "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/isomorphic.js": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/isomorphic.js/-/isomorphic.js-0.2.5.tgz",
      "integrity": "sha512-PIeMbHqMt4DnUP3MA/Flc0HElYjMXArsw1qwJZcm9sqR8mq3l8NYizFMty0pWwE/tzIGH3EKK5+jes5mAr85yw==",
      "license": "MIT",
      "peer": true,
      "funding": {
        "type": "GitHub Sponsors ❤",
        "url": "https://github.com/sponsors/dmonad"
      }
    },
    "node_modules/iterator.prototype": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/iterator.prototype/-/iterator.prototype-1.1.5.tgz",
      "integrity": "sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "get-proto": "^1.0.0",
        "has-symbols": "^1.1.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.7.0.tgz",
      "integrity": "sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==",
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/jose": {
      "version": "4.15.9",
      "resolved": "https://registry.npmjs.org/jose/-/jose-4.15.9.tgz",
      "integrity": "sha512-1vUQX+IdDMVPj4k8kOxgUqlcK518yluMuGZwqlr44FS1ppZB/5GWh4rZG89erpOBOJjU/OBsnCVFfapsRz6nEA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/panva"
      }
    },
    "node_modules/js-cookie": {
      "version": "3.0.8",
      "resolved": "https://registry.npmjs.org/js-cookie/-/js-cookie-3.0.8.tgz",
      "integrity": "sha512-yeJd4aNAdYZQjaon2bpD/Gb0B/omw7HQOsynXXcOiWVCacbBcPlgn8S/d1X6blFSaHao7ozqtW7NZW19xpCtIw==",
      "license": "MIT"
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
      "integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
      "extraneous": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsx-ast-utils": {
      "version": "3.3.5",
      "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-3.3.5.tgz",
      "integrity": "sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.6",
        "array.prototype.flat": "^1.3.1",
        "object.assign": "^4.1.4",
        "object.values": "^1.1.6"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/kleur": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/kleur/-/kleur-4.1.5.tgz",
      "integrity": "sha512-o+NO+8WrRiQEE4/7nwRJhN1HWpVmJm511pBHUxPLtp0BUISzlBplORYSmTclCnJvQq2tKu/sgl3xVpkc7ZWuQQ==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/language-subtag-registry": {
      "version": "0.3.23",
      "resolved": "https://registry.npmjs.org/language-subtag-registry/-/language-subtag-registry-0.3.23.tgz",
      "integrity": "sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==",
      "dev": true,
      "license": "CC0-1.0"
    },
    "node_modules/language-tags": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/language-tags/-/language-tags-1.0.9.tgz",
      "integrity": "sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "language-subtag-registry": "^0.3.20"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lexical": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/lexical/-/lexical-0.35.0.tgz",
      "integrity": "sha512-3VuV8xXhh5xJA6tzvfDvE0YBCMkIZUmxtRilJQDDdCgJCc+eut6qAv2qbN+pbqvarqcQqPN1UF+8YvsjmyOZpw==",
      "license": "MIT"
    },
    "node_modules/lib0": {
      "version": "0.2.117",
      "resolved": "https://registry.npmjs.org/lib0/-/lib0-0.2.117.tgz",
      "integrity": "sha512-DeXj9X5xDCjgKLU/7RR+/HQEVzuuEUiwldwOGsHK/sfAfELGWEyTcf0x+uOvCvK3O2zPmZePXWL85vtia6GyZw==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "isomorphic.js": "^0.2.4"
      },
      "bin": {
        "0ecdsa-generate-keypair": "bin/0ecdsa-generate-keypair.js",
        "0gentesthtml": "bin/gentesthtml.js",
        "0serve": "bin/0serve.js"
      },
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "type": "GitHub Sponsors ❤",
        "url": "https://github.com/sponsors/dmonad"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.32.0",
        "lightningcss-darwin-arm64": "1.32.0",
        "lightningcss-darwin-x64": "1.32.0",
        "lightningcss-freebsd-x64": "1.32.0",
        "lightningcss-linux-arm-gnueabihf": "1.32.0",
        "lightningcss-linux-arm64-gnu": "1.32.0",
        "lightningcss-linux-arm64-musl": "1.32.0",
        "lightningcss-linux-x64-gnu": "1.32.0",
        "lightningcss-linux-x64-musl": "1.32.0",
        "lightningcss-win32-arm64-msvc": "1.32.0",
        "lightningcss-win32-x64-msvc": "1.32.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash": {
      "version": "4.18.1",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.18.1.tgz",
      "integrity": "sha512-dMInicTPVE8d1e5otfwmmjlxkZoUpiVLwyeTdUsi/Caj/gfzzblBcCE5sRHV/AsjuCmxWrte2TNGSYuCeCq+0Q==",
      "license": "MIT"
    },
    "node_modules/lodash-es": {
      "version": "4.18.1",
      "resolved": "https://registry.npmjs.org/lodash-es/-/lodash-es-4.18.1.tgz",
      "integrity": "sha512-J8xewKD/Gk22OZbhpOVSwcs60zhd95ESDwezOFuA3/099925PdHJ7OFHNTGtajL3AlZkykD32HykiMo+BIBI8A==",
      "license": "MIT"
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/longest-streak": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/longest-streak/-/longest-streak-3.1.0.tgz",
      "integrity": "sha512-9Ri+o0JYgehTaVBBDoMqIl8GXtbWg711O3srftcHhZ0dqnETqLaoIK0x17fUw9rFSlK/0NlsKe0Ahhyl5pXE2g==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lowlight": {
      "version": "1.20.0",
      "resolved": "https://registry.npmjs.org/lowlight/-/lowlight-1.20.0.tgz",
      "integrity": "sha512-8Ktj+prEb1RoCPkEOrPMYUN/nCggB7qAWe3a7OpMjWQkh3l2RD5wKRQ+o8Q8YuI9RG/xs95waaI/E6ym/7NsTw==",
      "license": "MIT",
      "dependencies": {
        "fault": "^1.0.0",
        "highlight.js": "~10.7.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/lowlight/node_modules/fault": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/fault/-/fault-1.0.4.tgz",
      "integrity": "sha512-CJ0HCB5tL5fYTEA7ToAq5+kTwd++Borf1/bifxd9iT70QcXr4MRrO3Llf8Ifs70q+SJcGHFtnIE/Nw6giCtECA==",
      "license": "MIT",
      "dependencies": {
        "format": "^0.2.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/lucide-react": {
      "version": "0.525.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.525.0.tgz",
      "integrity": "sha512-Tm1txJ2OkymCGkvwoHt33Y2JpN5xucVq1slHcgE6Lk0WjDfjgKWor5CdVER8U6DvcfMwh4M8XxmpTiyzfmfDYQ==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/lz-string": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/lz-string/-/lz-string-1.5.0.tgz",
      "integrity": "sha512-h5bgJWpxJNswbU7qCrV0tIKQCaS3blPDrqKWx+QxzuzL1zGUzij9XCWLrSLsJPu5t+eWA/ycetzYAO5IOMcWAQ==",
      "license": "MIT",
      "bin": {
        "lz-string": "bin/bin.js"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/markdown-table": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/markdown-table/-/markdown-table-3.0.4.tgz",
      "integrity": "sha512-wiYz4+JrLyb/DqW2hkFJxP7Vd7JuTDm77fvbM8VfEQdmSMqcImWeeRbHwZjBjIFki/VaMK2BhFi7oUUZeM5bqw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/mdast-util-directive": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/mdast-util-directive/-/mdast-util-directive-3.1.0.tgz",
      "integrity": "sha512-I3fNFt+DHmpWCYAT7quoM6lHf9wuqtI+oCOfvILnoicNIqjh5E3dEJWiXuYME2gNe8vl1iMQwyUHa7bgFmak6Q==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "@types/unist": "^3.0.0",
        "ccount": "^2.0.0",
        "devlop": "^1.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0",
        "parse-entities": "^4.0.0",
        "stringify-entities": "^4.0.0",
        "unist-util-visit-parents": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-from-markdown": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/mdast-util-from-markdown/-/mdast-util-from-markdown-2.0.3.tgz",
      "integrity": "sha512-W4mAWTvSlKvf8L6J+VN9yLSqQ9AOAAvHuoDAmPkz4dHf553m5gVj2ejadHJhoJmcmxEnOv6Pa8XJhpxE93kb8Q==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "@types/unist": "^3.0.0",
        "decode-named-character-reference": "^1.0.0",
        "devlop": "^1.0.0",
        "mdast-util-to-string": "^4.0.0",
        "micromark": "^4.0.0",
        "micromark-util-decode-numeric-character-reference": "^2.0.0",
        "micromark-util-decode-string": "^2.0.0",
        "micromark-util-normalize-identifier": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "unist-util-stringify-position": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-frontmatter": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/mdast-util-frontmatter/-/mdast-util-frontmatter-2.0.1.tgz",
      "integrity": "sha512-LRqI9+wdgC25P0URIJY9vwocIzCcksduHQ9OF2joxQoyTNVduwLAFUzjoopuRJbJAReaKrNQKAZKL3uCMugWJA==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "devlop": "^1.0.0",
        "escape-string-regexp": "^5.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0",
        "micromark-extension-frontmatter": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-frontmatter/node_modules/escape-string-regexp": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-5.0.0.tgz",
      "integrity": "sha512-/veY75JbMK4j1yjvuUxuVsiS/hr/4iHs9FTT6cgTexxdE0Ly/glccBAkloH/DofkjRbZU3bnoj38mOmhkZ0lHw==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mdast-util-gfm-strikethrough": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-gfm-strikethrough/-/mdast-util-gfm-strikethrough-2.0.0.tgz",
      "integrity": "sha512-mKKb915TF+OC5ptj5bJ7WFRPdYtuHv0yTRxK2tJvi+BDqbkiG7h7u/9SI89nRAYcmap2xHQL9D+QG/6wSrTtXg==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-gfm-table": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-gfm-table/-/mdast-util-gfm-table-2.0.0.tgz",
      "integrity": "sha512-78UEvebzz/rJIxLvE7ZtDd/vIQ0RHv+3Mh5DR96p7cS7HsBhYIICDBCu8csTNWNO6tBWfqXPWekRuj2FNOGOZg==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "devlop": "^1.0.0",
        "markdown-table": "^3.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-gfm-task-list-item": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-gfm-task-list-item/-/mdast-util-gfm-task-list-item-2.0.0.tgz",
      "integrity": "sha512-IrtvNvjxC1o06taBAVJznEnkiHxLFTzgonUdy8hzFVeDun0uTjxxrRGVaNFqkU1wJR3RBPEfsxmU6jDWPofrTQ==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "devlop": "^1.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-highlight-mark": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/mdast-util-highlight-mark/-/mdast-util-highlight-mark-1.2.2.tgz",
      "integrity": "sha512-OYumVoytj+B9YgwzBhBcYUCLYHIPvJtAvwnMyKhUXbfUFuER5S+FDZyu9fadUxm2TCT5fRYK3jQXh2ioWAxrMw==",
      "license": "MIT",
      "dependencies": {
        "micromark-extension-highlight-mark": "1.2.0"
      }
    },
    "node_modules/mdast-util-mdx": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-mdx/-/mdast-util-mdx-3.0.0.tgz",
      "integrity": "sha512-JfbYLAW7XnYTTbUsmpu0kdBUVe+yKVJZBItEjwyYJiDJuZ9w4eeaqks4HQO+R7objWgS2ymV60GYpI14Ug554w==",
      "license": "MIT",
      "dependencies": {
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-mdx-expression": "^2.0.0",
        "mdast-util-mdx-jsx": "^3.0.0",
        "mdast-util-mdxjs-esm": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-mdx-expression": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/mdast-util-mdx-expression/-/mdast-util-mdx-expression-2.0.1.tgz",
      "integrity": "sha512-J6f+9hUp+ldTZqKRSg7Vw5V6MqjATc+3E4gf3CFNcuZNWD8XdyI6zQ8GqH7f8169MM6P7hMBRDVGnn7oHB9kXQ==",
      "license": "MIT",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "devlop": "^1.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-mdx-jsx": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/mdast-util-mdx-jsx/-/mdast-util-mdx-jsx-3.2.0.tgz",
      "integrity": "sha512-lj/z8v0r6ZtsN/cGNNtemmmfoLAFZnjMbNyLzBafjzikOM+glrjNHPlf6lQDOTccj9n5b0PPihEBbhneMyGs1Q==",
      "license": "MIT",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "@types/unist": "^3.0.0",
        "ccount": "^2.0.0",
        "devlop": "^1.1.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0",
        "parse-entities": "^4.0.0",
        "stringify-entities": "^4.0.0",
        "unist-util-stringify-position": "^4.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-mdxjs-esm": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/mdast-util-mdxjs-esm/-/mdast-util-mdxjs-esm-2.0.1.tgz",
      "integrity": "sha512-EcmOpxsZ96CvlP03NghtH1EsLtr0n9Tm4lPUJUBccV9RwUOneqSycg19n5HGzCf+10LozMRSObtVr3ee1WoHtg==",
      "license": "MIT",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "devlop": "^1.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-phrasing": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/mdast-util-phrasing/-/mdast-util-phrasing-4.1.0.tgz",
      "integrity": "sha512-TqICwyvJJpBwvGAMZjj4J2n0X8QWp21b9l0o7eXyVJ25YNWYbJDVIyD1bZXE6WtV6RmKJVYmQAKWa0zWOABz2w==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "unist-util-is": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-to-hast": {
      "version": "13.2.1",
      "resolved": "https://registry.npmjs.org/mdast-util-to-hast/-/mdast-util-to-hast-13.2.1.tgz",
      "integrity": "sha512-cctsq2wp5vTsLIcaymblUriiTcZd0CwWtCbLvrOzYCDZoWyMNV8sZ7krj09FSnsiJi3WVsHLM4k6Dq/yaPyCXA==",
      "license": "MIT",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "@ungap/structured-clone": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-util-sanitize-uri": "^2.0.0",
        "trim-lines": "^3.0.0",
        "unist-util-position": "^5.0.0",
        "unist-util-visit": "^5.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-to-markdown": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/mdast-util-to-markdown/-/mdast-util-to-markdown-2.1.2.tgz",
      "integrity": "sha512-xj68wMTvGXVOKonmog6LwyJKrYXZPvlwabaryTjLh9LuvovB/KAH+kvi8Gjj+7rJjsFi23nkUxRQv1KqSroMqA==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "@types/unist": "^3.0.0",
        "longest-streak": "^3.0.0",
        "mdast-util-phrasing": "^4.0.0",
        "mdast-util-to-string": "^4.0.0",
        "micromark-util-classify-character": "^2.0.0",
        "micromark-util-decode-string": "^2.0.0",
        "unist-util-visit": "^5.0.0",
        "zwitch": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-to-string": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-to-string/-/mdast-util-to-string-4.0.0.tgz",
      "integrity": "sha512-0H44vDimn51F0YwvxSJSm0eCDOJTRlmN0R1yBh4HLj9wiV1Dn0QoXGbvFAWj2hSItVTlCmBF1hqKlIyUBVFLPg==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromark": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/micromark/-/micromark-4.0.2.tgz",
      "integrity": "sha512-zpe98Q6kvavpCr1NPVSCMebCKfD7CA2NqZ+rykeNhONIJBpc1tFKt9hucLGwha3jNTNI8lHpctWJWoimVF4PfA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@types/debug": "^4.0.0",
        "debug": "^4.0.0",
        "decode-named-character-reference": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-core-commonmark": "^2.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-combine-extensions": "^2.0.0",
        "micromark-util-decode-numeric-character-reference": "^2.0.0",
        "micromark-util-encode": "^2.0.0",
        "micromark-util-normalize-identifier": "^2.0.0",
        "micromark-util-resolve-all": "^2.0.0",
        "micromark-util-sanitize-uri": "^2.0.0",
        "micromark-util-subtokenize": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-core-commonmark": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/micromark-core-commonmark/-/micromark-core-commonmark-2.0.3.tgz",
      "integrity": "sha512-RDBrHEMSxVFLg6xvnXmb1Ayr2WzLAWjeSATAoxwKYJV94TeNavgoIdA0a9ytzDSVzBy2YKFK+emCPOEibLeCrg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "decode-named-character-reference": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-factory-destination": "^2.0.0",
        "micromark-factory-label": "^2.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-factory-title": "^2.0.0",
        "micromark-factory-whitespace": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-classify-character": "^2.0.0",
        "micromark-util-html-tag-name": "^2.0.0",
        "micromark-util-normalize-identifier": "^2.0.0",
        "micromark-util-resolve-all": "^2.0.0",
        "micromark-util-subtokenize": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-extension-directive": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/micromark-extension-directive/-/micromark-extension-directive-3.0.2.tgz",
      "integrity": "sha512-wjcXHgk+PPdmvR58Le9d7zQYWy+vKEU9Se44p2CrCDPiLr2FMyiT4Fyb5UFKFC66wGB3kPlgD7q3TnoqPS7SZA==",
      "license": "MIT",
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-factory-whitespace": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "parse-entities": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-frontmatter": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-frontmatter/-/micromark-extension-frontmatter-2.0.0.tgz",
      "integrity": "sha512-C4AkuM3dA58cgZha7zVnuVxBhDsbttIMiytjgsM2XbHAB2faRVaHRle40558FBN+DJcrLNCoqG5mlrpdU4cRtg==",
      "license": "MIT",
      "dependencies": {
        "fault": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-gfm-strikethrough": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-gfm-strikethrough/-/micromark-extension-gfm-strikethrough-2.1.0.tgz",
      "integrity": "sha512-ADVjpOOkjz1hhkZLlBiYA9cR2Anf8F4HqZUO6e5eDcPQd0Txw5fxLzzxnEkSkfnD0wziSGiv7sYhk/ktvbf1uw==",
      "license": "MIT",
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-classify-character": "^2.0.0",
        "micromark-util-resolve-all": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-gfm-table": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/micromark-extension-gfm-table/-/micromark-extension-gfm-table-2.1.1.tgz",
      "integrity": "sha512-t2OU/dXXioARrC6yWfJ4hqB7rct14e8f7m0cbI5hUmDyyIlwv5vEtooptH8INkbLzOatzKuVbQmAYcbWoyz6Dg==",
      "license": "MIT",
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-gfm-task-list-item": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-gfm-task-list-item/-/micromark-extension-gfm-task-list-item-2.1.0.tgz",
      "integrity": "sha512-qIBZhqxqI6fjLDYFTBIa4eivDMnP+OZqsNwmQ3xNLE4Cxwc+zfQEfbs6tzAo2Hjq+bh6q5F+Z8/cksrLFYWQQw==",
      "license": "MIT",
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-highlight-mark": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-highlight-mark/-/micromark-extension-highlight-mark-1.2.0.tgz",
      "integrity": "sha512-huGtbd/9kQsMk8u7nrVMaS5qH/47yDG6ZADggo5Owz5JoY8wdfQjfuy118/QiYNCvdFuFDbzT0A7K7Hp2cBsXA==",
      "license": "MIT",
      "dependencies": {
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-classify-character": "^2.0.0",
        "micromark-util-resolve-all": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "uvu": "^0.5.6"
      }
    },
    "node_modules/micromark-extension-mdx-expression": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/micromark-extension-mdx-expression/-/micromark-extension-mdx-expression-3.0.1.tgz",
      "integrity": "sha512-dD/ADLJ1AeMvSAKBwO22zG22N4ybhe7kFIZ3LsDI0GlsNr2A3KYxb0LdC1u5rj4Nw+CHKY0RVdnHX8vj8ejm4Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-factory-mdx-expression": "^2.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-events-to-acorn": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-extension-mdx-jsx": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/micromark-extension-mdx-jsx/-/micromark-extension-mdx-jsx-3.0.2.tgz",
      "integrity": "sha512-e5+q1DjMh62LZAJOnDraSSbDMvGJ8x3cbjygy2qFEi7HCeUT4BDKCvMozPozcD6WmOt6sVvYDNBKhFSz3kjOVQ==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "devlop": "^1.0.0",
        "estree-util-is-identifier-name": "^3.0.0",
        "micromark-factory-mdx-expression": "^2.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-events-to-acorn": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-mdx-md": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-mdx-md/-/micromark-extension-mdx-md-2.0.0.tgz",
      "integrity": "sha512-EpAiszsB3blw4Rpba7xTOUptcFeBFi+6PY8VnJ2hhimH+vCQDirWgsMpz7w1XcZE7LVrSAUGb9VJpG9ghlYvYQ==",
      "license": "MIT",
      "dependencies": {
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-mdxjs": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-mdxjs/-/micromark-extension-mdxjs-3.0.0.tgz",
      "integrity": "sha512-A873fJfhnJ2siZyUrJ31l34Uqwy4xIFmvPY1oj+Ean5PHcPBYzEsvqvWGaWcfEIr11O5Dlw3p2y0tZWpKHDejQ==",
      "license": "MIT",
      "dependencies": {
        "acorn": "^8.0.0",
        "acorn-jsx": "^5.0.0",
        "micromark-extension-mdx-expression": "^3.0.0",
        "micromark-extension-mdx-jsx": "^3.0.0",
        "micromark-extension-mdx-md": "^2.0.0",
        "micromark-extension-mdxjs-esm": "^3.0.0",
        "micromark-util-combine-extensions": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-mdxjs-esm": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-mdxjs-esm/-/micromark-extension-mdxjs-esm-3.0.0.tgz",
      "integrity": "sha512-DJFl4ZqkErRpq/dAPyeWp15tGrcrrJho1hKK5uBS70BCtfrIFg81sqcTVu3Ta+KD1Tk5vAtBNElWxtAa+m8K9A==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-core-commonmark": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-events-to-acorn": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "unist-util-position-from-estree": "^2.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-factory-destination": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-destination/-/micromark-factory-destination-2.0.1.tgz",
      "integrity": "sha512-Xe6rDdJlkmbFRExpTOmRj9N3MaWmbAgdpSrBQvCFqhezUn4AHqJHbaEnfbVYYiexVSs//tqOdY/DxhjdCiJnIA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-label": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-label/-/micromark-factory-label-2.0.1.tgz",
      "integrity": "sha512-VFMekyQExqIW7xIChcXn4ok29YE3rnuyveW3wZQWWqF4Nv9Wk5rgJ99KzPvHjkmPXF93FXIbBp6YdW3t71/7Vg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-mdx-expression": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/micromark-factory-mdx-expression/-/micromark-factory-mdx-expression-2.0.3.tgz",
      "integrity": "sha512-kQnEtA3vzucU2BkrIa8/VaSAsP+EJ3CKOvhMuJgOEGg9KDC6OAY6nSnNDVRiVNRqj7Y4SlSzcStaH/5jge8JdQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-events-to-acorn": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "unist-util-position-from-estree": "^2.0.0",
        "vfile-message": "^4.0.0"
      }
    },
    "node_modules/micromark-factory-space": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-space/-/micromark-factory-space-2.0.1.tgz",
      "integrity": "sha512-zRkxjtBxxLd2Sc0d+fbnEunsTj46SWXgXciZmHq0kDYGnck/ZSGj9/wULTV95uoeYiK5hRXP2mJ98Uo4cq/LQg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-title": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-title/-/micromark-factory-title-2.0.1.tgz",
      "integrity": "sha512-5bZ+3CjhAd9eChYTHsjy6TGxpOFSKgKKJPJxr293jTbfry2KDoWkhBb6TcPVB4NmzaPhMs1Frm9AZH7OD4Cjzw==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-whitespace": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-whitespace/-/micromark-factory-whitespace-2.0.1.tgz",
      "integrity": "sha512-Ob0nuZ3PKt/n0hORHyvoD9uZhr+Za8sFoP+OnMcnWK5lngSzALgQYKMr9RJVOWLqQYuyn6ulqGWSXdwf6F80lQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-character": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/micromark-util-character/-/micromark-util-character-2.1.1.tgz",
      "integrity": "sha512-wv8tdUTJ3thSFFFJKtpYKOYiGP2+v96Hvk4Tu8KpCAsTMs6yi+nVmGh1syvSCsaxz45J6Jbw+9DD6g97+NV67Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-chunked": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-chunked/-/micromark-util-chunked-2.0.1.tgz",
      "integrity": "sha512-QUNFEOPELfmvv+4xiNg2sRYeS/P84pTW0TCgP5zc9FpXetHY0ab7SxKyAQCNCc1eK0459uoLI1y5oO5Vc1dbhA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-classify-character": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-classify-character/-/micromark-util-classify-character-2.0.1.tgz",
      "integrity": "sha512-K0kHzM6afW/MbeWYWLjoHQv1sgg2Q9EccHEDzSkxiP/EaagNzCm7T/WMKZ3rjMbvIpvBiZgwR3dKMygtA4mG1Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-combine-extensions": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-combine-extensions/-/micromark-util-combine-extensions-2.0.1.tgz",
      "integrity": "sha512-OnAnH8Ujmy59JcyZw8JSbK9cGpdVY44NKgSM7E9Eh7DiLS2E9RNQf0dONaGDzEG9yjEl5hcqeIsj4hfRkLH/Bg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-decode-numeric-character-reference": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/micromark-util-decode-numeric-character-reference/-/micromark-util-decode-numeric-character-reference-2.0.2.tgz",
      "integrity": "sha512-ccUbYk6CwVdkmCQMyr64dXz42EfHGkPQlBj5p7YVGzq8I7CtjXZJrubAYezf7Rp+bjPseiROqe7G6foFd+lEuw==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-decode-string": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-decode-string/-/micromark-util-decode-string-2.0.1.tgz",
      "integrity": "sha512-nDV/77Fj6eH1ynwscYTOsbK7rR//Uj0bZXBwJZRfaLEJ1iGBR6kIfNmlNqaqJf649EP0F3NWNdeJi03elllNUQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "decode-named-character-reference": "^1.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-decode-numeric-character-reference": "^2.0.0",
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-encode": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-encode/-/micromark-util-encode-2.0.1.tgz",
      "integrity": "sha512-c3cVx2y4KqUnwopcO9b/SCdo2O67LwJJ/UyqGfbigahfegL9myoEFoDYZgkT7f36T0bLrM9hZTAaAyH+PCAXjw==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT"
    },
    "node_modules/micromark-util-events-to-acorn": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/micromark-util-events-to-acorn/-/micromark-util-events-to-acorn-2.0.3.tgz",
      "integrity": "sha512-jmsiEIiZ1n7X1Rr5k8wVExBQCg5jy4UXVADItHmNk1zkwEVhBuIUKRu3fqv+hs4nxLISi2DQGlqIOGiFxgbfHg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "@types/unist": "^3.0.0",
        "devlop": "^1.0.0",
        "estree-util-visit": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "vfile-message": "^4.0.0"
      }
    },
    "node_modules/micromark-util-html-tag-name": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-html-tag-name/-/micromark-util-html-tag-name-2.0.1.tgz",
      "integrity": "sha512-2cNEiYDhCWKI+Gs9T0Tiysk136SnR13hhO8yW6BGNyhOC4qYFnwF1nKfD3HFAIXA5c45RrIG1ub11GiXeYd1xA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT"
    },
    "node_modules/micromark-util-normalize-identifier": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-normalize-identifier/-/micromark-util-normalize-identifier-2.0.1.tgz",
      "integrity": "sha512-sxPqmo70LyARJs0w2UclACPUUEqltCkJ6PhKdMIDuJ3gSf/Q+/GIe3WKl0Ijb/GyH9lOpUkRAO2wp0GVkLvS9Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-resolve-all": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-resolve-all/-/micromark-util-resolve-all-2.0.1.tgz",
      "integrity": "sha512-VdQyxFWFT2/FGJgwQnJYbe1jjQoNTS4RjglmSjTUlpUMa95Htx9NHeYW4rGDJzbjvCsl9eLjMQwGeElsqmzcHg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-sanitize-uri": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-sanitize-uri/-/micromark-util-sanitize-uri-2.0.1.tgz",
      "integrity": "sha512-9N9IomZ/YuGGZZmQec1MbgxtlgougxTodVwDzzEouPKo3qFWvymFHWcnDi2vzV1ff6kas9ucW+o3yzJK9YB1AQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-encode": "^2.0.0",
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-subtokenize": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/micromark-util-subtokenize/-/micromark-util-subtokenize-2.1.0.tgz",
      "integrity": "sha512-XQLu552iSctvnEcgXw6+Sx75GflAPNED1qx7eBJ+wydBb2KCbRZe+NwvIEEMM83uml1+2WSXpBAcp9IUCgCYWA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-symbol": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-symbol/-/micromark-util-symbol-2.0.1.tgz",
      "integrity": "sha512-vs5t8Apaud9N28kgCrRUdEed4UJ+wWNvicHLPxCa9ENlYuAY31M0ETy5y1vA33YoNPDFTghEbnh6efaE8h4x0Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT"
    },
    "node_modules/micromark-util-types": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/micromark-util-types/-/micromark-util-types-2.0.2.tgz",
      "integrity": "sha512-Yw0ECSpJoViF1qTU4DC6NwtC4aWGt1EkzaQB8KPPyCRR8z9TWeV0HbEFGTO+ZY1wB22zmxnJqhPyTpOVCpeHTA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT"
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.5.tgz",
      "integrity": "sha512-VgjWUsnnT6n+NUk6eZq77zeFdpW2LWDzP6zFGrCbHXiYNul5Dzqk2HHQ5uFH2DNW5Xbp8+jVzaeNt94ssEEl4w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/motion-dom": {
      "version": "12.43.0",
      "resolved": "https://registry.npmjs.org/motion-dom/-/motion-dom-12.43.0.tgz",
      "integrity": "sha512-azKON4d9S65PEoFUiQTMTgPheEmzf2QngdRc50AKfJp9Q9mmcBVw22c8eMq9k8kxOFHdL7+WZY7N/5F/lwiDag==",
      "license": "MIT",
      "dependencies": {
        "motion-utils": "^12.39.0"
      }
    },
    "node_modules/motion-utils": {
      "version": "12.39.0",
      "resolved": "https://registry.npmjs.org/motion-utils/-/motion-utils-12.39.0.tgz",
      "integrity": "sha512-8nadJAJjTtqRkmRF36FoJTrywK9nnFmnPwnSMyxaOCU7GDjN9RTMJIxx9De8ErM+vpPhMccr/6fo5WciyQLnMQ==",
      "license": "MIT"
    },
    "node_modules/mri": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/mri/-/mri-1.2.0.tgz",
      "integrity": "sha512-tzzskb3bG8LvYGFF/mDTpq3jpI6Q9wc3LEmBaghu+DdCssd1FakN7Bc0hVNmEyGq1bq3RgfkCb3cmQLpNPOroA==",
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.18",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.18.tgz",
      "integrity": "sha512-DTg4MJbGMWkfi6VZFdNt2/caMbQy4Ou+Op/hJQvGEWcnVfoA1QA+xzRKAzw9jD6+GVOOeYr/mIcuDSdug6F6+w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/napi-postinstall": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/napi-postinstall/-/napi-postinstall-0.3.4.tgz",
      "integrity": "sha512-PHI5f1O0EP5xJ9gQmFGMS6IZcrVvTjpXjz7Na41gTE7eE2hK11lg04CECCYEEjdc17EV4DO+fkGEtt7TpTaTiQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "napi-postinstall": "lib/cli.js"
      },
      "engines": {
        "node": "^12.20.0 || ^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/napi-postinstall"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/negotiator": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
      "integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/next": {
      "version": "16.3.1",
      "resolved": "https://registry.npmjs.org/next/-/next-16.3.1.tgz",
      "integrity": "sha512-hsAp0i7Rh+/dhe7DGIeN2YlpLM1DP4MNxti9EtDMtqcO612X81MvvEj388/oTce9U1EcEIOWDlGq0zRwrBKvuA==",
      "license": "MIT",
      "dependencies": {
        "@next/env": "16.3.1",
        "@swc/helpers": "0.5.23",
        "baseline-browser-mapping": "^2.9.19",
        "caniuse-lite": "^1.0.30001579",
        "postcss": "8.5.23",
        "styled-jsx": "5.1.6"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "16.3.1",
        "@next/swc-darwin-x64": "16.3.1",
        "@next/swc-linux-arm64-gnu": "16.3.1",
        "@next/swc-linux-arm64-musl": "16.3.1",
        "@next/swc-linux-x64-gnu": "16.3.1",
        "@next/swc-linux-x64-musl": "16.3.1",
        "@next/swc-win32-arm64-msvc": "16.3.1",
        "@next/swc-win32-x64-msvc": "16.3.1",
        "sharp": "^0.35.3"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.51.1",
        "babel-plugin-react-compiler": "*",
        "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/next-auth": {
      "version": "4.24.15",
      "resolved": "https://registry.npmjs.org/next-auth/-/next-auth-4.24.15.tgz",
      "integrity": "sha512-NnjYtjrSOAx/TIVFGTX4IfI/9yHnNpi4B7FuLUwuV20v2Zxgr2OGP/YN0ynJuI7y8QOnTBPitfOdEXZrVvhIuA==",
      "license": "ISC",
      "dependencies": {
        "@babel/runtime": "^7.20.13",
        "@panva/hkdf": "^1.0.2",
        "cookie": "^0.7.0",
        "jose": "^4.15.5",
        "oauth": "^0.9.15",
        "openid-client": "^5.4.0",
        "preact": "^10.6.3",
        "preact-render-to-string": "^5.1.19",
        "uuid": "^11.1.1"
      },
      "peerDependencies": {
        "@auth/core": "0.34.3",
        "next": "^12.2.5 || ^13 || ^14 || ^15 || ^16",
        "nodemailer": "^7.0.7",
        "react": "^17.0.2 || ^18 || ^19",
        "react-dom": "^17.0.2 || ^18 || ^19"
      },
      "peerDependenciesMeta": {
        "@auth/core": {
          "optional": true
        },
        "nodemailer": {
          "optional": true
        }
      }
    },
    "node_modules/next-intl": {
      "version": "4.13.7",
      "resolved": "https://registry.npmjs.org/next-intl/-/next-intl-4.13.7.tgz",
      "integrity": "sha512-j7KnGWt4Ih6TnW1x714R8bX3H+DYP25fqLTYTfUzAFXh0Od57WuQYM/Sf58yalvIXhE6y8sBYHlrCFmr0jPy3g==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/amannn"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@formatjs/intl-localematcher": "^0.8.1",
        "@parcel/watcher": "^2.4.1",
        "@swc/core": "~1.15.47",
        "icu-minify": "^4.13.7",
        "negotiator": "^1.0.0",
        "next-intl-swc-plugin-extractor": "4.13.7",
        "po-parser": "^2.1.1",
        "use-intl": "^4.13.7"
      },
      "peerDependencies": {
        "next": "^12.0.0 || ^13.0.0 || ^14.0.0 || ^15.0.0 || ^16.0.0",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || >=19.0.0-rc <19.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/next-intl-swc-plugin-extractor": {
      "version": "4.13.7",
      "resolved": "https://registry.npmjs.org/next-intl-swc-plugin-extractor/-/next-intl-swc-plugin-extractor-4.13.7.tgz",
      "integrity": "sha512-MxOUMGKncc/D6rofu0O80I6Ebr3gqlH8XiEb0Uu5TZmX7DqY3NVHs70Uy4bvtgWmHeDwsra6KU8EBtfRVGRv7Q==",
      "license": "MIT"
    },
    "node_modules/next-themes": {
      "version": "0.4.6",
      "resolved": "https://registry.npmjs.org/next-themes/-/next-themes-0.4.6.tgz",
      "integrity": "sha512-pZvgD5L0IEvX5/9GWyHMf3m8BKiVQwsCMHfoFosXtXBMnaS0ZnIJ9ST4b4NqLVKDEm8QBxoNNGNaBv2JNF6XNA==",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.8 || ^17 || ^18 || ^19 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17 || ^18 || ^19 || ^19.0.0-rc"
      }
    },
    "node_modules/next-tick": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/next-tick/-/next-tick-1.1.0.tgz",
      "integrity": "sha512-CXdUiJembsNjuToQvxayPZF9Vqht7hewsvy2sOWafLvi2awflj9mOC6bHIg50orX8IJvWKY9wYQ/zB2kogPslQ==",
      "license": "ISC"
    },
    "node_modules/next/node_modules/@img/sharp-darwin-arm64": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.35.3.tgz",
      "integrity": "sha512-RMnFX7YQsMoh7lWfcM4NEHHymBX/rLuKNPVM84XE9ONPcaSCDgE7CHIHpSgPcO2xcRthgBy1HfNO319mwhIAkg==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.3.2"
      }
    },
    "node_modules/next/node_modules/@img/sharp-darwin-x64": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.35.3.tgz",
      "integrity": "sha512-Xo+5uFBtLN0BKqieTxiFzFPQAUlBbbH5iBKyRX/z1JrbnYsHTfKJnUfL8+p2TPXr1pXqao4eeL4Rl144uDpK9w==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.3.2"
      }
    },
    "node_modules/next/node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.3.2.tgz",
      "integrity": "sha512-9J6ypZFpQBj4YnePGoq/S38w6nz+vqg5WZLrLGY4YuSemdMq47GMLBPO42MzwdGwpg/agZ7xzZcFHa48xlywfg==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/next/node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.3.2.tgz",
      "integrity": "sha512-m2pW1n6cns9VaubNwsZ+c3CRYjxNQWgJ5gPlnL1nbBcpkBvFm6SCFN5o0psFHI8w9n11NKhFkeEDns98tiqbEw==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/next/node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.3.2.tgz",
      "integrity": "sha512-1eMLzy92I4J6rmi4mAT8yC3HxOtniyGELlzGbNMLLeqe052ahFQ0h6LFq+lh5DsDIdYViIDst08abvSbcEdLXQ==",
      "cpu": [
        "arm"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/next/node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.3.2.tgz",
      "integrity": "sha512-dqVSFynCox4C/J8kT16V7SIFAns0IjgLwkvYT7p8LQVmJ5OS5b6tI9IGflxTeuBS//zXeFIUbwt5dwxyZ17cnA==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/next/node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.3.2.tgz",
      "integrity": "sha512-3z0NHDxD6n5I9gc05U1eW1AyRm+Gznzq3naMrthPNqE6oYykcogW0l/jfpJdjYnuNl8R7yI9pNbE1XiUeyq0Aw==",
      "cpu": [
        "ppc64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/next/node_modules/@img/sharp-libvips-linux-riscv64": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-riscv64/-/sharp-libvips-linux-riscv64-1.3.2.tgz",
      "integrity": "sha512-bsb4rI+NldGOsXuej2r8OdSS8+zXDVaCWxyWrcv6kneTOlgAHtZABRzBBCwdsPiD90J4myNJuHpg6kA20ImW/w==",
      "cpu": [
        "riscv64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/next/node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.3.2.tgz",
      "integrity": "sha512-/ABshyj8gCpyIrNXnHn4LorDJ0HHm1VhXPBlxZ8zAtfVPAaSafXPGn+sUSIRiwaSBy0mmFjSjiXI5mkcwdChKQ==",
      "cpu": [
        "s390x"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/next/node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.3.2.tgz",
      "integrity": "sha512-ITPEtgffGJ0S6G9dRyw/366tJQqFRcHWPHhC+Stpg3Z8AEMrDrTr2lhdz4f/Y/HMbRh//7Z5mBzEpVdi62Oc3w==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/next/node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.3.2.tgz",
      "integrity": "sha512-zE9EdiUzUmg5mDT5a1rk5fYJ6GWPloTwWBYDS14naqHsL+EaMpDj1AWnpLgh3u0YCORv2Tt50wrcrpYqkP97Kw==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/next/node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.3.2.tgz",
      "integrity": "sha512-m0lrLiUt+lBYnCFr8qV/65yMR4E/c7/wf78I5eKTdkEakFAlZ9QlzEM3QIhhAwVeUhLAHLcCq7a7Vszq/oFNZQ==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/next/node_modules/@img/sharp-linux-arm": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.35.3.tgz",
      "integrity": "sha512-affVWCTLooy8TSxbDx2qkzuDeaWLNVBA+P//FNBirHsXpP2fuBhk5AuboYUnrDnzoXes8GFjpTx0SBFOCRg+FA==",
      "cpu": [
        "arm"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.3.2"
      }
    },
    "node_modules/next/node_modules/@img/sharp-linux-arm64": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.35.3.tgz",
      "integrity": "sha512-QgKDspHPnrU+GQ55XPhGwyhC8acLVOOSyAvo1oVfFmrIXLkDNmGWzAfDZ4xK8oSA1qBQrALcHX0G5UZni/SuFQ==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.3.2"
      }
    },
    "node_modules/next/node_modules/@img/sharp-linux-ppc64": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.35.3.tgz",
      "integrity": "sha512-sMd8rDxmpLOwv/7N44klFjOD5DUO7FLdjiXDI0hoxYaf7Ar262dQIEkosE98bps+5HPLtp/EvNqeqQtOycP/IA==",
      "cpu": [
        "ppc64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.3.2"
      }
    },
    "node_modules/next/node_modules/@img/sharp-linux-riscv64": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-riscv64/-/sharp-linux-riscv64-0.35.3.tgz",
      "integrity": "sha512-0Eob78yjlYPfL5vMNWAW55l3R9Y6BQS/gOfe0ZcP9mEz9ohhKSt4im1hayiknXgf8AWrFqMvJcKIdmLmEe7yeQ==",
      "cpu": [
        "riscv64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-riscv64": "1.3.2"
      }
    },
    "node_modules/next/node_modules/@img/sharp-linux-s390x": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.35.3.tgz",
      "integrity": "sha512-KgAxQ0DxpNOq1rG2t5cgTgShJFGSuU7XO45cqC+1NVOuZnP6tlgZRuSYOfNupGkHID0o3cJOsw4DVeJpMovcGw==",
      "cpu": [
        "s390x"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.3.2"
      }
    },
    "node_modules/next/node_modules/@img/sharp-linux-x64": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.35.3.tgz",
      "integrity": "sha512-8pqvxubL2PGdhlPy6GLqzDYMUjyRmKAwKHYKixpdJYBUK7PJ0C029XdsnpFIdgRZG68fZiGdHVWcKPvtiPB4cA==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.3.2"
      }
    },
    "node_modules/next/node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.35.3.tgz",
      "integrity": "sha512-Vz0iQjzzcSX3HCbfwFfCSG/9SCIqyO0mH2sXyiHaAYfBk0cRsCWXRyQYX0ovCK/PAQBbTzQ0dsPQHh5MAFL59w==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.2"
      }
    },
    "node_modules/next/node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.35.3.tgz",
      "integrity": "sha512-6O1NPKcDVj9QEdg7Hx549EX8U0rp6yXQERqru6yRN7fGBn32UvIRJUlWnk+8xDCiG76hXVBbX82NZ/ZKr0euIg==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.3.2"
      }
    },
    "node_modules/next/node_modules/@img/sharp-win32-arm64": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.35.3.tgz",
      "integrity": "sha512-4bPwFdMbeC4JQ8L8LOyWp6nsHcboP5fxkp6iPOXz2Vg49R42TuMs2whkJ5OAP4/Ul035qOzy0AecOF9VOscn4w==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/next/node_modules/@img/sharp-win32-ia32": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.35.3.tgz",
      "integrity": "sha512-r53mXsBN6lFUDiST764SvgwUdHAqM4rPAiDzAmf4fLoB6X/rkfyTrLCg6+g17wJJiCmB3JYgHuUldCWUIRFSXw==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/next/node_modules/@img/sharp-win32-x64": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.35.3.tgz",
      "integrity": "sha512-D4y1vNeZrIIJCN+uHaWVtH86B+aCrdMYYjicy9pXHvbGZeGYLLSd3wdVuC37FxVXlU1ARsk84eKWfWMXGYEqvA==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/next/node_modules/postcss": {
      "version": "8.5.23",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.23.tgz",
      "integrity": "sha512-g50586zr4bZmwFiTlflMu8E0bDTb5I5gertgwAKmsdUlTQIhZtunzUlD1WSzwcVWPoAVpsrA6vlfCD7oXvRwgg==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.16",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/next/node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "license": "ISC",
      "optional": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/next/node_modules/sharp": {
      "version": "0.35.3",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.35.3.tgz",
      "integrity": "sha512-ej0zVHuZGHCiABXcNxeYhpRnPNPAcvbG8RMdBAhDAxLKkCRVSpK3Iyu7qbqw3JMzoj0REeM6f3tJLtVwl0023Q==",
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/colour": "^1.1.0",
        "detect-libc": "^2.1.2",
        "semver": "^7.8.5"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.35.3",
        "@img/sharp-darwin-x64": "0.35.3",
        "@img/sharp-freebsd-wasm32": "0.35.3",
        "@img/sharp-libvips-darwin-arm64": "1.3.2",
        "@img/sharp-libvips-darwin-x64": "1.3.2",
        "@img/sharp-libvips-linux-arm": "1.3.2",
        "@img/sharp-libvips-linux-arm64": "1.3.2",
        "@img/sharp-libvips-linux-ppc64": "1.3.2",
        "@img/sharp-libvips-linux-riscv64": "1.3.2",
        "@img/sharp-libvips-linux-s390x": "1.3.2",
        "@img/sharp-libvips-linux-x64": "1.3.2",
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.2",
        "@img/sharp-libvips-linuxmusl-x64": "1.3.2",
        "@img/sharp-linux-arm": "0.35.3",
        "@img/sharp-linux-arm64": "0.35.3",
        "@img/sharp-linux-ppc64": "0.35.3",
        "@img/sharp-linux-riscv64": "0.35.3",
        "@img/sharp-linux-s390x": "0.35.3",
        "@img/sharp-linux-x64": "0.35.3",
        "@img/sharp-linuxmusl-arm64": "0.35.3",
        "@img/sharp-linuxmusl-x64": "0.35.3",
        "@img/sharp-webcontainers-wasm32": "0.35.3",
        "@img/sharp-win32-arm64": "0.35.3",
        "@img/sharp-win32-ia32": "0.35.3",
        "@img/sharp-win32-x64": "0.35.3"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/node-addon-api": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-7.1.1.tgz",
      "integrity": "sha512-5m3bsyrjFWE1xf7nz7YXdN4udnVtXK6/Yfgn5qnahL6bCkf2yKt4k3nuTKAtT4r3IG8JNR2ncsIMdZuAzJjHQQ==",
      "license": "MIT"
    },
    "node_modules/node-exports-info": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/node-exports-info/-/node-exports-info-1.6.2.tgz",
      "integrity": "sha512-kXs9Go0cah0qHVV2v389IXQLdLCeE1xfFtjOAF+iobu0OIoG1pje8At2vMHyaPMiPMnG/LWP50twML21eMcAag==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array.prototype.flatmap": "^1.3.3",
        "es-errors": "^1.3.0",
        "object.entries": "^1.1.9",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/node-fetch-native": {
      "version": "1.6.7",
      "resolved": "https://registry.npmjs.org/node-fetch-native/-/node-fetch-native-1.6.7.tgz",
      "integrity": "sha512-g9yhqoedzIUm0nTnTqAQvueMPVOuIY16bqgAJJC8XOOubYFNwz6IER9qs0Gq2Xd0+CecCKFjtdDTMA4u4xG06Q==",
      "license": "MIT"
    },
    "node_modules/node-releases": {
      "version": "2.0.53",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.53.tgz",
      "integrity": "sha512-D9UOmYG3UH1V+ENW56t5QXBwJw1YEY18ruVeus89Rw+SyIgjPkCO84bRzO3uNIYosJbNwiabWVn48o3uJLjxFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/nypm": {
      "version": "0.6.9",
      "resolved": "https://registry.npmjs.org/nypm/-/nypm-0.6.9.tgz",
      "integrity": "sha512-zxlE2yvSWZWmHcNdT3+5zV2lrCogeE9YOklHrR3dFjqutq5wO7GFDYLFDRXLsYnJzwvy/im9fYoxePvS0VTW0w==",
      "license": "MIT",
      "dependencies": {
        "citty": "^0.2.2",
        "pathe": "^2.0.3",
        "tinyexec": "^1.2.4"
      },
      "bin": {
        "nypm": "dist/cli.mjs"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/nypm/node_modules/citty": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/citty/-/citty-0.2.2.tgz",
      "integrity": "sha512-+6vJA3L98yv+IdfKGZHBNiGW5KHn22e/JwID0Strsz8h4S/csAu/OuICwxrg44k5MRiZHWIo8XXuJgQTriRP4w==",
      "license": "MIT"
    },
    "node_modules/oauth": {
      "version": "0.9.15",
      "resolved": "https://registry.npmjs.org/oauth/-/oauth-0.9.15.tgz",
      "integrity": "sha512-a5ERWK1kh38ExDEfoO6qUHJb32rd7aYmPHuyCu3Fta/cnICvYmgd2uhuKXvPD+PXB+gCEYYEaQdIRAjCOwAKNA==",
      "license": "MIT"
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-hash": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-2.2.0.tgz",
      "integrity": "sha512-gScRMn0bS5fH+IuwyIFgnh9zBdo4DV+6GhygmWM9HyNJSgS0hScp1f5vjtm7oIIOiT9trXrShAkLFSc2IqKNgw==",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.7",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.7.tgz",
      "integrity": "sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0",
        "has-symbols": "^1.1.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.entries": {
      "version": "1.1.9",
      "resolved": "https://registry.npmjs.org/object.entries/-/object.entries-1.1.9.tgz",
      "integrity": "sha512-8u/hfXFRBD1O0hPUjioLhoWFHRmt6tKA4/vZPyckBr18l1KE9uHrFaFaUi8MDRTpi4uak2goyPTSNJLXX2k2Hw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.fromentries": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.8.tgz",
      "integrity": "sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.groupby": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/object.groupby/-/object.groupby-1.0.3.tgz",
      "integrity": "sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.values": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.2.1.tgz",
      "integrity": "sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/ohash": {
      "version": "2.0.12",
      "resolved": "https://registry.npmjs.org/ohash/-/ohash-2.0.12.tgz",
      "integrity": "sha512-65S/5gk9YSsaRjcyf7Nfa6h/d3E8/1gslpXfI4W7Dxn/oap8IKRuNT5VXkLQ1YFKIEg4apRY4Pj6aiwFzrDdmw==",
      "license": "MIT"
    },
    "node_modules/oidc-token-hash": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/oidc-token-hash/-/oidc-token-hash-5.2.0.tgz",
      "integrity": "sha512-6gj2m8cJZ+iSW8bm0FXdGF0YhIQbKrfP4yWTNzxc31U6MOjfEmB1rHvlYvxI1B7t7BCi1F2vYTT6YhtQRG4hxw==",
      "license": "MIT",
      "engines": {
        "node": "^10.13.0 || >=12.0.0"
      }
    },
    "node_modules/openid-client": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/openid-client/-/openid-client-5.7.1.tgz",
      "integrity": "sha512-jDBPgSVfTnkIh71Hg9pRvtJc6wTwqjRkN88+gCFtYWrlP4Yx2Dsrow8uPi3qLr/aeymPF3o2+dS+wOpglK04ew==",
      "license": "MIT",
      "dependencies": {
        "jose": "^4.15.9",
        "lru-cache": "^6.0.0",
        "object-hash": "^2.2.0",
        "oidc-token-hash": "^5.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/panva"
      }
    },
    "node_modules/openid-client/node_modules/lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "license": "ISC",
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/openid-client/node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "license": "ISC"
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/outvariant": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/outvariant/-/outvariant-1.4.0.tgz",
      "integrity": "sha512-AlWY719RF02ujitly7Kk/0QlV+pXGFDHrHf9O2OKqyqgBieaPOIeuSkL8sRK6j2WK+/ZAURq2kZsY0d8JapUiw==",
      "license": "MIT"
    },
    "node_modules/own-keys": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/own-keys/-/own-keys-1.0.2.tgz",
      "integrity": "sha512-19YVAg7T+WTrxggPukVq7DjTv6+PJ867TmhCvBsYwmbFCsZd344rq2Ld1p0wo8f8Qrrhgp82c6FJRqdXWtSEhg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4",
        "get-intrinsic": "^1.3.0",
        "object-keys": "^1.1.1",
        "safe-push-apply": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parse-entities": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/parse-entities/-/parse-entities-4.0.2.tgz",
      "integrity": "sha512-GG2AQYWoLgL877gQIKeRPGO1xF9+eG1ujIb5soS5gPvLQ1y2o8FL90w2QWNdf9I361Mpp7726c+lj3U0qK1uGw==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^2.0.0",
        "character-entities-legacy": "^3.0.0",
        "character-reference-invalid": "^2.0.0",
        "decode-named-character-reference": "^1.0.0",
        "is-alphanumerical": "^2.0.0",
        "is-decimal": "^2.0.0",
        "is-hexadecimal": "^2.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/parse-entities/node_modules/@types/unist": {
      "version": "2.0.11",
      "resolved": "https://registry.npmjs.org/@types/unist/-/unist-2.0.11.tgz",
      "integrity": "sha512-CmBKiL6NNo/OqgmMn95Fk9Whlp2mtvIv+KNpQKN2F4SjvrEesubTRWGYSg+BnWZOnlCaSTU1sMpsBOzgbYhnsA==",
      "license": "MIT"
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/pathe": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/pathe/-/pathe-2.0.3.tgz",
      "integrity": "sha512-WUjGcAqP1gQacoQe+OBJsFA7Ld4DyXuUIjZ5cc75cLHvJ7dtNsTugphxIADwspS+AraAUePCKrSVtPLFj/F88w==",
      "license": "MIT"
    },
    "node_modules/perfect-debounce": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/perfect-debounce/-/perfect-debounce-1.0.0.tgz",
      "integrity": "sha512-xCy9V055GLEqoFaHoC1SoLIaLmWctgCUaBaWxDZ7/Zx4CTyX7cJQLJOok/orfjZAh9kEYpjJa4d0KcJmCbctZA==",
      "license": "MIT"
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pkg-types": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/pkg-types/-/pkg-types-2.3.1.tgz",
      "integrity": "sha512-y+ichcgc2LrADuhLNAx8DFjVfgz91pRxfZdI3UDhxHvcVEZsenLO+7XaU5vOp0u/7V/wZ+plyuQxtrDlZJ+yeg==",
      "license": "MIT",
      "dependencies": {
        "confbox": "^0.2.4",
        "exsolve": "^1.0.8",
        "pathe": "^2.0.3"
      }
    },
    "node_modules/po-parser": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/po-parser/-/po-parser-2.2.0.tgz",
      "integrity": "sha512-NdTrKgh0oO7+y+RFX8KKhOB438x/j94UGXEFzl/7pHH0JjWSn42iJ9tgmPksIO6n1JKDHmNDcejPJfKspljB9g==",
      "license": "MIT"
    },
    "node_modules/possible-typed-array-names": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/possible-typed-array-names/-/possible-typed-array-names-1.1.0.tgz",
      "integrity": "sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.26",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.26.tgz",
      "integrity": "sha512-u82N74LFzG8ca+dD8puPnplTXoGH4fTPpVGuIbt36G3qvNlkvfD0lEAZSxaly3KX8TS/L1A1gsCEmvKmBcVbkQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.17",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/preact": {
      "version": "10.29.8",
      "resolved": "https://registry.npmjs.org/preact/-/preact-10.29.8.tgz",
      "integrity": "sha512-ej2aVZ+vZ8WO7tvlQWRM9N63A0KzF9q4mWJfDUHgYaIofWY9hu74QdnQrjoPMmZi2/nZ5gN0bJCQF49xQqx09Q==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/preact"
      },
      "peerDependencies": {
        "preact-render-to-string": ">=5"
      },
      "peerDependenciesMeta": {
        "preact-render-to-string": {
          "optional": true
        }
      }
    },
    "node_modules/preact-render-to-string": {
      "version": "5.2.6",
      "resolved": "https://registry.npmjs.org/preact-render-to-string/-/preact-render-to-string-5.2.6.tgz",
      "integrity": "sha512-JyhErpYOvBV1hEPwIxc/fHWXPfnEGdRKxc8gFdAZ7XV4tlzyzG847XAyEZqoDnynP88akM4eaHcSOzNcLWFguw==",
      "license": "MIT",
      "dependencies": {
        "pretty-format": "^3.8.0"
      },
      "peerDependencies": {
        "preact": ">=10"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/pretty-format": {
      "version": "3.8.0",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-3.8.0.tgz",
      "integrity": "sha512-WuxUnVtlWL1OfZFQFuqvnvs6MiAGk9UNsBostyBOB0Is9wb5uRESevA6rnl/rkksXaGX3GzZhPup5d6Vp1nFew==",
      "license": "MIT"
    },
    "node_modules/prisma": {
      "version": "6.19.3",
      "resolved": "https://registry.npmjs.org/prisma/-/prisma-6.19.3.tgz",
      "integrity": "sha512-++ZJ0ijLrDJF6hNB4t4uxg2br3fC4H9Yc9tcbjr2fcNFP3rh/SBNrAgjhsqBU4Ght8JPrVofG/ZkXfnSfnYsFg==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/config": "6.19.3",
        "@prisma/engines": "6.19.3"
      },
      "bin": {
        "prisma": "build/index.js"
      },
      "engines": {
        "node": ">=18.18"
      },
      "peerDependencies": {
        "typescript": ">=5.1.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/prismjs": {
      "version": "1.30.0",
      "resolved": "https://registry.npmjs.org/prismjs/-/prismjs-1.30.0.tgz",
      "integrity": "sha512-DEvV2ZF2r2/63V+tK8hQvrR2ZGn10srHbXviTlcv7Kpzw8jWiNTqbVgjO3IY8RxrrOUF8VPMQQFysYYYv0YZxw==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/prop-types/node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "license": "MIT"
    },
    "node_modules/property-information": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/property-information/-/property-information-7.2.0.tgz",
      "integrity": "sha512-IAtzIB6sUiWaJYrX9smp3V46pBGbBeLFRGdh25kg1334VcBlD8HzhPeNIWQH9zhGmo2itIe25EHt9dQP7G5hmg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pure-rand": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/pure-rand/-/pure-rand-6.1.0.tgz",
      "integrity": "sha512-bVWawvoZoBYpp6yIoQtQXHZjmz35RSVHnUOTefl8Vcjr8snTPY1wnpSPMWekcFwbxI6gtmT7rSYPFvz71ldiOA==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/dubzzz"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fast-check"
        }
      ],
      "license": "MIT"
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/rc9": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/rc9/-/rc9-2.1.2.tgz",
      "integrity": "sha512-btXCnMmRIBINM2LDZoEmOogIZU7Qe7zn4BpomSKZ/ykbLObuBdvG+mFq11DL6fjH1DRwHhrlgtYWG96bJiC7Cg==",
      "license": "MIT",
      "dependencies": {
        "defu": "^6.1.4",
        "destr": "^2.0.3"
      }
    },
    "node_modules/react": {
      "version": "19.2.8",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.8.tgz",
      "integrity": "sha512-PWaYA1L/q9u2u7xYQi+Y3L3Yfnie7XyLeaJICV1MGD6LprsBxcAqGjYyr0eY3p+QdsA+x/Irkt4Qif8D63+Sbw==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-day-picker": {
      "version": "9.14.0",
      "resolved": "https://registry.npmjs.org/react-day-picker/-/react-day-picker-9.14.0.tgz",
      "integrity": "sha512-tBaoDWjPwe0M5pGrum4H0SR6Lyk+BO9oHnp9JbKpGKW2mlraNPgP9BMfsg5pWpwrssARmeqk7YBl2oXutZTaHA==",
      "license": "MIT",
      "dependencies": {
        "@date-fns/tz": "^1.4.1",
        "@tabby_ai/hijri-converter": "1.0.5",
        "date-fns": "^4.1.0",
        "date-fns-jalali": "4.1.0-0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "individual",
        "url": "https://github.com/sponsors/gpbl"
      },
      "peerDependencies": {
        "react": ">=16.8.0"
      }
    },
    "node_modules/react-devtools-inline": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/react-devtools-inline/-/react-devtools-inline-4.4.0.tgz",
      "integrity": "sha512-ES0GolSrKO8wsKbsEkVeiR/ZAaHQTY4zDh1UW8DImVmm8oaGLl3ijJDvSGe+qDRKPZdPRnDtWWnSvvrgxXdThQ==",
      "license": "MIT",
      "dependencies": {
        "es6-symbol": "^3"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.8",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.8.tgz",
      "integrity": "sha512-rVprimfGBG3DR+Tq0IQG2DT5PxKth1WIGDmj5yPmlzr4YBe7uyE+Du4oVqTDXZSHGGGXRtTJEGSSePyQCMBglQ==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.8"
      }
    },
    "node_modules/react-error-boundary": {
      "version": "3.1.4",
      "resolved": "https://registry.npmjs.org/react-error-boundary/-/react-error-boundary-3.1.4.tgz",
      "integrity": "sha512-uM9uPzZJTF6wRQORmSrvOIgt4lJ9MC1sNgEOj2XGsDTRE4kmpWxg7ENK9EWNKJRMAOY9z0MuF4yIfl6gp4sotA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.12.5"
      },
      "engines": {
        "node": ">=10",
        "npm": ">=6"
      },
      "peerDependencies": {
        "react": ">=16.13.1"
      }
    },
    "node_modules/react-hook-form": {
      "version": "7.85.0",
      "resolved": "https://registry.npmjs.org/react-hook-form/-/react-hook-form-7.85.0.tgz",
      "integrity": "sha512-U2MTriFXnclmV4rOE20p2DcRFv5WEg3FIcBFOKcOLFHDVvGIMPvLTkTWefUsonmlaVy23khVDxDWym6uJVGOzw==",
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/react-hook-form"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17 || ^18 || ^19"
      }
    },
    "node_modules/react-is": {
      "version": "17.0.2",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-17.0.2.tgz",
      "integrity": "sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w==",
      "license": "MIT"
    },
    "node_modules/react-markdown": {
      "version": "10.1.0",
      "resolved": "https://registry.npmjs.org/react-markdown/-/react-markdown-10.1.0.tgz",
      "integrity": "sha512-qKxVopLT/TyA6BX3Ue5NwabOsAzm0Q7kAPwq6L+wWDwisYs7R8vZ0nRXqq6rkueboxpkjvLGU9fWifiX/ZZFxQ==",
      "license": "MIT",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "devlop": "^1.0.0",
        "hast-util-to-jsx-runtime": "^2.0.0",
        "html-url-attributes": "^3.0.0",
        "mdast-util-to-hast": "^13.0.0",
        "remark-parse": "^11.0.0",
        "remark-rehype": "^11.0.0",
        "unified": "^11.0.0",
        "unist-util-visit": "^5.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      },
      "peerDependencies": {
        "@types/react": ">=18",
        "react": ">=18"
      }
    },
    "node_modules/react-remove-scroll": {
      "version": "2.7.2",
      "resolved": "https://registry.npmjs.org/react-remove-scroll/-/react-remove-scroll-2.7.2.tgz",
      "integrity": "sha512-Iqb9NjCCTt6Hf+vOdNIZGdTiH1QSqr27H/Ek9sv/a97gfueI/5h1s3yRi1nngzMUaOOToin5dI1dXKdXiF+u0Q==",
      "license": "MIT",
      "dependencies": {
        "react-remove-scroll-bar": "^2.3.7",
        "react-style-singleton": "^2.2.3",
        "tslib": "^2.1.0",
        "use-callback-ref": "^1.3.3",
        "use-sidecar": "^1.1.3"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/react-remove-scroll-bar": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/react-remove-scroll-bar/-/react-remove-scroll-bar-2.3.8.tgz",
      "integrity": "sha512-9r+yi9+mgU33AKcj6IbT9oRCO78WriSj6t/cF8DWBZJ9aOGPOTEDvdUDz1FwKim7QXWwmHqtdHnRJfhAxEG46Q==",
      "license": "MIT",
      "dependencies": {
        "react-style-singleton": "^2.2.2",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/react-resizable-panels": {
      "version": "3.0.6",
      "resolved": "https://registry.npmjs.org/react-resizable-panels/-/react-resizable-panels-3.0.6.tgz",
      "integrity": "sha512-b3qKHQ3MLqOgSS+FRYKapNkJZf5EQzuf6+RLiq1/IlTHw99YrZ2NJZLk4hQIzTnnIkRg2LUqyVinu6YWWpUYew==",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.14.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc",
        "react-dom": "^16.14.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      }
    },
    "node_modules/react-smooth": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/react-smooth/-/react-smooth-4.0.4.tgz",
      "integrity": "sha512-gnGKTpYwqL0Iii09gHobNolvX4Kiq4PKx6eWBCYYix+8cdw+cGo3do906l1NBPKkSWx1DghC1dlWG9L2uGd61Q==",
      "license": "MIT",
      "dependencies": {
        "fast-equals": "^5.0.1",
        "prop-types": "^15.8.1",
        "react-transition-group": "^4.4.5"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/react-style-singleton": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/react-style-singleton/-/react-style-singleton-2.2.3.tgz",
      "integrity": "sha512-b6jSvxvVnyptAiLjbkWLE/lOnR4lfTtDAl+eUC7RZy+QQWc6wRzIV2CE6xBuMmDxc2qIihtDCZD5NPOFl7fRBQ==",
      "license": "MIT",
      "dependencies": {
        "get-nonce": "^1.0.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/react-syntax-highlighter": {
      "version": "15.6.6",
      "resolved": "https://registry.npmjs.org/react-syntax-highlighter/-/react-syntax-highlighter-15.6.6.tgz",
      "integrity": "sha512-DgXrc+AZF47+HvAPEmn7Ua/1p10jNoVZVI/LoPiYdtY+OM+/nG5yefLHKJwdKqY1adMuHFbeyBaG9j64ML7vTw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.3.1",
        "highlight.js": "^10.4.1",
        "highlightjs-vue": "^1.0.0",
        "lowlight": "^1.17.0",
        "prismjs": "^1.30.0",
        "refractor": "^3.6.0"
      },
      "peerDependencies": {
        "react": ">= 0.14.0"
      }
    },
    "node_modules/react-transition-group": {
      "version": "4.4.5",
      "resolved": "https://registry.npmjs.org/react-transition-group/-/react-transition-group-4.4.5.tgz",
      "integrity": "sha512-pZcd1MCJoiKiBR2NRxeCRg13uCXbydPnmB4EOeRrY7480qNWO8IIgQG6zlDkm6uRMsURXPuKq0GWtiM59a5Q6g==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "@babel/runtime": "^7.5.5",
        "dom-helpers": "^5.0.1",
        "loose-envify": "^1.4.0",
        "prop-types": "^15.6.2"
      },
      "peerDependencies": {
        "react": ">=16.6.0",
        "react-dom": ">=16.6.0"
      }
    },
    "node_modules/readdirp": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-4.1.2.tgz",
      "integrity": "sha512-GDhwkLfywWL2s6vEjyhri+eXmfH6j1L7JE27WhqLeYzoh/A3DBaYGEj2H/HFZCn/kMfim73FXxEJTw06WtxQwg==",
      "license": "MIT",
      "engines": {
        "node": ">= 14.18.0"
      },
      "funding": {
        "type": "individual",
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/recharts": {
      "version": "2.15.4",
      "resolved": "https://registry.npmjs.org/recharts/-/recharts-2.15.4.tgz",
      "integrity": "sha512-UT/q6fwS3c1dHbXv2uFgYJ9BMFHu3fwnd7AYZaEQhXuYQ4hgsxLvsUXzGdKeZrW5xopzDCvuA2N41WJ88I7zIw==",
      "deprecated": "1.x and 2.x branches are no longer active. Bump to Recharts v3 to receive latest features and bugfixes. See https://github.com/recharts/recharts/wiki/3.0-migration-guide",
      "license": "MIT",
      "dependencies": {
        "clsx": "^2.0.0",
        "eventemitter3": "^4.0.1",
        "lodash": "^4.17.21",
        "react-is": "^18.3.1",
        "react-smooth": "^4.0.4",
        "recharts-scale": "^0.4.4",
        "tiny-invariant": "^1.3.1",
        "victory-vendor": "^36.6.8"
      },
      "engines": {
        "node": ">=14"
      },
      "peerDependencies": {
        "react": "^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-dom": "^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/recharts-scale": {
      "version": "0.4.5",
      "resolved": "https://registry.npmjs.org/recharts-scale/-/recharts-scale-0.4.5.tgz",
      "integrity": "sha512-kivNFO+0OcUNu7jQquLXAxz1FIwZj8nrj+YkOKc5694NbjCvcT6aSZiIzNzd2Kul4o4rTto8QVR9lMNtxD4G1w==",
      "license": "MIT",
      "dependencies": {
        "decimal.js-light": "^2.4.1"
      }
    },
    "node_modules/recharts/node_modules/react-is": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-18.3.1.tgz",
      "integrity": "sha512-/LLMVyas0ljjAtoYiPqYiL8VWXzUUdThrmU5+n20DZv+a+ClRoevUzw5JxU+Ieh5/c87ytoTBV9G1FiKfNJdmg==",
      "license": "MIT"
    },
    "node_modules/reflect.getprototypeof": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/reflect.getprototypeof/-/reflect.getprototypeof-1.0.10.tgz",
      "integrity": "sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.7",
        "get-proto": "^1.0.1",
        "which-builtin-type": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/refractor": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/refractor/-/refractor-3.6.0.tgz",
      "integrity": "sha512-MY9W41IOWxxk31o+YvFCNyNzdkc9M20NoZK5vq6jkv4I/uh2zkWcfudj0Q1fovjUQJrNewS9NMzeTtqPf+n5EA==",
      "license": "MIT",
      "dependencies": {
        "hastscript": "^6.0.0",
        "parse-entities": "^2.0.0",
        "prismjs": "~1.27.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/refractor/node_modules/character-entities": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/character-entities/-/character-entities-1.2.4.tgz",
      "integrity": "sha512-iBMyeEHxfVnIakwOuDXpVkc54HijNgCyQB2w0VfGQThle6NXn50zU6V/u+LDhxHcDUPojn6Kpga3PTAD8W1bQw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/refractor/node_modules/character-entities-legacy": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/character-entities-legacy/-/character-entities-legacy-1.1.4.tgz",
      "integrity": "sha512-3Xnr+7ZFS1uxeiUDvV02wQ+QDbc55o97tIV5zHScSPJpcLm/r0DFPcoY3tYRp+VZukxuMeKgXYmsXQHO05zQeA==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/refractor/node_modules/character-reference-invalid": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/character-reference-invalid/-/character-reference-invalid-1.1.4.tgz",
      "integrity": "sha512-mKKUkUbhPpQlCOfIuZkvSEgktjPFIsZKRRbC6KWVEMvlzblj3i3asQv5ODsrwt0N3pHAEvjP8KTQPHkp0+6jOg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/refractor/node_modules/is-alphabetical": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-alphabetical/-/is-alphabetical-1.0.4.tgz",
      "integrity": "sha512-DwzsA04LQ10FHTZuL0/grVDk4rFoVH1pjAToYwBrHSxcrBIGQuXrQMtD5U1b0U2XVgKZCTLLP8u2Qxqhy3l2Vg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/refractor/node_modules/is-alphanumerical": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-alphanumerical/-/is-alphanumerical-1.0.4.tgz",
      "integrity": "sha512-UzoZUr+XfVz3t3v4KyGEniVL9BDRoQtY7tOyrRybkVNjDFWyo1yhXNGrrBTQxp3ib9BLAWs7k2YKBQsFRkZG9A==",
      "license": "MIT",
      "dependencies": {
        "is-alphabetical": "^1.0.0",
        "is-decimal": "^1.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/refractor/node_modules/is-decimal": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-decimal/-/is-decimal-1.0.4.tgz",
      "integrity": "sha512-RGdriMmQQvZ2aqaQq3awNA6dCGtKpiDFcOzrTWrDAT2MiWrKQVPmxLGHl7Y2nNu6led0kEyoX0enY0qXYsv9zw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/refractor/node_modules/is-hexadecimal": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-hexadecimal/-/is-hexadecimal-1.0.4.tgz",
      "integrity": "sha512-gyPJuv83bHMpocVYoqof5VDiZveEoGoFL8m3BXNb2VW8Xs+rz9kqO8LOQ5DH6EsuvilT1ApazU0pyl+ytbPtlw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/refractor/node_modules/parse-entities": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/parse-entities/-/parse-entities-2.0.0.tgz",
      "integrity": "sha512-kkywGpCcRYhqQIchaWqZ875wzpS/bMKhz5HnN3p7wveJTkTtyAB/AlnS0f8DFSqYW1T82t6yEAkEcB+A1I3MbQ==",
      "license": "MIT",
      "dependencies": {
        "character-entities": "^1.0.0",
        "character-entities-legacy": "^1.0.0",
        "character-reference-invalid": "^1.0.0",
        "is-alphanumerical": "^1.0.0",
        "is-decimal": "^1.0.0",
        "is-hexadecimal": "^1.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/refractor/node_modules/prismjs": {
      "version": "1.27.0",
      "resolved": "https://registry.npmjs.org/prismjs/-/prismjs-1.27.0.tgz",
      "integrity": "sha512-t13BGPUlFDR7wRB5kQDG4jjl7XeuH6jbJGt11JHPL96qwsEHNX2+68tFXqc1/k+/jALsbSWJKUOT/hcYAZ5LkA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.5.4.tgz",
      "integrity": "sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-errors": "^1.3.0",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/remark-parse": {
      "version": "11.0.0",
      "resolved": "https://registry.npmjs.org/remark-parse/-/remark-parse-11.0.0.tgz",
      "integrity": "sha512-FCxlKLNGknS5ba/1lmpYijMUzX2esxW5xQqjWxw2eHFfS2MSdaHVINFmhjo+qN1WhZhNimq0dZATN9pH0IDrpA==",
      "license": "MIT",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "unified": "^11.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/remark-rehype": {
      "version": "11.1.2",
      "resolved": "https://registry.npmjs.org/remark-rehype/-/remark-rehype-11.1.2.tgz",
      "integrity": "sha512-Dh7l57ianaEoIpzbp0PC9UKAdCSVklD8E5Rpw7ETfbTl3FqcOOgq5q2LVDhgGCkaBv7p24JXikPdvhhmHvKMsw==",
      "license": "MIT",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "mdast-util-to-hast": "^13.0.0",
        "unified": "^11.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
      "extraneous": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/resolve": {
      "version": "2.0.0-next.7",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-2.0.0-next.7.tgz",
      "integrity": "sha512-tqt+NBWwyaMgw3zDsnygx4CByWjQEJHOPMdslYhppaQSJUtL/D4JO9CcBBlhPoI8lz9oJIDXkwXfhF4aWqP8xQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "is-core-module": "^2.16.2",
        "node-exports-info": "^1.6.0",
        "object-keys": "^1.1.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/sade": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/sade/-/sade-1.8.1.tgz",
      "integrity": "sha512-xal3CZX1Xlo/k4ApwCFrHVACi9fBqJ7V+mwhBsuf/1IOKbBy098Fex+Wa/5QMubw09pSZ/u8EY8PWgevJsXp1A==",
      "license": "MIT",
      "dependencies": {
        "mri": "^1.1.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/safe-array-concat": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/safe-array-concat/-/safe-array-concat-1.1.4.tgz",
      "integrity": "sha512-wtZlHyOje6OZTGqAoaDKxFkgRtkF9CnHAVnCHKfuj200wAgL+bSJhdsCD2l0Qx/2ekEXjPWcyKkfGb5CPboslg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "get-intrinsic": "^1.3.0",
        "has-symbols": "^1.1.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">=0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-push-apply": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/safe-push-apply/-/safe-push-apply-1.0.0.tgz",
      "integrity": "sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-regex-test": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex-test/-/safe-regex-test-1.1.0.tgz",
      "integrity": "sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-regex": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/screenfull": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/screenfull/-/screenfull-5.2.0.tgz",
      "integrity": "sha512-9BakfsO2aUQN2K9Fdbj87RJIEZ82Q9IGim7FqM5OsebfoFC6ZHXgDq/KvniuLTPdeM8wY2o6Dj3WQ7KeQCj3cA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
      "integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-function-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/set-function-name/-/set-function-name-2.0.2.tgz",
      "integrity": "sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-proto": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/set-proto/-/set-proto-1.0.0.tgz",
      "integrity": "sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/sharp": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.34.5.tgz",
      "integrity": "sha512-Ou9I5Ft9WNcCbXrU9cMgPBcCK8LiwLqcbywW3t4oDV37n1pzpuNLsYiAV8eODnjbtQlSDwZ2cUEeQz4E54Hltg==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@img/colour": "^1.0.0",
        "detect-libc": "^2.1.2",
        "semver": "^7.7.3"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.34.5",
        "@img/sharp-darwin-x64": "0.34.5",
        "@img/sharp-libvips-darwin-arm64": "1.2.4",
        "@img/sharp-libvips-darwin-x64": "1.2.4",
        "@img/sharp-libvips-linux-arm": "1.2.4",
        "@img/sharp-libvips-linux-arm64": "1.2.4",
        "@img/sharp-libvips-linux-ppc64": "1.2.4",
        "@img/sharp-libvips-linux-riscv64": "1.2.4",
        "@img/sharp-libvips-linux-s390x": "1.2.4",
        "@img/sharp-libvips-linux-x64": "1.2.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.2.4",
        "@img/sharp-linux-arm": "0.34.5",
        "@img/sharp-linux-arm64": "0.34.5",
        "@img/sharp-linux-ppc64": "0.34.5",
        "@img/sharp-linux-riscv64": "0.34.5",
        "@img/sharp-linux-s390x": "0.34.5",
        "@img/sharp-linux-x64": "0.34.5",
        "@img/sharp-linuxmusl-arm64": "0.34.5",
        "@img/sharp-linuxmusl-x64": "0.34.5",
        "@img/sharp-wasm32": "0.34.5",
        "@img/sharp-win32-arm64": "0.34.5",
        "@img/sharp-win32-ia32": "0.34.5",
        "@img/sharp-win32-x64": "0.34.5"
      }
    },
    "node_modules/sharp/node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.1.tgz",
      "integrity": "sha512-6x6dK6zJdpTzF4sQeNYxwtvBzf6Eg4GtlesS94HOvTudUeyK2WXAaIfmDgsyslYrRBeFIlsi54AYsFGUuhmvrQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4",
        "side-channel-list": "^1.0.1",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.1.tgz",
      "integrity": "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/sonner": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/sonner/-/sonner-2.0.8.tgz",
      "integrity": "sha512-UM/ByIoFra8yzV75n1o0Puu0bw5U/9UNnDacrJNspekBewIfsQ3D6ez1nvlWpt7aTsO6rujQtifBpycwIivqlg==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^18.0.0 || ^19.0.0",
        "react": "^18.0.0 || ^19.0.0 || ^19.0.0-rc",
        "react-dom": "^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/space-separated-tokens": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/space-separated-tokens/-/space-separated-tokens-2.0.2.tgz",
      "integrity": "sha512-PEGlAwrG8yXGXRjW32fGbg66JAlOAwbObuqVoJpv/mRgoWDQfgH1wDPvtzWyUSNAXBGSk8h755YDbbcEy3SH2Q==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/stable-hash": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/stable-hash/-/stable-hash-0.0.5.tgz",
      "integrity": "sha512-+L3ccpzibovGXFK+Ap/f8LOS0ahMrHTf3xu7mMLSpEGU0EO9ucaysSylKo9eRDFNhWve/y275iPmIZ4z39a9iA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/static-browser-server": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/static-browser-server/-/static-browser-server-1.0.3.tgz",
      "integrity": "sha512-ZUyfgGDdFRbZGGJQ1YhiM930Yczz5VlbJObrQLlk24+qNHVQx4OlLcYswEUo3bIyNAbQUIUR9Yr5/Hqjzqb4zA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@open-draft/deferred-promise": "^2.1.0",
        "dotenv": "^16.0.3",
        "mime-db": "^1.52.0",
        "outvariant": "^1.3.0"
      }
    },
    "node_modules/stop-iteration-iterator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/stop-iteration-iterator/-/stop-iteration-iterator-1.1.0.tgz",
      "integrity": "sha512-eLoXW/DHyl62zxY4SCaIgnRhuMr6ri4juEYARS8E6sCEqzKpOiE521Ucofdx+KnDZl5xmvGYaaKCk5FEOxJCoQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "internal-slot": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/strict-event-emitter": {
      "version": "0.4.6",
      "resolved": "https://registry.npmjs.org/strict-event-emitter/-/strict-event-emitter-0.4.6.tgz",
      "integrity": "sha512-12KWeb+wixJohmnwNFerbyiBrAlq5qJLwIt38etRtKtmmHyDSoGlIqFE9wx+4IwG0aDjI7GV8tc8ZccjWZZtTg==",
      "license": "MIT"
    },
    "node_modules/string.prototype.includes": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/string.prototype.includes/-/string.prototype.includes-2.0.1.tgz",
      "integrity": "sha512-o7+c9bW6zpAdJHTtujeePODAhkuicdAryFsfVKwA+wGw89wJ4GTY484WTucM9hLtDEOpOvI+aHnzqnC5lHp4Rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string.prototype.matchall": {
      "version": "4.0.12",
      "resolved": "https://registry.npmjs.org/string.prototype.matchall/-/string.prototype.matchall-4.0.12.tgz",
      "integrity": "sha512-6CC9uyBL+/48dYizRf7H7VAYCMCNTBeM78x/VTUe9bFEaxBepPJDa1Ow99LqI/1yF7kuy7Q3cQsYMrcjGUcskA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.6",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "regexp.prototype.flags": "^1.5.3",
        "set-function-name": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.repeat": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/string.prototype.repeat/-/string.prototype.repeat-1.0.0.tgz",
      "integrity": "sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.5"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.11",
      "resolved": "https://registry.npmjs.org/string.prototype.trim/-/string.prototype.trim-1.2.11.tgz",
      "integrity": "sha512-PwvK7BU+CMTJGYQCTZb5RWXIML92lftJLhQz1tBzgKiqGxJaMlBAa48POXaNAC2s4y8jr3EFqrkF9+44neS46w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-data-property": "^1.1.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-object-atoms": "^1.1.2",
        "has-property-descriptors": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.10.tgz",
      "integrity": "sha512-2+3aDAOmPTmuFwjDnmJG2ctEkQKVki7vOSqaxkv42Mowj1V6PnvuwFCRrR5lChUux1TBskPjfkeTOhqczDMxTw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.8.tgz",
      "integrity": "sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/stringify-entities": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/stringify-entities/-/stringify-entities-4.0.4.tgz",
      "integrity": "sha512-IwfBptatlO+QCJUo19AqvrPNqlVMpW9YEL2LIVY+Rpv2qsjCGxaDLNRgeGsQWJhfItebuJhsGSLjaBbNSQ+ieg==",
      "license": "MIT",
      "dependencies": {
        "character-entities-html4": "^2.0.0",
        "character-entities-legacy": "^3.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/style-mod": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/style-mod/-/style-mod-4.1.3.tgz",
      "integrity": "sha512-i/n8VsZydrugj3Iuzll8+x/00GH2vnYsk1eomD8QiRrSAeW6ItbCQDtfXCeJHd0iwiNagqjQkvpvREEPtW3IoQ==",
      "license": "MIT"
    },
    "node_modules/style-to-js": {
      "version": "1.1.21",
      "resolved": "https://registry.npmjs.org/style-to-js/-/style-to-js-1.1.21.tgz",
      "integrity": "sha512-RjQetxJrrUJLQPHbLku6U/ocGtzyjbJMP9lCNK7Ag0CNh690nSH8woqWH9u16nMjYBAok+i7JO1NP2pOy8IsPQ==",
      "license": "MIT",
      "dependencies": {
        "style-to-object": "1.0.14"
      }
    },
    "node_modules/style-to-object": {
      "version": "1.0.14",
      "resolved": "https://registry.npmjs.org/style-to-object/-/style-to-object-1.0.14.tgz",
      "integrity": "sha512-LIN7rULI0jBscWQYaSswptyderlarFkjQ+t79nzty8tcIAceVomEVlLzH5VP4Cmsv6MtKhs7qaAiwlcp+Mgaxw==",
      "license": "MIT",
      "dependencies": {
        "inline-style-parser": "0.2.7"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz",
      "integrity": "sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tabbable": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/tabbable/-/tabbable-6.5.0.tgz",
      "integrity": "sha512-wieBHXygIm7OyQOu5hQlkk62/WyCFYGlWg7L6/ZCUZwx0o398Zkn4pVmMyfYhfMG8kGrj/Krt8eIk6UKC6VzwA==",
      "license": "MIT"
    },
    "node_modules/tailwind-merge": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/tailwind-merge/-/tailwind-merge-3.6.0.tgz",
      "integrity": "sha512-uxL7qAVQriqRQPAyK3pj66VqskWqoZ37PW94jwOTwNfq/z9oyu1V+eqrZqtR2+fCiXdYOZe/Modt8GtvqNzu+w==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/dcastil"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.3.3.tgz",
      "integrity": "sha512-gOhV3P7ufE62QDGg1zVaTgCR+EtPv92k2nIhVcVKcLmxT1sUBsQGhnZj175j+MqRt4zLF7ic+sCYjfhxMxj7YQ==",
      "license": "MIT"
    },
    "node_modules/tailwindcss-animate": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/tailwindcss-animate/-/tailwindcss-animate-1.0.7.tgz",
      "integrity": "sha512-bl6mpH3T7I3UFxuvDEXLxy/VuFxBk5bbzplh7tXI68mwMokNYd1t9qPBHlnyTwfa4JGC4zP516I1hYYtQ/vspA==",
      "license": "MIT",
      "peerDependencies": {
        "tailwindcss": ">=3.0.0 || insiders"
      }
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.3.tgz",
      "integrity": "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tiny-invariant": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/tiny-invariant/-/tiny-invariant-1.3.3.tgz",
      "integrity": "sha512-+FbBPE1o9QAYvviau/qC5SE3caw21q3xkvWKBtja5vgqOWIHHJ3ioaq1VPfn/Szqctz2bU/oYeKd9/z5BL+PVg==",
      "license": "MIT"
    },
    "node_modules/tinyexec": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/tinyexec/-/tinyexec-1.3.0.tgz",
      "integrity": "sha512-QKAl9m8gWWGHV8jZcPeym6j+XULi6tOf1mT83WYJ4Lk2ytW/uwAWkrP0uFsdoYMdueVJ0qs26wZ+23xeB4ibNQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tinyglobby/node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/tinyglobby/node_modules/picomatch": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.5.tgz",
      "integrity": "sha512-RvwwcruNjI1ncT5xRakeyS9Lf8lcItv34KD+aif+VH9kduAyfYBipGh12274xtenIPZ119/R9BdTBa8gAwSh0A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/trim-lines": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/trim-lines/-/trim-lines-3.0.1.tgz",
      "integrity": "sha512-kRj8B+YHZCc9kQYdWfJB2/oUl9rA99qbowYYBtr4ui4mZyAQ2JpvVBd/6U2YloATfqBhBTSMhTpgBHtU0Mf3Rg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/trough": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/trough/-/trough-2.2.0.tgz",
      "integrity": "sha512-tmMpK00BjZiUyVyvrBK7knerNgmgvcV/KLVyuma/SC+TQN167GrMRciANTz09+k3zW8L8t60jWO1GpfkZdjTaw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.5.0.tgz",
      "integrity": "sha512-OJ/ibxhPlqrMM0UiNHJ/0CKQkoKF243/AEmplt3qpRgkW8VG7IfOS41h7V8TjITqdByHzrjcS/2si+y4lIh8NA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/tsconfig-paths": {
      "version": "3.15.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.15.0.tgz",
      "integrity": "sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/json5": "^0.0.29",
        "json5": "^1.0.2",
        "minimist": "^1.2.6",
        "strip-bom": "^3.0.0"
      }
    },
    "node_modules/tsconfig-paths/node_modules/json5": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.2.tgz",
      "integrity": "sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/tw-animate-css": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/tw-animate-css/-/tw-animate-css-1.4.0.tgz",
      "integrity": "sha512-7bziOlRqH0hJx80h/3mbicLW7o8qLsH5+RaLR2t+OHM3D0JlWGODQKQ4cxbK7WlvmUxpcj6Kgu6EKqjrGFe3QQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/Wombosvideo"
      }
    },
    "node_modules/type": {
      "version": "2.7.3",
      "resolved": "https://registry.npmjs.org/type/-/type-2.7.3.tgz",
      "integrity": "sha512-8j+1QmAbPvLZow5Qpi6NCaN8FB60p/6x8/vfNqOk/hC+HuvFZhL4+WfekuhQLiqFZXOgQdrs3B+XxEmCc6b3FQ==",
      "license": "ISC"
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/typed-array-buffer": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-buffer/-/typed-array-buffer-1.0.3.tgz",
      "integrity": "sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/typed-array-byte-length": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-byte-length/-/typed-array-byte-length-1.0.3.tgz",
      "integrity": "sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-byte-offset": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/typed-array-byte-offset/-/typed-array-byte-offset-1.0.4.tgz",
      "integrity": "sha512-bTlAFB/FBYMcuX81gbL4OcpH5PmlFHqlCCpAl8AlEzMz5k53oNDvN8p1PNOWLEmI2x4orp3raOFB51tv9X+MFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "reflect.getprototypeof": "^1.0.9"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/typed-array-length/-/typed-array-length-1.0.8.tgz",
      "integrity": "sha512-phPGCwqr2+Qo0fwniCE8e4pKnGu/yFb5nD5Y8bf0EEeiI5GklnACYA9GFy/DrAeRrKHXvHn+1SUsOWgJp6RO+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "for-each": "^0.3.5",
        "gopd": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "possible-typed-array-names": "^1.1.0",
        "reflect.getprototypeof": "^1.0.10"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "devOptional": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/typescript-eslint": {
      "version": "8.67.0",
      "resolved": "https://registry.npmjs.org/typescript-eslint/-/typescript-eslint-8.67.0.tgz",
      "integrity": "sha512-S2udFs8tCKEKffuJ4TB1idGUZiXdCPGi3IPBGWXarbLQ5UPXORV8QEVzJ4gCRduURMb5EkpNCdjbk0eDIuI8Yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/eslint-plugin": "8.67.0",
        "@typescript-eslint/parser": "8.67.0",
        "@typescript-eslint/typescript-estree": "8.67.0",
        "@typescript-eslint/utils": "8.67.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/unbox-primitive": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.1.0.tgz",
      "integrity": "sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.1.0",
        "which-boxed-primitive": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/undici-types": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-8.3.0.tgz",
      "integrity": "sha512-j375ScV60dom+YkPFIfTLcOiPxkN/buHz5GobjLhixFuANaNs3C9l4GmrWqejgXWJ7BbJcFYpTEUkS1Ge8bpZQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unidiff": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/unidiff/-/unidiff-1.0.4.tgz",
      "integrity": "sha512-ynU0vsAXw0ir8roa+xPCUHmnJ5goc5BTM2Kuc3IJd8UwgaeRs7VSD5+eeaQL+xp1JtB92hu/Zy/Lgy7RZcr1pQ==",
      "license": "MIT",
      "dependencies": {
        "diff": "^5.1.0"
      }
    },
    "node_modules/unified": {
      "version": "11.0.5",
      "resolved": "https://registry.npmjs.org/unified/-/unified-11.0.5.tgz",
      "integrity": "sha512-xKvGhPWw3k84Qjh8bI3ZeJjqnyadK+GEFtazSfZv/rKeTkTjOJho6mFqh2SM96iIcZokxiOpg78GazTSg8+KHA==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "bail": "^2.0.0",
        "devlop": "^1.0.0",
        "extend": "^3.0.0",
        "is-plain-obj": "^4.0.0",
        "trough": "^2.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-is": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/unist-util-is/-/unist-util-is-6.0.1.tgz",
      "integrity": "sha512-LsiILbtBETkDz8I9p1dQ0uyRUWuaQzd/cuEeS1hoRSyW5E5XGmTzlwY1OrNzzakGowI9Dr/I8HVaw4hTtnxy8g==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-position": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-position/-/unist-util-position-5.0.0.tgz",
      "integrity": "sha512-fucsC7HjXvkB5R3kTCO7kUjRdrS0BJt3M/FPxmHMBOm8JQi2BsHAHFsy27E0EolP8rp0NzXsJ+jNPyDWvOJZPA==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-position-from-estree": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-position-from-estree/-/unist-util-position-from-estree-2.0.0.tgz",
      "integrity": "sha512-KaFVRjoqLyF6YXCbVLNad/eS4+OfPQQn2yOd7zF/h5T/CSL2v8NpN6a5TPvtbXthAGw5nG+PuTtq+DdIZr+cRQ==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-stringify-position": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-stringify-position/-/unist-util-stringify-position-4.0.0.tgz",
      "integrity": "sha512-0ASV06AAoKCDkS2+xw5RXJywruurpbC4JZSm7nr7MOt1ojAzvyyaO+UxZf18j8FCF6kmzCZKcAgN/yu2gm2XgQ==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-visit": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/unist-util-visit/-/unist-util-visit-5.1.0.tgz",
      "integrity": "sha512-m+vIdyeCOpdr/QeQCu2EzxX/ohgS8KbnPDgFni4dQsfSCtpz8UqDyY5GjRru8PDKuYn7Fq19j1CQ+nJSsGKOzg==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "unist-util-is": "^6.0.0",
        "unist-util-visit-parents": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-visit-parents": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/unist-util-visit-parents/-/unist-util-visit-parents-6.0.2.tgz",
      "integrity": "sha512-goh1s1TBrqSqukSc8wrjwWhL0hiJxgA8m4kFxGlQ+8FYQ3C/m11FcTs4YYem7V664AhHVvgoQLk890Ssdsr2IQ==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "unist-util-is": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unrs-resolver": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/unrs-resolver/-/unrs-resolver-1.12.2.tgz",
      "integrity": "sha512-dmlRxBJJayXjqTwC+JtF1HhJmgf3ftQ3YejFcZrf4+KKtJv0qDsK1pjqaaVjG7wJ5NJ6UVP1OqRMQ71Z4C3rxQ==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "napi-postinstall": "^0.3.4"
      },
      "funding": {
        "url": "https://opencollective.com/unrs-resolver"
      },
      "optionalDependencies": {
        "@unrs/resolver-binding-android-arm-eabi": "1.12.2",
        "@unrs/resolver-binding-android-arm64": "1.12.2",
        "@unrs/resolver-binding-darwin-arm64": "1.12.2",
        "@unrs/resolver-binding-darwin-x64": "1.12.2",
        "@unrs/resolver-binding-freebsd-x64": "1.12.2",
        "@unrs/resolver-binding-linux-arm-gnueabihf": "1.12.2",
        "@unrs/resolver-binding-linux-arm-musleabihf": "1.12.2",
        "@unrs/resolver-binding-linux-arm64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-arm64-musl": "1.12.2",
        "@unrs/resolver-binding-linux-loong64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-loong64-musl": "1.12.2",
        "@unrs/resolver-binding-linux-ppc64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-riscv64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-riscv64-musl": "1.12.2",
        "@unrs/resolver-binding-linux-s390x-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-x64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-x64-musl": "1.12.2",
        "@unrs/resolver-binding-openharmony-arm64": "1.12.2",
        "@unrs/resolver-binding-wasm32-wasi": "1.12.2",
        "@unrs/resolver-binding-win32-arm64-msvc": "1.12.2",
        "@unrs/resolver-binding-win32-ia32-msvc": "1.12.2",
        "@unrs/resolver-binding-win32-x64-msvc": "1.12.2"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.3.1.tgz",
      "integrity": "sha512-ZZ61DsRsOnakl74HAmp3oSN4aXUmEWXf+i/yv0h7tIBfICc3VdrFErQKUUKPgu3AMsTUMbcongALEN4l6GSUrQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/use-callback-ref": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/use-callback-ref/-/use-callback-ref-1.3.3.tgz",
      "integrity": "sha512-jQL3lRnocaFtu3V00JToYz/4QkNWswxijDaCVNZRiRTO3HQDLsdu1ZtmIUvV4yPp+rvWm5j0y0TG/S61cuijTg==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/use-intl": {
      "version": "4.13.7",
      "resolved": "https://registry.npmjs.org/use-intl/-/use-intl-4.13.7.tgz",
      "integrity": "sha512-vWapep/2GESovKEmkxaG1Bkt6AWwANCWrM4kwOYbMmvQ4IsBGJFx9l66h8DNCcU0jSOzNtSFyRXFcYvgAak/Cg==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/amannn"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@formatjs/fast-memoize": "^3.1.0",
        "@schummar/icu-type-parser": "1.21.5",
        "icu-minify": "^4.13.7",
        "intl-messageformat": "^11.1.0"
      },
      "peerDependencies": {
        "react": "^17.0.0 || ^18.0.0 || >=19.0.0-rc <19.0.0 || ^19.0.0"
      }
    },
    "node_modules/use-sidecar": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/use-sidecar/-/use-sidecar-1.1.3.tgz",
      "integrity": "sha512-Fedw0aZvkhynoPYlA5WXrMCAMm+nSWdZt6lzJQ7Ok8S6Q+VsHmHpRWndVRJ8Be0ZbkfPc5LRYH+5XrzXcEeLRQ==",
      "license": "MIT",
      "dependencies": {
        "detect-node-es": "^1.1.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/use-sync-external-store": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/use-sync-external-store/-/use-sync-external-store-1.6.0.tgz",
      "integrity": "sha512-Pp6GSwGP/NrPIrxVFAIkOQeyw8lFenOHijQWkUTrDvrF4ALqylP2C/KCkeS9dpUM3KvYRQhna5vt7IL95+ZQ9w==",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/uuid": {
      "version": "11.1.1",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-11.1.1.tgz",
      "integrity": "sha512-vIYxrBCC/N/K+Js3qSN88go7kIfNPssr/hHCesKCQNAjmgvYS2oqr69kIufEG+O4+PfezOH4EbIeHCfFov8ZgQ==",
      "funding": [
        "https://github.com/sponsors/broofa",
        "https://github.com/sponsors/ctavan"
      ],
      "license": "MIT",
      "bin": {
        "uuid": "dist/esm/bin/uuid"
      }
    },
    "node_modules/uvu": {
      "version": "0.5.6",
      "resolved": "https://registry.npmjs.org/uvu/-/uvu-0.5.6.tgz",
      "integrity": "sha512-+g8ENReyr8YsOc6fv/NVJs2vFdHBnBNdfE49rshrTzDWOlUx4Gq7KOS2GD8eqhy2j+Ejq29+SbKH8yjkAqXqoA==",
      "license": "MIT",
      "dependencies": {
        "dequal": "^2.0.0",
        "diff": "^5.0.0",
        "kleur": "^4.0.3",
        "sade": "^1.7.3"
      },
      "bin": {
        "uvu": "bin.js"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/vaul": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vaul/-/vaul-1.1.2.tgz",
      "integrity": "sha512-ZFkClGpWyI2WUQjdLJ/BaGuV6AVQiJ3uELGk3OYtP+B6yCO7Cmn9vPFXVJkRaGkOJu3m8bQMgtyzNHixULceQA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-dialog": "^1.1.1"
      },
      "peerDependencies": {
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0.0 || ^19.0.0-rc"
      }
    },
    "node_modules/vfile": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/vfile/-/vfile-6.0.3.tgz",
      "integrity": "sha512-KzIbH/9tXat2u30jf+smMwFCsno4wHVdNmzFyL+T/L3UGqqk6JKfVqOFOZEpZSHADH1k40ab6NUIXZq422ov3Q==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/vfile-message": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/vfile-message/-/vfile-message-4.0.3.tgz",
      "integrity": "sha512-QTHzsGd1EhbZs4AsQ20JX1rC3cOlt/IWJruk893DfLRr57lcnOeMaWG4K0JrRta4mIJZKth2Au3mM3u03/JWKw==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "unist-util-stringify-position": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/victory-vendor": {
      "version": "36.9.2",
      "resolved": "https://registry.npmjs.org/victory-vendor/-/victory-vendor-36.9.2.tgz",
      "integrity": "sha512-PnpQQMuxlwYdocC8fIJqVXvkeViHYzotI+NJrCuav0ZYFoq912ZHBk3mCeuj+5/VpodOjPe1z0Fk2ihgzlXqjQ==",
      "license": "MIT AND ISC",
      "dependencies": {
        "@types/d3-array": "^3.0.3",
        "@types/d3-ease": "^3.0.0",
        "@types/d3-interpolate": "^3.0.1",
        "@types/d3-scale": "^4.0.2",
        "@types/d3-shape": "^3.1.0",
        "@types/d3-time": "^3.0.0",
        "@types/d3-timer": "^3.0.0",
        "d3-array": "^3.1.6",
        "d3-ease": "^3.0.1",
        "d3-interpolate": "^3.0.1",
        "d3-scale": "^4.0.2",
        "d3-shape": "^3.1.0",
        "d3-time": "^3.0.0",
        "d3-timer": "^3.0.1"
      }
    },
    "node_modules/w3c-keyname": {
      "version": "2.2.8",
      "resolved": "https://registry.npmjs.org/w3c-keyname/-/w3c-keyname-2.2.8.tgz",
      "integrity": "sha512-dpojBhNsCNN7T82Tm7k26A6G9ML3NkhDsnw9n/eoxSRlVBB4CEtIQ/KTCLI2Fwf3ataSXRhYFkQi3SlnFwPvPQ==",
      "license": "MIT"
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.1.1.tgz",
      "integrity": "sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-bigint": "^1.1.0",
        "is-boolean-object": "^1.2.1",
        "is-number-object": "^1.1.1",
        "is-string": "^1.1.1",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/which-builtin-type/-/which-builtin-type-1.2.1.tgz",
      "integrity": "sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "function.prototype.name": "^1.1.6",
        "has-tostringtag": "^1.0.2",
        "is-async-function": "^2.0.0",
        "is-date-object": "^1.1.0",
        "is-finalizationregistry": "^1.1.0",
        "is-generator-function": "^1.0.10",
        "is-regex": "^1.2.1",
        "is-weakref": "^1.0.2",
        "isarray": "^2.0.5",
        "which-boxed-primitive": "^1.1.0",
        "which-collection": "^1.0.2",
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-collection": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-collection/-/which-collection-1.0.2.tgz",
      "integrity": "sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-map": "^2.0.3",
        "is-set": "^2.0.3",
        "is-weakmap": "^2.0.2",
        "is-weakset": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.22",
      "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.22.tgz",
      "integrity": "sha512-fvO4ExWMFsqyhG3AiPAObMuY1lxaqgYcxbc49CNdWDDECOJNgQyvsOWVwbZc+qf3rzRtxojBK+CMEv0Ld5CYpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "for-each": "^0.3.5",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yjs": {
      "version": "13.6.32",
      "resolved": "https://registry.npmjs.org/yjs/-/yjs-13.6.32.tgz",
      "integrity": "sha512-lfiJIIC4Xayt5ItynE407ehlE03pCjeOc4hkR4yxxvvNJ4kuiN25B0g+Qp8XagYz361LLL7DCzR5bvFJ81QKtQ==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "lib0": "^0.2.99"
      },
      "engines": {
        "node": ">=16.0.0",
        "npm": ">=8.0.0"
      },
      "funding": {
        "type": "GitHub Sponsors ❤",
        "url": "https://github.com/sponsors/dmonad"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/z-ai-web-dev-sdk": {
      "version": "0.0.18",
      "resolved": "https://registry.npmjs.org/z-ai-web-dev-sdk/-/z-ai-web-dev-sdk-0.0.18.tgz",
      "integrity": "sha512-xVoZIEME2F+/Z06orHCgUKzOMuFPhoHuzN4ZFZqcD71g11nzbzq2jKSP53igi3lJFE8ZbMB4WKb4gp6lCGrMXQ==",
      "license": "ISC",
      "bin": {
        "z-ai": "dist/cli.js",
        "z-ai-generate": "dist/cli.js"
      },
      "engines": {
        "bun": ">=1.3.0",
        "node": ">=20.0.0"
      }
    },
    "node_modules/zod": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.4.3.tgz",
      "integrity": "sha512-ytENFjIJFl2UwYglde2jchW2Hwm4GJFLDiSXWdTrJQBIN9Fcyp7n4DhxJEiWNAJMV1/BqWfW/kkg71UDcHJyTQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-validation-error": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/zod-validation-error/-/zod-validation-error-4.0.2.tgz",
      "integrity": "sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "peerDependencies": {
        "zod": "^3.25.0 || ^4.0.0"
      }
    },
    "node_modules/zustand": {
      "version": "5.0.15",
      "resolved": "https://registry.npmjs.org/zustand/-/zustand-5.0.15.tgz",
      "integrity": "sha512-MpSEjRiBkA9crSYeOUH32rJC7SVqAbm0Fqcqge/bUi2PPoLcBWKOsG+C8mevmpr8TwXHBVkChbbJiyvkE+i/3A==",
      "license": "MIT",
      "engines": {
        "node": ">=12.20.0"
      },
      "peerDependencies": {
        "@types/react": ">=18.0.0",
        "immer": ">=9.0.6",
        "react": ">=18.0.0",
        "use-sync-external-store": ">=1.2.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "immer": {
          "optional": true
        },
        "react": {
          "optional": true
        },
        "use-sync-external-store": {
          "optional": true
        }
      }
    },
    "node_modules/zwitch": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/zwitch/-/zwitch-2.0.4.tgz",
      "integrity": "sha512-bXE4cR/kVZhKZX/RjPEflHaKVhUVl85noU3v6b8apfQEc1x4A+zBxjZ4lN8LqGd6WZ3dl98pY4o717VFmoPp+A==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    }
  }
}

```
`package.json`:

```json
{
  "name": "asr-al-shams",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start -p 3000",
    "lint": "eslint ."
  },
  "dependencies": {
    "@dnd-kit/core": "^6.3.1",
    "@dnd-kit/sortable": "^10.0.0",
    "@dnd-kit/utilities": "^3.2.2",
    "@hookform/resolvers": "^5.1.1",
    "@mdxeditor/editor": "^3.39.1",
    "@prisma/client": "^6.11.1",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-context-menu": "^2.2.15",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-hover-card": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.5",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-toggle": "^1.1.9",
    "@radix-ui/react-toggle-group": "^1.1.10",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@reactuses/core": "^6.0.5",
    "@tanstack/react-query": "^5.82.0",
    "@tanstack/react-table": "^8.21.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^12.23.2",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.525.0",
    "next": "^16.1.1",
    "next-auth": "^4.24.11",
    "next-intl": "^4.3.4",
    "next-themes": "^0.4.6",
    "prisma": "^6.11.1",
    "react": "^19.0.0",
    "react-day-picker": "^9.8.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.60.0",
    "react-markdown": "^10.1.0",
    "react-resizable-panels": "^3.0.3",
    "react-syntax-highlighter": "^15.6.1",
    "recharts": "^2.15.4",
    "sharp": "^0.34.3",
    "sonner": "^2.0.6",
    "tailwind-merge": "^3.3.1",
    "tailwindcss-animate": "^1.0.7",
    "uuid": "^11.1.0",
    "vaul": "^1.1.2",
    "z-ai-web-dev-sdk": "^0.0.18",
    "zod": "^4.0.2",
    "zustand": "^5.0.6"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "bun-types": "^1.3.4",
    "eslint": "^9",
    "eslint-config-next": "^16.1.1",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.3.5",
    "typescript": "^5"
  }
}

```
`postcss.config.mjs`:

```mjs
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;

```
`prisma\schema.prisma`:

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```
`src\app\about\page.tsx`:

```tsx
"use client";

import Link from "next/link";
import { 
  ArrowLeft, CheckCircle2, Target, Eye, Heart, 
  Award, Users, Handshake, Headphones, Sparkles, 
  ChevronDown, Building2, Leaf
} from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { COMPANY, STATS, WHY_US, BRANDS } from "@/components/site/data";

const VALUES = [
  { icon: Target, title: "رسالتنا", desc: "توفير حلول طاقة شمسية موثوقة ومستدامة تساهم في بناء مستقبل طاقي أفضل لليمن والمنطقة." },
  { icon: Eye, title: "رؤيتنا", desc: "أن نكون الشركة الرائدة في مجال الطاقة المتجددة في اليمن، والشريك الأول لكل من يبحث عن طاقة نظيفة." },
  { icon: Heart, title: "قيمنا", desc: "الجودة، الشفافية، الالتزام، الابتكار، والمسؤولية البيئية — نلتزم بها في كل مشروع." },
];

const MILESTONES = [
  { year: "2020", ar: "تأسيس الشركة وانطلاق الرؤية", desc: "بدأنا رحلتنا بهدف توفير حلول طاقة بديلة ومستدامة للسوق اليمني." },
  { year: "2021", ar: "الشراكة الاستراتيجية مع AE Solar", desc: "أصبحنا الوكيل المعتمد لثالث أكبر مصنع للألواح الشمسية في ألمانيا." },
  { year: "2022", ar: "أول مشروع تجاري ضخم (100+ kW)", desc: "تنفيذ وتدشين أول محطة تجارية كبرى تعتمد بالكامل على الطاقة المتجددة." },
  { year: "2023", ar: "توسع الوكالات لتشمل 4 علامات عالمية", desc: "ضم علامات Sinexcel و Sunwoda و TOP CABLE لقائمة شركائنا المعتمدين." },
  { year: "2024", ar: "إنجاز أكبر مشروع بسعة 409 kW", desc: "تنفيذ أضخم مشاريعنا حتى الآن، مما يعزز مكانتنا كرواد في القطاع." },
];

const WHY_ICONS: Record<string, any> = { Award, Users, Handshake, Headphones };

const ABOUT_SLIDES = [
  {
    bg: "/hero/hero-bg-1.jpg",
    badge: "رواد الطاقة المتجددة في اليمن",
    titleLine1: "نبني مستقبلاً مشرقاً",
    titleLine2: "بطاقة لا تنضب",
    desc: "نفخر بكوننا شريكاً موثوقاً في استيراد وتوريد وتركيب وتشغيل وصيانة أنظمة الطاقة الشمسية بأعلى المعايير العالمية.",
  },
  {
    bg: "/hero/hero-bg-2.jpg",
    badge: "خبرة وتميز",
    titleLine1: "فريق هندسي متخصص",
    titleLine2: "لحلول مستدامة",
    desc: "من التخطيط ودراسة الجدوى إلى التركيب والصيانة، نقدم لك خبرة تراكمية تضمن كفاءة مشروعك لسنوات طويلة.",
  },
  {
    bg: "/projects/commercial.jpg",
    badge: "شراكات استراتيجية",
    titleLine1: "نستقطب أفضل التقنيات",
    titleLine2: "من العالم إليك",
    desc: "نعمل مع كبرى الشركات العالمية لضمان توفير أحدث الألواح والمحولات والبطاريات بضمانات حقيقية.",
  }
];

// Reusable Typewriter Component
const TypewriterText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const characters = Array.from(text);
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.03, delayChildren: delay },
        },
      }}
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % ABOUT_SLIDES.length);
    }, 7000); // 7 seconds per slide to allow typewriter to finish
    return () => clearInterval(timer);
  }, []);

  return (
    <PageLayout>
      {/* 1. Cinematic Typewriter Carousel Hero */}
      <section ref={containerRef} className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Carousel Backgrounds */}
        <AnimatePresence initial={false}>
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1, y: y.get() }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img src={ABOUT_SLIDES[activeSlide].bg} alt="Asr Al-Shams" className="w-full h-full object-cover opacity-50" />
          </motion.div>
        </AnimatePresence>
        
        {/* Advanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-background" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center h-48 sm:h-56 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm text-white mb-6 shadow-2xl">
                  <Sparkles className="w-4 h-4 text-brand-green-lighter" />
                  <TypewriterText text={ABOUT_SLIDES[activeSlide].badge} delay={0.2} />
                </div>

                <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.2] mb-6 drop-shadow-2xl">
                  <TypewriterText text={ABOUT_SLIDES[activeSlide].titleLine1} delay={0.5} />
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-green-light via-brand-green to-brand-blue-lighter">
                    <TypewriterText text={ABOUT_SLIDES[activeSlide].titleLine2} delay={1.2} />
                  </span>
                </h1>

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.8 }} // Fades in after typing is mostly done
                  className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto drop-shadow-md"
                >
                  {ABOUT_SLIDES[activeSlide].desc}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {ABOUT_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`transition-all duration-500 rounded-full h-1.5 ${
                idx === activeSlide ? "w-8 bg-brand-green shadow-[0_0_10px_#398B30]" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`الذهاب إلى الشريحة ${idx + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest font-mono">اكتشف المزيد</span>
          <ChevronDown className="w-5 h-5 animate-bounce text-brand-green-lighter" />
        </motion.div>
      </section>

      {/* 2. The Story (Sticky Scroll Layout) */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-brand-green/5 blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Sticky Heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <Reveal>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center shadow-xl mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-heading font-extrabold text-4xl sm:text-5xl mb-6 text-slate-900 leading-tight">
                  قصة <span className="text-brand-green-dark">{COMPANY.name}</span>
                </h2>
                <div className="flex flex-wrap gap-2 mt-8">
                  {["N-Type / HJT / ABC", "On-Grid / Off-Grid", "Lithium-Ion", "TOP CABLE"].map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-4 py-2 text-xs text-slate-700 font-mono shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />{tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Scrolling Content & Stats */}
            <div className="lg:col-span-7 space-y-12">
              <Reveal delay={0.2}>
                <div className="prose prose-lg prose-slate rtl:prose-reverse max-w-none text-slate-600 leading-loose text-justify">
                  <p className="text-xl font-medium text-slate-800 mb-6">{COMPANY.about.short}</p>
                  <p>{COMPANY.about.long}</p>
                </div>
              </Reveal>

              <StaggerContainer className="grid grid-cols-2 gap-4 sm:gap-6 pt-8 border-t border-slate-100" stagger={0.1}>
                {STATS.map((s, i) => (
                  <StaggerItem key={i}>
                    <div className="glass-strong rounded-3xl p-6 sm:p-8 text-center border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="font-heading font-extrabold text-4xl sm:text-5xl text-gradient-solar mb-3">
                        <CountUp end={s.value} suffix={s.suffix} duration={2.5} />
                      </div>
                      <div className="text-sm sm:text-base font-medium text-slate-600">{s.label}</div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Mission / Vision / Values (Floating 3D Cards) */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-aurora opacity-20 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">المحركات الأساسية لنجاحنا</h2>
          </Reveal>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-6" stagger={0.15}>
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={i}>
                  <div className="relative group h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-brand-blue/20 rounded-3xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                    <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="font-heading font-bold text-2xl mb-4 text-white">{v.title}</h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Animated Vertical Timeline */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 relative">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">رحلة التطور والنمو</h2>
            <p className="text-slate-600 mt-4">محطات هامة شكلت مسيرتنا في قطاع الطاقة المتجددة.</p>
          </Reveal>

          <div className="max-w-4xl mx-auto relative">
            {/* Center Line for Desktop, Right Line for Mobile */}
            <div className="absolute right-8 md:right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-green/10 via-brand-blue/30 to-brand-green/10 md:translate-x-1/2 rounded-full" />

            <div className="space-y-12">
              {MILESTONES.map((m, i) => {
                const isEven = i % 2 === 0;
                return (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      
                      {/* Timeline Node */}
                      <div className="absolute right-8 md:right-1/2 w-12 h-12 md:translate-x-1/2 translate-x-1/2 bg-white rounded-full border-4 border-brand-green flex items-center justify-center shadow-xl z-10">
                        <Leaf className="w-5 h-5 text-brand-green-dark" />
                      </div>

                      {/* Content Box */}
                      <div className={`w-full md:w-1/2 pr-20 pl-4 md:px-12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="glass-strong p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                          <span className="inline-block px-4 py-1 rounded-full bg-brand-green/10 text-brand-green-dark font-mono font-bold text-lg mb-4">
                            {m.year}
                          </span>
                          <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-3">{m.ar}</h3>
                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{m.desc}</p>
                        </div>
                      </div>

                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why us */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4">لماذا تختار عصر الشمس؟</h2>
          </Reveal>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {WHY_US.map((item, i) => {
              const Icon = WHY_ICONS[item.icon] ?? Award;
              return (
                <StaggerItem key={i}>
                  <div className="group bento-card p-8 h-full text-center border border-slate-100 hover:border-brand-green/30">
                    <div className="relative inline-flex mb-6">
                      <div className="absolute inset-0 rounded-2xl bg-brand-green/20 blur-xl group-hover:bg-brand-green/40 transition-colors duration-500" />
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500">
                        <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3 text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. Agencies */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 relative">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4">شركاؤنا العالميون</h2>
            <p className="text-slate-600">نعمل مع نخبة من العلامات التجارية لضمان أعلى معايير الجودة.</p>
          </Reveal>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {BRANDS.map((brand, i) => (
              <StaggerItem key={i}>
                <div className="glass-strong p-8 h-full rounded-3xl border border-slate-200 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-300">
                  <div className="h-20 flex items-center justify-center mb-6">
                    <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">{brand.name}</h3>
                  <p className="text-xs text-brand-green-dark font-mono bg-brand-green/10 px-3 py-1 rounded-full mb-4">{brand.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{brand.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <Reveal>
            <div className="relative bg-slate-900 rounded-[3rem] p-10 sm:p-16 overflow-hidden text-center shadow-2xl">
              <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-green/30 blur-3xl animate-pulse-glow" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand-blue/30 blur-3xl animate-pulse-glow" />
              
              <div className="relative z-10">
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">لنبني نجاحك القادم معاً</h2>
                <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                  اكتشف كيف يمكن لحلولنا في الطاقة الشمسية أن تساعدك في تخفيض التكاليف وتحقيق الاستدامة التشغيلية.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-brand-green hover:bg-brand-green-light px-8 py-4 text-base font-bold text-white shadow-xl hover:scale-105 transition-all duration-300">
                  اطلب استشارة مجانية
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
```
`src\app\admin\page.tsx`:

```tsx
"use client";

import dynamic from "next/dynamic";

const AdminPage = dynamic(
  () => import("@/components/admin/AdminPanel").then((m) => m.AdminPage),
  { ssr: false, loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full border-4 border-brand-green/20 border-t-brand-green animate-spin" />
        <p className="text-sm text-slate-500 font-mono">Loading admin...</p>
      </div>
    </div>
  )}
);

export default function AdminRoute() {
  return <AdminPage />;
}

```
`src\app\api\route.ts`:

```ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}
```
`src\app\contact\page.tsx`:

```tsx
"use client";

import { useState } from "react";
import { 
  MapPin, Phone, Mail, Send, CheckCircle2, 
  MessageCircle, Facebook, Linkedin, ExternalLink 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { COMPANY } from "@/components/site/data";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate network request
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("تم إرسال طلبك بنجاح!", { description: "سيتواصل معك فريقنا خلال 24 ساعة عمل." });
    (e.target as HTMLFormElement).reset();
    
    // Hide success overlay after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  }

  // The exact Google Maps location link for the button
  const mapLink = "https://maps.app.goo.gl/YkEzXyECsZGpxp1W9";
  
  // The highly accurate embed URL using the provided Plus Code and Address
  const mapEmbedUrl = "https://maps.google.com/maps?q=868P%2BMV5%2C%20Khawlan%20St%2C%20Sanaa%2C%20Yemen&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <PageLayout>
      
      {/* --- CUSTOM CINEMATIC CONTACT HERO --- */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Background Image & Ambient Overlays */}
        <motion.div 
          initial={{ scale: 1.1 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }} 
          className="absolute inset-0 w-full h-full"
        >
          <img src="/hero/hero-bg-2.jpg" alt="تواصل معنا" className="w-full h-full object-cover opacity-40 filter contrast-125" />
        </motion.div>
        
        {/* Gradients to blend into the section below */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-slate-50" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />

        {/* Floating Abstract Icons for Tech/Communication Feel */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[5%] lg:right-[15%] w-16 h-16 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl hidden md:flex"
        >
          <Phone className="w-7 h-7 text-brand-green-lighter" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-[5%] lg:left-[15%] w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl hidden md:flex"
        >
          <Mail className="w-6 h-6 text-brand-blue-lighter" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 left-[15%] lg:left-[25%] w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl hidden xl:flex"
        >
          <MapPin className="w-5 h-5 text-emerald-400" />
        </motion.div>

        {/* Main Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm text-white mb-6 shadow-xl">
              <MessageCircle className="w-4 h-4 text-brand-green-lighter" />
              <span>فريق الدعم والاستشارات</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.2] mb-6 drop-shadow-2xl">
              كيف يمكننا <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-green-light to-brand-blue-lighter">مساعدتك اليوم؟</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              نحن هنا للإجابة على استفساراتك، تقديم الاستشارات الهندسية، وتوفير أفضل حلول الطاقة الشمسية المخصصة لمشروعك.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FORM & MAP SECTION --- */}
      <section className="py-20 sm:py-32 relative overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-brand-green/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full bg-brand-blue/5 blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Modern Form */}
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <Reveal>
                <div className="mb-10">
                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 leading-tight">
                    دعنا نبني <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">مستقبلاً مستداماً</span> معاً
                  </h2>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    سواء كنت تبحث عن استشارة، عرض سعر لمشروعك، أو لديك استفسار تقني، نحن جاهزون للمساعدة.
                  </p>
                </div>

                <div className="relative">
                  {/* Success Overlay */}
                  <AnimatePresence>
                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="absolute inset-0 z-20 bg-white/90 backdrop-blur-md rounded-[2rem] flex flex-col items-center justify-center text-center p-8 border border-brand-green/20 shadow-2xl"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.2 }}
                          className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center mb-6 shadow-lg shadow-brand-green/30"
                        >
                          <CheckCircle2 className="w-10 h-10 text-white" />
                        </motion.div>
                        <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">تم الإرسال بنجاح!</h3>
                        <p className="text-slate-600 text-base">لقد استلمنا رسالتك، وسيقوم أحد خبرائنا بالتواصل معك قريباً.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">الاسم الكامل <span className="text-red-500">*</span></label>
                        <Input 
                          id="name" name="name" required placeholder="مثال: أحمد محمد" 
                          className="h-14 rounded-2xl bg-white border-slate-200 focus:border-brand-green focus:ring-4 focus:ring-brand-green/20 transition-all text-base px-5 shadow-sm hover:border-slate-300" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">رقم الهاتف <span className="text-red-500">*</span></label>
                        <Input 
                          id="phone" name="phone" required type="tel" placeholder="7XX XXX XXX" 
                          className="h-14 rounded-2xl bg-white border-slate-200 focus:border-brand-green focus:ring-4 focus:ring-brand-green/20 transition-all text-base px-5 shadow-sm hover:border-slate-300 ltr-nums text-left" dir="ltr" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">البريد الإلكتروني</label>
                      <Input 
                        id="email" name="email" type="email" placeholder="you@example.com" 
                        className="h-14 rounded-2xl bg-white border-slate-200 focus:border-brand-green focus:ring-4 focus:ring-brand-green/20 transition-all text-base px-5 shadow-sm hover:border-slate-300 ltr-nums text-left" dir="ltr" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">نوع المشروع <span className="text-red-500">*</span></label>
                      <select 
                        id="projectType" name="projectType" required defaultValue=""
                        className="w-full h-14 rounded-2xl bg-white border border-slate-200 px-5 text-base text-slate-700 focus:border-brand-green focus:outline-none focus:ring-4 focus:ring-brand-green/20 transition-all shadow-sm cursor-pointer hover:border-slate-300"
                      >
                        <option value="" disabled>اختر نوع المشروع...</option>
                        <option value="residential">نظام سكني</option>
                        <option value="commercial">نظام تجاري / شركات</option>
                        <option value="industrial">نظام صناعي / مصانع</option>
                        <option value="agricultural">زراعي / منظومة ضخ مياه</option>
                        <option value="other">استفسار عام / أخرى</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">تفاصيل الطلب <span className="text-red-500">*</span></label>
                      <Textarea 
                        id="message" name="message" required rows={5} placeholder="كيف يمكننا مساعدتك؟ يرجى كتابة تفاصيل مشروعك أو استفسارك هنا..." 
                        className="rounded-2xl bg-white border-slate-200 focus:border-brand-green focus:ring-4 focus:ring-brand-green/20 transition-all text-base p-5 resize-none shadow-sm hover:border-slate-300" 
                      />
                    </div>

                    <Button 
                      type="submit" disabled={submitting} 
                      className="w-full h-14 rounded-full bg-slate-900 hover:bg-brand-green text-white font-bold text-lg shadow-xl hover:shadow-brand-green/30 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {submitting ? (
                        <span className="flex items-center gap-3">
                          <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          جاري معالجة الطلب...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          إرسال الطلب الآن
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </Reveal>
            </div>

            {/* RIGHT COLUMN: Interactive Map & Floating Contact Info */}
            <div className="lg:col-span-7 h-full order-1 lg:order-2">
              <Reveal className="h-full">
                <div className="relative w-full h-[600px] lg:h-full min-h-[650px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 group bg-slate-100">
                  
                  {/* Embedded Google Map */}
                  <iframe
                    src={mapEmbedUrl}
                    className="absolute inset-0 w-full h-full border-0 filter contrast-[1.05] group-hover:contrast-100 transition-all duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع عصر الشمس على الخريطة"
                  />
                  
                  {/* Dark Gradient Scrim to make text readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent pointer-events-none" />

                  {/* Floating Contact Cards Overlaid on Map */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                    <div className="glass-strong rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl backdrop-blur-xl">
                      
                      <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        {/* Address */}
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-brand-green-lighter" />
                          </div>
                          <div>
                            <div className="text-xs font-mono text-white/60 mb-1">الموقع الجغرافي</div>
                            <div className="text-sm font-bold text-white leading-relaxed">{COMPANY.address}</div>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-brand-blue-lighter" />
                          </div>
                          <div>
                            <div className="text-xs font-mono text-white/60 mb-1">اتصل بنا</div>
                            <div className="flex flex-col">
                              {COMPANY.phones.map((p) => (
                                <a key={p} href={`tel:${p}`} className="text-sm font-bold text-white hover:text-brand-green-lighter transition-colors ltr-nums text-right" dir="ltr">
                                  {p}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Map Action Button & Socials */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
                        <a 
                          href={mapLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-bold shadow-lg hover:bg-brand-green hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          افتح في خرائط جوجل
                        </a>

                        <div className="flex gap-2">
                          <a href={COMPANY.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-green-500 transition-colors">
                            <MessageCircle className="w-5 h-5" />
                          </a>
                          <a href={COMPANY.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                            <Facebook className="w-5 h-5" />
                          </a>
                          <a href={COMPANY.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-sky-600 transition-colors">
                            <Linkedin className="w-5 h-5" />
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
}
```
`src\app\globals.css`:

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  /* Brand palette — green (#398B30) + blue (#2B5EA8) */
  --color-brand-green: #398B30;
  --color-brand-green-light: #4FA843;
  --color-brand-green-lighter: #6FB96B;
  --color-brand-green-dark: #2D7028;
  --color-brand-blue: #2B5EA8;
  --color-brand-blue-light: #3D75BD;
  --color-brand-blue-lighter: #5A8FCC;
  --color-brand-blue-dark: #1F4A87;

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-tajawal);
  --font-body: var(--font-tajawal);
  --font-heading: var(--font-cairo);
  --font-display: var(--font-cairo);
  --font-mono: var(--font-geist);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  /* Eco-tech LIGHT palette — brand green (#398B30) + blue (#2B5EA8) on white */
  --radius: 1rem;

  /* Light canvas — soft warm white with green undertone */
  --background: oklch(0.985 0.008 130);
  --foreground: oklch(0.21 0.03 200);

  /* Cards — pure white with subtle green-tinted border */
  --card: oklch(1 0 0 / 80%);
  --card-foreground: oklch(0.21 0.03 200);

  --popover: oklch(1 0 0 / 95%);
  --popover-foreground: oklch(0.21 0.03 200);

  /* Primary — brand green #398B30 */
  --primary: oklch(0.556 0.150 142);
  --primary-foreground: oklch(0.99 0.01 120);

  /* Secondary — brand blue #2B5EA8 */
  --secondary: oklch(0.476 0.140 252);
  --secondary-foreground: oklch(0.99 0.01 120);

  --muted: oklch(0.96 0.01 130);
  --muted-foreground: oklch(0.45 0.02 200);

  /* Accent — lighter brand green */
  --accent: oklch(0.652 0.130 142);
  --accent-foreground: oklch(0.21 0.03 200);

  --destructive: oklch(0.58 0.22 27);
  --border: oklch(0.88 0.015 180);
  --input: oklch(0.92 0.01 180);
  --ring: oklch(0.556 0.150 142);

  /* Chart palette — alternating green/blue tints */
  --chart-1: oklch(0.556 0.150 142);
  --chart-2: oklch(0.476 0.140 252);
  --chart-3: oklch(0.652 0.130 142);
  --chart-4: oklch(0.557 0.130 252);
  --chart-5: oklch(0.719 0.110 142);

  --sidebar: oklch(0.98 0.008 130);
  --sidebar-foreground: oklch(0.21 0.03 200);
  --sidebar-primary: oklch(0.556 0.150 142);
  --sidebar-primary-foreground: oklch(0.99 0.01 120);
  --sidebar-accent: oklch(0.95 0.012 130);
  --sidebar-accent-foreground: oklch(0.21 0.03 200);
  --sidebar-border: oklch(0.88 0.015 180);
  --sidebar-ring: oklch(0.556 0.150 142);
}

.dark {
  /* Theme is dark by default; no overrides needed */
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-foreground;
    font-family: var(--font-body), system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading), system-ui, sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: oklch(0.96 0.01 130);
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(oklch(0.476 0.140 252), oklch(0.556 0.150 142));
    border-radius: 999px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(oklch(0.556 0.150 142), oklch(0.652 0.130 142));
  }

  ::selection {
    background: oklch(0.556 0.150 142 / 25%);
    color: oklch(0.21 0.03 200);
  }
}

/* Glassmorphism surface — light translucent white with green border */
@utility glass {
  background: linear-gradient(
    135deg,
    oklch(1 0 0 / 80%),
    oklch(0.97 0.012 130 / 60%)
  );
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border: 1px solid oklch(0.556 0.150 142 / 22%);
  box-shadow: 0 4px 24px oklch(0.556 0.150 142 / 8%);
}

@utility glass-strong {
  background: linear-gradient(
    135deg,
    oklch(1 0 0 / 92%),
    oklch(0.97 0.012 130 / 80%)
  );
  backdrop-filter: blur(24px) saturate(160%);
  -webkit-backdrop-filter: blur(24px) saturate(160%);
  border: 1px solid oklch(0.556 0.150 142 / 28%);
  box-shadow: 0 8px 32px oklch(0.556 0.150 142 / 10%);
}

/* Gradient text — eco green → blue (readable on light bg) */
@utility text-gradient-solar {
  background: linear-gradient(
    120deg,
    oklch(0.45 0.155 142) 0%,
    oklch(0.556 0.150 142) 35%,
    oklch(0.40 0.155 252) 75%,
    oklch(0.556 0.150 142) 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

@utility text-gradient-glow {
  background: linear-gradient(
    120deg,
    oklch(0.40 0.155 142),
    oklch(0.556 0.150 142) 35%,
    oklch(0.40 0.155 252) 65%,
    oklch(0.40 0.155 142)
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: shimmer 4s linear infinite;
}

/* Glow ring — green halo */
@utility glow-amber {
  box-shadow:
    0 0 0 1px oklch(0.556 0.150 142 / 25%),
    0 0 30px oklch(0.556 0.150 142 / 28%),
    0 0 60px oklch(0.476 0.140 252 / 18%);
}

@utility glow-amber-hover {
  transition: box-shadow 0.4s ease;
  &:hover {
    box-shadow:
      0 0 0 1px oklch(0.652 0.130 142 / 40%),
      0 0 40px oklch(0.556 0.150 142 / 38%),
      0 0 80px oklch(0.476 0.140 252 / 28%);
  }
}

/* Animated gradient background — green + blue aurora */
@utility bg-aurora {
  background:
    radial-gradient(at 20% 20%, oklch(0.556 0.150 142 / 18%) 0px, transparent 50%),
    radial-gradient(at 80% 0%, oklch(0.476 0.140 252 / 15%) 0px, transparent 50%),
    radial-gradient(at 50% 100%, oklch(0.652 0.130 142 / 10%) 0px, transparent 50%),
    radial-gradient(at 0% 50%, oklch(0.557 0.130 252 / 10%) 0px, transparent 50%);
}

/* Grid pattern background — green-tinted lines */
@utility bg-grid {
  background-image:
    linear-gradient(oklch(0.556 0.150 142 / 7%) 1px, transparent 1px),
    linear-gradient(to right, oklch(0.556 0.150 142 / 7%) 1px, transparent 1px);
  background-size: 48px 48px;
}

@utility bg-dots {
  background-image: radial-gradient(oklch(0.556 0.150 142 / 18%) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* Conic eco orb rays — alternating green & blue */
@utility sun-rays {
  background:
    conic-gradient(
      from 0deg,
      transparent 0deg,
      oklch(0.556 0.150 142 / 25%) 10deg,
      transparent 20deg,
      transparent 30deg,
      oklch(0.476 0.140 252 / 22%) 40deg,
      transparent 50deg,
      transparent 60deg,
      oklch(0.652 0.130 142 / 25%) 70deg,
      transparent 80deg,
      transparent 90deg,
      oklch(0.556 0.150 142 / 22%) 100deg,
      transparent 110deg,
      transparent 120deg,
      oklch(0.557 0.130 252 / 20%) 130deg,
      transparent 140deg,
      transparent 150deg,
      oklch(0.719 0.110 142 / 25%) 160deg,
      transparent 170deg,
      transparent 180deg,
      oklch(0.556 0.150 142 / 22%) 190deg,
      transparent 200deg,
      transparent 210deg,
      oklch(0.476 0.140 252 / 22%) 220deg,
      transparent 230deg,
      transparent 240deg,
      oklch(0.652 0.130 142 / 25%) 250deg,
      transparent 260deg,
      transparent 270deg,
      oklch(0.556 0.150 142 / 22%) 280deg,
      transparent 290deg,
      transparent 300deg,
      oklch(0.557 0.130 252 / 20%) 310deg,
      transparent 320deg,
      transparent 330deg,
      oklch(0.719 0.110 142 / 25%) 340deg,
      transparent 350deg
    );
}

/* No-scrollbar */
@utility no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
}

/* Arabic numerals stay LTR inside RTL */
@utility ltr-nums {
  direction: ltr;
  unicode-bidi: embed;
}

/* Bento card — light glass with green border + hover lift */
.bento-card {
  background: linear-gradient(
    135deg,
    oklch(1 0 0 / 90%),
    oklch(0.97 0.012 130 / 70%)
  );
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border: 1px solid oklch(0.556 0.150 142 / 22%);
  border-radius: var(--radius-2xl, 1.5rem);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
  box-shadow: 0 4px 20px oklch(0.556 0.150 142 / 6%);
}
.bento-card:hover {
  transform: translateY(-4px);
  border-color: oklch(0.556 0.150 142 / 45%);
  box-shadow:
    0 0 0 1px oklch(0.556 0.150 142 / 30%),
    0 12px 40px oklch(0.556 0.150 142 / 18%),
    0 0 60px oklch(0.476 0.140 252 / 12%);
}

/* Keyframe animations */
@keyframes shimmer {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow { animation: spin-slow 40s linear infinite; }

@keyframes spin-slower {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}
.animate-spin-slower { animation: spin-slower 60s linear infinite; }

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}
.animate-pulse-glow { animation: pulse-glow 5s ease-in-out infinite; }

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}
.animate-float { animation: float 6s ease-in-out infinite; }

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
}
[dir="rtl"] .animate-marquee {
  animation: marquee 30s linear infinite reverse;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

```
`src\app\layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Cairo, Tajawal, Geist } from "next/font/google";
import "./globals.css";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "عصر الشمس للاستيراد والتجارة | حلول الطاقة الشمسية في اليمن",
  description:
    "شركة عصر الشمس — رائدة في اليمن في استيراد وتركيب وتشغيل أنظمة الطاقة الشمسية. ألواح AE Solar، انفرترات Sinexcel، بطاريات Sunwoda، كابلات TOP CABLE الإسبانية.",
  keywords: [
    "الطاقة الشمسية",
    "اليمن",
    "صنعاء",
    "ألواح شمسية",
    "انفرترات",
    "بطاريات ليثيوم",
    "Asr Al-Shams",
    "solar energy Yemen",
    "AE Solar",
    "Sinexcel",
    "Sunwoda",
    "TOP CABLE",
  ],
  authors: [{ name: "عصر الشمس" }],
  openGraph: {
    title: "عصر الشمس للاستيراد والتجارة",
    description: "حلول متكاملة وموثوقة لاستيراد، تركيب، وتشغيل أنظمة الطاقة الشمسية عالية الجودة.",
    url: "https://aseralshams.com/",
    siteName: "عصر الشمس",
    locale: "ar_YE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "عصر الشمس للاستيراد والتجارة",
    description: "حلول متكاملة لأنظمة الطاقة الشمسية عالية الجودة في اليمن.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${tajawal.variable} ${geist.variable} antialiased bg-background text-foreground font-body`}
      >
        {children}
        <SonnerToaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}

```
`src\app\page.tsx`:

```tsx
import { Navbar } from "@/components/site/Navbar";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { BrandsCarousel } from "@/components/site/BrandsCarousel";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      {/* Skip link for a11y */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand-green focus:text-white focus:font-semibold"
      >
        تخطى إلى المحتوى
      </a>

      <Navbar />

      <main className="flex-1">
        <HeroCarousel />
        <BrandsCarousel />
        <About />
        <Products />
        <Services />
        <Projects />
        <WhyUs />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/+967780177177"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="fixed bottom-5 left-5 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-brand-green to-brand-green-dark shadow-2xl shadow-brand-green/40 flex items-center justify-center text-white hover:scale-110 transition-transform group"
      >
        <span className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-20" />
        <svg
          className="relative w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
}

```
`src\app\products\category\[id]\page.tsx`:

```tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Sun, Zap, BatteryCharging, Cable, Lightbulb, Wrench, Factory, Home,
  CheckCircle2, ArrowLeft, ArrowUpRight, Package, ChevronLeft,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/site/Reveal";
import { useStore } from "@/lib/store";

const ICONS: Record<string, LucideIcon> = {
  Sun, Zap, BatteryCharging, Cable, Lightbulb, Wrench, Factory, Home,
};

const CATEGORY_BG: Record<string, string> = {
  panels: "/hero/hero-bg-1.jpg",
  inverters: "/hero/hero-bg-2.jpg",
  batteries: "/hero/hero-bg-1.jpg",
  cables: "/hero/hero-bg-2.jpg",
};

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.id as string;

  const categories = useStore((s) => s.categories);
  const products = useStore((s) => s.products);
  const category = categories.find((c) => c.id === categoryId);
  const categoryProducts = products.filter((p) => p.categoryId === categoryId);

  if (!category) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <Package className="w-16 h-16 mx-auto mb-4 text-slate-300" />
            <h1 className="font-heading font-bold text-2xl text-slate-700 mb-2">القسم غير موجود</h1>
            <button onClick={() => router.push("/products")} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-5 py-2.5 text-sm font-semibold text-white">
              <ArrowLeft className="w-4 h-4" />العودة للمنتجات
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  const Icon = ICONS[category.icon] ?? Sun;
  const bgImage = CATEGORY_BG[categoryId] || "/hero/hero-bg-1.jpg";

  return (
    <PageLayout>
      {/* Category hero */}
      <section className="relative h-[45vh] min-h-[360px] max-h-[520px] w-full overflow-hidden flex items-end">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={bgImage} alt="" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative container mx-auto px-4 pb-12 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="max-w-3xl"
          >
            <nav className="flex items-center gap-2 text-xs text-white/70 mb-4">
              <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
              <ChevronLeft className="w-3.5 h-3.5" />
              <Link href="/products" className="hover:text-white transition-colors">منتجاتنا</Link>
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="text-brand-green-lighter font-medium">{category.name}</span>
            </nav>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center shadow-lg">
                <Icon className="w-8 h-8 text-white" strokeWidth={2.2} />
              </div>
              <div>
                <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight drop-shadow-2xl">
                  {category.name}
                </h1>
                <p className="text-sm text-white/70 mt-1 ltr-nums">{categoryProducts.length} منتج</p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-100/90 leading-relaxed max-w-2xl drop-shadow-lg">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          {/* Other categories — quick switch */}
          <Reveal className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-4 h-4 text-brand-green-dark" />
              <span className="text-sm font-medium text-slate-600">أقسام أخرى</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.filter((c) => c.id !== categoryId).map((cat) => {
                const CatIcon = ICONS[cat.icon] ?? Package;
                const count = products.filter((p) => p.categoryId === cat.id).length;
                return (
                  <Link
                    key={cat.id}
                    href={`/products/category/${cat.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass text-slate-600 hover:bg-brand-green/10 transition-all text-sm font-medium"
                  >
                    <CatIcon className="w-3.5 h-3.5" />
                    {cat.name}
                    <span className="text-xs text-slate-400 font-mono">({count})</span>
                  </Link>
                );
              })}
            </div>
          </Reveal>

          {categoryProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex w-20 h-20 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 items-center justify-center mb-5">
                <Package className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-700 mb-2">لا توجد منتجات في هذا القسم بعد</h3>
              <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
                يمكنك إضافة منتجات لهذا القسم من لوحة التحكم، أو استعرض منتجات الأقسام الأخرى.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                استعرض جميع المنتجات
              </Link>
            </div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
              {categoryProducts.map((p) => (
                <StaggerItem key={p.id}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative bento-card p-0 h-full overflow-hidden"
                  >
                    {/* Image at top — large, prominent */}
                    <div className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                      <div className={`absolute -top-16 -left-16 w-48 h-48 rounded-full bg-gradient-to-br ${p.accent} opacity-20 group-hover:opacity-40 blur-3xl transition-opacity duration-700`} />
                      {p.image ? (
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${p.accent} flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500`}>
                            <Icon className="w-12 h-12 text-white" strokeWidth={2.2} />
                          </div>
                        </div>
                      )}
                      {/* Category badge on top of image */}
                      <div className="absolute top-3 right-3 glass-strong rounded-full px-3 py-1 flex items-center gap-1.5">
                        <Icon className="w-3 h-3 text-brand-green-dark" />
                        <span className="text-[10px] font-mono text-slate-700">{category.name}</span>
                      </div>
                    </div>

                    {/* Content below image */}
                    <div className="p-5">
                      <div className="text-[11px] text-brand-green-dark font-mono tracking-wider mb-1">{p.brand}</div>
                      <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-brand-green-dark transition-colors">{p.name}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{p.description}</p>
                      <ul className="space-y-1.5 mb-4">
                        {p.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green-dark hover:text-brand-green group/link"
                      >
                        عرض التفاصيل
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </motion.article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          {/* CTA */}
          <Reveal className="mt-16">
            <div className="relative glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden text-center">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-green/20 blur-3xl animate-pulse-glow" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-glow" />
              <div className="relative">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">هل تحتاج استشارة حول {category.name}؟</h2>
                <p className="text-slate-600 max-w-xl mx-auto mb-6">فريقنا جاهز لمساعدتك في اختيار المنتج الأمثل لمشروعك.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all">
                  اطلب عرض سعر الآن
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}

```
`src\app\products\page.tsx`:

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sun, Zap, BatteryCharging, Cable, 
  ArrowLeft, Package, Sparkles 
} from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/site/Reveal";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const ICONS: Record<string, any> = {
  Sun, Zap, BatteryCharging, Cable,
};

const CATEGORY_STYLES: Record<string, { bg: string, ring: string, text: string }> = {
  panels: { bg: "from-emerald-50 to-teal-100/50", ring: "group-hover:ring-emerald-200", text: "text-emerald-700" },
  inverters: { bg: "from-blue-50 to-indigo-100/50", ring: "group-hover:ring-blue-200", text: "text-blue-700" },
  batteries: { bg: "from-teal-50 to-emerald-100/50", ring: "group-hover:ring-teal-200", text: "text-teal-700" },
  cables: { bg: "from-cyan-50 to-blue-100/50", ring: "group-hover:ring-cyan-200", text: "text-cyan-700" },
};

export default function ProductsPage() {
  const products = useStore((s) => s.products);
  const categories = useStore((s) => s.categories);

  return (
    <PageLayout>
      {/* 1. Light & Airy Mobile-First Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-slate-50">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 w-[30rem] md:w-[50rem] h-[30rem] md:h-[50rem] rounded-full bg-brand-green/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[20rem] md:w-[40rem] h-[20rem] md:h-[40rem] rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2 text-xs md:text-sm text-brand-green-dark mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span className="font-bold tracking-wide">منتجاتنا المبتكرة</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl text-slate-900 mb-6 tracking-tight leading-[1.1]">
              مستقبل <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-green to-brand-blue">الطاقة النظيفة</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
              نقدم لك أحدث تقنيات الطاقة الشمسية من العلامات التجارية الرائدة عالمياً. صممت لتلبي احتياجات المنازل والشركات بأعلى كفاءة.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Soft Bento Grid - Mobile Optimized */}
      <section className="py-12 sm:py-20 relative bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" stagger={0.1}>
            {categories.map((cat) => {
              const Icon = ICONS[cat.icon] ?? Package;
              const categoryProducts = products.filter((p) => p.categoryId === cat.id);
              const count = categoryProducts.length;
              const previewProduct = categoryProducts.find(p => p.image);
              
              const style = CATEGORY_STYLES[cat.id] || { 
                bg: "from-slate-50 to-slate-100", 
                ring: "group-hover:ring-slate-200",
                text: "text-slate-700" 
              };

              return (
                <StaggerItem key={cat.id}>
                  <Link
                    href={`/products/category/${cat.id}`}
                    className={cn(
                      "group flex flex-col w-full h-full bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ring-4 ring-transparent focus-visible:outline-none",
                      style.ring
                    )}
                  >
                    {/* Image / Visual Header */}
                    <div className={cn("relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-gradient-to-br", style.bg)}>
                      {/* Decorative internal blob */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/40 blur-3xl rounded-full" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 shadow-sm border border-white">
                        <Icon className={cn("w-4 h-4", style.text)} />
                        <span className="text-xs font-bold text-slate-800">{count} منتجات</span>
                      </div>

                      {/* Floating Product Preview */}
                      {previewProduct ? (
                        <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
                          <motion.img 
                            src={previewProduct.image} 
                            alt="" 
                            className="w-full h-full object-contain filter drop-shadow-xl group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-700 ease-out"
                          />
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="w-24 h-24 text-slate-300 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700" strokeWidth={1} />
                        </div>
                      )}
                    </div>

                    {/* Content Footer */}
                    <div className="flex flex-col flex-1 p-6 sm:p-8">
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-3 group-hover:text-brand-green-dark transition-colors">
                        {cat.name}
                      </h3>
                      
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-2 mb-6">
                        {cat.description}
                      </p>
                      
                      <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-brand-green-dark group-hover:text-brand-green transition-colors">
                        <span>استعرض الفئة</span>
                        <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </section>

      {/* 3. Light CTA Section */}
      <section className="py-20 relative overflow-hidden bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal>
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
              <Package className="w-8 h-8 text-brand-green" />
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 mb-4">
              لم تجد المواصفات المطلوبة؟
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-8 text-sm sm:text-base">
              نوفر حلولاً مخصصة لتلبية المتطلبات التقنية الدقيقة لمشاريعك. تواصل معنا للحصول على عروض أسعار للطلبيات الخاصة.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 rounded-full bg-slate-900 hover:bg-brand-green px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              تواصل مع المبيعات
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
```
`src\app\projects\[id]\page.tsx`:

```tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { MapPin, Zap, ArrowLeft, ChevronLeft, Calendar, Briefcase, CheckCircle2, Sparkles, MessageSquare, TrendingUp } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { useStore } from "@/lib/store";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const projects = useStore((s) => s.projects);
  const project = projects.find((p) => p.id === id);
  const related = projects.filter((p) => p.id !== id).slice(0, 3);

  if (!project) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <Briefcase className="w-16 h-16 mx-auto mb-4 text-slate-300" />
            <h1 className="font-heading font-bold text-2xl text-slate-700 mb-2">المشروع غير موجود</h1>
            <button onClick={() => router.push("/projects")} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-5 py-2.5 text-sm font-semibold text-white">
              <ArrowLeft className="w-4 h-4" />العودة للمشاريع
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Breadcrumb bar */}
      <div className="pt-24 sm:pt-28 pb-4 bg-slate-50/50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-brand-green-dark transition-colors">الرئيسية</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <Link href="/projects" className="hover:text-brand-green-dark transition-colors">مشاريعنا</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-brand-green-dark font-medium truncate">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* Project hero with image */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex items-end pb-12 sm:pb-16">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 px-3 py-1 text-xs text-white font-mono">{project.type}</span>
                <span className="inline-flex items-center gap-1 text-xs text-white/80"><MapPin className="w-3.5 h-3.5" />{project.location}</span>
                {project.date && <span className="inline-flex items-center gap-1 text-xs text-white/80 ltr-nums"><Calendar className="w-3.5 h-3.5" />{project.date}</span>}
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight mb-4 drop-shadow-2xl">{project.title}</h1>
              <div className="flex items-end gap-3">
                <div className="font-heading font-extrabold text-5xl sm:text-6xl text-white ltr-nums leading-none drop-shadow-lg">{project.capacity}</div>
                <div className="pb-1 text-white/90 text-sm sm:text-base">{project.unit}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project details */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-4">نظرة عامة على المشروع</h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">{project.description}</p>
              </Reveal>

              {/* Project highlights */}
              <Reveal delay={0.1}>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h3 className="font-heading font-bold text-lg mb-4">أبرز ما يميز المشروع</h3>
                  <ul className="space-y-3">
                    {[
                      "تصميم ودراسة هندسية متكاملة",
                      "تركيب احترافي بفريق متخصص",
                      "مكونات أصلية بضمان معتمد",
                      "متابعة وصيانة بعد التركيب",
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 text-sm sm:text-base pt-0.5">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Sidebar — specs */}
            <div className="lg:col-span-1">
              <Reveal delay={0.15}>
                <div className="glass-strong rounded-2xl p-6 sticky top-24">
                  <h3 className="font-heading font-bold text-lg mb-4 pb-3 border-b border-slate-200">مواصفات المشروع</h3>
                  <dl className="space-y-4">
                    <SpecRow icon={Zap} label="السعة المركّبة" value={`${project.capacity} ${project.unit}`} />
                    <SpecRow icon={Briefcase} label="نوع النظام" value={project.type} />
                    <SpecRow icon={MapPin} label="الموقع" value={project.location} />
                    {project.date && <SpecRow icon={Calendar} label="سنة التنفيذ" value={project.date} />}
                  </dl>

                  <Link href="/contact" className="mt-6 inline-flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-md hover:scale-105 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                    اطلب مشروعاً مماثلاً
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="py-12 sm:py-16 relative overflow-hidden bg-slate-50/50">
        <div className="container mx-auto px-4 relative">
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard icon={Zap} value={parseFloat(project.capacity) || 0} suffix=" kW" label="السعة" color="from-brand-blue to-indigo-500" />
              <StatCard icon={TrendingUp} value={98} suffix="%" label="الكفاءة" color="from-brand-green to-emerald-500" />
              <StatCard icon={CheckCircle2} value={30} suffix="+" label="سنوات ضمان" color="from-emerald-500 to-teal-600" />
              <StatCard icon={Calendar} value={project.date ? parseInt(project.date) : 2024} label="سنة التنفيذ" color="from-brand-green to-brand-blue" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-12 sm:py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <Reveal className="mb-8">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-brand-green-dark" />
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl">مشاريع أخرى</h2>
              </div>
            </Reveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
              {related.map((p) => (
                <StaggerItem key={p.id}>
                  <Link href={`/projects/${p.id}`} className="group relative block overflow-hidden rounded-2xl h-48 shadow-md">
                    {p.image ? (
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    <div className="absolute top-3 right-3 glass-strong rounded-full px-3 py-1 flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-brand-green-dark" />
                      <span className="text-[10px] font-mono text-slate-700 ltr-nums">{p.capacity} {p.unit}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-heading font-bold text-sm text-white line-clamp-1 group-hover:text-brand-green-lighter transition-colors">{p.title}</h3>
                      <p className="text-[10px] text-white/70 flex items-center gap-1 mt-0.5"><MapPin className="w-2.5 h-2.5" />{p.location}</p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <Reveal>
            <div className="relative glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden text-center">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-green/20 blur-3xl animate-pulse-glow" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-glow" />
              <div className="relative">
                <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue items-center justify-center mb-4 shadow-lg">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">جاهز لبدء مشروعك؟</h2>
                <p className="text-slate-600 max-w-xl mx-auto mb-6">دعنا نساعدك في تصميم وتركيب نظام طاقة شمسية يلبي احتياجاتك.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all">
                  اطلب عرض سعر الآن
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}

function SpecRow({ icon: Icon, label, value }: { icon: typeof Zap; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-slate-500">
        <Icon className="w-4 h-4" />
        <span className="text-xs">{label}</span>
      </div>
      <span className="text-sm font-semibold text-slate-800 text-right">{value}</span>
    </div>
  );
}

function StatCard({ icon: Icon, value, suffix, label, color }: { icon: typeof Zap; value: number; suffix?: string; label: string; color: string }) {
  return (
    <div className="bento-card p-5 text-center group">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-2xl sm:text-3xl font-heading font-extrabold text-gradient-solar">
        <CountUp end={value} suffix={suffix} duration={2} />
      </div>
      <div className="text-xs sm:text-sm text-slate-500 mt-1">{label}</div>
    </div>
  );
}

```
`src\app\projects\page.tsx`:

```tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Zap, ArrowLeft, Calendar, Briefcase, TrendingUp, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { useStore } from "@/lib/store";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const projects = useStore((s) => s.projects);
  const totalCapacity = projects.reduce((sum, p) => sum + (parseFloat(p.capacity) || 0), 0);
  const maxCapacity = Math.max(...projects.map((p) => parseFloat(p.capacity) || 0), 0);

  return (
    <PageLayout>
      {/* 1. Cinematic Hero */}
      <section className="relative h-[60vh] min-h-[500px] md:h-[75vh] md:min-h-[600px] flex items-center justify-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-background z-0" />
        
        {/* Dynamic Abstract Meshes */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-1/4 w-[30rem] md:w-[50rem] h-[30rem] md:h-[50rem] rounded-full bg-brand-green/10 blur-[120px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-1/4 w-[20rem] md:w-[40rem] h-[20rem] md:h-[40rem] rounded-full bg-brand-blue/10 blur-[120px] pointer-events-none" 
        />
        
        <div className="container mx-auto px-4 relative z-20 text-center mt-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-2 text-xs md:text-sm text-brand-green-lighter mb-8 shadow-2xl">
              <Sparkles className="w-4 h-4" />
              <span>سجل الإنجازات</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-8xl text-white mb-6 tracking-tight drop-shadow-2xl">
              مشاريع <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-green-light to-brand-blue-lighter">تلهم المستقبل</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              اكتشف كيف قمنا بتحويل التحديات إلى نجاحات مستدامة عبر مجموعة من أضخم مشاريع الطاقة المتجددة في اليمن، مصممة بأعلى المعايير الهندسية.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Overlapping Glass Stats Bar */}
      <div className="relative z-40 px-4 -mt-16 md:-mt-20 mb-20 md:mb-32">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="glass-strong rounded-[2rem] p-6 md:p-10 shadow-2xl border border-white/60"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 divide-slate-200/50 md:divide-x md:divide-x-reverse">
              <div className="pt-2 md:pt-0"><StatItem icon={Briefcase} value={projects.length} label="إجمالي المشاريع المنجزة" /></div>
              <div className="pt-2 md:pt-0"><StatItem icon={Zap} value={totalCapacity} suffix=" kW" label="إجمالي السعة المركبة" /></div>
              <div className="pt-6 md:pt-0"><StatItem icon={TrendingUp} value={maxCapacity} suffix=" kW" label="أكبر محطة تم تنفيذها" /></div>
              <div className="pt-6 md:pt-0"><StatItem icon={Calendar} value={4} suffix="+" label="سنوات من الخبرة والتميز" /></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. The Editorial Grid Gallery (Mobile Stacked -> Desktop Overlapping) */}
      <section className="py-8 md:py-16 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {projects.length === 0 ? (
            <div className="text-center py-32 text-slate-400">
              <Briefcase className="w-24 h-24 mx-auto mb-6 opacity-20" />
              <p className="text-2xl font-medium">جاري تحديث معرض المشاريع...</p>
            </div>
          ) : (
            <div className="space-y-32 md:space-y-48">
              {projects.map((project, index) => (
                <EditorialProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Deep Dark Footer CTA */}
      <section className="py-24 md:py-40 relative overflow-hidden bg-slate-950 mt-20">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] md:w-[80rem] h-[40rem] md:h-[80rem] rounded-full bg-brand-green/10 blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal>
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(57,139,48,0.4)]">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-7xl text-white mb-8 leading-tight">
              هل أنت مستعد لتكون <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-lighter to-brand-blue-light">قصة نجاحنا القادمة؟</span>
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 text-lg font-bold text-slate-900 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-105 hover:bg-brand-green hover:text-white hover:shadow-[0_0_60px_rgba(57,139,48,0.4)] transition-all duration-500 group"
            >
              ابدأ مشروعك الآن
              <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}

// --- Sub-components ---

function StatItem({ icon: Icon, value, suffix = "", label }: { icon: React.ElementType, value: number, suffix?: string, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <Icon className="w-7 h-7 text-brand-green-dark mb-4 opacity-80" />
      <div className="font-heading font-extrabold text-4xl md:text-5xl text-slate-900 tracking-tight mb-2">
        <CountUp end={value} suffix={suffix} duration={2.5} />
      </div>
      <div className="text-sm text-slate-500 font-medium">{label}</div>
    </div>
  );
}

function EditorialProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  
  // Parallax effects
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  // Logical flow in RTL: col-start-1 is the RIGHT side.
  // Even index: Image on Right (col 1-8), Text on Left (col 7-12)
  // Odd index: Text on Right (col 1-6), Image on Left (col 5-12)
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col lg:grid lg:grid-cols-12 lg:items-center group"
    >
      
      {/* 1. IMAGE CONTAINER */}
      <div 
        className={cn(
          "relative z-10 w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100",
          "aspect-[4/3] lg:aspect-[16/10]",
          // Desktop Grid Placement
          isEven ? "lg:col-span-8 lg:col-start-1" : "lg:col-span-8 lg:col-start-5"
        )}
      >
        {project.image ? (
          <motion.img 
            style={{ y: yImage }}
            src={project.image} 
            alt={project.title} 
            className="absolute top-[-15%] left-0 w-full h-[130%] object-cover filter lg:grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out" 
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
        )}
        
        {/* Dark overlay for mobile text readability, fades out on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:opacity-0 transition-opacity duration-500" />

        {/* Capacity Badge */}
        <div className="absolute top-6 right-6 glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 z-10 shadow-xl border border-white/20">
          <Zap className="w-5 h-5 text-brand-green-dark" />
          <span className="text-lg font-bold text-slate-900 ltr-nums tracking-tight">{project.capacity}</span>
          <span className="text-sm text-slate-700 font-bold">{project.unit}</span>
        </div>
      </div>

      {/* 2. TEXT CONTENT CARD */}
      <div 
        className={cn(
          "relative z-20 mx-4 md:mx-12 lg:mx-0",
          "-mt-20 md:-mt-32 lg:mt-0", // Mobile/Tablet pull-up overlap
          // Desktop Grid Placement (Intentional Overlap)
          isEven ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-6 lg:col-start-1"
        )}
      >
        <div className="glass-strong rounded-[2rem] p-8 md:p-12 border border-white/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-2xl bg-white/95 group-hover:bg-white transition-colors duration-700">
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-slate-900 px-4 py-1.5 text-xs text-white font-bold font-mono tracking-wide">
              {project.type}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-bold">
              <MapPin className="w-4 h-4" />
              {project.location}
            </span>
            {project.date && (
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-bold ltr-nums">
                <Calendar className="w-4 h-4" />
                {project.date}
              </span>
            )}
          </div>

          <h3 className="font-heading font-extrabold text-2xl md:text-4xl text-slate-900 mb-5 leading-tight">
            {project.title}
          </h3>
          
          <p className="text-slate-600 leading-relaxed mb-8 text-base md:text-lg line-clamp-3 md:line-clamp-none">
            {project.description}
          </p>

          <Link 
            href={`/projects/${project.id}`} 
            className="inline-flex items-center justify-between w-full rounded-2xl bg-slate-50 px-6 py-4 text-sm font-bold text-slate-900 hover:bg-brand-green hover:text-white transition-colors duration-300 group/link"
          >
            <span>عرض تفاصيل المشروع</span>
            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-900 group-hover/link:text-brand-green group-hover/link:-translate-x-1 transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
      
    </motion.div> /* FIXED THE SYNTAX BUG HERE! */
  );
}
```
`src\components\admin\AdminPanel.tsx`:

```tsx
"use client";

import { useState } from "react";
import {
  X, Lock, LayoutDashboard, FolderTree, Package, Briefcase,
  Plus, Edit2, Trash2, Save, RotateCcw, LogOut, Home,
} from "lucide-react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import type { Category, Product, Project } from "@/lib/types";

const ICONS = ["Sun", "Zap", "BatteryCharging", "Cable", "Lightbulb", "Wrench", "Factory", "Home", "Award", "Users", "Handshake", "Headphones"];
const ACCENTS = [
  { label: "Green → Blue", value: "from-emerald-500 to-brand-blue" },
  { label: "Blue → Indigo", value: "from-brand-blue to-indigo-600" },
  { label: "Emerald → Teal", value: "from-emerald-400 to-teal-600" },
  { label: "Cyan → Blue", value: "from-cyan-500 to-brand-blue" },
  { label: "Orange → Red", value: "from-orange-500 to-red-600" },
  { label: "Slate", value: "from-slate-500 to-slate-700" },
];

export function AdminPage() {
  const isAdmin = useStore((s) => s.isAdmin);
  const logout = useStore((s) => s.logout);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-30 bg-gradient-to-r from-brand-green to-brand-blue text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white shadow-lg ring-1 ring-white/30 overflow-hidden flex items-center justify-center">
              <img src="/brand/logo.png" alt="Asr Al-Shams" className="w-full h-full object-cover" width={40} height={40} />
            </div>
            <div>
              <h1 className="font-heading font-bold text-base sm:text-lg leading-tight">لوحة التحكم</h1>
              <p className="text-[10px] text-white/70 font-mono tracking-wider uppercase">Asr Al-Shams Admin</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isAdmin && (
              <button onClick={() => { logout(); toast.success("تم تسجيل الخروج"); }} className="inline-flex items-center gap-1.5 rounded-lg bg-white/15 hover:bg-white/25 px-3 py-2 text-xs sm:text-sm font-medium transition-colors">
                <LogOut className="w-3.5 h-3.5" /><span className="hidden sm:inline">خروج</span>
              </button>
            )}
            <Link href="/" className="inline-flex items-center gap-1.5 rounded-lg bg-white/15 hover:bg-white/25 px-3 py-2 text-xs sm:text-sm font-medium transition-colors">
              <Home className="w-3.5 h-3.5" /><span className="hidden sm:inline">الموقع</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {!isAdmin ? <LoginScreen /> : <Dashboard />}
      </main>
    </div>
  );
}

function LoginScreen() {
  const login = useStore((s) => s.login);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) toast.success("مرحباً بك!");
    else setError(true);
  };
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <form onSubmit={submit} className="w-full max-w-sm space-y-4">
        <div className="text-center mb-6">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green to-brand-blue items-center justify-center mb-4 shadow-lg shadow-brand-green/30">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">تسجيل الدخول</h3>
          <p className="text-sm text-slate-500 mt-1">أدخل كلمة المرور للوصول إلى لوحة التحكم</p>
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1.5">كلمة المرور</label>
          <Input type="password" value={password} onChange={(e) => { setPassword(e.target.value); setError(false); }} autoFocus className={`bg-white ${error ? "border-red-500" : "border-slate-300"}`} placeholder="••••••••" />
          {error && <p className="text-xs text-red-500 mt-1">كلمة المرور غير صحيحة</p>}
          <p className="text-xs text-slate-400 mt-1.5">كلمة المرور الافتراضية: admin123</p>
        </div>
        <Button type="submit" className="w-full h-11 bg-gradient-to-r from-brand-green to-brand-blue hover:opacity-90 text-white font-semibold">دخول</Button>
      </form>
    </div>
  );
}

function Dashboard() {
  const [tab, setTab] = useState<"dashboard" | "categories" | "products" | "projects">("dashboard");
  const categories = useStore((s) => s.categories);
  const products = useStore((s) => s.products);
  const projects = useStore((s) => s.projects);
  const tabs = [
    { id: "dashboard" as const, label: "الرئيسية", icon: LayoutDashboard },
    { id: "categories" as const, label: "الأقسام", icon: FolderTree },
    { id: "products" as const, label: "المنتجات", icon: Package },
    { id: "projects" as const, label: "المشاريع", icon: Briefcase },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <aside className="lg:w-60 flex-shrink-0">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-2 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button key={t.id} onClick={() => setTab(t.id)} className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 lg:w-full ${tab === t.id ? "bg-gradient-to-r from-brand-green to-brand-blue text-white shadow-md" : "text-slate-600 hover:bg-slate-100"}`}>
                <Icon className="w-4 h-4 flex-shrink-0" />{t.label}
              </button>
            );
          })}
        </div>
      </aside>
      <div className="flex-1 min-w-0">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6">
          {tab === "dashboard" && <DashboardHome />}
          {tab === "categories" && <CategoriesManager />}
          {tab === "products" && <ProductsManager />}
          {tab === "projects" && <ProjectsManager />}
        </div>
      </div>
    </div>
  );
}

function DashboardHome() {
  const categories = useStore((s) => s.categories);
  const products = useStore((s) => s.products);
  const projects = useStore((s) => s.projects);
  const resetToDefaults = useStore((s) => s.resetToDefaults);
  const stats = [
    { label: "الأقسام", count: categories.length, icon: FolderTree, color: "from-emerald-500 to-brand-green" },
    { label: "المنتجات", count: products.length, icon: Package, color: "from-brand-blue to-indigo-500" },
    { label: "المشاريع", count: projects.length, icon: Briefcase, color: "from-brand-green to-emerald-600" },
  ];
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading font-bold text-2xl text-slate-900 mb-1">مرحباً بك في لوحة التحكم</h3>
        <p className="text-slate-500 text-sm">من هنا يمكنك إدارة الأقسام والمنتجات والمشاريع بشكل كامل.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="rounded-2xl p-5 bg-gradient-to-br from-slate-50 to-white border border-slate-200">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 shadow-md`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-heading font-extrabold text-slate-900">{s.count}</div>
              <div className="text-sm text-slate-500 mt-0.5">{s.label}</div>
            </div>
          );
        })}
      </div>
      <div className="pt-4 border-t border-slate-200">
        <button onClick={() => { if (confirm("هل أنت متأكد؟ سيتم استعادة البيانات الافتراضية.")) { resetToDefaults(); toast.success("تم إعادة التعيين"); } }} className="inline-flex items-center gap-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 text-sm font-medium transition-colors">
          <RotateCcw className="w-4 h-4" />إعادة تعيين البيانات
        </button>
      </div>
    </div>
  );
}

// ─── Categories ─────────────────────────────────────────
function CategoriesManager() {
  const categories = useStore((s) => s.categories);
  const [editing, setEditing] = useState<Category | null>(null);
  const [showForm, setShowForm] = useState(false);
  if (showForm || editing) return <CategoryForm category={editing} onClose={() => { setEditing(null); setShowForm(false); }} />;
  return (
    <div>
      <ManagerHeader title="الأقسام" count={categories.length} onAdd={() => setShowForm(true)} />
      {categories.length === 0 ? <EmptyState message="لا توجد أقسام" /> : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[...categories].sort((a, b) => a.order - b.order).map((cat) => <CategoryCard key={cat.id} category={cat} onEdit={() => setEditing(cat)} />)}
        </div>
      )}
    </div>
  );
}

function CategoryCard({ category, onEdit }: { category: Category; onEdit: () => void }) {
  const deleteCategory = useStore((s) => s.deleteCategory);
  return (
    <div className="rounded-xl p-4 flex items-start gap-3 bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center flex-shrink-0">
        <FolderTree className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-heading font-bold text-slate-900 truncate">{category.name}</h4>
        <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">{category.description}</p>
      </div>
      <div className="flex gap-1 flex-shrink-0">
        <button onClick={onEdit} className="w-8 h-8 rounded-lg bg-white hover:bg-brand-green hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>
        <button onClick={() => { if (confirm("هل أنت متأكد من الحذف؟")) { deleteCategory(category.id); toast.success("تم الحذف"); } }} className="w-8 h-8 rounded-lg bg-white hover:bg-red-500 hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
      </div>
    </div>
  );
}

function CategoryForm({ category, onClose }: { category: Category | null; onClose: () => void }) {
  const addCategory = useStore((s) => s.addCategory);
  const updateCategory = useStore((s) => s.updateCategory);
  const [name, setName] = useState(category?.name || "");
  const [description, setDescription] = useState(category?.description || "");
  const [icon, setIcon] = useState(category?.icon || "Sun");
  const [image, setImage] = useState(category?.image || "");
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, description, icon, image };
    if (category) { updateCategory(category.id, data); toast.success("تم التحديث"); }
    else { addCategory(data); toast.success("تمت الإضافة"); }
    onClose();
  };
  return (
    <form onSubmit={save} className="max-w-2xl space-y-4">
      <FormHeader title={category ? "تعديل" : "إضافة جديد"} onClose={onClose} />
      <FormField label="الاسم"><Input value={name} onChange={(e) => setName(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
      <FormField label="الوصف"><Textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={2} dir="rtl" className="bg-white border-slate-300 resize-none" /></FormField>
      <FormField label="الأيقونة"><select value={icon} onChange={(e) => setIcon(e.target.value)} className="w-full h-10 rounded-md bg-white border border-slate-300 px-3 text-sm">{ICONS.map((ic) => <option key={ic} value={ic}>{ic}</option>)}</select></FormField>
      <ImageURLField value={image} onChange={setImage} />
      <FormActions onCancel={onClose} />
    </form>
  );
}

// ─── Products ───────────────────────────────────────────
function ProductsManager() {
  const products = useStore((s) => s.products);
  const categories = useStore((s) => s.categories);
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  if (showForm || editing) return <ProductForm product={editing} onClose={() => { setEditing(null); setShowForm(false); }} />;
  return (
    <div>
      <ManagerHeader title="المنتجات" count={products.length} onAdd={() => setShowForm(true)} />
      {products.length === 0 ? <EmptyState message="لا توجد منتجات" /> : (
        <div className="space-y-2">
          {[...products].sort((a, b) => a.order - b.order).map((prod) => <ProductRow key={prod.id} product={prod} categoryName={categories.find((c) => c.id === prod.categoryId)?.name || "—"} onEdit={() => setEditing(prod)} />)}
        </div>
      )}
    </div>
  );
}

function ProductRow({ product, categoryName, onEdit }: { product: Product; categoryName: string; onEdit: () => void }) {
  const deleteProduct = useStore((s) => s.deleteProduct);
  return (
    <div className="rounded-xl p-3 flex items-center gap-3 bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
      {product.image ? (
        <img src={product.image} alt="" className="w-12 h-12 rounded-lg object-contain bg-white p-1 flex-shrink-0" />
      ) : (
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.accent} flex items-center justify-center flex-shrink-0`}><Package className="w-6 h-6 text-white" /></div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-heading font-bold text-slate-900 truncate">{product.name}</h4>
          <span className="text-[10px] text-brand-green-dark bg-brand-green/10 px-1.5 py-0.5 rounded font-mono">{categoryName}</span>
        </div>
        <p className="text-xs text-slate-500 truncate">{product.brand} · {product.features.length} مميزات</p>
      </div>
      <div className="flex gap-1 flex-shrink-0">
        <button onClick={onEdit} className="w-8 h-8 rounded-lg bg-white hover:bg-brand-green hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>
        <button onClick={() => { if (confirm("هل أنت متأكد من الحذف؟")) { deleteProduct(product.id); toast.success("تم الحذف"); } }} className="w-8 h-8 rounded-lg bg-white hover:bg-red-500 hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
      </div>
    </div>
  );
}

function ProductForm({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const addProduct = useStore((s) => s.addProduct);
  const updateProduct = useStore((s) => s.updateProduct);
  const categories = useStore((s) => s.categories);
  const [name, setName] = useState(product?.name || "");
  const [brand, setBrand] = useState(product?.brand || "");
  const [description, setDescription] = useState(product?.description || "");
  const [categoryId, setCategoryId] = useState(product?.categoryId || categories[0]?.id || "");
  const [image, setImage] = useState(product?.image || "");
  const [accent, setAccent] = useState(product?.accent || ACCENTS[0].value);
  const [features, setFeatures] = useState<string[]>(product?.features || [""]);
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, brand, description, categoryId, image, accent, features: features.filter((f) => f.trim()) };
    if (product) { updateProduct(product.id, data); toast.success("تم التحديث"); }
    else { addProduct(data); toast.success("تمت الإضافة"); }
    onClose();
  };
  return (
    <form onSubmit={save} className="max-w-2xl space-y-4">
      <FormHeader title={product ? "تعديل" : "إضافة جديد"} onClose={onClose} />
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="الاسم"><Input value={name} onChange={(e) => setName(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
        <FormField label="العلامة التجارية"><Input value={brand} onChange={(e) => setBrand(e.target.value)} required className="bg-white border-slate-300" /></FormField>
      </div>
      <FormField label="القسم"><select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="w-full h-10 rounded-md bg-white border border-slate-300 px-3 text-sm">{categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></FormField>
      <FormField label="الوصف"><Textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={2} dir="rtl" className="bg-white border-slate-300 resize-none" /></FormField>
      <FormField label="المميزات">
        <div className="space-y-2">
          {features.map((f, i) => (
            <div key={i} className="flex gap-2">
              <Input value={f} onChange={(e) => setFeatures((prev) => prev.map((p, j) => j === i ? e.target.value : p))} placeholder="ميزة" dir="rtl" className="bg-white border-slate-300 text-sm" />
              <button type="button" onClick={() => setFeatures((prev) => prev.filter((_, j) => j !== i))} className="w-9 h-9 rounded-lg bg-white hover:bg-red-500 hover:text-white text-slate-500 border border-slate-200 flex items-center justify-center transition-colors flex-shrink-0"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          ))}
          <button type="button" onClick={() => setFeatures((prev) => [...prev, ""])} className="inline-flex items-center gap-1.5 text-sm text-brand-green-dark hover:text-brand-green font-medium"><Plus className="w-4 h-4" />إضافة ميزة</button>
        </div>
      </FormField>
      <FormField label="لون التدرج">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {ACCENTS.map((a) => (
            <button key={a.value} type="button" onClick={() => setAccent(a.value)} className={`flex items-center gap-2 p-2 rounded-lg border-2 transition-all ${accent === a.value ? "border-brand-green shadow-md" : "border-slate-200 hover:border-slate-300"}`}>
              <div className={`w-8 h-8 rounded bg-gradient-to-br ${a.value} flex-shrink-0`} /><span className="text-xs text-slate-600 truncate">{a.label}</span>
            </button>
          ))}
        </div>
      </FormField>
      <ImageURLField value={image} onChange={setImage} />
      <FormActions onCancel={onClose} />
    </form>
  );
}

// ─── Projects ───────────────────────────────────────────
function ProjectsManager() {
  const projects = useStore((s) => s.projects);
  const [editing, setEditing] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);
  if (showForm || editing) return <ProjectForm project={editing} onClose={() => { setEditing(null); setShowForm(false); }} />;
  return (
    <div>
      <ManagerHeader title="المشاريع" count={projects.length} onAdd={() => setShowForm(true)} />
      {projects.length === 0 ? <EmptyState message="لا توجد مشاريع" /> : (
        <div className="space-y-2">
          {[...projects].sort((a, b) => a.order - b.order).map((proj) => <ProjectRow key={proj.id} project={proj} onEdit={() => setEditing(proj)} />)}
        </div>
      )}
    </div>
  );
}

function ProjectRow({ project, onEdit }: { project: Project; onEdit: () => void }) {
  const deleteProject = useStore((s) => s.deleteProject);
  return (
    <div className="rounded-xl p-3 flex items-center gap-3 bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
      {project.image ? (
        <img src={project.image} alt="" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
      ) : (
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.accent} flex items-center justify-center flex-shrink-0`}><Briefcase className="w-6 h-6 text-white" /></div>
      )}
      <div className="flex-1 min-w-0">
        <h4 className="font-heading font-bold text-slate-900 truncate">{project.title}</h4>
        <p className="text-xs text-slate-500 truncate"><span className="ltr-nums inline-block">{project.capacity}</span> {project.unit} · {project.location}</p>
      </div>
      <div className="flex gap-1 flex-shrink-0">
        <button onClick={onEdit} className="w-8 h-8 rounded-lg bg-white hover:bg-brand-green hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>
        <button onClick={() => { if (confirm("هل أنت متأكد من الحذف؟")) { deleteProject(project.id); toast.success("تم الحذف"); } }} className="w-8 h-8 rounded-lg bg-white hover:bg-red-500 hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
      </div>
    </div>
  );
}

function ProjectForm({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const addProject = useStore((s) => s.addProject);
  const updateProject = useStore((s) => s.updateProject);
  const [title, setTitle] = useState(project?.title || "");
  const [type, setType] = useState(project?.type || "");
  const [capacity, setCapacity] = useState(project?.capacity || "");
  const [unit, setUnit] = useState(project?.unit || "كيلوواط");
  const [location, setLocation] = useState(project?.location || "");
  const [description, setDescription] = useState(project?.description || "");
  const [date, setDate] = useState(project?.date || "");
  const [image, setImage] = useState(project?.image || "");
  const [accent, setAccent] = useState(project?.accent || ACCENTS[0].value);
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { title, type, capacity, unit, location, description, date, image, accent };
    if (project) { updateProject(project.id, data); toast.success("تم التحديث"); }
    else { addProject(data); toast.success("تمت الإضافة"); }
    onClose();
  };
  return (
    <form onSubmit={save} className="max-w-2xl space-y-4">
      <FormHeader title={project ? "تعديل" : "إضافة جديد"} onClose={onClose} />
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="العنوان"><Input value={title} onChange={(e) => setTitle(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
        <FormField label="النوع"><Input value={type} onChange={(e) => setType(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
      </div>
      <FormField label="الوصف"><Textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={2} dir="rtl" className="bg-white border-slate-300 resize-none" /></FormField>
      <div className="grid sm:grid-cols-3 gap-4">
        <FormField label="السعة"><Input value={capacity} onChange={(e) => setCapacity(e.target.value)} required className="bg-white border-slate-300 ltr-nums" dir="ltr" /></FormField>
        <FormField label="الوحدة"><Input value={unit} onChange={(e) => setUnit(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
        <FormField label="الموقع"><Input value={location} onChange={(e) => setLocation(e.target.value)} required dir="rtl" className="bg-white border-slate-300" /></FormField>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <FormField label="التاريخ"><Input value={date} onChange={(e) => setDate(e.target.value)} placeholder="2024" className="bg-white border-slate-300 ltr-nums" dir="ltr" /></FormField>
      </div>
      <FormField label="لون التدرج">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {ACCENTS.map((a) => (
            <button key={a.value} type="button" onClick={() => setAccent(a.value)} className={`flex items-center gap-2 p-2 rounded-lg border-2 transition-all ${accent === a.value ? "border-brand-green shadow-md" : "border-slate-200 hover:border-slate-300"}`}>
              <div className={`w-8 h-8 rounded bg-gradient-to-br ${a.value} flex-shrink-0`} /><span className="text-xs text-slate-600 truncate">{a.label}</span>
            </button>
          ))}
        </div>
      </FormField>
      <ImageURLField value={image} onChange={setImage} />
      <FormActions onCancel={onClose} />
    </form>
  );
}

// ─── Shared ─────────────────────────────────────────────
function ManagerHeader({ title, count, onAdd }: { title: string; count: number; onAdd: () => void }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2"><h3 className="font-heading font-bold text-xl text-slate-900">{title}</h3><span className="text-sm text-slate-400 font-mono">({count})</span></div>
      <button onClick={onAdd} className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand-green to-brand-blue px-3 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"><Plus className="w-4 h-4" />إضافة جديد</button>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return <div className="text-center py-12 text-slate-400"><Package className="w-12 h-12 mx-auto mb-3 opacity-30" /><p className="text-sm">{message}</p></div>;
}

function FormHeader({ title, onClose }: { title: string; onClose: () => void }) {
  return <div className="flex items-center justify-between mb-2"><h3 className="font-heading font-bold text-xl text-slate-900">{title}</h3><button onClick={onClose} className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"><X className="w-4 h-4 text-slate-600" /></button></div>;
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="space-y-1.5"><label className="text-sm font-medium text-slate-700 block">{label}</label>{children}</div>;
}

function ImageURLField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <FormField label="رابط الصورة">
      <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="https://example.com/image.jpg" dir="ltr" className="bg-white border-slate-300" />
      {value && (
        <div className="mt-2">
          <p className="text-xs text-slate-400 mb-1">معاينة الصورة</p>
          <div className="relative w-full h-32 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
            <img src={value} alt="preview" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
        </div>
      )}
    </FormField>
  );
}

function FormActions({ onCancel }: { onCancel: () => void }) {
  return (
    <div className="flex gap-2 pt-2">
      <Button type="submit" className="flex-1 h-11 bg-gradient-to-r from-brand-green to-brand-blue hover:opacity-90 text-white font-semibold"><Save className="w-4 h-4 mr-2" />حفظ</Button>
      <Button type="button" onClick={onCancel} variant="outline" className="h-11 px-6">إلغاء</Button>
    </div>
  );
}

```
`src\components\site\About.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Building2, Globe2, ShieldCheck } from "lucide-react";
import { COMPANY, STATS } from "./data";
import { Reveal, StaggerContainer, StaggerItem } from "./Reveal";
import { CountUp } from "./CountUp";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono uppercase mb-3">
            من نحن
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl mb-5">
            <span className="text-foreground">شركة رائدة في </span>
            <span className="text-gradient-solar">الطاقة المتجددة باليمن</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            نفخر بكوننا شريكاً موثوقاً في استيراد وتوريد وتركيب وتشغيل وصيانة أنظمة الطاقة الشمسية بجميع مكوناتها.
          </p>
        </Reveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {/* Big text card */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="bento-card h-full p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl">
                  {COMPANY.fullName}
                </h3>
              </div>
              <p className="text-slate-700 leading-loose mb-5 text-sm sm:text-base">
                {COMPANY.about.short}
              </p>
              <p className="text-slate-600 leading-loose text-sm sm:text-base">
                {COMPANY.about.long}
              </p>

              {/* Mini badges */}
              <div className="flex flex-wrap gap-2 mt-7">
                {['N-Type / HJT / ABC', 'On-Grid / Off-Grid / Hybrid', 'Lithium-Ion', 'TOP CABLE'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 px-3 py-1 text-xs text-brand-green-dark font-mono"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>

          {/* Two small cards */}
          <Reveal delay={0.1}>
            <div className="bento-card h-full p-6 flex flex-col justify-between">
              <div>
                <Globe2 className="w-7 h-7 text-brand-green-dark mb-3" />
                <h4 className="font-heading font-bold text-lg mb-2">تقنيات عالمية</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  أحدث خلايا الطاقة الشمسية ومحولات أوروبية وصينية متقدمة، وبطاريات ليثيوم، وكابلات متخصصة.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bento-card h-full p-6 flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-7 h-7 text-brand-green-dark mb-3" />
                <h4 className="font-heading font-bold text-lg mb-2">خدمة متكاملة</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  ما بعد البيع ومتابعة تنفيذ المشاريع لضمان تحقيق أقصى استفادة لعملائنا في كل مرحلة.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats row */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((s, i) => (
            <StaggerItem key={i}>
              <div className="bento-card p-6 text-center group">
                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-gradient-solar mb-2">
                  <CountUp end={s.value} suffix={s.suffix} duration={2.2} />
                </div>
                <div className="text-xs sm:text-sm text-slate-500">{s.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Link to contact */}
        <Reveal delay={0.1} className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-brand-green-dark hover:text-brand-green font-semibold group"
          >
            <span>المزيد عن الشركة</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

```
`src\components\site\BrandsCarousel.tsx`:

```tsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { BRANDS } from "./data";
import { Reveal } from "./Reveal";

const AUTOPLAY_MS = 5500;

const pad = (n: number) => String(n + 1).padStart(2, "0");

export function BrandsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setActive((prev) => (prev + dir + BRANDS.length) % BRANDS.length);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index >= active ? 1 : -1);
      setActive(index);
    },
    [active],
  );

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => paginate(1), AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, paused, paginate]);

  const brand = BRANDS[active];

  // RTL-aware slide variants:
  // direction = 1 (next) → new slide enters from the left, old exits to the right
  // direction = -1 (prev) → new slide enters from the right, old exits to the left
  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -56 : 56,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 56 : -56,
    }),
  };

  return (
    <section
      id="agencies"
      className="relative py-20 sm:py-28 overflow-hidden"
      aria-label="وكالاتنا المعتمدة"
    >
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-aurora opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-brand-green-dark mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>وكالاتنا المعتمدة</span>
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl mb-3 leading-tight">
            <span className="text-foreground">شركاء النجاح </span>
            <span className="text-gradient-solar">في الطاقة الشمسية</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            نتعاون مع نخبة من العلامات العالمية لنوفّر لكم أحدث التقنيات وأعلى
            معايير الجودة في مجال الطاقة المتجددة.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {/* Main slide card */}
            <div className="relative bento-card p-0 overflow-hidden min-h-[640px] sm:min-h-[480px] md:min-h-[440px]">
              {/* Accent glow that follows the active brand */}
              <div
                aria-hidden
                className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${brand.accent} opacity-20 blur-3xl pointer-events-none transition-all duration-700`}
              />
              <div
                aria-hidden
                className={`absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br ${brand.accent} opacity-10 blur-3xl pointer-events-none transition-all duration-700`}
              />

              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="grid md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-10"
                >
                  {/* Info panel — appears on the right in RTL */}
                  <div className="flex flex-col justify-center order-1">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${brand.accent} px-3 py-1 text-xs font-bold text-white shadow-lg`}
                      >
                        {brand.category}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono tracking-wide">
                        {brand.established}
                      </span>
                    </div>

                    <div className="text-xs text-brand-green-dark mb-2 tracking-wide font-semibold">
                      {brand.role}
                    </div>
                    <h3 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-2 text-foreground leading-tight">
                      {brand.name}
                    </h3>
                    <div className="text-slate-700 text-sm sm:text-base mb-5">
                      {brand.arabic}
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-7 max-w-md text-sm sm:text-base">
                      {brand.description}
                    </p>

                    <a
                      href="#products"
                      className="group inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-brand-green via-brand-green-light to-brand-blue px-6 py-3 text-sm font-bold text-white shadow-xl shadow-brand-green/30 hover:shadow-brand-green/50 hover:scale-105 transition-all"
                    >
                      <span>استعرض المنتجات</span>
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Logo card — appears on the left in RTL */}
                  <div className="order-2 flex items-center justify-center">
                    <div className="relative aspect-[4/3] w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden ring-1 ring-black/5">
                      <div
                        aria-hidden
                        className={`absolute inset-0 bg-gradient-to-br ${brand.accent} opacity-5`}
                      />
                      {/* Decorative corner shine */}
                      <div
                        aria-hidden
                        className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-gradient-to-br from-white/80 to-transparent blur-2xl"
                      />
                      <div className="absolute inset-8 sm:inset-10">
                        <Image
                          src={brand.logo}
                          alt={`شعار ${brand.name}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 90vw, 420px"
                          priority={active === 0}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Arrow controls — RTL: right = prev, left = next */}
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="الشريحة السابقة"
              className="absolute top-1/2 -translate-y-1/2 right-2 sm:-right-5 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-strong flex items-center justify-center text-foreground hover:bg-brand-green hover:text-white hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="الشريحة التالية"
              className="absolute top-1/2 -translate-y-1/2 left-2 sm:-left-5 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-strong flex items-center justify-center text-foreground hover:bg-brand-green hover:text-white hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Counter + dot indicators */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-bold ltr-nums">
                  <span className="text-brand-green-dark">{pad(active)}</span>
                  <span className="mx-1 text-slate-500">/</span>
                  <span className="text-slate-500">{pad(BRANDS.length - 1)}</span>
                </span>
                <div className="flex items-center gap-2">
                  {BRANDS.map((b, i) => (
                    <button
                      key={b.name}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`الانتقال إلى ${b.name}`}
                      aria-current={i === active ? "true" : undefined}
                      className="group relative h-2 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      style={{ width: i === active ? 36 : 10 }}
                    >
                      <span
                        className={`block h-full w-full rounded-full transition-colors duration-300 ${
                          i === active
                            ? "bg-gradient-to-r from-brand-green to-brand-blue shadow-[0_0_12px_oklch(0.556_0.150_142/0.6)]"
                            : "bg-white/15 group-hover:bg-white/30"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-slate-500 font-mono">
                {active + 1} من {BRANDS.length} وكالات
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {BRANDS.map((b, i) => (
                <button
                  key={b.name}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`عرض ${b.name}`}
                  aria-current={i === active ? "true" : undefined}
                  className={`group relative rounded-2xl overflow-hidden p-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green ${
                    i === active
                      ? "glass-strong ring-1 ring-brand-green/40 scale-[1.02]"
                      : "glass opacity-70 hover:opacity-100 hover:scale-[1.01]"
                  }`}
                >
                  <div className="relative h-10 sm:h-12 w-full">
                    <Image
                      src={b.logo}
                      alt={`شعار ${b.name}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 45vw, 22vw"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-xs font-bold text-foreground truncate">
                      {b.name}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">
                      {b.role}
                    </div>
                  </div>
                  {i === active && (
                    <motion.span
                      layoutId="brand-thumb-active"
                      className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-brand-green to-brand-blue"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

```
`src\components\site\Contact.tsx`:

```tsx
"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
  Facebook,
  Linkedin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { COMPANY } from "./data";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast.success("تم إرسال طلبك بنجاح!", {
      description: "سيتواصل معك فريقنا خلال 24 ساعة عمل.",
    });
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] rounded-full bg-brand-green/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* CTA banner */}
        <Reveal className="mb-16">
          <div className="relative glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden text-center">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-green/20 blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-glow" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-brand-green-dark mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                ابدأ مشروعك الشمسي اليوم
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4">
                <span className="text-foreground">هل أنت مستعد لبدء مشروعك </span>
                <span className="text-gradient-solar">للطاقة الشمسية؟</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
                فريقنا من الخبراء جاهز لمساعدتك في تصميم النظام الأمثل. تواصل معنا اليوم للحصول على استشارة وعرض سعر مخصص لمشروعك.
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green via-brand-green-light to-brand-blue px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-2xl shadow-brand-green/30 hover:scale-105 transition-all"
              >
                اطلب عرض سعر الآن
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <div id="contact-form" className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Contact info */}
          <Reveal>
            <div className="space-y-4">
              <div>
                <span className="inline-block text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono uppercase mb-3">
                  تواصل معنا
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">
                  <span className="text-foreground">نحن هنا </span>
                  <span className="text-gradient-solar">لخدمتك</span>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  تواصل معنا عبر القنوات التالية، أو املأ النموذج وسيتواصل معك فريقنا في أقرب وقت ممكن.
                </p>
              </div>

              {/* Info cards */}
              <div className="space-y-3">
                <InfoCard
                  icon={<MapPin className="w-5 h-5" />}
                  label="العنوان"
                  value={COMPANY.address}
                />
                <InfoCard
                  icon={<Phone className="w-5 h-5" />}
                  label="أرقام الهاتف"
                  value={
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {COMPANY.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p}`}
                          className="ltr-nums hover:text-brand-green-dark transition-colors"
                          dir="ltr"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  }
                />
                <InfoCard
                  icon={<Mail className="w-5 h-5" />}
                  label="البريد الإلكتروني"
                  value={
                    <div className="flex flex-col gap-1">
                      {COMPANY.emails.map((em) => (
                        <a
                          key={em}
                          href={`mailto:${em}`}
                          className="ltr-nums hover:text-brand-green-dark transition-colors break-all"
                          dir="ltr"
                        >
                          {em}
                        </a>
                      ))}
                    </div>
                  }
                />
                <InfoCard
                  icon={<Clock className="w-5 h-5" />}
                  label="ساعات العمل"
                  value="السبت – الخميس: 8:00 ص – 5:00 م"
                />
              </div>

              {/* Social */}
              <div className="flex gap-2 pt-3">
                <SocialLink href={COMPANY.socials.whatsapp} label="واتساب" icon={<MessageCircle className="w-5 h-5" />} />
                <SocialLink href={COMPANY.socials.facebook} label="فيسبوك" icon={<Facebook className="w-5 h-5" />} />
                <SocialLink href={COMPANY.socials.linkedin} label="لينكد إن" icon={<Linkedin className="w-5 h-5" />} />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="الاسم الكامل" htmlFor="name">
                  <Input id="name" name="name" required placeholder="مثال: أحمد محمد" className="bg-white/70 border-brand-green/20 focus:border-brand-green/50 focus-visible:ring-brand-green/30" />
                </Field>
                <Field label="رقم الهاتف" htmlFor="phone">
                  <Input id="phone" name="phone" required type="tel" placeholder="7XX XXX XXX" className="bg-white/70 border-brand-green/20 focus:border-brand-green/50 focus-visible:ring-brand-green/30 ltr-nums" dir="ltr" />
                </Field>
              </div>
              <Field label="البريد الإلكتروني" htmlFor="email">
                <Input id="email" name="email" type="email" placeholder="you@example.com" className="bg-white/70 border-brand-green/20 focus:border-brand-green/50 focus-visible:ring-brand-green/30 ltr-nums" dir="ltr" />
              </Field>
              <Field label="نوع المشروع" htmlFor="projectType">
                <select id="projectType" name="projectType" className="w-full h-10 rounded-md bg-white/70 border border-brand-green/20 px-3 text-sm focus:border-brand-green/50 focus:outline-none focus:ring-2 focus:ring-brand-green/30">
                  <option value="residential">سكني</option>
                  <option value="commercial">تجاري</option>
                  <option value="industrial">صناعي</option>
                  <option value="agricultural">زراعي / ضخ مياه</option>
                  <option value="other">أخرى</option>
                </select>
              </Field>
              <Field label="تفاصيل المشروع" htmlFor="message">
                <Textarea id="message" name="message" required rows={4} placeholder="اكتب تفاصيل مشروعك: السعة المطلوبة، الموقع، نوع الاستخدام..." className="bg-white/70 border-brand-green/20 focus:border-brand-green/50 focus-visible:ring-brand-green/30 resize-none" />
              </Field>

              <Button type="submit" disabled={submitting} className="w-full h-12 rounded-xl bg-gradient-to-r from-brand-green via-brand-green-light to-brand-blue hover:from-brand-green-light hover:to-brand-blue-lighter text-white font-bold text-base shadow-lg shadow-brand-green/25 hover:shadow-brand-green/40 transition-all disabled:opacity-70">
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    جارٍ الإرسال...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    إرسال الطلب
                  </span>
                )}
              </Button>

              <p className="text-xs text-slate-500 text-center">
                بالضغط على إرسال، أنت توافق على أن يتواصل معك فريق عصر الشمس بشأن طلبك.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-slate-700 block">{label}</label>
      {children}
    </div>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-4 sm:p-5 flex items-start gap-4 group hover:bg-brand-green/5 transition-colors">
      <div className="w-10 h-10 rounded-xl bg-brand-green/15 flex items-center justify-center text-brand-green-dark flex-shrink-0 group-hover:scale-110 transition-transform">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="text-[11px] text-slate-500 mb-1 tracking-wide uppercase font-mono">{label}</div>
        <div className="text-sm text-slate-700 leading-relaxed">{value}</div>
      </div>
    </div>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-600 hover:bg-brand-green hover:text-white transition-all hover:scale-110">{icon}</a>
  );
}

```
`src\components\site\CountUp.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/** Animated count-up that triggers when scrolled into view. */
export function CountUp({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  const formatted = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className="ltr-nums inline-block tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

```
`src\components\site\Footer.tsx`:

```tsx
"use client";

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { COMPANY, NAV_LINKS } from "./data";
import { useStore } from "@/lib/store";

export function Footer() {
  const year = new Date().getFullYear();
  const products = useStore((s) => s.products);

  return (
    <footer className="relative mt-auto border-t border-brand-green/15 bg-white/80 backdrop-blur-sm">
      <div className="h-px bg-gradient-to-l from-transparent via-brand-green/40 to-transparent" />

      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-brand-green/30 blur-md" />
                <div className="relative w-12 h-12 rounded-full bg-white shadow-lg ring-1 ring-brand-green/20 overflow-hidden flex items-center justify-center">
                  <img
                    src="/brand/logo.png"
                    alt="شعار عصر الشمس"
                    className="w-full h-full object-cover"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
              <div>
                <div className="font-heading font-bold text-lg">{COMPANY.name}</div>
                <div className="text-[10px] text-brand-green-dark/70 tracking-widest font-mono uppercase">
                  {COMPANY.latinName}
                </div>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">{COMPANY.tagline}</p>
            <div className="flex gap-2">
              <a href={COMPANY.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="واتساب" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 hover:bg-brand-green hover:text-white transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href={COMPANY.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="فيسبوك" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 hover:bg-brand-green hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={COMPANY.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="لينكد إن" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 hover:bg-brand-green hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-brand-green-dark">روابط سريعة</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.route}>
                  <Link href={l.route} className="text-sm text-slate-600 hover:text-brand-green-dark transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand-green/50 group-hover:bg-brand-green group-hover:scale-150 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-brand-green-dark">منتجاتنا</h4>
            <ul className="space-y-2.5">
              {products.slice(0, 4).map((p) => (
                <li key={p.id}>
                  <Link href="/products" className="text-sm text-slate-600 hover:text-brand-green-dark transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand-green/50 group-hover:bg-brand-green group-hover:scale-150 transition-all" />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-brand-green-dark">معلومات التواصل</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green/80 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY.address}</span>
              </li>
              {COMPANY.phones.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-green/80 flex-shrink-0" />
                  <a href={`tel:${p}`} className="ltr-nums hover:text-brand-green-dark transition-colors" dir="ltr">{p}</a>
                </li>
              ))}
              {COMPANY.emails.map((em) => (
                <li key={em} className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-brand-green/80 flex-shrink-0 mt-0.5" />
                  <a href={`mailto:${em}`} className="ltr-nums hover:text-brand-green-dark transition-colors break-all" dir="ltr">{em}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>جميع الحقوق محفوظة © {year} {COMPANY.fullName}</p>
          <p className="font-mono tracking-wide">Powered by renewable energy ☀</p>
        </div>
      </div>
    </footer>
  );
}

```
`src\components\site\HeroCarousel.tsx`:

```tsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Phone,
  Sparkles,
} from "lucide-react";
import { COMPANY } from "./data";

const AUTOPLAY_MS = 7000;
const FADE_DURATION = 1.1;

type Slide = {
  image: string;
  eyebrow: string;
  title: [string, string];
  description: string;
  cta: string;
  ctaHref: string;
  ctaIcon: "quote" | "phone";
  stats: { value: string; label: string }[];
};

const SLIDES: Slide[] = [
  {
    image: "/hero/hero-bg-1.jpg",
    eyebrow: "الوكيل المعتمد في اليمن",
    title: ["طاقة نظيفة", "لليمن المستدام"],
    description:
      "نوفّر أحدث الألواح الشمسية والانفرترات والبطاريات من علامات عالمية موثوقة، بحلول متكاملة تناسب المنازل والشركات والمصانع في جميع المحافظات.",
    cta: "اطلب عرض سعر الآن",
    ctaHref: "#contact",
    ctaIcon: "quote",
    stats: [
      { value: "30+", label: "عاماً ضمان الألواح" },
      { value: "98%", label: "كفاءة التحويل" },
      { value: "4", label: "وكالات عالمية" },
    ],
  },
  {
    image: "/hero/hero-bg-2.jpg",
    eyebrow: "فريق متخصص · تركيب احترافي",
    title: ["من التوريد", "إلى التشغيل والصيانة"],
    description:
      "من دراسة الجدوى والتصميم إلى التركيب والتشغيل والصيانة، يرافقك فريقنا المتخصص في كل خطوة لضمان أعلى كفاءة وأطول عمر لنظامك الشمسي.",
    cta: "تحدّث مع خبير",
    ctaHref: `tel:${COMPANY.phones[0]}`,
    ctaIcon: "phone",
    stats: [
      { value: "750+", label: "كيلوواط في مشروع" },
      { value: "10+", label: "سنوات عمر البطاريات" },
      { value: "24/7", label: "دعم فني متواصل" },
    ],
  },
];

const pad = (n: number) => String(n + 1).padStart(2, "0");

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goNext = useCallback(() => {
    setActive((p) => (p + 1) % SLIDES.length);
  }, []);

  const goPrev = useCallback(() => {
    setActive((p) => (p - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setActive(index);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(goNext, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, paused, goNext]);

  const slide = SLIDES[active];

  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-slate-950"
      aria-label="عصر الشمس — الطاقة الشمسية في اليمن"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Background slides with crossfade + Ken Burns */}
      <AnimatePresence initial={false}>
        <motion.div
          key={active}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: AUTOPLAY_MS / 1000,
              ease: "easeOut",
            }}
          />
          {/* Dark gradient scrim — heavier on the right for RTL text readability */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl py-24">
          <motion.div
            key={`content-${active}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.25,
            }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs sm:text-sm text-white mb-5">
              <Sparkles className="w-3.5 h-3.5 text-brand-green-lighter" />
              <span>{slide.eyebrow}</span>
            </div>

            {/* Title — two lines */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.1] mb-6 text-white [text-shadow:_0_2px_24px_rgb(0_0_0_/_55%)]">
              {slide.title[0]}
              <br />
              <span className="bg-gradient-to-l from-brand-green-light via-brand-green to-brand-blue-light bg-clip-text text-transparent [text-shadow:_0_2px_30px_rgb(0_0_0_/_40%)]">
                {slide.title[1]}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl mb-8 [text-shadow:_0_1px_10px_rgb(0_0_0_/_70%)]">
              {slide.description}
            </p>

            {/* CTA */}
            <a
              href={slide.ctaHref}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green via-brand-green-light to-brand-blue px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-2xl shadow-brand-green/40 hover:shadow-brand-green/60 hover:scale-105 transition-all"
            >
              {slide.ctaIcon === "phone" ? (
                <Phone className="w-4 h-4" />
              ) : (
                <Sparkles className="w-4 h-4" />
              )}
              <span>{slide.cta}</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </a>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl">
              {slide.stats.map((s, i) => (
                <div key={i} className="text-white">
                  <div className="font-heading font-extrabold text-2xl sm:text-4xl ltr-nums [text-shadow:_0_2px_14px_rgb(0_0_0_/_65%)] bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-300 mt-1 [text-shadow:_0_1px_6px_rgb(0_0_0_/_75%)]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Arrow controls — RTL: right = prev, left = next */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="الشريحة السابقة"
        className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-lighter"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="الشريحة التالية"
        className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-lighter"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Bottom: slide counter + live progress bars */}
      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-4">
            {/* Slide counter */}
            <div className="font-mono text-sm sm:text-base font-bold ltr-nums [text-shadow:_0_1px_8px_rgb(0_0_0_/_75%)]">
              <span className="text-brand-green-lighter">{pad(active)}</span>
              <span className="mx-1 text-white/50">/</span>
              <span className="text-white/70">{pad(SLIDES.length - 1)}</span>
            </div>

            {/* Progress bars */}
            <div className="flex-1 max-w-md flex items-center gap-2">
              {SLIDES.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`الانتقال إلى الشريحة ${i + 1}`}
                  className="relative flex-1 h-1.5 rounded-full overflow-hidden bg-white/20 hover:bg-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-lighter"
                >
                  {i < active ? (
                    <span className="absolute inset-0 bg-gradient-to-l from-brand-green to-brand-blue" />
                  ) : null}
                  {i === active ? (
                    <span
                      key={`fill-${active}`}
                      className="hero-progress-fill absolute top-0 bottom-0 right-0 bg-gradient-to-l from-brand-green via-brand-green-light to-brand-blue"
                      style={{
                        animationPlayState: paused ? "paused" : "running",
                      }}
                    />
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10"
      />

      <style jsx>{`
        .hero-progress-fill {
          animation: hero-progress-anim ${AUTOPLAY_MS}ms linear forwards;
        }
        @keyframes hero-progress-anim {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

```
`src\components\site\Navbar.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY, NAV_LINKS } from "./data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Detect scroll to transition the navbar into a floating glass pill
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Automatically close the mobile menu when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-4 sm:py-6"
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-500 border",
            scrolled
              ? "glass-strong shadow-xl shadow-brand-green/10 border-brand-green/10"
              : "bg-transparent border-transparent"
          )}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-brand-green/30 blur-md group-hover:bg-brand-green/50 transition-all" />
              <div className="relative w-11 h-11 rounded-full bg-white shadow-lg ring-1 ring-brand-green/20 overflow-hidden flex items-center justify-center group-hover:ring-brand-green/40 group-hover:scale-105 transition-all">
                <img
                  src="/brand/logo.png"
                  alt="شعار عصر الشمس"
                  className="w-full h-full object-cover"
                  width={44}
                  height={44}
                />
              </div>
            </div>
            <div className="flex flex-col leading-none justify-center">
              <span
                className={cn(
                  "font-heading font-bold text-lg transition-colors",
                  scrolled ? "text-slate-900" : "text-white"
                )}
              >
                {COMPANY.name}
              </span>
              <span
                className={cn(
                  "text-[10px] tracking-widest font-mono uppercase transition-colors mt-1",
                  scrolled ? "text-brand-green-dark" : "text-brand-green-lighter"
                )}
              >
                {COMPANY.latinName}
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              // Strip hashes to correctly identify the active parent page
              const isActive = pathname === (link.route.split("#")[0] || "/");
              return (
                <li key={link.route}>
                  <Link
                    href={link.route}
                    className={cn(
                      "relative px-4 py-2 text-sm font-bold rounded-full transition-all duration-300",
                      isActive
                        ? scrolled
                          ? "text-brand-green-dark bg-brand-green/10"
                          : "text-brand-green-lighter bg-white/10"
                        : scrolled
                        ? "text-slate-600 hover:text-brand-green-dark hover:bg-slate-100"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-green/25 hover:shadow-brand-green/40 hover:scale-105 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>طلب عرض سعــر</span>
            </Link>

            <button
              type="button"
              aria-label="القائمة"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full transition-colors",
                scrolled
                  ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
              )}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden mt-3 origin-top"
            >
              <div className="glass-strong rounded-3xl p-4 shadow-2xl border border-white/40">
                <ul className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === (link.route.split("#")[0] || "/");
                    return (
                      <li key={link.route}>
                        <Link
                          href={link.route}
                          className={cn(
                            "block px-5 py-3.5 rounded-2xl text-base font-bold transition-all",
                            isActive
                              ? "bg-gradient-to-r from-brand-green/10 to-brand-blue/10 text-brand-green-dark border border-brand-green/20"
                              : "text-slate-700 hover:bg-slate-50"
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                  <li className="mt-2">
                    <Link
                      href="/contact"
                      className="w-full flecx items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-green to-brand-blue px-5 py-4 text-base font-bold text-white shadow-md"
                    >
                      <MessageSquare className="w-5 h-5" />
                      طلب عرض سعــر
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
```
`src\components\site\PageHero.tsx`:

```tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";

interface PageHeroProps {
  image: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export function PageHero({ image, eyebrow, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] max-h-[600px] w-full overflow-hidden flex items-end">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img src={image} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
      <div className="relative container mx-auto px-4 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-3xl"
        >
          <nav className="flex items-center gap-2 text-xs text-white/70 mb-4">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>الرئيسية</span>
            </Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-brand-green-lighter font-medium">{breadcrumb}</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs text-white mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green-lighter animate-pulse" />
            {eyebrow}
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-4 drop-shadow-2xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg text-slate-100/90 leading-relaxed max-w-2xl drop-shadow-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

```
`src\components\site\PageLayout.tsx`:

```tsx
"use client";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <a
        href="https://wa.me/+967780177177"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="fixed bottom-5 left-5 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-brand-green to-brand-green-dark shadow-2xl shadow-brand-green/40 flex items-center justify-center text-white hover:scale-110 transition-transform group"
      >
        <span className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-20" />
        <svg className="relative w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
}

```
`src\components\site\Products.tsx`:

```tsx
"use client";

import {
  Sun, Zap, BatteryCharging, Cable, Lightbulb, Wrench, Factory, Home,
  ArrowLeft, ArrowUpRight, Package,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { Reveal, StaggerContainer, StaggerItem } from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  Sun, Zap, BatteryCharging, Cable, Lightbulb, Wrench, Factory, Home,
};

const CATEGORY_ACCENTS: Record<string, string> = {
  panels: "from-emerald-500 to-brand-blue",
  inverters: "from-brand-blue to-indigo-600",
  batteries: "from-emerald-400 to-teal-600",
  cables: "from-cyan-500 to-brand-blue",
};

export function Products() {
  const products = useStore((s) => s.products);
  const categories = useStore((s) => s.categories);

  return (
    <section id="products" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[40rem] h-[40rem] -translate-y-1/2 rounded-full bg-brand-blue/8 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono uppercase mb-3">
            منتجات الطاقة الشمسية
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl mb-5">
            <span className="text-foreground">منتجات </span>
            <span className="text-gradient-solar">عالية الجودة</span>
            <span className="text-foreground"> من أفضل العلامات العالمية</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            نوفر مجموعة متكاملة من منتجات الطاقة الشمسية عالية الجودة، مختارة بعناية من أفضل العلامات التجارية العالمية لتلبية كافة احتياجاتك. اختر القسم لاستعرض منتجاته.
          </p>
        </Reveal>

        {/* Category cards — clickable, link to /products/category/[id] */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.08}>
          {categories.map((cat) => {
            const Icon = ICONS[cat.icon] ?? Sun;
            const count = products.filter((p) => p.categoryId === cat.id).length;
            const accent = CATEGORY_ACCENTS[cat.id] || "from-brand-green to-brand-blue";
            return (
              <StaggerItem key={cat.id}>
                <Link
                  href={`/products/category/${cat.id}`}
                  className="group relative block bento-card p-6 h-full overflow-hidden"
                >
                  <div className={`absolute -top-12 -left-12 w-32 h-32 rounded-full bg-gradient-to-br ${accent} opacity-15 group-hover:opacity-30 blur-2xl transition-opacity duration-700`} />

                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.2} />
                    </div>

                    <h3 className="font-heading font-bold text-lg sm:text-xl mb-2 group-hover:text-brand-green-dark transition-colors">
                      {cat.name}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                      {cat.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <span className="text-xs text-slate-500">
                        <span className="ltr-nums font-bold text-slate-700">{count}</span> منتج
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-green-dark group-hover:text-brand-green">
                        استعرض
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <Reveal delay={0.1} className="text-center mt-14">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-blue px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-brand-green/25 hover:shadow-brand-green/40 hover:scale-105 transition-all"
          >
            <span>استعرض جميع المنتجات</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

```
`src\components\site\Projects.tsx`:

```tsx
"use client";

import { MapPin, Zap, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { Reveal } from "./Reveal";
import type { Project } from "@/lib/types";

export function Projects() {
  const projects = useStore((s) => s.projects);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] rounded-full bg-brand-blue/8 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono uppercase mb-3">
            مشاريعنا
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl mb-5">
            <span className="text-foreground">مشاريع </span>
            <span className="text-gradient-solar">نفخر بتنفيذها</span>
            <span className="text-foreground"> في اليمن</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            من محطات تجارية كبرى إلى مراكز تسوق وأنظمة ضخ مياه مجتمعية — مشاريع متنوعة تجسد خبرتنا في تصميم وتركيب أنظمة الطاقة الشمسية المتكاملة.
          </p>
        </Reveal>

        {/* Bento layout: large first card + 2 stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects[0] && (
            <Reveal className="lg:col-span-2 lg:row-span-2">
              <ProjectCard project={projects[0]} large />
            </Reveal>
          )}
          {projects.slice(1, 3).map((p, i) => (
            <Reveal key={p.id} delay={0.1 + i * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="text-center mt-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 text-sm sm:text-base font-semibold text-foreground hover:bg-brand-green/10 transition-all group"
          >
            <span>استعرض جميع المشاريع</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden h-full rounded-3xl shadow-lg ${large ? "min-h-[28rem] sm:min-h-[34rem]" : "min-h-[18rem]"}`}
    >
      {/* Background image or gradient fallback */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
      )}

      {/* Lighter dark scrim — image stays visible, text readable at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

      {/* Capacity badge */}
      <div className="absolute top-5 right-5 glass-strong rounded-full px-4 py-2 flex items-center gap-2 z-10">
        <Zap className="w-4 h-4 text-brand-green-dark" />
        <span className="text-sm font-bold text-brand-green-dark ltr-nums">{project.capacity}</span>
        <span className="text-xs text-slate-700">{project.unit}</span>
      </div>

      {/* Content at bottom */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 px-2.5 py-0.5 text-[11px] text-white font-mono">
            {project.type}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-white/90">
            <MapPin className="w-3 h-3" />
            {project.location}
          </span>
        </div>
        <h3 className={`font-heading font-bold ${large ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"} mb-3 text-white drop-shadow-lg`}>
          {project.title}
        </h3>
        <p className={`text-white/90 leading-relaxed ${large ? "text-sm sm:text-base" : "text-xs sm:text-sm line-clamp-3"} drop-shadow`}>
          {project.description}
        </p>
        {large && (
          <div className="mt-6 flex items-end gap-3">
            <div className="font-heading font-extrabold text-5xl sm:text-6xl text-gradient-glow ltr-nums leading-none">
              {project.capacity}
            </div>
            <div className="pb-1 text-white text-sm">{project.unit}</div>
          </div>
        )}
      </div>
    </article>
  );
}

```
`src\components\site\Reveal.tsx`:

```tsx
"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

const baseVariants: Variants = {
  hidden: (y: number) => ({ opacity: 0, y }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      custom={y}
      variants={baseVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container — children must use RevealStaggerItem.
 */
export function StaggerContainer({
  children,
  className,
  delay = 0,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

```
`src\components\site\Services.tsx`:

```tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Wrench,
  Lightbulb,
  Zap,
  Factory,
  Home,
  ArrowLeft,
  MousePointerClick,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { SERVICES } from "./data";
import { Reveal, StaggerContainer, StaggerItem } from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  Sun,
  Wrench,
  Lightbulb,
  Zap,
  Factory,
  Home,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-slate-50">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] rounded-full bg-brand-green/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full glass border border-slate-200 px-5 py-2 text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono font-bold uppercase mb-5 shadow-sm">
            <Wrench className="w-4 h-4" />
            خدماتنا
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl mb-6 text-slate-900 leading-tight">
            حلول طاقة <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-green to-brand-blue">متكاملة واحترافية</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            اضغط على أي من الخدمات أدناه لاستكشاف التفاصيل. نقدم خدمات شاملة تغطي كافة احتياجاتك في عالم الطاقة الشمسية من التركيب وحتى الصيانة.
          </p>
        </Reveal>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          stagger={0.1}
        >
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Sun;
            return (
              <StaggerItem key={i} className="[perspective:1200px]">
                <FlipServiceCard Icon={Icon} title={s.title} description={s.description} />
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <Reveal delay={0.2} className="text-center mt-16 sm:mt-20">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-slate-900 hover:bg-brand-green px-8 py-4 text-sm sm:text-base font-bold text-white shadow-xl hover:shadow-brand-green/30 hover:-translate-y-1 transition-all duration-300"
          >
            <span>احصل على استشارة لمشروعك</span>
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function FlipServiceCard({
  Icon,
  title,
  description,
}: {
  Icon: LucideIcon;
  title: string;
  description: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[320px] sm:h-[340px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 260, damping: 25 }}
      >
        {/* FRONT FACE */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center text-center border border-slate-200 shadow-lg hover:shadow-2xl hover:border-brand-green/40 transition-all duration-300">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-brand-green/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
              <Icon className="w-12 h-12 text-brand-green-dark" strokeWidth={1.5} />
            </div>
          </div>
          
          <h3 className="font-heading font-extrabold text-2xl mb-4 text-slate-900">
            {title}
          </h3>
          
          <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-100 px-4 py-2 rounded-full group-hover:bg-brand-green/10 group-hover:text-brand-green-dark transition-colors">
            <MousePointerClick className="w-4 h-4 animate-bounce" />
            <span>اضغط للتفاصيل</span>
          </div>
        </div>

        {/* BACK FACE */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-brand-green to-brand-blue shadow-2xl overflow-hidden border border-white/20">
          {/* Subtle noise overlay for texture */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
          
          <div className="relative z-10 flex flex-col h-full items-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            
            <h3 className="font-heading font-bold text-xl mb-4 text-white drop-shadow-md">
              {title}
            </h3>
            
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-auto drop-shadow">
              {description}
            </p>
            
            <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors">
              <RotateCcw className="w-4 h-4" />
              <span>إغلاق</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
```
`src\components\site\WhyUs.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Handshake,
  Headphones,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { WHY_US, BRANDS } from "./data";
import { Reveal } from "./Reveal";

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-50">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Editorial Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2 text-xs sm:text-sm text-brand-green-dark tracking-widest font-mono font-bold uppercase mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" />
              لماذا نحن؟
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.1] tracking-tight">
              لماذا تختار <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-green to-brand-blue">عصر الشمس؟</span>
            </h2>
          </div>
          <div className="max-w-md md:text-right">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              نحن لا نبيع منتجات فقط، بل نقدم حلولاً هندسية متكاملة. نمتلك الخبرة والشراكات لضمان أقصى كفاءة لمشروعك مع دعم فني لا ينقطع.
            </p>
          </div>
        </Reveal>

        {/* 
          Bespoke Asymmetrical Bento Grid (7-5 / 5-7 Layout) 
          Instead of generic cards, each card is custom-designed for its content.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* CARD 1: Quality (Dark Mode, 7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="group lg:col-span-7 relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 sm:p-12 flex flex-col justify-end min-h-[360px] shadow-2xl hover:-translate-y-1 transition-transform duration-500"
          >
            {/* Rotating Seal Graphic */}
            <div className="absolute top-[-20%] left-[-10%] w-64 h-64 border-[1px] border-dashed border-white/20 rounded-full flex items-center justify-center animate-[spin-slow_20s_linear_infinite] group-hover:border-brand-green/40 transition-colors duration-700">
              <div className="w-48 h-48 border-[1px] border-white/10 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-transparent blur-3xl rounded-full" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 shadow-xl">
                <Award className="w-8 h-8 text-brand-green-lighter" />
              </div>
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
                {WHY_US[0].title}
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg">
                {WHY_US[0].description}
              </p>
            </div>
          </motion.div>

          {/* CARD 2: Team (Light Mode, 5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group lg:col-span-5 relative overflow-hidden rounded-[2.5rem] bg-white p-8 sm:p-12 flex flex-col justify-end min-h-[360px] shadow-xl border border-slate-200 hover:-translate-y-1 hover:border-brand-blue/30 transition-all duration-500"
          >
            {/* Abstract Network Nodes Graphic */}
            <div className="absolute top-8 left-8 right-8 h-32 opacity-20 pointer-events-none">
              <div className="absolute top-0 right-4 w-3 h-3 rounded-full bg-brand-blue" />
              <div className="absolute top-12 left-10 w-4 h-4 rounded-full bg-brand-green" />
              <div className="absolute bottom-4 right-20 w-2.5 h-2.5 rounded-full bg-slate-900" />
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="10%" y1="60%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400" />
                <line x1="80%" y1="20%" x2="50%" y2="90%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 border border-slate-200 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                <Users className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-3">
                {WHY_US[1].title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {WHY_US[1].description}
              </p>
            </div>
          </motion.div>

          {/* CARD 3: Partnerships (Light Mode, 5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group lg:col-span-5 relative overflow-hidden rounded-[2.5rem] bg-white p-8 sm:p-12 flex flex-col justify-end min-h-[360px] shadow-xl border border-slate-200 hover:-translate-y-1 hover:border-brand-green/30 transition-all duration-500"
          >
            {/* Auto-scrolling mini marquee of actual partner brands */}
            <div className="absolute top-10 inset-x-0 overflow-hidden flex opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
              <div className="flex animate-marquee gap-8 items-center whitespace-nowrap px-4">
                {BRANDS.map((b, idx) => (
                  <img key={idx} src={b.logo} alt="" className="h-10 object-contain grayscale" />
                ))}
                {BRANDS.map((b, idx) => (
                  <img key={`dup-${idx}`} src={b.logo} alt="" className="h-10 object-contain grayscale" />
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 border border-slate-200 group-hover:bg-brand-green group-hover:text-white transition-colors duration-500">
                <Handshake className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-3">
                {WHY_US[2].title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {WHY_US[2].description}
              </p>
            </div>
          </motion.div>

          {/* CARD 4: Technical Support (Dark Mode, 7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="group lg:col-span-7 relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 sm:p-12 flex flex-col justify-end min-h-[360px] shadow-2xl hover:-translate-y-1 transition-transform duration-500"
          >
            {/* Radar / Ping Effect representing active monitoring */}
            <div className="absolute top-12 left-12">
              <div className="relative flex items-center justify-center w-16 h-16">
                <div className="absolute inset-0 rounded-full border border-brand-green/40 animate-ping opacity-70 [animation-duration:3s]" />
                <div className="absolute inset-2 rounded-full border border-brand-green/30 animate-ping opacity-50 [animation-duration:2s]" />
                <div className="w-3 h-3 bg-brand-green rounded-full shadow-[0_0_15px_#398B30]" />
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 shadow-xl">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                  {WHY_US[3].title}
                </h3>
                <span className="inline-flex items-center gap-1 bg-brand-green/20 text-brand-green-lighter px-3 py-1 text-xs font-mono font-bold rounded-full border border-brand-green/30">
                  <CheckCircle2 className="w-3 h-3" />
                  24/7 Live
                </span>
              </div>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg">
                {WHY_US[3].description}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
```
`src\components\site\data.ts`:

```ts
/**
 * Centralized content data for Asr Al-Shams.
 * Extracted from https://aseralshams.com/ and structured for the redesigned site.
 * All Arabic content preserved verbatim from the source.
 */

export const COMPANY = {
  name: "عصر الشمس",
  fullName: "عصر الشمس للاستيراد والتجارة",
  latinName: "Asr Al-Shams",
  tagline: "حلول متكاملة وموثوقة لاستيراد، تركيب، وتشغيل أنظمة الطاقة الشمسية عالية الجودة.",
  about: {
    short:
      "شركة عصر الشمس للاستيراد والتجارة هي إحدى الشركات الرائدة في اليمن، متخصصة في مجال الطاقة المتجددة. نفخر بكوننا شريكاً موثوقاً في استيراد وتوريد وتركيب وتشغيل وصيانة أنظمة الطاقة الشمسية بجميع مكوناتها.",
    long: "نحن ملتزمون بتوفير أحدث التقنيات العالمية، بما في ذلك ألواح الطاقة الشمسية بأحدث خلايا (N-Type / HJT / ABC)، والمحولات الأوروبية والصينية المتقدمة (On-Grid / Off-Grid / Hybrid)، بالإضافة إلى كافة أنواع بطاريات الليثيوم والكابلات المتخصصة. نقدم خدمات متكاملة تشمل ما بعد البيع ومتابعة تنفيذ المشاريع لضمان تحقيق أقصى استفادة لعملائنا.",
  },
  address: "شارع خولان – بعد جولة الجوازات، صنعاء، اليمن",
  phones: ["776284444", "780177177"],
  whatsapp: "+967780177177",
  emails: ["info@aseralshams.com", "maged@aseralshams.com"],
  socials: {
    facebook: "https://www.facebook.com/aseralshamscom",
    linkedin: "https://www.linkedin.com/company/asr-alshams/",
    whatsapp: "https://wa.me/+967780177177",
  },
};

export const STATS = [
  { value: 30, suffix: "+", label: "عاماً ضمان أداء الألواح" },
  { value: 98, suffix: "%", label: "كفاءة تحويل الانفرترات" },
  { value: 10, suffix: "+", label: "سنوات عمر البطاريات" },
  { value: 750, suffix: "+", label: "كيلوواط في مشروع واحد" },
];

export const BRANDS = [
  {
    name: "AE Solar",
    arabic: "ألــواح أي سـولار العـالمـية",
    role: "الــوكيل المعتمد فــي اليمــن",
    category: "الألواح الشمسية",
    description: "ألواح شمسية عالية الكفاءة بتقنيات HJT و TOPCON، مع كفاءة تصل إلى 23.21% وضمان أداء يصل إلى 30 عاماً.",
    logo: "/agencies/agency-3.png",
    accent: "from-red-500 to-rose-600",
    established: "ألمانيا · منذ 2003",
  },
  {
    name: "Sinexcel",
    arabic: "انفــرترات سنــكسـل iSUNA",
    role: "موزع معتمد",
    category: "الانفرترات وتخزين الطاقة",
    description: "انفرترات هجينة On-Grid / Off-Grid بكفاءة تحويل تصل إلى 98%، بمراقبة عن بعد وتحكم ذكي ونطاق سعات من 3 إلى 50 كيلوواط.",
    logo: "/agencies/agency-2.png",
    accent: "from-brand-blue to-emerald-500",
    established: "الصين · عالمياً",
  },
  {
    name: "TOP CABLE",
    arabic: "كابلات توب كيبل الإسبانية",
    role: "موزع معتمد",
    category: "الكابلات الكهربائية والشمسية",
    description: "كابلات AC وكابلات طاقة شمسية متينة مصممة للظروف البيئية القاسية، مقاومة للأشعة فوق البنفسجية مع عزل مزدوج وأمان عالي.",
    logo: "/agencies/agency-1.png",
    accent: "from-brand-blue to-blue-700",
    established: "إسبانيا · منذ 1980",
  },
  {
    name: "Sunwoda",
    arabic: "بطاريات ليثيوم صنودا",
    role: "موزع معتمد",
    category: "بطاريات الليثيوم وتخزين الطاقة",
    description: "بطاريات ليثيوم أيون عالية السعة بأنظمة إدارة ذكية (BMS)، تصميم قابل للتوسعة وعمر افتراضي يصل إلى 10 سنوات.",
    logo: "/agencies/agency-4.png",
    accent: "from-red-500 to-rose-600",
    established: "الصين · منذ 1997",
  },
];

export const SERVICES = [
  {
    icon: "Sun",
    title: "تركيب الأنظمة الشمسية",
    description:
      "نقوم بتركيب أنظمة الطاقة الشمسية للمنازل والشركات والمصانع بكفاءة واحترافية عالية، مع التزام كامل بأعلى معايير الجودة والسلامة.",
  },
  {
    icon: "Wrench",
    title: "الصيانة والدعم الفني",
    description:
      "نوفر خدمات صيانة دورية ودعم فني مستمر لضمان استمرارية عمل أنظمتكم الشمسية بأقصى كفاءة على مدار العام.",
  },
  {
    icon: "Lightbulb",
    title: "استشارات الطاقة",
    description:
      "نقدم استشارات متخصصة لمساعدتك في اختيار النظام الأمثل وفقاً لاحتياجاتك وميزانيتك، مع دراسة جدوى كاملة.",
  },
  {
    icon: "Zap",
    title: "أنظمة الطاقة الهجينة",
    description:
      "تصميم وتركيب أنظمة الطاقة الهجينة (PV-Diesel) التي تجمع بين الطاقة الشمسية والمصادر التقليدية لأقصى استقرار.",
  },
  {
    icon: "Factory",
    title: "حلول الطاقة للمصانع",
    description:
      "حلول طاقة شمسية متكاملة للمصانع والمنشآت الصناعية لتخفيض تكاليف الطاقة وتحقيق الاستدامة التشغيلية.",
  },
  {
    icon: "Home",
    title: "أنظمة المنازل",
    description:
      "دمج أنظمة الطاقة الشمسية مع حلول المنازل الذكية لكفاءة استهلاك الطاقة وتوفير فوري في فواتير الكهرباء.",
  },
];

export const WHY_US = [
  {
    icon: "Award",
    title: "جودة عالمية",
    description:
      "نعمل مع أفضل العلامات التجارية العالمية من حيث الجودة والكفاءة، ونوفّر منتجات معتمدة بشهادات ضمان موثقة.",
  },
  {
    icon: "Users",
    title: "فريق متخصص",
    description:
      "فريق عمل متكامل من إداريين ومهندسين وفنيين متخصصين في الطاقة المتجددة بخبرات تراكمية تمتد لسنوات.",
  },
  {
    icon: "Handshake",
    title: "شراكات موثوقة",
    description:
      "شراكات استراتيجية مع أكبر الشركات العالمية في مجال الطاقة الشمسية كـ AE Solar و Sinexcel و Sunwoda و TOP CABLE.",
  },
  {
    icon: "Headphones",
    title: "دعم فني متكامل",
    description:
      "خدمة ما بعد البيع ودعم فني متواصل لضمان رضاكم التام، مع صيانة دورية ومراقبة عن بعد لكل الأنظمة المركّبة.",
  },
];

export const NAV_LINKS = [
  { href: "#home", route: "/", label: "الرئيسية" },
  { href: "#about", route: "/about", label: "من نحن" },
  { href: "#products", route: "/products", label: "منتجاتنا" },
  { href: "#services", route: "/#services", label: "خدماتنا" },
  { href: "#projects", route: "/projects", label: "مشاريعنا" },
  { href: "#contact", route: "/contact", label: "تواصل معنا" },
];

```
`src\components\ui\accordion.tsx`:

```tsx
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

```
`src\components\ui\alert-dialog.tsx`:

```tsx
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

```
`src\components\ui\alert.tsx`:

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }

```
`src\components\ui\aspect-ratio.tsx`:

```tsx
"use client"

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }

```
`src\components\ui\avatar.tsx`:

```tsx
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }

```
`src\components\ui\badge.tsx`:

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

```
`src\components\ui\breadcrumb.tsx`:

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}

```
`src\components\ui\button.tsx`:

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

```
`src\components\ui\calendar.tsx`:

```tsx
"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute bg-popover inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }

```
`src\components\ui\card.tsx`:

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}

```
`src\components\ui\carousel.tsx`:

```tsx
"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}

```
`src\components\ui\chart.tsx`:

```tsx
"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"]
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<"div"> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
  }) {
  const { config } = useChart()

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`
    const itemConfig = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === "string"
        ? config[label as keyof typeof config]?.label || label
        : itemConfig?.label

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      )
    }

    if (!value) {
      return null
    }

    return <div className={cn("font-medium", labelClassName)}>{value}</div>
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ])

  if (!active || !payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== "dot"

  return (
    <div
      className={cn(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)
          const indicatorColor = color || item.payload.fill || item.color

          return (
            <div
              key={item.dataKey}
              className={cn(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                indicator === "dot" && "items-center"
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                          {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent":
                              indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          }
                        )}
                        style={
                          {
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-muted-foreground">
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className="text-foreground font-mono font-medium tabular-nums">
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: React.ComponentProps<"div"> &
  Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean
    nameKey?: string
  }) {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)

        return (
          <div
            key={item.value}
            className={cn(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            )}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        )
      })}
    </div>
  )
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}

```
`src\components\ui\checkbox.tsx`:

```tsx
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }

```
`src\components\ui\collapsible.tsx`:

```tsx
"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }

```
`src\components\ui\command.tsx`:

```tsx
"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("overflow-hidden p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("bg-border -mx-1 h-px", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}

```
`src\components\ui\context-menu.tsx`:

```tsx
"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  )
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  )
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}

```
`src\components\ui\dialog.tsx`:

```tsx
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}

```
`src\components\ui\drawer.tsx`:

```tsx
"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        className
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}

```
`src\components\ui\dropdown-menu.tsx`:

```tsx
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}

```
`src\components\ui\form.tsx`:

```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : props.children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}

```
`src\components\ui\hover-card.tsx`:

```tsx
"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }

```
`src\components\ui\input-otp.tsx`:

```tsx
"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

```
`src\components\ui\input.tsx`:

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }

```
`src\components\ui\label.tsx`:

```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }

```
`src\components\ui\menubar.tsx`:

```tsx
"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        className
      )}
      {...props}
    />
  )
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  )
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        className
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </MenubarPortal>
  )
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}

```
`src\components\ui\navigation-menu.tsx`:

```tsx
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}

```
`src\components\ui\pagination.tsx`:

```tsx
import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}

```
`src\components\ui\popover.tsx`:

```tsx
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }

```
`src\components\ui\progress.tsx`:

```tsx
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }

```
`src\components\ui\radio-group.tsx`:

```tsx
"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }

```
`src\components\ui\resizable.tsx`:

```tsx
"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

```
`src\components\ui\scroll-area.tsx`:

```tsx
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }

```
`src\components\ui\select.tsx`:

```tsx
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}

```
`src\components\ui\separator.tsx`:

```tsx
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }

```
`src\components\ui\sheet.tsx`:

```tsx
"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

```
`src\components\ui\sidebar.tsx`:

```tsx
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"
import { PanelLeftIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="group peer text-sidebar-foreground hidden md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("bg-background h-8 w-full shadow-none", className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("bg-sidebar-border mx-2 w-auto", className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : "button"
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}

```
`src\components\ui\skeleton.tsx`:

```tsx
import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }

```
`src\components\ui\slider.tsx`:

```tsx
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }

```
`src\components\ui\sonner.tsx`:

```tsx
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }

```
`src\components\ui\switch.tsx`:

```tsx
"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }

```
`src\components\ui\table.tsx`:

```tsx
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

```
`src\components\ui\tabs.tsx`:

```tsx
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

```
`src\components\ui\textarea.tsx`:

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

```
`src\components\ui\toast.tsx`:

```tsx
"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
  VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold [&+div]:text-xs", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
```
`src\components\ui\toaster.tsx`:

```tsx
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
```
`src\components\ui\toggle-group.tsx`:

```tsx
"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }

```
`src\components\ui\toggle.tsx`:

```tsx
"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }

```
`src\components\ui\tooltip.tsx`:

```tsx
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }

```
`src\hooks\use-mobile.ts`:

```ts
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

```
`src\hooks\use-toast.ts`:

```ts
"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
    type: ActionType["ADD_TOAST"]
    toast: ToasterToast
  }
  | {
    type: ActionType["UPDATE_TOAST"]
    toast: Partial<ToasterToast>
  }
  | {
    type: ActionType["DISMISS_TOAST"]
    toastId?: ToasterToast["id"]
  }
  | {
    type: ActionType["REMOVE_TOAST"]
    toastId?: ToasterToast["id"]
  }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
              ...t,
              open: false,
            }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
```
`src\lib\db.ts`:

```ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
```
`src\lib\seed-data.ts`:

```ts
import type { Category, Product, Project } from "./types";

export const DEFAULT_CATEGORIES: Category[] = [
  {
    id: "panels",
    name: "الألواح الشمسية",
    description: "ألواح شمسية عالية الكفاءة بتقنيات HJT و TOPCON، مع كفاءة تصل إلى 23.21% وضمان أداء يصل إلى 30 عاماً.",
    icon: "Sun",
    image: "",
    order: 1,
  },
  {
    id: "inverters",
    name: "الانفرترات",
    description: "انفرترات طاقة عالية الكفاءة بأنظمة هجينة On-Grid / Off-Grid، بكفاءة تحويل تصل إلى 98% ومراقبة عن بعد.",
    icon: "Zap",
    image: "",
    order: 2,
  },
  {
    id: "batteries",
    name: "البطاريات",
    description: "حلول تخزين طاقة متطورة ببطاريات ليثيوم أيون عالية السعة، مع أنظمة إدارة ذكية وعمر افتراضي يصل إلى 10 سنوات.",
    icon: "BatteryCharging",
    image: "",
    order: 3,
  },
  {
    id: "cables",
    name: "الكابلات",
    description: "كابلات AC وكابلات طاقة شمسية متينة مصممة للظروف البيئية القاسية، مقاومة للأشعة فوق البنفسجية مع عزل مزدوج.",
    icon: "Cable",
    image: "",
    order: 4,
  },
];

export const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "ae-solar-panels",
    categoryId: "panels",
    name: "ألواح AE Solar",
    brand: "AE Solar",
    description: "الموزع المعتمد في اليمن لشركة إي سولار العالمية، ألواح شمسية عالية الكفاءة بتقنيات متطورة وضمان يصل إلى 30 عاماً.",
    features: [
      "تقنيات HJT و TOPCON المتطورة",
      "كفاءة تصل إلى 23.21%",
      "ضمان أداء 30 عاماً",
      "تصميم مقاوم للظروف القاسية",
    ],
    image: "/products/panel.png",
    accent: "from-emerald-500 to-brand-blue",
    order: 1,
  },
  {
    id: "aesolar-meteor",
    categoryId: "panels",
    name: "AE Solar METEOR",
    brand: "AE Solar",
    description: "ألواح طاقة شمسية بتقنية n-Type TOPCon المتقدمة، مصممة لتوفير أقصى درجات الكفاءة بقدرات تتراوح بين 415W إلى 725W.",
    features: [
      "خيارات خلايا متعددة: 182mm و 210mm و G12R المستطيلة",
      "متاح بتصاميم أحادية الوجه، ثنائية الوجه بزجاج مزدوج، وأسود بالكامل",
      "ضمان أداء يصل إلى 30 عاماً وضمان منتج حتى 30 عاماً"
    ],
    image: "/products/aesolar-meteor.jpg",
    accent: "from-emerald-500 to-brand-green-dark",
    order: 1,
  },
  {
    id: "aesolar-horizon",
    categoryId: "panels",
    name: "AE Solar HORIZON",
    brand: "AE Solar",
    description: "ألواح شمسية مخصصة لمظلات السيارات (Carports) بتقنية n-Type TOPCon، بقدرات تتراوح بين 415W و 435W.",
    features: [
      "مصمم خصيصاً هندسياً لتركيبات مظلات السيارات الشمسية",
      "هيكل زجاجي مزدوج ثنائي الوجه مع نفاذية معززة للضوء",
      "يعتمد على تكوين خلايا TOPCon بحجم 182mm"
    ],
    image: "/products/aesolar-horizon.jpg",
    accent: "from-blue-500 to-indigo-600",
    order: 2,
  },
  {
    id: "aesolar-aurora",
    categoryId: "panels",
    name: "AE Solar AURORA",
    brand: "AE Solar",
    description: "سلسلة ألواح تعتمد على تقنية Mono-crystalline PERC الموثوقة، بقدرات مرنة تتراوح بين 360W إلى 660W لتناسب مختلف المشاريع.",
    features: [
      "طيف واسع من الخلايا يشمل أحجام 166mm و 182mm و 210mm",
      "تكوينات أحادية الوجه، ثنائية بزجاج أحادي، وثنائية بزجاج مزدوج",
      "يتضمن خيارات بصرية باللون الأسود بالكامل (Full-black)"
    ],
    image: "/products/aesolar-aurora.jpg",
    accent: "from-cyan-500 to-brand-blue",
    order: 3,
  },
  {
    id: "aesolar-comet",
    categoryId: "panels",
    name: "AE Solar COMET",
    brand: "AE Solar",
    description: "ألواح شمسية فائقة الإنتاجية بتقنية (HJT) المتطورة، مصممة للمشاريع الكبرى بقدرات تتراوح بين 700W إلى 720W.",
    features: [
      "تقنية خلايا HJT عالية الكفاءة (Half-cut)",
      "وحدة زجاجية مزدوجة ثنائية الوجه مصممة لإنتاج طاقة فائق",
      "مبنية على خلايا كبيرة الحجم 210mm"
    ],
    image: "/products/aesolar-comet.jpg",
    accent: "from-teal-500 to-emerald-600",
    order: 4,
  },
  {
    id: "aesolar-alpine",
    categoryId: "panels",
    name: "AE Solar ALPINE",
    brand: "AE Solar",
    description: "ألواح شمسية شديدة التحمل بتقنية n-Type TOPCon، مصممة لمقاومة الظروف الجوية القاسية بقدرات من 420W إلى 595W.",
    features: [
      "هيكل شديد التحمل هندسياً لمقاومة الطقس المتطرف",
      "معتمد لتحمل ضربات البرد بحجم 40mm (تصنيف HW4)",
      "زجاج أمان مقسى بسمك 3.2mm وإطار من سبائك الألومنيوم T6 عالي القوة"
    ],
    image: "/products/aesolar-alpine.jpg",
    accent: "from-slate-600 to-slate-800",
    order: 5,
  },
  {
    id: "sinexcel-inverters",
    categoryId: "inverters",
    name: "انفرترات Sinexcel",
    brand: "Sinexcel",
    description: "انفرترات طاقة عالية الكفاءة من شركة سنكسل العالمية، بمجموعة متنوعة من السعات والمواصفات.",
    features: [
      "أنظمة هجينة ومتوافقة مع البطاريات",
      "كفاءة تحويل تصل إلى 98%",
      "مراقبة عن بعد وتحكم ذكي",
      "نطاق سعات من 3 إلى 50 كيلوواط",
    ],
    image: "/products/inverter.jpg",
    accent: "from-brand-blue to-indigo-600",
    order: 2,
  },
  {
    id: "sinexcel-3ph-hv",
    categoryId: "inverters",
    name: "Sinexcel iSUNA — Hybrid Three Phase HV (10-20kW)",
    brand: "Sinexcel",
    description: "انفرتر هجين ثلاثي الأطوار بجهد عالي، يدعم سعات من 10 إلى 20 كيلوواط، مع تقنية SiC وكفاءة قصوى تصل إلى 98.20%، ومنفذي بطارية مستقلين، وقدرة على توازن 100% للأطوار الثلاثة.",
    features: [
      "يدعم 100% توازن للأطوار الثلاثة",
      "تحميل زائد فوري 130-200% (60 ثانية)",
      "إمكانية توصيل 15 وحدة بالتوازي",
      "منفذي بطارية مستقلين (خليط بطاريات قديمة وجديدة)",
      "نسبة DC/AC تصل إلى 1.5 مرة",
    ],
    image: "/products/sinexcel-3ph-hv.jpg",
    accent: "from-brand-blue to-indigo-600",
    order: 3,
  },
  {
    id: "sinexcel-onoff-3ph-hv",
    categoryId: "inverters",
    name: "Sinexcel iSUNA — On/Off-Grid Three Phase HV (22-50kW)",
    brand: "Sinexcel",
    description: "انفرتر هجين ثلاثي الأطوار بجهد عالي يعمل على/خارج الشبكة، يدعم سعات من 22 إلى 50 كيلوواط، بتقنية SiC وكفاءة قصوى 98.6%، مع 4 MPPTs ومنفذ مولد احترافي بتيار 150 أمبير.",
    features: [
      "تقنية SiC بكفاءة قصوى 98.6%",
      "4 MPPTs بتيار دخول 40A لتوافق أعلى",
      "منفذي بطارية مستقلين لخليط البطاريات",
      "تحميل زائد 150% مع خيار دالة AFCI",
      "6 وحدات بالتوازي (وضع خارج الشبكة)",
      "منفذ مولد احترافي بتيار 150A",
    ],
    image: "/products/sinexcel-onoff-3ph-hv.jpg",
    accent: "from-indigo-600 to-brand-blue",
    order: 4,
  },
  {
    id: "sinexcel-offgrid-1ph-lv",
    categoryId: "inverters",
    name: "Sinexcel iSUNA — Off-Grid Single Phase LV (3-12kW)",
    brand: "Sinexcel",
    description: "انفرتر هجين خارج الشبكة أحادي الطور بجهد منخفض، يدعم سعات من 3 إلى 12 كيلوواط، مع مروحة ذكية فائقة الصمت، وكفاءة قصوى 97.5%، وضمان 5 سنوات.",
    features: [
      "دعم 6 وحدات بالتوازي (3-6kW فقط)",
      "دخل طاقة شمسية 125-250% مع 2-4 MPPTs",
      "دخل شبكة 190-460% (تيار 60A-100A)",
      "تغذية الأحمال وشحن البطارية بالتوازي",
      "مروحة ذكية فائقة الصمت",
      "ضمان قياسي 5 سنوات",
    ],
    image: "/products/sinexcel-offgrid-1ph-lv.jpg",
    accent: "from-brand-blue to-cyan-600",
    order: 5,
  },
  {
    id: "sinexcel-osol-sou-g2",
    categoryId: "inverters",
    name: "Sinexcel iSUNA — O-SOL & SOU-G2 Series (1.5-6kW)",
    brand: "Sinexcel",
    description: "انفرتر هجين خارج الشبكة أحادي الطور بجهد منخفض، سلسلة O-SOL و SOU-G2، يدعم سعات من 1.5 إلى 6 كيلوواط، بحجم مصغر وتبريد ذكي فائق الصمت ودعم OTA وتطبيق للمراقبة.",
    features: [
      "دخل مولد >200% ودخل شبكة >200%",
      "قدرة تحميل زائد 130-260%",
      "دعم حتى 6 وحدات بالتوازي",
      "حجم مصغر وتبريد ذكي فائق الصمت",
      "دعم تحديث OTA ومراقبة عبر التطبيق",
    ],
    image: "/products/sinexcel-osol-sou-g2.jpg",
    accent: "from-cyan-600 to-brand-blue",
    order: 6,
  },
  {
    id: "sunwoda-batteries",
    categoryId: "batteries",
    name: "بطاريات Sunwoda",
    brand: "Sunwoda",
    description: "حلول تخزين طاقة متطورة من شركة سنودا العالمية، بقدرات متنوعة وتصميمات مرنة.",
    features: [
      "بطاريات ليثيوم أيون عالية السعة",
      "تصميم قابل للتوسعة والتركيب",
      "عمر افتراضي طويل يصل إلى 10 سنوات",
      "أنظمة إدارة ذكية للبطارية (BMS)",
    ],
    image: "/products/battery.svg",
    accent: "from-emerald-400 to-teal-600",
    order: 3,
  },
];

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: "hubail-water",
    title: "مشروع مياه حبيل الريدة",
    type: "نظام هجين PV-Diesel",
    capacity: "409.2",
    unit: "كيلوواط",
    location: "اليمن",
    description: "نظام طاقة شمسية PV-Diesel (هجين) بقدرة 409.2 كيلوواط باستخدام ألواح AE Solar، لتشغيل نظام ضخ مياه مستدام يخدم المجتمع المحلي بأكمله.",
    image: "/projects/water.jpg",
    accent: "from-emerald-500 via-brand-green to-brand-blue",
    date: "2024",
    order: 1,
  },
  {
    id: "commercial-dabash-store",
    title: "نظام طاقة هجين متكامل لمحل دباش",
    type: "مشروع تجاري",
    capacity: "12", // Estimated logical capacity based on the 3 lithium modules and inverter size
    unit: "kW",
    location: "صنعاء، اليمن",
    description: "تصميم وتركيب نظام طاقة شمسية هجين (Hybrid) لتأمين تغذية كهربائية مستقرة ومستمرة لمحل دباش التجاري. شمل المشروع تركيب انفرتر ذكي عالي الكفاءة، وربطه ببنك تخزين مكون من ثلاث وحدات بطاريات ليثيوم متطورة لضمان تشغيل الأحمال الحساسة على مدار الساعة. تم تنفيذ اللوحات الكهربائية والتمديدات (AC/DC) وفق أعلى معايير السلامة والتنظيم لضمان الكفاءة القصوى والعمر الافتراضي الطويل.",
    date: "2026",
    image: "/projects/dabash-store.jpg",
    accent: "from-brand-blue to-emerald-500", // A clean blue-to-green gradient that matches the tech vibe
    order: 5,
  },
  {
    id: "agri-water-pump-120kw",
    title: "محطة ضخ مياه زراعية متكاملة",
    type: "مشروع زراعي",
    capacity: "120",
    unit: "kW",
    location: "مزارع تهامة، الحديدة",
    description: "تصميم وتوريد وتركيب منظومة طاقة شمسية متكاملة لتشغيل مضخات مياه غاطسة بقدرات عالية. تهدف المنظومة إلى ري مساحات زراعية شاسعة وتقليل الاعتماد على الديزل بنسبة 100%. تم استخدام أحدث انفرترات الضخ المتخصصة من Sinexcel وألواح AE Solar عالية الكفاءة لضمان أطول فترة ضخ يومية واستقرار مستدام للقطاع الزراعي.",
    date: "2024",
    image: "/projects/agriculture.jpg", 
    accent: "from-cyan-500 to-blue-600",
    order: 4,
  },
  {
    id: "sanaa-commercial",
    title: "محطة تجارية – صنعاء",
    type: "نظام هجين PV-Diesel",
    capacity: "316.8",
    unit: "كيلوواط",
    location: "صنعاء",
    description: "تركيب نظام طاقة شمسية PV-Diesel (هجين) متكامل بقدرة 316.8 كيلوواط لمحطة تجارية كبرى في العاصمة صنعاء.",
    image: "/projects/commercial.jpg",
    accent: "from-brand-blue to-emerald-500",
    date: "2024",
    order: 2,
  },
  {
    id: "mall-project",
    title: "مركز تجاري (مول)",
    type: "نظام هجين مع تخزين",
    capacity: "28.4",
    unit: "كيلوواط",
    location: "اليمن",
    description: "نظام شمسي هجين بقدرة 28.4 كيلوواط مع بطاريات ليثيوم لتشغيل مركز تجاري كبير، مع تخزين طاقة للاستخدام الليلي.",
    image: "/projects/mall.jpg",
    accent: "from-teal-500 to-brand-blue",
    date: "2023",
    order: 3,
  },
];

```
`src\lib\store.ts`:

```ts
"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Category, Product, Project } from "./types";
import { DEFAULT_CATEGORIES, DEFAULT_PRODUCTS, DEFAULT_PROJECTS } from "./seed-data";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

interface StoreState {
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;

  categories: Category[];
  products: Product[];
  projects: Project[];

  addCategory: (cat: Omit<Category, "id" | "order">) => void;
  updateCategory: (id: string, cat: Partial<Category>) => void;
  deleteCategory: (id: string) => void;

  addProduct: (prod: Omit<Product, "id" | "order">) => void;
  updateProduct: (id: string, prod: Partial<Product>) => void;
  deleteProduct: (id: string) => void;

  addProject: (proj: Omit<Project, "id" | "order">) => void;
  updateProject: (id: string, proj: Partial<Project>) => void;
  deleteProject: (id: string) => void;

  resetToDefaults: () => void;
}

function genId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      isAdmin: false,
      login: (password) => {
        if (password === ADMIN_PASSWORD) {
          set({ isAdmin: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAdmin: false }),

      categories: DEFAULT_CATEGORIES,
      products: DEFAULT_PRODUCTS,
      projects: DEFAULT_PROJECTS,

      addCategory: (cat) =>
        set((s) => ({
          categories: [...s.categories, { ...cat, id: genId("cat"), order: s.categories.length + 1 }],
        })),
      updateCategory: (id, cat) =>
        set((s) => ({
          categories: s.categories.map((c) => (c.id === id ? { ...c, ...cat } : c)),
        })),
      deleteCategory: (id) =>
        set((s) => ({
          categories: s.categories.filter((c) => c.id !== id),
          products: s.products.filter((p) => p.categoryId !== id),
        })),

      addProduct: (prod) =>
        set((s) => ({
          products: [...s.products, { ...prod, id: genId("prod"), order: s.products.length + 1 }],
        })),
      updateProduct: (id, prod) =>
        set((s) => ({
          products: s.products.map((p) => (p.id === id ? { ...p, ...prod } : p)),
        })),
      deleteProduct: (id) =>
        set((s) => ({
          products: s.products.filter((p) => p.id !== id),
        })),

      addProject: (proj) =>
        set((s) => ({
          projects: [...s.projects, { ...proj, id: genId("proj"), order: s.projects.length + 1 }],
        })),
      updateProject: (id, proj) =>
        set((s) => ({
          projects: s.projects.map((p) => (p.id === id ? { ...p, ...proj } : p)),
        })),
      deleteProject: (id) =>
        set((s) => ({
          projects: s.projects.filter((p) => p.id !== id),
        })),

      resetToDefaults: () =>
        set({
          categories: DEFAULT_CATEGORIES,
          products: DEFAULT_PRODUCTS,
          projects: DEFAULT_PROJECTS,
        }),
    }),
    {
      name: "asr-al-shams-store",
      version: 6,
      partialize: (s) => ({
        isAdmin: s.isAdmin,
        categories: s.categories,
        products: s.products,
        projects: s.projects,
      }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        if (!state.categories || state.categories.length === 0) state.categories = DEFAULT_CATEGORIES;
        if (!state.products || state.products.length === 0) state.products = DEFAULT_PRODUCTS;
        if (!state.projects || state.projects.length === 0) state.projects = DEFAULT_PROJECTS;
      },
      migrate: (persistedState: any, version: number) => {
        if (version < 6) {
          return {
            ...persistedState,
            categories: DEFAULT_CATEGORIES,
            products: DEFAULT_PRODUCTS,
            projects: DEFAULT_PROJECTS,
          };
        }
        return persistedState;
      },
    }
  )
);

```
`src\lib\types.ts`:

```ts
export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  order: number;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  brand: string;
  description: string;
  features: string[];
  image: string;
  accent: string;
  order: number;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  capacity: string;
  unit: string;
  location: string;
  description: string;
  image: string;
  accent: string;
  date: string;
  order: number;
}

```
`src\lib\utils.ts`:

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```
`tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
};
export default config;

```
`tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "noImplicitAny": false,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

```