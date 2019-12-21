const http = require('http');
const { readJSON } = require('./readFile')
const url = require('url');

function createTable(employees) {
    return (
        `<style>
            th{
                text-align: left;
            }
            td{
                width: 25%;
            }
        </style>
            <table>
                <thead>
                    <tr>
                    <th>Picture </th>
                    <th>Adi </th>
                    <th>Age </th>
                    <th>e-mail </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                    <img src= '${employees.picture}'/></td>
                    <td> ${employees.name}</td>
                    <td> ${employees.age}</td>
                    <td> ${employees.email}</td>
                    </tr>
                </tbody>
            </table>`
    );
}
const server = http.createServer((req, res) => {
    const pathName = req.url;
    readJSON("data.json", "utf-8")
        .then(data => {
            if (pathName === "/") {
                res.end(data);
            }
            if (pathName === "/getFirstUser") {
                res.writeHead('200', { "Content-Type": "text/json" });
                data = JSON.parse(data);
                const [firstUser] = data;
                res.end(JSON.stringify(firstUser));
            }
            if (pathName === "/getUserHaveMoreThanOne") {
                const employees = JSON.parse(data);
                const employeesHaveMoreThanOne = employees.filter(el => el.friends.length > 1);
                res.end(JSON.stringify(employeesHaveMoreThanOne));
            }
            if (pathName === '/getUserHTML') {
                data = JSON.parse(data);
                const [firstUser] = data;

                res.end(createTable(firstUser));
            }
        }).catch(err => res.end(err.message))
});

server.listen(2000, "127.0.0.1", () =>
    console.log("Listening the port ")
);