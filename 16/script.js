const persons = [
    { name: 'Person 1', votes: 0 },
    { name: 'Person 2', votes: 0 },
    { name: 'Person 3', votes: 0 },
    { name: 'Person 4', votes: 0 },
    { name: 'Person 5', votes: 0 }
];

document.addEventListener('DOMContentLoaded', () => {
    updatePersons();
});

function updatePersons() {
    const personsContainer = document.getElementById('personsContainer');

    personsContainer.innerHTML = '';

    persons.sort(function (a, b) { return b.votes - a.votes });

    persons.forEach(person => {
        const personContainer = document.createElement('div');
        personContainer.classList.add('person');
        personContainer.innerHTML += `<p>${person.name}</p>`;
        personContainer.innerHTML += `<p class="votes">Votes: ${person.votes}</p>`;

        const voteBtn = document.createElement('button');
        voteBtn.classList.add('vote-btn');
        voteBtn.textContent = 'Vote';
        personContainer.appendChild(voteBtn);
        personsContainer.appendChild(personContainer);

        voteBtn.addEventListener('click', () => {
            person.votes++;
            updatePersons();
        })
    })
}