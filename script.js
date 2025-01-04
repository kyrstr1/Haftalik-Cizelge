function addNewTime() {
    var tbody = document.querySelector('#schedule tbody');
    var newRow = document.createElement('tr');
    var timeCell = document.createElement('td');
    timeCell.classList.add('time');
    timeCell.contentEditable = true;
    newRow.appendChild(timeCell);

    // Toplam 7 gün (Pazartesi - Pazar)
    for (var i = 0; i < 7; i++) {
        var cell = document.createElement('td');
        cell.contentEditable = true;
        newRow.appendChild(cell);
    }

    tbody.appendChild(newRow);
}

document.getElementById('addTime').addEventListener('click', function() {
    addNewTime();
});
