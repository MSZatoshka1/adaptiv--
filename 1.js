class menu {
    constructor(name,elem, _class,brema){
        this.name = document.querySelector(name); // что скрывается или появляется
        this.elem = document.querySelector(elem); // на что кликают
        this._class = _class; // класс который доб и удаляется
        this.brema = brema; // ширина измнений
    } 
    Edit(){ // измения состояния по клику.
        this.name.classList.toggle(this._class);
    }
    check(){ // проверка 
        if(document.body.scrollWidth > this.brema){ // проверка что адап меню нету
            if(this.name.classList.contains(this._class) === false){ // проверка существует ли класс для дальшейших скриптов.
                this.name.classList.add( this._class);
                }
            console.log(this.name.classList.contains(this._class));
        }
    }
}

let m = new menu("ul" , "#bar_menu" , "of_menu" , 450 );
m.elem.onclick = function(){
    m.Edit();
}
window.onresize = function () {
    m.check();
}
console.log(m);