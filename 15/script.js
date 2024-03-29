document.addEventListener('DOMContentLoaded', function () {
    var saveBtn = document.getElementById('saveBtn');
    var noteInput = document.getElementById('noteInput');
    var noteList = document.getElementById('noteList');

    displayNotes();
    saveBtn.addEventListener('click', function () {
        var noteText = noteInput.value.trim();
        if (noteText !== '') {
            var notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push(noteText);
            localStorage.setItem('notes', JSON.stringify(notes));
            noteInput.value = '';
            displayNotes();
        }
    });

    function displayNotes() {
        var notes = JSON.parse(localStorage.getItem('notes')) || [];
        noteList.innerHTML = '';
        notes.forEach((note, index) => {
            var li = document.createElement('li');
            li.innerHTML = note;
            var deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.id = 'deleteBtn';
            deleteBtn.addEventListener('click', () => {
                deleteNote(index);
            })

            li.appendChild(deleteBtn);
            noteList.appendChild(li);
        });
    }

    function deleteNote(index) {
        var notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1); // 1 2 3 
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
    }
})
