const input = document.querySelector('input');
const dataDiv = document.getElementById('data');

document.querySelector('form').addEventListener('submit', (e) => {
    dataDiv.innerHTML = 'Loading weather... please wait';
    const location = input.value;
    fetch('http://localhost:3000/weather?address='+location).then((response) =>{
        response.json().then((data) => {
            if (data.error) {
                dataDiv.innerHTML = data.error;
            } else {
                dataDiv.innerHTML = data.location + ',<br/><br/>' + data.forecast;
            }
        })
    })
    e.preventDefault();
})