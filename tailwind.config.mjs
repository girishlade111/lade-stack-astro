import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      xxxs: '376px',
      xxs: '480px',
      xs: '768px',
      sm: '960px',
      md: '1100px',
      lg: '1200px',
      xl: '1440px',
      '2xl': '1640px',
    },
    container: {
      center: true,
      padding: '24px',
      screens: {
        '2xl': '1640px',
      },
    },
    extend: {
      colors: {
        // DESIGN.md exact tokens
        primary: {
          DEFAULT: '#0b0b0b',
          foreground: '#ffffff',
        },
        'on-primary': '#ffffff',
        brand: {
          DEFAULT: '#f36458',
          deep: '#dd0000',
        },
        ink: {
          DEFAULT: '#0b0b0b',
          soft: '#212121',
        },
        graphite: '#353535',
        slate: {
          DEFAULT: '#3c4758',
          soft: '#505b6c',
        },
        mute: '#5f5f5f',
        ash: '#b9b9b9',
        hairline: {
          DEFAULT: '#ededed',
          soft: '#353535',
        },
        canvas: {
          DEFAULT: '#0b0b0b',
          soft: '#212121',
          light: '#ffffff',
          paper: '#ededed',
        },
        'on-canvas-light': '#0b0b0b',
        'link-blue': {
          DEFAULT: '#0052ef',
          soft: '#55beff',
        },
        'surface-blue-bg': '#afe3ff',
        success: '#37cd84',
        error: '#dd0000',

        // Semantic system compatibility
        border: 'var(--border, #353535)',
        input: 'var(--input, #353535)',
        ring: 'var(--ring, #0052ef)',
        background: 'var(--background, #0b0b0b)',
        foreground: 'var(--foreground, #ffffff)',
        secondary: {
          DEFAULT: '#212121',
          foreground: '#b9b9b9',
        },
        muted: {
          DEFAULT: '#212121',
          foreground: '#a8a8a8',
        },
        accent: {
          DEFAULT: '#f36458',
          foreground: '#0b0b0b',
        },
        card: {
          DEFAULT: 'var(--card, #212121)',
          foreground: 'var(--card-foreground, #ffffff)',
        },
      },
      fontFamily: {
        // 'Inter Fallback' / 'IBM Plex Mono Fallback' are metric-matched
        // local faces (see global.css) that hold layout during font swap.
        sans: ['Inter', 'Inter Fallback', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['IBM Plex Mono', 'IBM Plex Mono Fallback', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      spacing: {
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
        section: '64px',
        'section-lg': '96px',
      },
      borderRadius: {
        none: '0px',
        'app-xs': '3px',
        'app-sm': '4px',
        'app-md': '5px',
        'app-lg': '6px',
        marketing: '12px',
        full: '99999px',
        lg: '6px',
        md: '5px',
        sm: '4px',
      },
      boxShadow: {
        'soft-drop': '0 4px 24px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [typography, animate],
};

