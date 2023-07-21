function changeColor() {
    const btn = document.querySelector('button');
    let rows = Array.from(document.querySelectorAll('tr'));
    rows.shift();
    const evenRows = [];
    rows.forEach(row => {
        
        if (rows.indexOf(row) % 2 !== 0) {

            evenRows.push(row);

        }
    });

    rows = evenRows;

    if (btn.innerText === 'Colorize') {

        colorize(rows);
        btn.innerText = 'Uncolorize';

    } else {

        uncolorize(rows);
        btn.innerText = 'Colorize';

    }

    function colorize(rows) {
        rows.forEach(row => {
           
            row.style.background = 'red';
        })
    };
    function uncolorize(rows) {

        rows.forEach(row => {

            row.style.background = 'white';
        })
    };



}