var colList = [];

function Person(nombre) {
    this.name = nombre
}

Person.prototype.greet = function() {
    console.log('Hi ' + this.name)
}


function Obj(name) {
    this.get = function() {
        return this.nombre
    };
    this.nombre = name;
    this.cuerpo = function() {
        return '<div class="col"><div class="card" style="width: 18rem;"><img src="./img/camara1.jpg" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + this.get() + '</h5>    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>'
    }
}


for (let index = 0; index < 3; index++) {
    const element = new Obj("Card " + (index + 1));
    colList.push(element);

}

var cardSection = document.getElementById('card-section');
for (let index = 0; index < colList.length; index++) {
     cardSection.innerHTML += colList[index].cuerpo()
}

// Menu principal 
function ItemMenu(etiqueta, direccion, clase, type) {
    this.get = function() {
        return this.nombre;
    };
    this.type = type;
    this.ItemClass = clase;
    this.nombre = etiqueta;
    this.direccion = direccion;
    this.cuerpoHtml = function() {
        return '<li class="' + this.type + '"><a class="' + this.ItemClass + '" aria-current="page" href="' + direccion + '">' + this.get() + '</a></li>'
    }
}

var menuItems = ['Contactos', 'Perfil'];
var subMenu = ['Rastreo satelital de flota', 'Monitoreo y respuesta', 'Video verificación', 'Control a distancia y en tiempo real']

var menu = document.getElementById("menu-items");

for (let index = 0; index < menuItems.length; index++) {
    const element = new ItemMenu(menuItems[index], "/" + menuItems[index], "nav-link", "nav-item");
    menu.innerHTML += element.cuerpoHtml();
}

for (let index = 0; index < subMenu.length; index++) {
    const element = new ItemMenu(subMenu[index], "#", "dropdown-item", "");
    if (index === subMenu.length - 1) {
            menu.children[0].children[1].innerHTML += '<li><hr class="dropdown-divider"></li>';
    }
     menu.children[0].children[1].innerHTML += element.cuerpoHtml();
}
