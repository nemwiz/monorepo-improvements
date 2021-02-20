const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.get('/portfolios/400', (request, response) => {
    response.status(400).send("The server doesn't understand this request.")
});

server.get('/portfolios/401', (request, response) => {
    response.status(401).send("You are not logged in.")
});

server.get('/portfolios/403', (request, response) => {
    response.status(403).send("You are not allowed to see this page.")
});

server.get('/portfolios/404', (request, response) => {
    response.status(404).send({
        error: {
            code: 123,
            message: "Portfolio with this id was not found"
        }
    })
});

server.get('/accounts/404', (request, response) => {
    response.status(404).send({
        error: {
            code: 456,
            message: "Account was not found"
        }
    })
});

server.get('/portfolios/500', (request, response) => {
    response.status(500);
});

server.use(router)

server.listen(4000, () => {
    console.log('JSON Server is running')
});
