tailwind.config = {
    darkMode: 'class',
      theme: {
        extend: {
          animation: {
            modalf: "modalf 0.30s ease-in-out",
            modalc: "modalc 0.30s ease-in-out",
        },
        keyframes: {
            modalf: {
                "0%": { transform: "scale(0)" },
                "100%": { transform: "scale(1)" },
            },
            modalc: {
              "0%": { transform: "scale(1)" },
              "100%": { transform: "scale(0)" },
            }
        },
        }
      }
    }