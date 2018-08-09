const HeaderSearch = function() {
    let errorTimeout = null;

    function init() {
        addEvents();        
    }

    function addEvents(){        
        const searchForm = document.querySelector('[data-form]');
        if(!searchForm){
            return false;
        }
        //submit listener
        searchForm.addEventListener('submit',submitSearch);        
    } 

    function submitSearch(evt){        
        const searchForm = document.querySelector('[data-form]');
        const searchField = document.querySelector('[data-search-term]');        
        if(!searchField.value){
            showError("This field cannot be empty");
            evt.preventDefault();
            return false;
        }
    }

    function showError(message) {
        const formErrors = document.querySelector('[data-form-errors]');
        if(!formErrors){
            return false;
        }
        //populate and show error
        formErrors.innerHTML = message;
        formErrors.classList.remove("hidden");

        //reset the hide timout
        clearTimeout(errorTimeout);
        errorTimeout = setTimeout(function(){
            formErrors.classList.add("hidden");
        },8000);
    }

    return {
        init : init
    }

};
HeaderSearch().init();