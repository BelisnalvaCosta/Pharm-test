document.addEventListener('DOMContentLoaded', function () {
    loadHTMLTable([]);
});

function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');
    
    if (data.lenght === 0) {
        tableHtml = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    }
}