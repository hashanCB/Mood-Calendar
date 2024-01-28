# Mood Calendar 2024 😁 😐 🙁



This project is a creative endeavor aimed at building a Mood Calendar for the year 2024. It utilizes ReactJS to create an interactive calendar where each day can be colored based on the user's mood. The project also serves as a learning experience for understanding JavaScript date functions, state management using React hooks, and handling arrays.

## Motivation

This project was initiated as a personal learning journey to explore various aspects of JavaScript, ReactJS, and state management. The primary focus was on mastering JavaScript date functions to determine the total number of days in a month and identifying the start day of a month. Additionally, the project delves into using React hooks like `useState` to manage state and explores the functionality of arrays in the React context.

## Features

- **Interactive Calendar:** Users can click on each day of the calendar to assign a mood.
- **Mood Selection:** The calendar supports five mood levels - very good, good, neutral, bad, and very bad.
- **Dynamic Styling:** Each day is dynamically styled based on the selected mood.
- **Month Navigation:** The calendar covers all twelve months of the year 2024.

## How It Works

- **Date Functions:** The project uses JavaScript date functions to calculate the total number of days in a month and determine the starting day of each month.
- **State Management:** The `useState` hook is employed to manage the state of mood selections and clicked dates for each mood level.
- **Array Usage:** The project demonstrates the use of arrays in React state, with each mood level having its own array to store clicked dates.
- **Find Method:** The `find` method is utilized to check if a specific date has already been clicked for a given mood.

## Usage

1. Select a mood from the mood icons at the top.
2. Click on the circles below to assign the selected mood to specific dates.
3. Explore the interactive calendar for the entire year.

## Project Structure

The core functionality is implemented in the `Month` component, which is responsible for rendering the calendar, handling user clicks, and updating the state based on mood selection.

```javascript
// Import necessary React components and icons
"use client";
import React, { useState, useRef } from "react";
import { FaRegFaceLaugh } from "react-icons/fa6";
// ... (other imports)

const Month = () => {
  // State variables for mood selection and clicked dates
  // ...

  // Functions for handling mood selection and date clicks
  // ...

  // Loop through months to render the entire calendar
  // ...

  return (
    // JSX structure for rendering the calendar and mood icons
    // ...
  );
};

export default Month;
```

## Learning Takeaways

1. **Date Functions:** Understanding how to use `new Date()` for calculating days in a month and determining the start day.
2. **State Management:** Learning the basics of React state management using the `useState` hook.
3. **Array Usage:** Demonstrating how to use arrays in React state to store information.
4. **Find Method:** Utilizing the `find` method to check for existing values in an array.
5. **Arrow Functions in onClick:** Learning about the importance of using arrow functions in the `onClick` prop in ReactJS.

## Acknowledgments

This project is part of the #100Days100Projects challenge.

Feel free to explore, contribute, or use this project as a reference for your own learning journey! Visit [Hashan Chanaka](https://hashanchanaka.com) for more projects and insights.






https://github.com/hashanCB/Mood-Calendar--100DaysOfCode/assets/45811945/90e10292-45e9-4b39-aeb3-c80d7732598f

