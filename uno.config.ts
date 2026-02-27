import { defineConfig } from "unocss";
import presetWind3, { type Theme } from "@unocss/preset-wind3";
import presetTypography from "@unocss/preset-typography";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig<Theme>({
  presets: [
    presetWind3({
      dark: "class",
    }),
    presetTypography({
      cssExtend: {
        "blockquote p:first-of-type::before": { content: "none" },
        "blockquote p:last-of-type::after": { content: "none" },
        figure: {
          "margin-left": "auto",
          "margin-right": "auto",
          "text-align": "center",
        },
        "figure img": {
          "margin-left": "auto",
          "margin-right": "auto",
        },
        a: {
          color: "hsl(var(--primary))",
          "text-decoration-color": "hsl(var(--primary) / 0.4)",
        },
        "a:hover": {
          color: "hsl(var(--accent))",
          "text-decoration-color": "hsl(var(--accent) / 0.4)",
        },
      },
    }),
  ],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      border: "hsl(var(--border) / <alpha-value>)",
      input: "hsl(var(--input) / <alpha-value>)",
      ring: "hsl(var(--ring) / <alpha-value>)",
      background: "hsl(var(--background) / <alpha-value>)",
      foreground: "hsl(var(--foreground) / <alpha-value>)",
      primary: {
        DEFAULT: "hsl(var(--primary) / <alpha-value>)",
        foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
        foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
        foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
      },
      muted: {
        DEFAULT: "hsl(var(--muted) / <alpha-value>)",
        foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
      },
      accent: {
        DEFAULT: "hsl(var(--accent) / <alpha-value>)",
        foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
      },
      popover: {
        DEFAULT: "hsl(var(--popover) / <alpha-value>)",
        foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
      },
      card: {
        DEFAULT: "hsl(var(--card) / <alpha-value>)",
        foreground: "hsl(var(--card-foreground) / <alpha-value>)",
      },
      sidebar: {
        DEFAULT: "hsl(var(--sidebar-background) / <alpha-value>)",
        foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
        primary: "hsl(var(--sidebar-primary) / <alpha-value>)",
        "primary-foreground":
          "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
        accent: "hsl(var(--sidebar-accent) / <alpha-value>)",
        "accent-foreground":
          "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
        border: "hsl(var(--sidebar-border) / <alpha-value>)",
        ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
      },
      code: "#0ea5e9",
      terminal: "#111827",
    },
    fontFamily: {
      mono: "JetBrains Mono, monospace",
      sans: "Inter, sans-serif",
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    animation: {
      keyframes: {
        "accordion-down":
          "{ from { height: 0 } to { height: var(--radix-accordion-content-height) } }",
        "accordion-up":
          "{ from { height: var(--radix-accordion-content-height) } to { height: 0 } }",
        "fade-in": "{ from { opacity: 0 } to { opacity: 1 } }",
        "slide-up":
          "{ from { transform: translateY(20px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }",
        "cursor-blink": "{ 0%, 100% { opacity: 1 } 50% { opacity: 0 } }",
      },
      durations: {
        "accordion-down": "0.2s",
        "accordion-up": "0.2s",
        "fade-in": "0.5s",
        "slide-up": "0.5s",
        "cursor-blink": "1s",
      },
      timingFns: {
        "accordion-down": "ease-out",
        "accordion-up": "ease-out",
        "fade-in": "ease-out",
        "slide-up": "ease-out",
        "cursor-blink": "step-start",
      },
      properties: {
        "fade-in": { "animation-fill-mode": "forwards" },
        "slide-up": { "animation-fill-mode": "forwards" },
      },
      counts: {
        "cursor-blink": "infinite",
      },
    },
  },
  shortcuts: {
    container: "w-full mx-auto px-8 max-w-[1400px]",
  },
});
