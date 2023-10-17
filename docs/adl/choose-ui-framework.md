# Choose UI framework

## Status

What is the status, such as proposed, accepted, rejected, deprecated, superseded, etc.?

## Context

### 1. Problem

- We have to choose the architecture that will be our project's basis and think about the styles system we will be using. (SSG vs SPA)
- Also, we have to choose a frontend framework by using the method of Systemic Consensing. It allows us to find the best possible framework which will be the least dissatisfaction for each member of our team.

### 2. Criteria

- Because part of our team is the first contact with frontend frameworks. We need a framework that will be easy to use and learn and has quality documentation.
- Important for us is also the popularity of this framework, the helpful society.
- We want the user experience to be fast and pleasant, on all popular browsers and screen sizes.
- We want a responsive application on smartphones and computers.
- The framework does not introduce solutions that require advanced knowledge.
- We prefer the framework which allows us to find a job.

### 3. Options

We have a long list of frontend frameworks:

- Qwik
- Astro
- Svelte
- Vue
  - Nuxt
- React
  - Next
  - Gatsby
  - Remix
  - Preact
  - Solid
- Angular

### 4. Matching frameworks to criteria

1. Qwik

- Easy to learn. Is ready for production, and there are not expected breaking changes.
- There is a growing community of Qwik developers at Discord and GitHub, they are making amazing contributions to the framework, building sites at scale and helping each other.
- Has unprecedented performance, offering sub-second full page loads even on mobile devices. Qwik achieves this by delivering pure HTML, and incrementally loading JS only as-needed. Unlike other frameworks, Qwik is resumable which means Qwik applications require 0 hydration. This allows Qwik apps to have instant-on interactivity, regardless of size or complexity.
  Thanks to prefetching Qwik apps are not more affected by slow networks than other frameworks. In fact because of the fine grained bundling and resumability, Qwik apps can become interactive with much less JS, effectively making them faster on slow networks.
  Qwik can be used to build any type of web site or application.
- The goal of Qwik is having only to download and execute the bare minimum of the application.
- Qwik serializes listeners, internal data structures, and application state into the HTML on server browser handoff. Because all of the information is serialized in HTML, the client can just resume execution where the server left off.
- It is hard to find a job in Qwik

2. Astro

- Astro’s goal is to be accessible to every web developer. Astro was developed to be approached, either by a senior or junior developer, making it easy to build an application, no matter the experience in the past of the developer.

- Server-first: Websites run faster when they render HTML on the server.
  Astro uses partial hydration, it allows to create interactivity by putting back in some client-side JavaScript where it is absolutely needed. At the same time, partial hydration allows the developer to determine what aspects are loaded and when, using something they refer to as an “island architecture”.

- It is hard to find a job in Qwik

3. Svelte

- At minimum, it is recommended that you are familiar with the core HTML, CSS, and JavaScript languages, and have knowledge of the terminal/command line.
  Require Node.js.
  If you're using Windows, you will need to install some software to give you parity with Unix/macOS terminal in order to use the terminal commands.
  Svelte sticks closely to the classic web development model of HTML, CSS, and JS, just adding a few extensions to HTML and JavaScript.

- While frameworks like React and Vue do the bulk of their work in the user's browser while the app is running, Svelte shifts that work into a compile step that happens only when you build your app, producing highly optimized vanilla JavaScript.
  Web applications intended for low-power devices: Applications built with Svelte have smaller bundle sizes, which is ideal for devices with slow network connections and limited processing power. Less code means fewer KB to download, parse, execute, and keep hanging around in memory.
  Highly interactive pages or complex visualizations: If you are building data-visualizations that need to display a large number of DOM elements, the performance gains that come from a framework with no runtime overhead will ensure that user interactions are snappy and responsive.

  - Being a compiler, Svelte can extend HTML, CSS, and JavaScript, generating optimal JavaScript code without any runtime overhead. To achieve this, Svelte extends vanilla web technologies.

- It is hard to find a job in Qwik

4. React

- React has a JSX syntax which can be a little confusing for new users. Requires knowledge of HTML, CSS, and JS (ES6+, OOP, working with DOM, asynchronous JavaScript).
  It's good to have a basic knowledge of the NPM/Yarn, terminal.
  Currently, React hasn't a quality documentation, there is another pages with documentation which aims to become main. (https://beta.reactjs.org/) or this one (https://devdocs.io/react/)

- React is the most popular framework. Has a massive community of JavaScript developers, and it's Open Source, there is a huge chance to find solutions on the web.

- React was created for the massive application, hence it isn't as fast as other frameworks.

- React allows the creation of responsive applications.

- Core of React is focused on the UI so most projects require many other libraries or third-party frameworks for additional functionality. But you haven't to learn any other languages to start with React.

- React has the most job offers.

5. Next.js

- Next.js is a third-party React framework so it expands the assumptions of React and it's good to know the assumptions of React and know how to use them.

- The Next.js community is encouraged to help with maintaining documentation

- As the Next.js expands React it's allows you to fit more offers

6. Vue

- Vue has a very simple syntax that will be immediately familiar to anyone with experience working with JavasScript and HTML.
  Vue is a little similar to Angular.
  Vue also has official docs and the docs created by the community.
- Code is organized into three parts:

  - template (HTML)
  - script (JS)
  - style (CSS)

- Currently, Vue is the second most popular framework.
  Community created its docs.

- Vue was created to develop responsive applications.
  Because Vue is created for smaller projects, apps are fast on the other hand, large projects on Vue are not a good idea
  Vue provides higher performance, allows to work with Virtual DOM

- Vue has its own state manager, browser debugging tools, and server renderer which are created on JS.

- There are many offers for Vue developers, but a list of these offers isn't
  as large as the case of React

7. Nuxt.js

- Currently, Nuxt 3 is the beta version. But soon it will get a stable version.
- As the Nuxt extends Vue we have to be familiar with Vue. Also, it needs a bundler, and routing library.
- Nuxt takes care of provides both frontend and backend functionality.
- Nuxt enables a road to route transitions leaving no fourth dimension to waste in road configurations in the integral application. Vue.js lacks this feature .
- A module system allows to extend Nuxt with custom features and integrations with third-party services.
- As Nuxt.js expands Vue it allows you to fit more offers.

8. Remix

- Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience.

## Decision

- After the decision-making proces we choose the Nuxt framework. Here are the docs that served us as a place to discuss the selection.
  [framework selection](https://docs.google.com/spreadsheets/d/1fH3l5r_8xHCOinwQxrG0ppLeNO4d1f3jfnwLYAvEmGM/edit#gid=0)

- This decision-making process allows us to choose a framework that has the least resistance.

## Consequences and summary

- We need to know many new topics for us. We want to build an application for makeup artists so we will have to know a bit about their world and needs.
- About the previous sentence we also need to know the programming environment (there are a lot of topics such as learning and fixing problems with documentation and using relevant packages). And we keep getting to know each other, we learn how to work in a group.
- Also we have to learn Vue's basic assumptions before focusing on the Nuxt.
