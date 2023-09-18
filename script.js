// Define a JavaScript class for the FuelCostCalculator
class FuelCostCalculator {
  // Constructor to initialize properties
  constructor(distance, efficiency, price, days, unit) {
    this.distance = distance;
    this.efficiency = efficiency;
    this.price = price;
    this.days = days;
    this.unit = unit;
  }

  // Method to calculate cost per trip
  calculateCostPerTrip() {
    return (this.distance / this.efficiency) * this.price;
  }

  // Method to calculate distance per trip
  calculateDistancePerTrip() {
    return this.distance;
  }

  // Method to calculate fuel consumed per trip
  calculateFuelConsumedPerTrip() {
    return this.distance / this.efficiency;
  }

  // Method to calculate cost per month
  calculateCostPerMonth() {
    return this.calculateCostPerTrip() * this.days;
  }

  // Method to calculate distance per month
  calculateDistancePerMonth() {
    return this.distance * this.days;
  }

  // Method to calculate fuel consumed per month
  calculateFuelConsumedPerMonth() {
    return this.calculateFuelConsumedPerTrip() * this.days;
  }

  // Method to calculate cost per year
  calculateCostPerYear() {
    return this.calculateCostPerTrip() * (this.days * 12);
  }

  // Method to calculate distance per year
  calculateDistancePerYear() {
    return this.distance * (this.days * 12);
  }

  // Method to calculate fuel consumed per year
  calculateFuelConsumedPerYear() {
    return this.calculateFuelConsumedPerTrip() * (this.days * 12);
  }

  // Method to switch units based on user selection
  switchUnit() {
    switch (this.unit) {
      case 'gallons':
        return 'liters';
      case 'liters':
        return 'gallons';
      default:
        return 'units';
    }
  }
}

// Function to calculate fuel cost, incorporating try-catch block
function calculateFuelCost() {
  try {
    // Parse user inputs
    const distance = parseFloat(document.getElementById('distance').value);
    const efficiency = parseFloat(document.getElementById('efficiency').value);
    const price = parseFloat(document.getElementById('price').value);
    const days = parseInt(document.getElementById('days').value);
    const unit = document.getElementById('unit').value; // Added unit selection

    // Create a FuelCostCalculator instance
    const fuelCalculator = new FuelCostCalculator(distance, efficiency, price, days, unit);

    // Display the results
    document.getElementById('costPerTrip').textContent = fuelCalculator.calculateCostPerTrip().toFixed(2);
    document.getElementById('distanceTrip').textContent = fuelCalculator.calculateDistancePerTrip().toFixed(2);
    document.getElementById('fuelConsumedTrip').textContent = fuelCalculator.calculateFuelConsumedPerTrip().toFixed(2);

    document.getElementById('costPerMonth').textContent = fuelCalculator.calculateCostPerMonth().toFixed(2);
    document.getElementById('distanceMonth').textContent = fuelCalculator.calculateDistancePerMonth().toFixed(2);
    document.getElementById('fuelConsumedMonth').textContent = fuelCalculator.calculateFuelConsumedPerMonth().toFixed(2);

    document.getElementById('costPerYear').textContent = fuelCalculator.calculateCostPerYear().toFixed(2);
    document.getElementById('distanceYear').textContent = fuelCalculator.calculateDistancePerYear().toFixed(2);
    document.getElementById('fuelConsumedYear').textContent = fuelCalculator.calculateFuelConsumedPerYear().toFixed(2);

    // Use the switch statement to display the selected unit
    document.getElementById('unitDisplay').textContent = fuelCalculator.switchUnit();
    
    // Clear any previous error message
    document.getElementById('error-message').textContent = '';
  } catch (error) {
    // Handle invalid inputs using a try-catch block
    document.getElementById('error-message').textContent = 'Please enter valid numeric values.';
  } finally {
    // Any cleanup or additional actions can be placed here
  }
}

// Handle the click event when the user clicks the "Calculate" button
document.getElementById('calculate-button').addEventListener('click', calculateFuelCost);
