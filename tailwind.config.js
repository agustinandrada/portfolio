module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ['"Space Grotesk"', "system-ui", "sans-serif"],
      secondary: ['"DM Sans"', "system-ui", "sans-serif"],
      mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
    },
    container: {
      padding: {
        DEFAULT: "16px",
        lg: "24px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        // Cocoa: marrones oscuros y cálidos
        cocoa: {
          950: "#140C08",
          900: "#1C120C",
          800: "#2A1B13",
          700: "#3B271B",
          600: "#563826",
          500: "#7A5038",
        },
        // Topaz: naranja brillante / ámbar
        topaz: {
          DEFAULT: "#F28C38",
          light: "#F7B267",
          dark: "#C8642A",
        },
        // Noonday: azules relajantes
        noonday: {
          DEFAULT: "#8EC3E6",
          light: "#BFDDF1",
          dark: "#4F8CB5",
        },
        cream: {
          DEFAULT: "#F5E9DC",
          muted: "#CBB8A6",
          dim: "#9C8775",
        },
        // alias usados en componentes antiguos
        primary: "#1C120C",
        accent: "#F28C38",
      },
    },
  },
  plugins: [],
};
