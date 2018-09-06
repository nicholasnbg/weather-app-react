[Live Demo](https://nifty-hoover-abb974.netlify.com/)

# React Weather App
This web app was built as a React-afied version of an old jQuery based project I completed whilst attaining the FreeCodeCamp Front End Certificate, which you can find [HERE](https://github.com/nicholasnbg/weather-app).

## Thoughts
Looking back over the old jQuery version, compared with the React version, really highlights the huge benefits of the componentized nature of React. Building small, DRY, components, really emphasises key programming principles such as 'Single Responsibility', and whilst building the app, made me realise just how much I have come to love  working within the guidelines of functional programming.

## Component Structure
I have split my components into *Container Components* to handle API requests, and store information as state values that signal how the display components should render, and *Functional Stateless Components* that purely receive data as props and render markup. This structure assists in making components more DRY, a good example being the Row's within the HourlyForecast and WeeklyForecast components. In future refactors I will look at consolidating the 2 "...Forcast" components.

## Styled Components
I used styled components for the CSS. I love styled components for React, as they fit in well with the the contained, component based nature of react.

## React Pose
This was my first time working with the React Pose library for animations, and I loved it! Will definitely be looking to use it again in future React projects.