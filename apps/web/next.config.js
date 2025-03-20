import { withExpo } from "@expo/next-adapter";

/** @type {import('next').NextConfig} */
const config = withExpo({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx'],
  transpilePackages: [
    // you need to list `react-native` because `react-native-web` is aliased to `react-native`.
    "react-native",
    "react-native-web",
    "@repo/ui",
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
      "react-native/Libraries/Image/AssetRegistry":
      "react-native-web/dist/cjs/modules/AssetRegistry", // Fix for loading images in web builds with Expo-Image
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
});

export default config;