const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')
const years = document.querySelectorAll('.year')
const semesters = document.querySelectorAll('.semester')
const tabs = document.querySelectorAll('.tabcontent')



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
