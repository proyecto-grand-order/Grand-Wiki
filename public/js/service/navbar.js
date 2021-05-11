export default class navbar {
    /**
     * Inicia los scripts responsive para el menu del movil.
     */
    static mobile () {
        var navbars = document.querySelectorAll('.sidenav');
        M.Sidenav.init(navbars, {});    
    }
}