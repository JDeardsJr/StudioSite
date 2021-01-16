'use strict';

/*function generateNavHtml() {
    const navigationString = $(`
        <div class="navbar">
            <a href="#home" class="name">J.DEARDS</a>
            <button class="hamburger js-hamburger">
                <span class="icon-bar"></span>
                <span class="icon-bar margin"></span>
                <span class="icon-bar margin"></span>
            </button>
            <ul class="menu">
                <li>
                    <a class="jumper" href="#about">About</a>
                </li>
                <li>
                    <a class="jumper" href="#projects">Projects</a>
                </li>
                <li>
                    <a class="jumper" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        <div class="slider-container">
            <ul class="slider-menu js-slider-menu">
                <li>
                    <a class="jumper" href="#about">About</a>
                </li>
                <li>
                    <a class="jumper" href="#projects">Projects</a>
                </li>
                <li>
                    <a class="jumper" href="#contact">Contact</a>
                </li>
            </ul>
        </div>`);
    return navigationString;
}*/

// this function toggles the active class on the js-slider-menu
function toggleSliderMenu() {
    $('.js-slider-menu').toggleClass('active');
}

// this function checks to see if the slider menu is active and, if so, closes it
function reasoningHomeClick() {
    if ($('.js-slider-menu').hasClass('active')) {
        toggleSliderMenu();
    }
}

/*function renderNavBar() {
    $('nav').html(generateNavHtml());
    console.log('`renderNavBar` ran');
}*/

// this function listens for user to click on the home logo 
// runs a function to determine if it should close the slider menu 
function handleHomeClick() {
    $('nav').on('click', '.name', function(event) {
        console.log('`handleHomeClick` ran');
        reasoningHomeClick();
    });
    console.log('`handleHomeClick` ran');
}

// this function listens for user to click on hamburger menu and calls the toggleSliderMenu function
function handleSliderMenu() {
    $('.js-hamburger').on('click', function(event) {
        console.log('`handleSliderMenu` ran');
        //event.preventDefault();
        toggleSliderMenu();
    });
    console.log('`handleSliderMenu` ran');
}

// this function listens for user to click on a menu item and calls the toggleSliderMenu function
function handleSliderExit() {
    $('.js-slider-menu').on('click', '.jumper', function(event) {
        console.log('`handleSliderExit` ran');
        toggleSliderMenu();
    });
    console.log('`handleSliderExit` ran');
}

/*const searchEx = [ 'Looking for a fun, creative outlet for either yourself or a child?', 'Always wanted to learn how to sing or tap but don’t know where to start?', 'Want to further develop your artistic and technical abilities?', 'Love to dance or sing and want to gain confidence?', 'Currently specializing in virtual, one-on-one voice & tap lessons.' ];
  setInterval(function() {
    $('#alternating-text').text(searchEx[searchEx.push(searchEx.shift())-1]);
  }, 6000);*/

function watchLessonToggle() {
    $('.toggle-button').on('click', function(event) {
      let lessonDetails = $(this).closest('section').find('.js-lesson-details');
      let lessonArrows = $(this).closest('section').find('.fa');
      //let articleElement = $(this).closest('section').attr('id');
  
      lessonDetails.toggleClass('hidden');
      lessonArrows.toggleClass('rotated');
      //lessonArrows.toggleClass('blink');

  
      //resetSingleScroller(articleScroller, articleElement);
    });
}

function handleJdStudios() {
    //renderNavBar();
    handleSliderMenu();
    handleSliderExit();
    handleHomeClick();
    watchLessonToggle();
}

$(handleJdStudios);