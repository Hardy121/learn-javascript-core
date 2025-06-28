const people = [
    { name: "Alice", city: "Delhi" },
    { name: "Bob", city: "Mumbai" },
    { name: "Charlie", city: "Delhi" },
    { name: "David", city: "Mumbai" },
    { name: "Eva", city: "Bangalore" },
];


function groupPeople(array) {
    const groupedArr = []
    for (let i = 0; i < array.length; i++) {
        console.log(array.city)
    }
}
groupPeople(people)
