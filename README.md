# Cineflex Project

<div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
  <img style="width: 300px; margin-right: 20px; margin-bottom: 20px;" src="https://user-images.githubusercontent.com/95102911/224571807-3c82dbd4-7f3b-400f-af9a-212c4cc7a394.png" >
  <img style="width: 300px; margin-right: 20px; margin-bottom: 20px;" src="https://user-images.githubusercontent.com/95102911/224571818-b17ef207-9a94-4356-97ab-c08e42f22ee6.png">
  <img style="width: 300px; margin-right: 20px; margin-bottom: 20px;" src="https://user-images.githubusercontent.com/95102911/224572892-58ad581a-2d26-49aa-9eeb-002546c2669a.png">
  <img style="width: 300px; margin-right: 20px; margin-bottom: 20px;" src="https://user-images.githubusercontent.com/95102911/224571825-b30898e6-f661-4539-96b3-f5943502d1b8.png" >
</div>

____

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

____

✅ Requirements

- Movie Choice (`/` route)
     - [ ] Fetch movie information through the provided API and display it according to the provided layout.
     - [ ] When clicking on a movie, the user must be redirected to the route `/sessoes/:idMovie`, with `:idMovie` being the id of the movie clicked.
- Session Choice (route `/sessoes/:idMovie`)
     - [ ] From the id of the URL, get the available sessions for the movie from the API and display them according to the *layout* provided.
     - [ ] When clicking on a session, the user must be redirected to the route `/assentos/:idSessao`, where `:idSessao` is the id of the chosen session.
- Seat selection (route `/assents/:idSessao`)
     - [ ] From the session id, fetch the session data from the API and display the layout as provided.
     - [ ] When clicking on an available seat, the seat must be marked as "Selected".
     - [ ] When clicking again on a selected seat, it should return to "Available".
     - [ ] When clicking on an unavailable seat, an alert "This seat is not available" should be displayed.
     - [ ] User can select multiple seats.
     - [ ] The user must be able to enter the buyer's name and CPF.
     - [ ] When clicking on "Reserve seat(s)", the request must be sent to the server and the user must be redirected to the `/success` route. This will make the marked seats unavailable for other bookings.
- Baseboard
     - [ ] Along the Session and Seat screens, a footer should be displayed with information about the selected film. This information will come from the API calls on each screen.
- Success (route `/success`)
     - [ ] Implement *layout* as provided, displaying order data.
     - [ ] When clicking on "Return to Home" the user must return to the initial route (`/`), with the request reset.

## ☑️ Bonus

- back button
     - [ ] Add a back button at the top of the site on the left
     - [ ] The top of the site must be outside the pages components, i.e. inside the `<BrowserRouter>` of the React Router
     - [ ] When clicking on the back button, the user must return to the page he was previously
     - [ ] The button should not be displayed on the home screen
