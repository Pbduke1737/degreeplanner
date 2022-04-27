const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')
const years = document.querySelectorAll('.year')
const semesters = document.querySelectorAll('.semester')
const tabs = document.querySelectorAll('.tabcontent')

const rest_drags = document.querySelectorAll('.rest_drag')
const free_drags = document.querySelectorAll('.free_drag')
const tech_drags = document.querySelectorAll('.tech_drag')
const hum_drags = document.querySelectorAll('.hum_drag')
const upper_hum_drags = document.querySelectorAll('.upper_hum_drag')
const cse_drags = document.querySelectorAll('.cse_drag')
const transfer_drags = document.querySelectorAll('.transfer_drag')

// to drag restricted electives
rest_drags.forEach(rest_drag => {
    rest_drag.addEventListener('dragstart', () => {
       rest_drag.classList.add('dragging')
    })

    rest_drag.addEventListener('dragend', () => {
        rest_drag.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container,e.clientY)
        const rest_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            container.appendChild(rest_drag)
        } else{
            container.insertBefore(rest_drag, afterElement)
        }

    })
})

tabs.forEach(tabcontent => {
    tabcontent.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(tabcontent,e.clientY)
        const rest_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            tabcontent.appendChild(rest_drag)
        } else{
            tabcontent.insertBefore(rest_drag, afterElement)
        }

    })
})

years.forEach(year => {
    year.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(year,e.clientY)
        const rest_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            year.appendChild(rest_drag)
        } else{
            year.insertBefore(rest_drag, afterElement)
        }

    })
})

semesters.forEach(semester => {
    semester.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(semester,e.clientY)
        const rest_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            semester.appendChild(rest_drag)
        } else{
            semester.insertBefore(rest_drag, afterElement)
        }

    })
})



// to drag free electives
free_drags.forEach(free_drag => {
    free_drag.addEventListener('dragstart', () => {
       free_drag.classList.add('dragging')
    })

    free_drag.addEventListener('dragend', () => {
        free_drag.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container,e.clientY)
        const free_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            container.appendChild(free_drag)
        } else{
            container.insertBefore(free_drag, afterElement)
        }

    })
})

tabs.forEach(tabcontent => {
    tabcontent.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(tabcontent,e.clientY)
        const free_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            tabcontent.appendChild(free_drag)
        } else{
            tabcontent.insertBefore(free_drag, afterElement)
        }

    })
})

years.forEach(year => {
    year.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(year,e.clientY)
        const free_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            year.appendChild(free_drag)
        } else{
            year.insertBefore(free_drag, afterElement)
        }

    })
})

semesters.forEach(semester => {
    semester.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(semester,e.clientY)
        const free_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            semester.appendChild(free_drag)
        } else{
            semester.insertBefore(free_drag, afterElement)
        }

    })
})
//





// to drag technical electives
tech_drags.forEach(tech_drag => {
    tech_drag.addEventListener('dragstart', () => {
       tech_drag.classList.add('dragging')
    })

    tech_drag.addEventListener('dragend', () => {
        tech_drag.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container,e.clientY)
        const tech_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            container.appendChild(tech_drag)
        } else{
            container.insertBefore(tech_drag, afterElement)
        }

    })
})

tabs.forEach(tabcontent => {
    tabcontent.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(tabcontent,e.clientY)
        const tech_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            tabcontent.appendChild(tech_drag)
        } else{
            tabcontent.insertBefore(tech_drag, afterElement)
        }

    })
})

years.forEach(year => {
    year.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(year,e.clientY)
        const free_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            year.appendChild(tech_drag)
        } else{
            year.insertBefore(tech_drag, afterElement)
        }

    })
})

semesters.forEach(semester => {
    semester.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(semester,e.clientY)
        const free_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            semester.appendChild(tech_drag)
        } else{
            semester.insertBefore(tech_drag, afterElement)
        }

    })
})
//



// to drag humanities electives
hum_drags.forEach(hum_drag => {
    hum_drag.addEventListener('dragstart', () => {
       hum_drag.classList.add('dragging')
    })

    hum_drag.addEventListener('dragend', () => {
        hum_drag.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container,e.clientY)
        const hum_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            container.appendChild(hum_drag)
        } else{
            container.insertBefore(hum_drag, afterElement)
        }

    })
})

