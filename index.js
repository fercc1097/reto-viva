
// Crea una cartera de cliente Premium para la empresa VIVA, en la cual  los cliente podrán acumular estrellas por cada transacción realizada en la empresa.

function carteraEstrellas() {
    var estrellas = 0;
    return {
        getEstrellas: () => {
            return estrellas;
        },
        addEstrellas: (validation = false, number=1) => {
            if(validation) estrellas+=number;
        },
    }

  }
  
  var cartera = carteraEstrellas();
  console.log(`tienes: ${cartera.getEstrellas()} estrellas`);
  cartera.addEstrellas(true);
  cartera.addEstrellas(true);
  cartera.addEstrellas(true);
  cartera.addEstrellas(true);
  console.log(`tienes: ${cartera.getEstrellas()} estrellas`);
  cartera.addEstrellas();
  cartera.addEstrellas();
  cartera.addEstrellas(true);
  cartera.addEstrellas();
  cartera.addEstrellas(true,5);
  console.log(`tienes: ${cartera.getEstrellas()} estrellas`);

