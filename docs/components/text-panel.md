# TextPanel

**Location: _src/components/pannel/text-panel.tsx_**

The text panel component is used to display a panel of text next to an image, with an optional title. The images are removed on smaller screens.

## Props

- `title`: string - The title of the text panel.
- `imageSrc`: string - The URL of the image to be displayed on the text panel.
- `imageAlt`: string - The alt text of the image.
- `className`: string - The class name of the text panel.
- `contentClassName`: string - The class name of the content of the text panel.
- `children`: ReactNode - The children of the text panel.
- `variant`: object - The variant of the text panel.
  - `colour`: string - The colour of the text panel.
  - `textPosition`: string - The position of the text in the text panel.
  - `corner`: string - The corner of the text panel.
  - `deco`: string[] - The decoration of the text panel.

## Example

![TextPanel](/docs/images/text-panel.png)
