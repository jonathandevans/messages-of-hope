# Banner

**Location: _src/components/pannel/banner.tsx_**

The banner component is used to display the title of the page with a background image. However, the banner is not required to display the title rather by passing in `children`, the banner can contain further components. The banner component is used on all pages of the application.

The banner component is designed to be used in combination with the [Navigation Bar](/docs/components/navbar.md) component. This is because the navbar by default has no background colour, and the text is white to provide some contrast, and the banner component is used to provide a background image for the navbar.

## Props

- `children`: ReactNode - The children of the banner component. This can be any component or text.
- `title`: string - The title of the banner. This is displayed in the centre of the banner.
- `image`: string - The background image of the banner. This is a URL to the image.

## Example

![Banner Options](/docs/images/banner.png)
