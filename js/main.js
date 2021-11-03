'use strict';
// use of strict mode to limit errors


// IMPORT DATA
import ApiFishEye from './SearchApi/ApiFishEye.js';

//IMPORT  HOMEPAGE
import HomePageBuilder from './Home/HomePageBuilder.js';

//IMPORT PHOTOGRAPHERS PROFIL
import PhotographerProfil from './photographers/PhotographerProfils.js';


//IMPORT  MEDIA BUILDERS


(function appDispatch() {

    new ApiFishEye().getDataFishEye().then((data) => {
        if (window.location.pathname.includes("/photographers.html")) {

            // PHOTOGRAPHER PROFIL HEADER
            new PhotographerProfil().displayPhotographerProfil(data);

            //DROPDOWN MENU
            

            //PHOTOGRAPHERS (GALLERY & LIKES BOX) MEDIA BUILDER
            
        }

        // HOMEPAGE (PHOTOGRAPHERS, SCROLL, FILTER)
        new HomePageBuilder().displayPhotographers(data);

        //CAPTURE THE ERROR AND DISPLAY IT IN THE CONSOLE
    }).catch(() => {
        console.error('Failed to load ApiFishEye');
    })
})();
