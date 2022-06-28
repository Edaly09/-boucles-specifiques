// ## 01 - Map Double

// const array = [ 1, 2, 3, 4, 5]


// const double = array.map((array) =>{

//     console.log(array)
    
//     return array * 2

// } )

// console.log(array)


// console.log(double)

// ## 02 - Map Names

const longNames = [{   firstName: "Jane",lastName: "Doe"},{firstName: "John",lastName: "Smith"} ]

const shortNames = longNames.map((longName) =>{

    return {
        
         names: longName.firstName + longName.lastName
        
       

    }
 
    
})

   console.log(shortNames)


// ## 03 - Filter Numbers

// - Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `"toto"`, `34`, `"javascript"` et `8`
// - Créez une variable `numbers` qui appellera la méthode `.filter()` pour contenir les **nombres** de `array`
// - Affichez le tableau `numbers` qui doit contenir que des nombres

// ## 04 - Filter Even

// const numbers = [1,2,3,4,5,6,7,8]

// const even = numbers.filter((number) =>{

//     return number % 2 === 0
// })

// console.log(even)


