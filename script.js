var home_btn = document.getElementById('home_btn');
home_btn.addEventListener('click', function(event) {
    document.getElementById('home').scrollIntoView({behavior: "smooth"})
});

var aboutme_btn = document.getElementById('aboutme_btn');
aboutme_btn.addEventListener('click', function(event) {
    document.getElementById('aboutme').scrollIntoView({behavior: "smooth"})
});

var portfolio_btn = document.getElementById('portfolio_btn');
portfolio_btn.addEventListener('click', function(event) {
    document.getElementById('portfolio').scrollIntoView({behavior: "smooth"})
});

var contact_btn = document.getElementById('contact_btn');
contact_btn.addEventListener('click', function(event) {
    document.getElementById('contact').scrollIntoView({behavior: "smooth"})
});

// function project_sort_all(){
//     alert("sorted - > All")
// }

// function project_sort_website(){
//     alert("sorted - > Website")
// }

// function project_sort_application(){
//     alert("sorted - > Application")
// }


function project_sort_all() {
    let items = document.querySelectorAll('.project_items');
    items.forEach(item => item.classList.remove('hidden'));
}

function project_sort_website() {
    let items = document.querySelectorAll('.project_items');
    items.forEach(item => {
        if (item.querySelector('.project_items_field').textContent === 'Website') {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

function project_sort_application() {
    let items = document.querySelectorAll('.project_items');
    items.forEach(item => {
        if (item.querySelector('.project_items_field').textContent === 'Application') {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    let menuItems = document.querySelectorAll('.project_menu_list');
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            menuItems.forEach(mi => mi.classList.remove('active'));
            menuItem.classList.add('active');
        });
    });
    // Set default to show all projects
    project_sort_all();
    document.getElementById('all_projects').classList.add('active');
});


var Fintrack_popup = document.getElementById('Fintrack_popup');
var eatIt_popup = document.getElementById('EatIt_popup');
var shoeHead_popup = document.getElementById('shoeHead_popup');

function fintract_popup()
{
    Fintrack_popup.style.display = 'unset';
}
function EatIt_popup()
{
    eatIt_popup.style.display = 'unset';
}
function shoe_head_popup()
{
    shoeHead_popup.style.display = 'unset';
}
function popup_sec_close()
{
    Fintrack_popup.style.display = 'none';
    eatIt_popup.style.display = 'none';
    shoeHead_popup.style.display = 'none';
}
window.onload = function() {
    document.getElementById('myForm').reset();
};