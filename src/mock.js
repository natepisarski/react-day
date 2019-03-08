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

// Higher-Order function that generates items in an imaginary shop
const generateItems = (shelf_id, offset = 0) => (...items) => items.map((name, index) => ({
    id: index + offset,
    name,
    shelf_id
}));

const shelf = (id, name) => ({
    id,
    name
});

const employee = (name, ...access) => ({
    name,
    access
});

// There are three different shelves: food, office, and electronics (ids 0, 1, and 2).
const [foodShelf, officeShelf, electronicsShelf] = [generateItems(0), generateItems(1, 4), generateItems(2, 8)];

const products = [
    ...foodShelf('steak', 'wine', 'cheese', 'yogurt'),
    ...officeShelf('paper', 'pencil', 'notebook', 'tape'),
    ...electronicsShelf('laptop', 'headphones', 'tablet', 'Nintendo Switch', 'drone')
];

const shelves = [
    shelf(0, 'Food'),
    shelf(1, 'Office'),
    shelf(2, 'Electronics')
];

const employees = [
    employee('Super Manager', 0, 1, 2),
    employee('JustFood', 0),
    employee('FoodAndElectronics', 0, 2)
];

export const mock = () => ({products, shelves, employees});