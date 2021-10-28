'use strict';
// use of strict mode to limit errors


// FUNCTION FILTER TAGS
export default class Filter {
    // FILTER TAGS
    filterTags() {

        let filtres = document.querySelector('ul');
        let articles = document.querySelectorAll('.articlePh');

        // EVENT LISTENER ON CLICK LI
        filtres.addEventListener('click', e => {
            let classValue = e.target.classList.value;

            // returns the first index for which a given element is found in an array
            if (-1 === classValue.indexOf('actived')) {
                e.target.classList.add('actived')
            } else {
                e.target.classList.remove('actived')
            }

            // sorts the elements of an array, within that same array, and returns the array
            this.sortDomArticle(articles);
        });
    }

    // retrieve the filters with the 'actived' class and place them in the 'filterSelected' array    
    getActiveFilters() {
        let currentFilters = document.querySelectorAll('ul li.actived');
        let filterSelected = [];

        // allows you to execute a given function on each element of the array.
        currentFilters.forEach(function (currentFilter) {
            //adds one or more elements to the end of an array and returns the new size of the array.
            //returns the value of a given attribute of the specified element
            filterSelected.push(currentFilter.getAttribute("data-filter"));
        });

        return filterSelected;
    }

    // compare/check if 'filters' has the same value as the 'article' class    
    ownAllFilters(article) {
        let filters = this.getActiveFilters();
        let classValue = article.classList.value;
        let classes = classValue.split(' ');
        
        let intersection = filters.filter(
            x => classes.includes(x)
        );

        return filters.length == intersection.length;
    }

    // SHOW OR HIDE ARTICLES
    sortDomArticle(articles) {
        articles.forEach((article) => {
            if (this.ownAllFilters(article)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }
}