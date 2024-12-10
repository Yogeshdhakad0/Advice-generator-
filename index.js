  const texts=[
    {id:"#1",
  name:'Mahatma Gandhi',
  details:'Birth: Mohandas Karamchand Gandhi was born on October 2, 1869 in Porbandar, India'

    },
    {id:"#2",
  name:'bhagat singh ',
  details:'Bhagat Singh was a prominent figure in Indias fight for independence from British rule in the early 20th century'

    },
    {id:"#3",
  name:'Rabindranath Tagore',
  details:'Rabindranath Tagore (1861 1941), a poet and philosopher, was the first non-European Nobel laureate in Literature. His work, including "Gitanjali," greatly influenced literature, music, and the arts.'

    },
    {id:"#4",
  name:'Lal Bahadur Shastri',
  details:'Lal Bahadur Shastri (1904 1966), India s second Prime Minister, is known for his leadership in the 1965 war and the slogan "Jai Jawan Jai Kisan.'

    },
    {id:"#5",
  name:'Sardar Vallabhbhai Patel',
  details:'Sardar Vallabhbhai Patel (1875 1950), Indias first Deputy PM and Home Minister, is known as the "Iron Man of India" for uniting over 500 princely states into the Indian Union.'


    },
    {id:"#6",
  name:'APJ Abdul Kalam ',
  details:'APJ Abdul Kalam (October 15, 1931  July 27, 2015)**, known as the "Missile Man of India," was a renowned scientist and the 11th President of India. He played a key role in India s space and defense programs and inspired millions with his vision for a developed India.'


    },
  ]








const input = document.querySelector('input');
const Advice_search_button = document.querySelector('#Advice-search-button');
const text_change = document.querySelector("#text-change");
const form=document.querySelector('form')
const Instr=document.querySelector('.Instr');
const h6=document.querySelector('h6 i');
// console.log(text_change);
// console.log(Advice_search_button);
const iconss=document.querySelector('#iconss');
console.log(iconss)

const searching = (e) => {
  e.preventDefault();
  
  let valuee = input.value.trim().toLowerCase();
  console.log(valuee);


  const valuecheck = () => {
    const match = texts.find((text) => text.name.toLowerCase().includes(valuee));
    const id1 = texts.find((text) => text.name.toLowerCase().includes(valuee));
// console.log(id1)
    if (match) {
   Instr.innerHTML=''
   h6.innerHTML=` <i>${match.id}</i>`
      text_change.innerHTML = ` <p>${match.details}</p>`;
      console.log(match); 
    } else {
      text_change.innerHTML = '<p>No matching results found.</p>';
    }
  };

  valuecheck();
  input.value = ''; 
};

form .addEventListener("submit", searching);

const  button2=document.querySelector('.button2');
button2.addEventListener('click', () => {
  window.location.reload();
});