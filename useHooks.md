If you're wondering about // eslint-disable-next-line
Will · Lecture 27
· 1 year ago

I think Brad at the time of the course tried to substitute lifecycle methods with the closest hooks approximation which is understandable coming from class components and I see a lot of tutorials and courses doing much the same. However hooks were very new at the time of recording and require a completely different approach and thought process really. We need to think in terms of hooks and functions and not lifecycle.

useEffect isn't really a drop in replacement for lifecycle methods, it's a different way of doing things and needs a different way of thinking to implement it correctly.

If you're watching this lecture (27) and wondering why we had to use // eslint-disable-next-line or thought this doesn't feel right ignoring the linting rules, then I urge you to have a read of this post on overreacted by Dan Abramov. It covers a lot more than just useEffect
If you're looking at this branch and wondering why in the course we had to use // eslint-disable-next-line or thought this doesn't feel right ignoring the linting rules, then I urge you to have a read of this post on overreacted by Dan Abramov. It covers a lot more than just useEffect

There is also this great article from Kent C. Dodds which covers the issues we had in this course very well.
Also check out my refactored branch on GitHub which has the changes I outline here implemented.

To summarize the issues we face here though, and why we had to use // eslint-disable-next-line at all is that all our data fetching methods are in our context state (GitHubState.js) and passed down to all our components via the Provider. The problem with this is that every time we update our context state we create a new function which is a side effect and react tells us that side effects should be in a useEffect. If we include these functions in our useEffect dependency array (as the linter suggests) in User.js then each time we fetch data and our reducer runs it updates the context which triggers a re-render (creating a whole set of new functions). The useEffect dependency sees it as a new function and calls our functions again which triggers another render  which again updates the state when we call the function in our useEffect, which triggers another re-render and so on.... infinite loop of re-rendering.

The solution is not to add an empty array and tell the linter to ignore it (trying to make a componentDidMount out of useEffect), but to think in terms of hooks and functions.

so...

Take all our fetching data methods out of GitHubState to keep them pure and not re-create a new function on each render/update actions.js.

return the promise from our data fetching methods.

Only pass down our dispatch from our GitHubState Provider (React guarantees that our dispatch returned from useReducer is static and won't change) GitHubState.js.

Import the data fetching method we need in the component we need it, call that function in a component level useEffect and then call dispatch from our component when the returned promise is resolved User.js

This cleans up our app considerably, improves the quality and readability of our code and now we are thinking in terms of hooks and functions. All our side effects are now where they should be... in a useEffect, we have no linting errors and follow the style guide defined by the linting.

I hope that's all understandable.
Going into working on react projects I expect you will see a lot of trying to mimic lifecycle methods with hooks as everyone jumped on the hooks bandwagon so Brad's not doing anything wrong really here but hooks do need a bit of a paradigm shift in thinking.