//Declaración de la clase "vehículo"
class vehicle {
   constructor (brand, model, price) {
      this.brand = brand;
      this.model = model;
      this.price = price;
   }
};

//Herencias de la clase vehículos para las clases "auto" y "moto"
class car extends vehicle {
   constructor(brand, model, price, doorNumber) {
      super(brand, model, price);
      this.doorNumber = doorNumber;
   }
};

class bike extends vehicle {
   constructor(brand, model, price, displacement) {
      super(brand, model, price);
      this.displacement = displacement;
   }
};

//Variable utilizada para crear los objetos en función a las clases declaradas anteriormente. Esto permite poder utilizar tantos objetos como querramos en el array.
let vehiclesList = [
   {
      brand: "Peugeot",
      model: 206,
      doorNumber: 4,
      price: 200000.00
   },
   {
      brand: "Honda",
      model: "Titan",
      displacement: "125cc",
      price: 60000.00
   },
   {
      brand: "Peugeot",
      model: "208",
      doorNumber: 5,
      price: 250000.00
   },
   {
      brand: "Yamaha",
      model: "YBR",
      displacement: "160cc",
      price: 80500.50
   }
];

//Decalraciín de variable para el trabajo de los objetos
let vehicles = [];

//Creación de los objetos automatizada independiente de la cantidad de elementos que haya incialmente en la variable "vehicleList"
vehiclesList.forEach(vehicle => {
   if(vehicle.doorNumber != undefined) {
      vehicles = [...vehicles, new car(vehicle.brand, vehicle.model.toString(), vehicle.price, vehicle.doorNumber)];
   } else {
      vehicles = [...vehicles, new bike(vehicle.brand, vehicle.model.toString(), vehicle.price, vehicle.displacement)];
   }
});

//Impresión de los vehículos por consola diferenciando la clase a la que pertenece cada objeto.
vehicles.forEach(vehicle => {
   if(vehicle instanceof car) {
      console.log(`Marca: ${vehicle.brand} // Modelo: ${vehicle.model} // Puertas: ${vehicle.doorNumber} // Precio: $${new Intl.NumberFormat('es-AR', {minimumFractionDigits: 2}).format(vehicle.price)}`);
   } else {
      console.log(`Marca: ${vehicle.brand} // Modelo: ${vehicle.model} // Cilindrada: ${vehicle.displacement} // Precio: $${new Intl.NumberFormat('es-AR', {minimumFractionDigits: 2}).format(vehicle.price)}`);
   };
});

console.log('=============================');

//Ordeno los vehículos de mayor a menos en función a su precio para poder imprimirlos por consola, al ordenarlos ya tengo identificados el de mayor y el de menor valor
vehicles.sort((a, b) =>  {
   if (a.price > b.price) {
     return -1;
   };
   if (a.price < b.price) {
     return 1;
   };
   return 0;
 });

console.log(`Vehículo más caro: ${vehicles[0].brand} ${vehicles[0].model}`);
console.log(`Vehículo más caro: ${vehicles[vehicles.length-1].brand} ${vehicles[vehicles.length-1].model}`);

vehicles.map(vehicle => {
   if(vehicle.model.toLowerCase().includes('y')) {
      console.log(`Vehículo que contiene en el modelo la letra "Y": ${vehicle.brand} ${vehicle.model} $${new Intl.NumberFormat('es-AR', {minimumFractionDigits: 2}).format(vehicle.price)}`);
   }
})

console.log('=============================');

console.log('Vehículos ordenados por precio de mayor a menor:');

vehicles.map(vehicle => console.log(`${vehicle.brand} ${vehicle.model}`));