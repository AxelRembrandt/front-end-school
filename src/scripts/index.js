<div class="illustration"></div>
          <div class="offer">
            <div class="actions">
              <button class="accent-green">Создать</button>
              <button class="secondary-green">Скрыть баннер</button>
            </div>
          </div>

const illustration = document.createElement('div');
const offer = document.createElement('div')

illustration.className = 'illustration';
offer.className = 'offer';

const actions = document.createElement('div');
const send = document.createElement('button');
const send = document.createElement('button');

send.className = "button button-secondary";
close.className = "button button-secondary";

send.innerText = 'Создать';
close.innerText 'Скрыть баннер';

offer.innerHTML = `
<h2 class="greeting">Здравствуйте, Игорь!</h2>
            <p>В этом месяце Вы зарегистрировались на 3 мероприятия. У нас появилось еще 2 новых мероприятия.</p>
            <p>Также у Вас есть права для создания собственного мероприятия.</p>
            
`;

offer.appendChild(controls);
actions.appendChild(send);
actions.appendChild(close);

container.appendChild(illustration);
container.appendChild(offer);
