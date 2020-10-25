# Persistent State issues when navigating between scenes 

## initial problem

routing from phaser map to react components using   `<a>` tags within the navigation component was forcing state to reset via a re-render of the page

## tried solution 1

move button (which was the example of state in react) outside of the `<BrowserRouter>`
this did make a difference because `<a>` tags default behavior is to send a request to the backend forcing the  browser to refresh which subsequently forces a re-render, clearing any state

## tried solution 2

in the `<Navbar>` component, replaced all `<a>` tags with react-router-dom's `<Link>` components which renders an anchor tag but removes the default behavior of sending a request. 

This solved the problem of maintaining persistent state, however, after the first click away from the phaser map, keys no longer worked to control the sprite on subsequent map visits. 

## Redux

a central data store (makes it easier to pass data between components)
  -component subscribes to changes in props from redux 
  -dispatch an action with an optional payload(data to add)
  -action is passed to a reducer (reducer is a function that edits the state of the data store)
  -reducer updates the data store (redux) depending on the action it's been passed 

## tried solution 3

installed redux and react-redux for global state management 
did not maintain state as I expected when the browser reloads due to navigating a new scene


