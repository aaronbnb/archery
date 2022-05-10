document.getElementById('navbarDropdown1').addEventListener('click', event => {
    console.log('hey')
if(event.target.getAttribute('aria-expanded') == 'false') {
  let dropdown = document.createElement('ul')
  dropdown.classList.add('dropdown-menu')     
  dropdown.setAttribute('aria-labelledby', 'navbarDropdown')     
  dropdown.setAttribute('id', 'dd1');
  
  let links = ["History", "Membership", "Contact"];
 let i = 0
  links.forEach(linkText => {
    let li = document.createElement('li');
    let a = document.createElement('a')
    a.setAttribute('class', 'dropdown-item')
    a.setAttribute('href', '/' + linkText.toLowerCase())
    a.textContent = linkText;
    li.appendChild(a)
    dropdown.appendChild(li)
    i++;
    if (i === 3) {
        dropdown.classList.add('show') 
        event.target.classList.add('show')
        event.target.appendChild(dropdown)
        
    }
  })
  event.target.setAttribute('aria-expanded', 'true')
}
else {
    event.target.setAttribute('aria-expanded', 'false')
    document.getElementById('dd1').remove();
    event.target.classList.remove('show')
}
});

document.getElementById('navbarDropdown2').addEventListener('click', event => {
    console.log('hey')
if(event.target.getAttribute('aria-expanded') == 'false') {
  let dropdown = document.createElement('ul')
  dropdown.classList.add('dropdown-menu')     
  dropdown.setAttribute('aria-labelledby', 'navbarDropdown')     
  dropdown.setAttribute('id', 'dd1');
  
  let links = ["Individual", "Group", "Party"];
 let i = 0
  links.forEach(linkText => {
    let li = document.createElement('li');
    let a = document.createElement('a')
    a.setAttribute('class', 'dropdown-item')
    a.setAttribute('href', '/' + linkText.toLowerCase())
    a.textContent = linkText;
    li.appendChild(a)
    dropdown.appendChild(li)
    i++;
    if (i === 3) {
        dropdown.classList.add('show') 
        event.target.classList.add('show')
        event.target.appendChild(dropdown)
        
    }
  })
  event.target.setAttribute('aria-expanded', 'true')
}
else {
    event.target.setAttribute('aria-expanded', 'false')
    document.getElementById('dd1').remove();
    event.target.classList.remove('show')
}
});