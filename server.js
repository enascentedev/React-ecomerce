const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.post('/login', (req, res) => {
  const users = router.db.get('users').value();
  const user = users.find(u => u.email === req.body.email && u.password === req.body.password);
  if (user) {
    res.jsonp(user);
  } else {
    res.status(400).send({ error: "Usuário não encontrado ou senha incorreta" });
  }
})

server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})
