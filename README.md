# TripPilot

[TripPilot]() is a full-stack user-friendly web app for effective travel planning! With TripPilot, users can plan solo trips, collaborate with friends and family, archive and share past trips, and build bucket lists for future travels. Trip planning features include adding itinerary items, locations, and booking information to a trip, uploading documents such as flight bookings, extracting trip information to be shared offline, and 

This app was created using React, JavaScript, Node.js, Express,js, MySql and Knex.js. See [Teck Stack section](#books-tech-stack) for details. It includes a front end that allows users to add, view, and save shopping deals of interest.

This is an ongoing project dreamed up by a group of software engineering classmates continuing to work together to create TripPilot.

It's important to follow the [Instructions](#computer-installation-instructions) below to setup and run this server properly. 

## :books: Tech Stack
- [Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) - JavaScript is a scripting or programming language that allows you to implement complex features on web pages;
- [Node.js](https://nodejs.org/en) - Node.js® is an open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts;
- [React.js]() - React is an open-source front-end JavaScript library for building user interfaces based on components. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js;
- [MongoDB](https://www.mongodb.com/) - MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas;
- [Express.js](https://expressjs.com) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications;
- [Typescript](https://www.typescriptlang.org) - TypeScript is an open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript;
- [Tailwind CSS](https://tailwindcss.com) - Tailwind CSS is an open-source CSS framework. The main feature of this library is that, unlike other CSS frameworks, it does not provide a series of predefined classes for elements such as buttons or tables.
- Server Libraries:
  - [Express.js Middleware Modules](https://expressjs.com/en/resources/middleware.html);
  - []();
  - []().

<!-- ## Development Team
insert everyone's first name + links to github profile pages -->

## Mock-Up

Check out our [mock-up designs here](https://www.figma.com/design/CKERIpXmzdm8b1r1l6YPRI/TripPilot---MockUp)!

## Future Functions

- Trip & bucket list suggestions;
- Following other users and sending friend requests;
- Newsletter and notification functionalities for trending destinations and flight/hotel deals;


## :computer: Installation Instructions

<!-- Below content previously existing in README file & currently untouched. -->

### React + TypeScript + Vite
To run the frontend 
npm install 
npm run dev
http://localhost:5173/

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
