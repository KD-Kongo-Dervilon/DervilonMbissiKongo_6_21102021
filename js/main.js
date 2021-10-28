'use strict';
// use of strict mode to limit errors


// IMPORT DATA
import ApiFishEye from './SearchApi/ApiFishEye.js';

//IMPORT  HOMEPAGE
import HomePageBuilder from './Home/HomePageBuilder.js';

(function appDispatch() {

    new ApiFishEye().getDataFishEye().then((data) => {
        if (window.location.pathname.includes("/photographers.html")) {

            // PHOTOGRAPHER PROFIL HEADER
            new PhotographerProfil().displayPhotographerProfil(data);

        }
        // HOMEPAGE (PHOTOGRAPHERS, SCROLL, FILTER)
        new HomePageBuilder().displayPhotographers(data);

        //CAPTURE THE ERROR AND DISPLAY IT IN THE CONSOLE
    }).catch(() => {
        console.error('Failed to load ApiFishEye');
    })
})();
