// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const fruitArray = [
    { name: "apple", color: 'red',pricePerKg:160 },
    { name: "Papaya", color: 'Yellow',pricePerKg:30 },
    { name: "mango", color: 'green',pricePerKg:100 },
    { name: "grapes", color: 'black',pricePerKg:50 }
    
  ];

  const convert2obj = (fruitArray1, keyField) => 
    fruitArray1.reduce((obj, item) => {
        obj[item[keyField]] = item;
        return obj;
      }, {});

 const fruitObj = convert2obj(fruitArray, 'name');
  console.log(fruitObj);

