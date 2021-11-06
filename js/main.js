'use strict';
// use of strict mode to limit errors


// IMPORT DATA
import ApiFishEye from './SearchApi/ApiFishEye.js';

//IMPORT  HOMEPAGE
import HomePageBuilder from './Home/HomePageBuilder.js';

//IMPORT PHOTOGRAPHERS PROFIL
import PhotographerProfil from './photographers/PhotographerProfils.js';

//IMPORT DROPDOWN MENU
import DropDownMenu from './photographers/DropDownSort.js';

//IMPORT  MEDIA BUILDERS
import MediaBuilder from './photographers/MediaBuilders.js';



(function appDispatch() {

    new ApiFishEye().getDataFishEye().then((data) => {
        if (window.location.pathname.includes("/photographers.html")) {

            // PHOTOGRAPHER PROFIL HEADER
            new PhotographerProfil().displayPhotographerProfil(data);

            //DROPDOWN MENU
            new DropDownMenu().dropDown(data);
            
            //PHOTOGRAPHERS (GALLERY & LIKES BOX) MEDIA BUILDER
            new MediaBuilder().photographersMedias(data);
            return
            
        }

        // HOMEPAGE (PHOTOGRAPHERS, SCROLL, FILTER)
        new HomePageBuilder().displayPhotographers(data);

        //CAPTURE THE ERROR AND DISPLAY IT IN THE CONSOLE
    }).catch(() => {
        console.error('Failed to load ApiFishEye');
    })
})();
