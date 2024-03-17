let words = ['JAVASCRIPT', 'HTML', 'CSS', 'EXPRESS', 'PYTHON', 'JAVA', 'NODEJS', 'REACT', 'ANGULAR', 'VUE', 'PHP', 'MYSQL', 'MONGODB', 'LINUX', 'GIT', 'DOCKER', 'API', 'AJAX', 'JSON', 'REST', 'GRAPHQL', 'TYPESCRIPT', 'FLUTTER', 'JAVAEE', 'SPRING', 'DJANGO', 'RUBY', 'GO', 'SWIFT', 'KOTLIN', 'BASH', 'AWS', 'AZURE', 'DOCKER', 'LARAVEL', 'SASS', 'LESS', 'WEBPACK', 'GIT', 'GITHUB', 'HEROKU', 'NETLIFY', 'NPM', 'YARN', 'WEBPACK'],
    randomNumber = Math.floor(Math.random() * 45),
    word = words[randomNumber],
    wordContainer = document.getElementById('word'),
    btn = document.getElementById('btn'),
    input = document.getElementById('input'),
    wrongLetter = document.getElementById('wrong-letter'),
    livesCount = 5,
    lives = document.getElementById('lives'),
    wrongs = '',
    letters = '',
    CounterOfRightLetter = 0;

for (let i = 0; i < word.length; i++) {
    let span = document.createElement('span');
    wordContainer.appendChild(span);
}

btn.addEventListener('click', () => {
    const letter = input.value.toUpperCase();
    if (/^[A-Z]$/.test(letter)) {
        if (letters.includes(letter)) {
            alert("You can't add same letter twice")
        } else {

            indexOfLetter = word.indexOf(letter);
            if (word.includes(letter)) {
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === letter) {
                        wordContainer.children[i].innerHTML = letter;
                        CounterOfRightLetter++;
                    }
                }

            } else {
                if (wrongs.includes(letter)) {
                    alert("You can't add same letter twice")
                } else {
                    livesCount--;
                    lives.innerHTML = livesCount;
                    wrongLetter.innerHTML += ` ${letter}`;
                    wrongs += letter;
                }
            }
        }
        letters += letter;
    } else {
        alert('Invalid letter! please add a letter in format A-Z')
    }

    input.value = '';
    if (livesCount === 0) {
        alert(`Game Over! the word is ${word}`);
        location.reload();
    }
    if (CounterOfRightLetter === word.length) {
        alert(`Congratulations! the word is ${word}`);
        location.reload();
    }
});
