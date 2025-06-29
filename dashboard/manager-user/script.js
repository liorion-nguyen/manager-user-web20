const users = JSON.parse(localStorage.getItem('users'));
let tbodyHTML = '';
for (let i = 0; i < users.length; i++) {
    tbodyHTML += `
    <tr>
        <td>${i + 1}</td>
        <td>${users[i].fullName}</td>
        <td>${users[i].email}</td>
        <td>${users[i].phone}</td>
        <td><span class="role admin">${users[i].role}</span></td>
        <td><span class="status active">${users[i].status ? users[i].status : "Active"}</span></td>
    </tr>
    `
}

document.getElementById('table-body').innerHTML = tbodyHTML;