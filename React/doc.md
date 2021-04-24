# React

## What is React?

### Client Side JavaScript library

- Created & maintained by facebook
- Used to build dynamic user interfaces
- "Component" based
- Most popular framework in the industry

## Library or Framework?

React is **technically** a library but is often refered to as a framework as it is used for many of the same reasons as a framework.

## Why Learn & Use React?

- Build a powerful Frontend/UI
- Code Organization
- Reusable component
- Speed & Performance
- Makes things much easier
- Very popular in the industey

## Component Based UI

- Look at each element as individual component
- Organized structure
- Logic, output & style
- Components can have "props" & "state"
- Passing props and states along the UI

## Hooks

Functions that let us hook into react state and lifecycle features from a function component.

We can use functional components instead of class components. For something like `componentDidMount()` we had to use a class.

- useState (allows us to use state in a functional component)
- useEffect (mimics lifecycle methods, allows us to have sideeffects)
- useContext (contextAPI)
- useReducer (create redux like reduxe instead of using redux, dispatch action)
- useRef...

Those are the big hooks. The most used ones.
`Import {useState, useEffect} from 'react';`

You can create custom Hooks.

## Context

Until now we had to pass a prop from a component to another to use it. If we have a very deep component and we want to use a function from there in the App Component, we had to pass the function all the way through all component (props drilling). With Context we can remove the state from the Component and put them into Context.

We create 3 different files:
- githubContext.js
- GithubState.js
- githubReduces.js



## Commands

### Create React App

. is for current folder.
`npx create-react-app .`

### Run Dev Server
`npm start`

## Old School Class based

ES7 snippets: `rce`

```
import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
```

## Arrow Function Component

ES7: `racf`

```
import React from 'react'

export const Spinner = () => {
  return (
    <div>
      
    </div>
  )
}

```


## PropTypes

ES7 snippes: `impt`

-> `import PropTypes from 'prop-types'`

## Router

`npm i react-router-dom`

## Netlify CLI for Deployment

`sudo npm i -g netlify-cli`

Initialize `netlify init`

For deployment we need a build folder

`npm run build`

And deploy to production with
`netlify deploy --prod`