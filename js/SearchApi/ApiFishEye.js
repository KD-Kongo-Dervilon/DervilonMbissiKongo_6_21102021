'use strict';
// use of strict mode to limit errors

// GET THE DATA FISH (PHOTOGRAPHERS & MEDIAS)
export default class ApiFishEye {
    
    async getDataFishEye() {
        let url = 'Api/photographers.json';
        let response = await fetch(url);
        let data = await response.json();

        const dataPhotographers = [...data.photographers];
        const dataMedias        = [...data.media];

        return {
            'photographers': dataPhotographers,
            'media'        : dataMedias
        };
    }

};
