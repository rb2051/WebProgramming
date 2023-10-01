var cars = [ "Honda Civic", "Ford Focus", "Fiat Punto" ]
cars.indexOf("Fiat Punto")
> 2

["a", "b", "c", "a"].lastIndexOf("a")
> 3

cars.push("Fiat Tipo")
> 4

cars.splice(1, 2, "Rolls Royce")
> Ford Focus,Fiat Punto

cars
> Honda Civic,Rolls Royce,Fiat Tipo