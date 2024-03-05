// tailwind.config.js
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            screens: {
                sm: { min: "0px", max: "639px" },
                md: { min: "640px", max: "768px" },
                lg: { min: "768px", max: "1366px" },
                xl: { min: "1024px", max: "1636px" },
                xxl: { min: "1636px", max: "1920px" },
            },

            backgroundColor: {
                navbar: "#0A0C0F",
                buttonvip: "#F2BF83",
                buttonviphover: "#FFD6A6",
                navbarhoverbg: "#1A1C22",
            },
            padding: {
                logo: "17px",
            },
            fontFamily: {
                sans: ["SF Pro", "Roboto", "Noto Sans", "sans-serif"],
            },
            textColor: {
                "gray-navbar": "rgb(128, 128, 128)",
                "green-hover": "rgb(28, 199, 73)",
            },
        },
    },
    plugins: [],
};
