# Culinario Front-End Coding Guidelines

This document outlines the coding standards and best practices for the Culinario project, a culinary app helping users find recipes based on ingredients they already have at home.

## Component Structure

- Use **named exports** for components (no default exports)
- For simple components, use arrow function expressions with implicit returns:
  ```tsx
  export const SimpleComponent = () => (
    <View>
      <SizableText>Content</SizableText>
    </View>
  );
  ```
- For complex components, use arrow functions with explicit returns:
  ```tsx
  export const ComplexComponent = () =>
    // Logic here
    (
      <View>
        <SizableText>Content</SizableText>
      </View>
    )
  ;
  ```
- Define all functions using `const`

## TypeScript & Props

- Define explicit prop types for each component using TypeScript interfaces
- Use destructured props in function parameters
- Place interface declarations immediately before the component they relate to
- Example:
  ```tsx
  type ComponentProps = {
    title: string;
    description: string;
  };

  export const Component = ({ title, description }: ComponentProps) => (
    // Component implementation
  );
  ```
- Use `Record<string, T>` instead of `[key: string]: T`;

## Styling Patterns

- Use Tamagui's component system (`XStack`, `YStack`, `View`) for layout
- Apply these shorthand props for styling:
  ```
  // text
  text: 'textAlign',
  // view
  b: 'bottom',
  bg: 'backgroundColor',
  content: 'alignContent',
  grow: 'flexGrow',
  items: 'alignItems',
  justify: 'justifyContent',
  l: 'left',
  m: 'margin',
  maxH: 'maxHeight',
  maxW: 'maxWidth',
  mb: 'marginBottom',
  minH: 'minHeight',
  minW: 'minWidth',
  ml: 'marginLeft',
  mr: 'marginRight',
  mt: 'marginTop',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  p: 'padding',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  pt: 'paddingTop',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  r: 'right',
  rounded: 'borderRadius',
  select: 'userSelect',
  self: 'alignSelf',
  shrink: 'flexShrink',
  t: 'top',
  z: 'zIndex'
  ```
- Use consistent spacing values from the theme system (`$1`, `$2`, `$3`, `$4`, `$6`)
- Use `rounded={16}` for container components and `rounded={12}` for internal elements
- For borders, use `borderWidth={1}` with `borderColor="$border"`
- Use theme colors for backgrounds:
  - `bg="$bg1"` - Primary background
  - `bg="$bg2"` - Secondary/card background
  - `bg="$primary"` - Brand primary color
  - `bg="$primaryOpacity"` - Transparent version of primary color for icons backgrounds

## Text & Typography

- Use `SizableText` with predefined sizes:
  - `size="$h1"` - Main headings
  - `size="$h2"` - Secondary headings
  - `size="$body1"` - Primary body text
  - `size="$body2"` - Secondary body text
- Use appropriate text colors:
  - `color="$text1"` - Primary text (dark in light mode, light in dark mode)
  - `color="$text2"` - Secondary text (muted)
  - `color="$lightText"` - Light text (for dark backgrounds)
- All text should be only black or white, adapting to the theme
- Dont't set custom fontWeight

## Icons & Images

- Import icons from `@tamagui/lucide-icons`
- Icons must not have background blocks, baseplates, or outer frames
- Use consistent icon sizes:
  - `size={24}` - Primary/large icons
  - `size={20}` - Standard icons
  - `size={16}` - Small icons
- For icon colors, use theme colors matching the context
- For images:
  - Use the `Image` component from `@repo/ui`
  - Specify dimensions and `objectFit="cover"` for consistent display
  - Source images from open-source image websites with direct links

## Layout Patterns

- Use `XStack` for horizontal layouts, `YStack` for vertical layouts
- Apply consistent gap between elements:
  - `gap="$1"` - Minimal spacing
  - `gap="$2"` - Tight spacing
  - `gap="$3"` - Standard spacing
  - `gap="$4"` - Comfortable spacing
  - `gap="$6"` - Section spacing
- Apply consistent padding inside containers:
  - Cards/sections: `p="$4"`
  - Main container: `px={24} py={32}`
- Use `flex={1}` to expand components to fill available space
- For main content areas, apply `bg="$bg1"`

## Theme & Colors

- Support both light and dark modes
- Use these theme colors for elements that change between modes:
  - `neutralBase` - Base neutral color
  - `neutralMid` - Mid-tone neutral color
  - `neutralOposite` - Opposite neutral color
- Use accent colors appropriately:
  - Primary actions: `$primary`
  - Info/focus states: `$focusOutline`

## Responsive Design

- Use platform-specific styling with:
  ```tsx
  $platform-web={{ /* web-specific styles */ }}
  $platform-native={{ /* native-specific styles */ }}
  ```
- For focus states:
  - Web: `focusVisibleStyle: { borderColor: 'transparent', outlineColor: '$focusOutline', outlineOffset: -1 }`
  - Native: `focusStyle: { borderColor: '$focusOutline', borderWidth: 2 }`

## File Organization

- Group related components in folders
- Use barrel exports (index.ts) for component directories
- Organize complex components into subcomponents in a separate folder
- Follow this folder structure:
  ```
  /features
    /[feature-name]
      /components
        /[ComponentName]
          /components (optional for nested components)
          index.ts
          [ComponentName].tsx
  ```

## Design Principles

- Maintain a balance between elegant minimalism and functional design
- Use soft, refreshing gradient colors that integrate with the brand palette
- Ensure well-proportioned white space for clean layouts
- Create a light and immersive user experience
- Establish clear information hierarchy with subtle shadows and modular card layouts
- Focus naturally on core functionalities
- Use refined rounded corners and delicate micro-interactions
- Ensure comfortable visual proportions

## Coding Principes

- Don't write comments in simples components, use them just for complex logic
- Use `${count}` to compose strings
- Use PropsWithChildren to get the children type
