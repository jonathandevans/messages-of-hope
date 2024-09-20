# Messages of Hope

!["Messages of Hope Website"](/docs/images/home-page.png)

Messages of Hope is a Community Interest Company dedicated to supporting individuals struggling with their mental health by encouraging people to write uplifting messages. These messages are transformed into stickers and Instagram posts, spreading positivity across the UK.

We actively engage with the community, inviting strangers to write messages of hope. Whether through collaborative art projects, video initiatives, or our Bags of Hope, our mission is to inspire and uplift those facing mental health challenges. By collecting and sharing these messages, we aim to create a supportive network, showing that even small acts of kindness can make a significant impact.

This is the official web application for Messages of Hope, a Community Interest Company dedicated to supporting mental health and well-being. The application is designed to allow users to submit messages of hope to support others in need. The application is built using the Next.js framework and is hosted on Vercel.

## Design

The application is designed using a mobile-first approach. The application is designed to be responsive and accessible. The initial design of the application was created using Figma. This design was then expanded upon to create the final application.

Find the design [here](https://www.figma.com/design/EPLZyXpwPixaVd2QdufwvT/Base?node-id=0-1&t=WjjGneCl9vh9mWeZ-1).

## Frontend Development

The frontend of the application is built using the Next.js framework. The frontend uses the app router to navigate between pages and components. The frontend is styled using CSS modules. The application is built using a number of components. These components are located in the _components/_ directory. The components come with their own variations and styles that can be utilised through the `variants` prop. There are two main types of components: layout components which we call panels and content components.

### Panel Components:

- [Navbar](/docs/components/navbar.md)
- [Footer](/docs/components/footer.md)
- [Banner](/docs/components/banner.md)
- [CardPanel](/docs/components/card-panel.md)
- [ContactForm](/docs/components/contact-form.md)
- [LinkGrid](/docs/components/link-grid.md)
- [MaxWidthWrapper](/docs/components/max-width-wrapper.md)
- [MessageSlideshow](/docs/components/message-slideshow.md)
- [TextPanel](/docs/components/text-panel.md)

### Content Components:

- [Button](/docs/components/button.md)

## Third Party Resources

- [Vercel](https://vercel.com/): The application is hosted on Vercel.
- [Supabase](https://supabase.io/): The application uses Supabase for the database.
- [Cloudinary](https://cloudinary.com/): The application uses Cloudinary for image hosting.
