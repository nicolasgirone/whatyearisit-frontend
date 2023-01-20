fetch('https://whatyearisit-backend-taupe.vercel.app')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.message;
 });