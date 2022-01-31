let major = document.querySelector('select-major')
let catalog_year = document.querySelector('select-year')
let result = document.querySelector('p1')
let result2 = document.querySelector('p2')

major.addEventListener('change', () => {
    result.innerText = major.options[major.selectedIndex].text;
    console.log(major.selectedIndex);
});
catalog_year.addEventListener('change', () => {
    result2.innerText = catalog_year.options[catalog_year.selectedIndex].text;
    console.log(catalog_year.selectedIndex);
});


