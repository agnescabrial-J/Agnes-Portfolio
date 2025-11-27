export type ThemeMode = "light" | "dark" | "corporate";

export const themePresets: Record<ThemeMode, Record<string, string>> = {
  light: {
    "--color-primary-from": "#F7941D",
    "--color-primary-via": "#0082CA",
    "--color-primary-to": "#1C4E99",
    "--color-text-primary": "#1F2937",
    "--color-text-secondary": "#6B7280",
    "--color-bg-base": "#F9FAFB",
    "--color-bg-surface": "#FFFFFF",
  },
  dark: {
    "--color-primary-from": "#2563EB",
    "--color-primary-via": "#1E40AF",
    "--color-primary-to": "#0EA5E9",
    "--color-text-primary": "#F9FAFB",
    "--color-text-secondary": "#9CA3AF",
    "--color-bg-base": "#0F172A",
    "--color-bg-surface": "#1E293B",
  },
  corporate: {
    "--color-primary-from": "#4B0082",
    "--color-primary-via": "#6A0DAD",
    "--color-primary-to": "#8A2BE2",
    "--color-text-primary": "#111827",
    "--color-text-secondary": "#6B7280",
    "--color-bg-base": "#F3F4F6",
    "--color-bg-surface": "#FFFFFF",
  },
};
