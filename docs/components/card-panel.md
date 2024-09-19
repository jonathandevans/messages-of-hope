# CardPanel

**Location: _src/components/pannel/card-panel.tsx_**

The card panel component is used to display a panel of cards. Each card contains an image, title, and text, and can link to another page. Whilst the card panel does not have any variation, it takes in an array of data to display the cards. 

## Props

- `title`: string - The title of the card panel.
- `cards`: CardProps[] - The cards to be displayed in the card panel.

### CardProps

- `title`: string - The title of the card.
- `imageSrc`: string - The URL of the image to be displayed on the card.
- `imageAlt`: string - The alt text of the image.
- `text`: string - The text to be displayed on the card.
- `href`: string - The URL the card should link to.

## Example

![CardPanel](/docs/images/card-panel.png)
