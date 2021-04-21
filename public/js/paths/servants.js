import { idToClase } from "../helpers/idToClass.js";
import isMobile from "../helpers/isMobile.js";


export default class PathServant {
  constructor(path, offset) {
    this.path = path;
    this.offset = offset
    this.mobile = isMobile()
    this.init()
  }

  init() {
    this.All()
  }

  All() {
    // # Variables
    const clasesList = [];
    const ClasesID = [];
    var cambiando = false;
    const tableScroll = this.tableScroll  ()

    // # Barra de busqueda
    $("#ServantSearch").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#ServantList tr").filter(function () {
        for (var id of ClasesID) $("#clase-" + id).css("filter", "grayscale(1)");
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });

    // # Botones de busqueda (Busqueda por case)

    // ## Obtiene los elementos atravez de su id con un for, se almacena en una variable
    for (var i = 0; i < 14; i++) {
      if (document.getElementById("clase-" + i)) {
        clasesList.push({
          id: i,
          element: document.getElementById("clase-" + i),
          clase: idToClase.get(i),
        });
      }
    }

    // ## Funcion que se encarga de buscar por el boton presionado con una animacion suave
    clasesList.forEach((clase) => {
      ClasesID.push(clase.id);
      clase.element.addEventListener("click", () => {
        if (cambiando === true) return;
        cambiando = true;
        for (var id of ClasesID) $("#clase-" + id).css("filter", "grayscale(1)");
        if(this.mobile) {

        } else {
          tableScroll.setPosition(0, 0);
        }
        $("#clase-" + clase.id).css("filter", "none");
        $("#TableServantList").fadeOut("slow");
        setTimeout(() => {
          $("#ServantList tr").filter(function () {
            $(this).toggle(
              $(this).text().toLowerCase().indexOf(clase.clase) > -1
            );
          });
          $("#TableServantList").fadeIn("slow", () => (cambiando = false));
        }, 1000);
      });
    });
  }

  tableScroll() {
      if(this.mobile) return;
      // # Variables
      const content =  document.getElementById('ServantList');
      const viewport = document.getElementById('viewportListScroll');

      // # Animacion de la tabla con touch
      var tableScroll =  new ScrollBooster({
        viewport,
        content,
        direction: "vertical",
        bounceForce: 0,
        onUpdate: (state) => {
          const viewheighoffset = viewport.offsetHeight;
          const offeset = state.position.y;
  
          if(offeset > viewheighoffset - this.offset) {
            tableScroll.setPosition(0, 0)
          } else {
            if(-state.position.y < 0) {
              content.style.transform = `translate(
                0px,
                ${-state.position.y < 0 ? -state.position.y : '0'}px
              )`;
            } else {
              content.style.transform = `translate(
                0px,
                0px
              )`;
            }
          }
        },
      });

      return tableScroll
  }
}
