console.log("Hamburguer Icon cargado");
(function(){
    const MAIN_OBJ = {
        init: function () {
this.eventhandlers()
        },
        eventhandlers: function (){
            document.querySelector('.hamburguer-icon').addEventListener('click', function (){
            document.querySelector('menu-citainer').classList.toggle('menu-open');
        })

    }
}
MAIN_OBJ.init()
})();