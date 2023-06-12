/* // EXAMPLE OF DOCUMENT OBJECT

    console.dir(document);
    console.log(document.domain);
    console.log(document.URL);
    console.log(document.title);
    document.title = 'My Yard';
    console.log(document.title);
    console.log(document.doctype);
    console.log(document.head);
    console.log(document.body);
    console.log(document.all);
    console.log(document.all[10]);
    document.all[10].textContent = 'hello'; 

*/

//     GETELEMENTBYID

/* 
    var headerTitle = document.getElementById('header-title');
    console.log(headerTitle);
    headerTitle.textContent = 'hello';
    headerTitle.innerText = 'Goodbye';
    console.log(headerTitle.innerText);
    headerTitle.innerHTML = '<h3>Hello</h3>' 


    var header = document.getElementById('main-header');
    header.style.borderBottom = 'solid 3px #000';
*/

//       GETELEMENTSBYCLASSNAME

/* 
    var items = document.getElementsByClassName('list-group-item');
    console.log(items);
    console.log(items[1].outerHTML);
    items[1].textContent = 'Hello 2';
    items[1].style.fontWeight = 'bold';
    items[1].style.backgroundColor = 'yellow';

    // we did not gives background color of whole class item it gives error in output

    for(var i = 0; i < items.length; i++){
        items[i].style.backgroundColor = 'pink';
    } 
*/

//       GETELEMENTSBYTAGNAME
/* 
    var li = document.getElementsByTagName('li');
    console.log(li);
    console.log(li[1].outerHTML);
    li[1].textContent = 'Hello 2';
    li[1].style.fontWeight = 'bold';
    li[1].style.backgroundColor = 'yellow';

    // we did not gives background color of whole class item it gives error in output

    for(var i = 0; i < li.length; i++){
        li[i].style.backgroundColor = 'pink';
    } 
*/   

//       QUERYSELECTOR

/* 
    var header = document.querySelector('#main-header');
    header.style.borderBottom = 'solid 4px #ccc';

    var input = document.querySelector('input');
    input.value = 'hello world';

    var submit = document.querySelector('input[type="submit"]');
    submit.value = "SEND";

    var item = document.querySelector('.list-group-item');
    item.style.color = 'blue';
*/

//        QUERYSELECTFORALL

/* 
    var titles = document.querySelectorAll('.title');
    console.log(titles);
    titles[0].textContent = 'Hello';

    var odd = document.querySelectorAll('li:nth-child(odd)');
    var even = document.querySelectorAll('li:nth-child(even)');

    for(var i = 0; i < odd.length; i++){
        odd[i].style.backgroundColor = '#f4f4f4';
        even[i].style.backgroundColor = '#ccc';
    } 
*/