tabs.forEach(tabcontent => {
    tabcontent.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(tabcontent,e.clientY)
        const hum_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            tabcontent.appendChild(hum_drag)
        } else{
            tabcontent.insertBefore(hum_drag, afterElement)
        }

    })
})

years.forEach(year => {
    year.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(year,e.clientY)
        const hum_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            year.appendChild(hum_drag)
        } else{
            year.insertBefore(hum_drag, afterElement)
        }

    })
})

semesters.forEach(semester => {
    semester.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(semester,e.clientY)
        const hum_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            semester.appendChild(hum_drag)
        } else{
            semester.insertBefore(hum_drag, afterElement)
        }

    })
})
//



// to drag 3000 humanities electives
upper_hum_drags.forEach(upper_hum_drag => {
    upper_hum_drag.addEventListener('dragstart', () => {
       upper_hum_drag.classList.add('dragging')
    })

    upper_hum_drag.addEventListener('dragend', () => {
        upper_hum_drag.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container,e.clientY)
        const upper_hum_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            container.appendChild(upper_hum_drag)
        } else{
            container.insertBefore(upper_hum_drag, afterElement)
        }

    })
})

tabs.forEach(tabcontent => {
    tabcontent.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(tabcontent,e.clientY)
        const upper_hum_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            tabcontent.appendChild(upper_hum_drag)
        } else{
            tabcontent.insertBefore(upper_hum_drag, afterElement)
        }

    })
})

years.forEach(year => {
    year.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(year,e.clientY)
        const upper_hum_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            year.appendChild(upper_hum_drag)
        } else{
            year.insertBefore(upper_hum_drag, afterElement)
        }

    })
})

semesters.forEach(semester => {
    semester.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(semester,e.clientY)
        const upper_hum_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            semester.appendChild(upper_hum_drag)
        } else{
            semester.insertBefore(upper_hum_drag, afterElement)
        }

    })
})
//



// to drag 3000 cse electives
cse_drags.forEach(cse_drag => {
    cse_drag.addEventListener('dragstart', () => {
       cse_drag.classList.add('dragging')
    })

    cse_drag.addEventListener('dragend', () => {
        cse_drag.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container,e.clientY)
        const cse_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            container.appendChild(cse_drag)
        } else{
            container.insertBefore(cse_drag, afterElement)
        }

    })
})

tabs.forEach(tabcontent => {
    tabcontent.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(tabcontent,e.clientY)
        const cse_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            tabcontent.appendChild(cse_drag)
        } else{
            tabcontent.insertBefore(cse_drag, afterElement)
        }

    })
})

years.forEach(year => {
    year.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(year,e.clientY)
        const cse_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            year.appendChild(cse_drag)
        } else{
            year.insertBefore(cse_drag, afterElement)
        }

    })
})

semesters.forEach(semester => {
    semester.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(semester,e.clientY)
        const cse_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            semester.appendChild(cse_drag)
        } else{
            semester.insertBefore(cse_drag, afterElement)
        }

    })
})
//


// to drag transfer electives
transfer_drags.forEach(transfer_drag => {
    transfer_drag.addEventListener('dragstart', () => {
       transfer_drag.classList.add('dragging')
    })

    transfer_drag.addEventListener('dragend', () => {
        transfer_drag.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container,e.clientY)
        const transfer_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            container.appendChild(transfer_drag)
        } else{
            container.insertBefore(transfer_drag, afterElement)
        }

    })
})

tabs.forEach(tabcontent => {
    tabcontent.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(tabcontent,e.clientY)
        const transfer_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            tabcontent.appendChild(transfer_drag)
        } else{
            tabcontent.insertBefore(transfer_drag, afterElement)
        }

    })
})

years.forEach(year => {
    year.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(year,e.clientY)
        const transfer_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            year.appendChild(transfer_drag)
        } else{
            year.insertBefore(transfer_drag, afterElement)
        }

    })
})

semesters.forEach(semester => {
    semester.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(semester,e.clientY)
        const transfer_drag = document.querySelector('.dragging')
        if (afterElement == null) {
            semester.appendChild(transfer_drag)
        } else{
            semester.insertBefore(transfer_drag, afterElement)
        }

    })
})
//






draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
       draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container,e.clientY)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
            container.appendChild(draggable)
        } else{
            container.insertBefore(draggable, afterElement)
        }

    })
})

tabs.forEach(tabcontent => {
    tabcontent.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(tabcontent,e.clientY)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
            tabcontent.appendChild(draggable)
        } else{
            tabcontent.insertBefore(draggable, afterElement)
        }

    })
})

// makes its sortable. Returns element right above what is being dragged
function getDragAfterElement(conatiner,y){
  // returns elements into an array
    const draggableElements = [...conatiner.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest,child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset){
            return { offset: offset,element: child}
        } else {
            return closest
        }
    }, {offset: Number.NEGATIVE_INFINITY}).element



}
years.forEach(year => {
    year.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(year,e.clientY)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
            year.appendChild(draggable)
        } else{
            year.insertBefore(draggable, afterElement)
        }

    })
})


// makes its sortable. Returns element right above what is being dragged
function getDragAfterElement(conatiner,y){
  // returns elements into an array
    const draggableElements = [...conatiner.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest,child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset){
            return { offset: offset,element: child}
        } else {
            return closest
        }
    }, {offset: Number.NEGATIVE_INFINITY}).element

}

semesters.forEach(semester => {
    semester.addEventListener('dragover' , e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(semester,e.clientY)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
            semester.appendChild(draggable)
        } else{
            semester.insertBefore(draggable, afterElement)
        }

    })
})

var user_major = localStorage.getItem("myMajor");
var user_year = localStorage.getItem("myYear");
document.getElementById("UMajor").innerHTML = user_major;
document.getElementById("UCatyear").innerHTML = user_year;

function printPageArea(areaID){
    var printContent = document.getElementById(areaID);
    var WinPrint = window.open('', '', 'width=900,height=650');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}


function openTab(evt, courseCat) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(courseCat).style.display = "block";
evt.currentTarget.className += " active";
}


function search_courses() {

    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('draggable');

    for (i = 0; i < x.length; i++) {

if(x[i].parentNode.classList[0] == 'tabcontent'){

        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {

            x[i].style.display="list-item";                
        }

}
}
}



function search_courses_rest() {

    let input = document.getElementById('searchbar_rest').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('rest_drag');

    for (i = 0; i < x.length; i++) {

if(x[i].parentNode.classList[0] == 'tabcontent'){

        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {

            x[i].style.display="list-item";                
        }

}
}
}




function search_courses_free() {

    let input = document.getElementById('searchbar_free').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('free_drag');

    for (i = 0; i < x.length; i++) {

if(x[i].parentNode.classList[0] == 'tabcontent'){

        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {

            x[i].style.display="list-item";                
        }

}
}
}




function search_courses_tech() {

    let input = document.getElementById('searchbar_tech').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('tech_drag');

    for (i = 0; i < x.length; i++) {

if(x[i].parentNode.classList[0] == 'tabcontent'){

        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {

            x[i].style.display="list-item";                
        }

}
}
}





function search_courses_hum() {

    let input = document.getElementById('searchbar_hum').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('hum_drag');

    for (i = 0; i < x.length; i++) {

if(x[i].parentNode.classList[0] == 'tabcontent'){

        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {

            x[i].style.display="list-item";                
        }

}
}
}





function search_courses_upperhum() {

    let input = document.getElementById('searchbar_upperhum').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('upper_hum_drag');

    for (i = 0; i < x.length; i++) {

if(x[i].parentNode.classList[0] == 'tabcontent'){

        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {

            x[i].style.display="list-item";                
        }

}
}
}





function search_courses_transfer() {

    let input = document.getElementById('searchbar_transfer').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('transfer_drag');

    for (i = 0; i < x.length; i++) {

if(x[i].parentNode.classList[0] == 'tabcontent'){

        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {

            x[i].style.display="list-item";                
        }

}
}
}



// fetch('./all_courses.json')
// .then(function (response){
//     return response.json();
// })
// .then(function (data) {
//     for(var i=0; i < data.length;i++) {
//         document.getElementById("data").innerHTML += data[i].Course + " " + data[i].Title + "<br />";
//     }
// })
// .catch(function (err) {
//     console.log(err)
// })






