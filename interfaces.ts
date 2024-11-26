// This way we can define type to models


interface Product{
    id: number,
    name: string,
    price: Number
}

function getRandomProduct(id: number) : Product{
    return {
        id: id,
        name: "Cricket",
        price: 50
    }
}

// Gives error if we try to reference invalid properties

// let myproduct = getRandomProduct(5);
// myproduct.hello

console.log(getRandomProduct(4));

/*
To solve the problem of passing the arguments in the wrong order,
you explicitly assign types to function parameters:
*/

const showProduct = (name: string, price:number)  => {
    console.log(`The product ${name} costs $${price}.`);
  };

showProduct("hello",99);        // works
// showProduct(99,"hello");     // gives type errors


