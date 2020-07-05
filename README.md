# robofriends-pwa (Progressive Web App)

Udemy tutorial - adding PWA capabilities to a react app

To run the project:

1. Clone this repo
2. Run `npm install`
3. Run `npm start`

Enzyme used from testing react components: https://enzymejs.github.io/enzyme/

Enzyme test cases:
SHALLOW:
Shallowly renders the component, not deep throat. For example if the component you are testing contains other sub-components, shallow never touches them. Keep your tests nice and simple and contained

MOUNT:
But Mount does what's called a full Dom rendering it's ideal for use cases where you have components that maybe interact with the DOM API. So for some reason maybe the car component uses dot query selector all or any of the Dom APIs that we usually see or maybe the car component has some sort of a lifecycle method a react to lifecycle method
that you want to test such as component did mount. Now one know with the Mount is that it requires a full Dom API to actually work and be available for us for the Mount to happen. And this means that it has to run an environment that at least looks like the browser environment.  So if you don't want to run your tests inside of her browser you might use something like a headless browser or a jsdom and it's recommended that with jsdom is used with Mount. Mount unlike shallow rendering does a full render and actually mounts the component on a DOM just like react or which means that test can affect each other if they're all using the same DOM. But like I said it's very rare that you want to use mount because it can get complicated and you want to keep your tests as clean and contained as possible.

RENDER:
The render function as the name suggests is used to render react components but unlike to a real dump it's rendered to a static a HTML so render return something very
similar to what's shallow and mount does. However the differences that render uses a library called Cheerio underneath the hood think of it as an end between shallow and mount it doesn't actually need a full DOM API but it does render any of its code any of the card children underneath it.

# snapshot matching tests:

When you first created your test about a component, it's shallowed snapshot is stored in "__snapshots__" folder. Later if you make some changes on this component (for example if you add/remove a class, or add a new div/p/h1/etc or remove ...) this test warns you about that the components current look is different from the previous snapshot. And it clearly shows where is the difference. This situation might happens when somebody works on your code. Because of that IT IS A GOOD IDEA TO PUSH YOUR SNAPSHOTS TO GITHUB.
