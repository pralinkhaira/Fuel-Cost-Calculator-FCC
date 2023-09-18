
# Fuel Cost Calculator ~ Pralin Khaira

## JavaScript Intermediate Campaign Bounty ~ StackUp

## Instructions

Welcome to the Fuel Cost Calculator! I have developed this web application as part of the JavaScript Intermediate Campaign Bounty held by StackUp. The campaign aimed to apply the knowledge gained during the JavaScript Intermediate campaign by creating a website that utilizes fundamental JavaScript concepts, including classes, switch statements, and try-catch-finally statements.

To use the calculator, follow these simple steps:

1. **Trip Details:**
   - Enter the distance of your trip in kilometers.
   - Input your vehicle's fuel efficiency in kilometers per liter (km/l).
   - Specify the current fuel price in your local currency per liter (Rs/l).
   - Enter the number of travel days per month.

2. **Unit Selection:**
   - Choose the unit for displaying fuel consumption: either "Gallons" or "Liters."

3. **Calculate:**
   - Click the "Calculate" button to see the results.

4. **Results:**
   - The calculator will display the following results for different timeframes:
     - **Per Trip:** Cost, Distance, and Fuel Consumed.
     - **Per Month:** Cost, Distance, and Fuel Consumed based on your specified number of travel days.
     - **Per Year:** Cost, Distance, and Fuel Consumed extrapolated for a full year.

## How I Approached the Bounty

### My Approach for JavaScript Classes
- I began by creating a JavaScript class named `FuelCostCalculator` to encapsulate the logic for calculating fuel costs.
- The class contains methods for various calculations, promoting a modular and organized approach.

### Switch Statement Implementation
- To allow users to select between "Gallons" and "Liters" as the unit for displaying fuel consumption, I implemented a switch statement.
- The `switchUnit` method within the class handles this selection and returns the chosen unit.

### Input Validation with Try-Catch-Finally
- To ensure a smooth user experience and robust error handling, I employed a try-catch block.
- If you enter non-numeric values or make mistakes, the calculator displays an error message and gracefully handles exceptions.

### Result Display Logic
- I carefully designed the logic for displaying the results for different timeframes (trip, month, and year) by utilizing class methods and variables.

## Detailed Walkthrough

### HTML, CSS, and JavaScript Integration

The Fuel Cost Calculator is a comprehensive web application that seamlessly integrates HTML, CSS, and JavaScript to provide a user-friendly and functional experience.

<details> 
<summary>HTML Structure</summary>

The foundation of this project is built upon HTML. The HTML structure forms the basis of the user interface, creating a clear and structured layout for input fields, buttons, and result displays. It allows users to input essential trip details, such as distance, fuel efficiency, fuel price, and travel days per month.

</details>

<details> 
<summary>CSS Styling</summary>

CSS is employed to enhance the visual appeal and usability of the calculator. The CSS file, named "styles.css," applies styles and layouts to HTML elements. It ensures a consistent design across different devices, maintaining readability and a pleasant aesthetic. Elements like labels, input fields, buttons, and result boxes are styled to create an intuitive and visually appealing interface.

</details>

<details> 
<summary>JavaScript Functionality</summary>

JavaScript brings life to the calculator. It enables dynamic calculations and user interactions. In this project, JavaScript is organized into a class named `FuelCostCalculator` to promote modularity and maintainability.

- My Approach for JavaScript Classes

I started by creating the `FuelCostCalculator` class, which encapsulates the logic for calculating fuel costs. This class contains methods for various calculations, such as determining the cost, distance, and fuel consumed for a single trip, a month, or a full year. It promotes a structured and organized approach to handling the core functionalities of the calculator.

- Switch Statement Implementation

To offer users the flexibility to choose between "Gallons" and "Liters" as the unit for displaying fuel consumption, I implemented a switch statement within the `FuelCostCalculator` class. The `switchUnit` method handles this selection and returns the chosen unit. This demonstrates the versatility and power of switch statements in handling user preferences.

- Input Validation with Try-Catch-Finally

A crucial aspect of the project is robust input validation. To ensure a smooth user experience and graceful error handling, I employed a try-catch block in JavaScript. This mechanism detects and manages exceptions, especially when users input non-numeric values or make mistakes. When errors occur, the calculator displays an error message, preventing crashes and providing a user-friendly experience.

</details>

<details> 
<summary>User-Centric Design</summary>

My approach throughout the project was focused on creating a user-centric design. The combination of HTML for structure, CSS for aesthetics, and JavaScript for functionality ensures that the Fuel Cost Calculator is user-friendly, efficient, and well-structured.

This project not only serves as a practical tool for trip planning but also showcases the practical application of JavaScript concepts learned during the JavaScript Intermediate Campaign. I hope you find it useful, and please don't hesitate to provide me with any feedback for further improvements!

</details>

## License

This project is licensed under the [Custom No Copying and Distribution License](https://github.com/pralinkhaira/Fuel-Cost-Calculator-FCC/blob/main/LICENSE).

You can find the full text of the license [here](https://raw.githubusercontent.com/pralinkhaira/Fuel-Cost-Calculator-FCC/main/LICENSE).
