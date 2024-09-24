# Button

**Location: _src/components/button.tsx_**

The button component is used to display a button on the page. Whilst called a button, the component can be user as either a button or a link depending on the props passed in. The button is customisable with the `variant` prop which allows the button to be styled in different ways. This component provides a simple way to add consistent buttons to the application.

## Props

- `children`: ReactNode - The children of the button component. This can be any component or text.
- `href`: string - The URL the button should link to. If this prop is passed in, the button will be rendered as a link.
- `type`: "button" | "submit" | "reset" - The type of the button. This is only used if the button is not a link.
- `onClick`: () => void - The function to be called when the button is clicked. This is only used if the button is not a link.
- `target`: "_blank" | "_self" | "_parent" | "_top" - The target of the link. This is only used if the button is a link.
- `variant`: {
  - `name`: "standard" | "bordered" | "outline" | "fill" - The style of the button.
  - `size`: "sm" | "md" | "lg" | "xl" - The size of the button.
  - `colour`: "zinc" | "blue" | "yellow" | "darkBlue" | "green" | "red" | "transparent" - The colour of the button.
  - `icon`: boolean - Whether the button should have an icon.
  - `dark`: boolean - Whether the button should be dark.
}
- `style`: CSSProperties - The style of the button.
- `className`: string - The class name of the button.

## Example

![Button Options](/docs/images/button.png)
