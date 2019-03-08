//@flow
/* Today's activity / training, whatever you call it, involves making a fake store. It's like Acme on steroids.
    It sells anything. The purpose of this file is to mock a backend, so that we don't need to muck around with either:
        * configuring Laravel JUST for this
        * Learning and distinguishing NodeJS or F# or something from React code

    The basic model of "the shop" (called "The Shop" to not conflict with "The Store" (Redux)) is as such.

    1) There are many PRODUCTS
    2) There are many SHELVES
        1.1) SHELVES have many PRODUCTS
    3) There are employees
    4) Employees only have access to certain shelves

    We'll add more, but for now this is what the mock file produces.
*/
/*


This is more advanced than today's "Advanced" section, so knowing what this code does is obviously
not a priority. However, I will write out the design patterns / language features being used.
A description will be first, followed by a JSDoc with the tactics.

This is all pure Javascript and can be run in the Chrome console.

Design patterns [are in brackets], language features (in parentheses).
 */

// Higher-Order function that generates items in an imaginary shop
/**  (Arrow Functions),     (Rest Parameters),     (Expression Returns),
 *  (Property Elision),  (Default Parameters)  [Higher-Order Functions] */
const generateItems = (shelf_id, offset = 0) => (...items) => items.map((name, index) => ({
    id: index + offset,
    name,
    shelf_id
}));

// Creates a new shelf
/** [Arrow Functions], [Expression Returns], [Property Elision], (Factory/Constructor Pattern) */
const shelf = (id, name) => ({
    id,
    name
});

// Creates a new employee
/** [Arrow Functions], [Expression Returns], [Property Elision], [Rest Parameters], (Factory/Constructor Pattern) */
const employee = (name, ...access) => ({
    name,
    access
});

// Assigns three different shelves: food, office, and electronics (ids 0, 1, and 2).
/** [Array Destructuring] */
const [foodShelf, officeShelf, electronicsShelf] = [generateItems(0), generateItems(1, 4), generateItems(2, 8)];

// Creates the products from the shelves
/** [Array Spreading], [Rest Parameters] */
const products = [
    ...foodShelf('steak', 'wine', 'cheese', 'yogurt'),
    ...officeShelf('paper', 'pencil', 'notebook', 'tape'),
    ...electronicsShelf('laptop', 'headphones', 'tablet', 'Nintendo Switch', 'drone')
];

// Creates the real shelves themselves
/** |No New Javascript Features| */
const shelves = [
    shelf(0, 'Food'),
    shelf(1, 'Office'),
    shelf(2, 'Electronics')
];

// Creates the real employees
/** [Rest Parameters] */
const employees = [
    employee('Super Manager', 0, 1, 2),
    employee('JustFood', 0),
    employee('FoodAndElectronics', 0, 2)
];

// Returns all products, shelves, and employees
/** [Property Elision], [Arrow Functions], [ES6 Modules], (Thunks) */
export const mock = () => ({products, shelves, employees});