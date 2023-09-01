const form = document.querySelector('form');
const list = document.querySelector('ul');


form.addEventListener('submit', addExpense);


list.addEventListener('click', handleDelete);


function addExpense(event) {

  event.preventDefault();


  const title = event.target[0].value;
  const price = event.target[1].value;


  if (title === '' || price === '') {
    alert('Lütfen formu doldurun');

    return;
  }


  const liElement = document.createElement('li');

  // içeriğini değiştirme
  liElement.innerHTML = `
          <h3>${title}</h3>
          <h3>${price} &#8378;</h3>
          <button id="delete">Sil</button>
   `;


  list.appendChild(liElement);


  event.target[0].value = '';
  event.target[1].value = '';
}


function handleDelete(event) {
  const element = event.target;


  if (element.id === 'delete') {

    const parent = element.parentElement;

    parent.remove();
  }
}