const net = require('net')

/**
 * return current date & 24 hour time in the format: "YYYY-MM-DD hh:mm"
 * @return {String}
 */
const now = () => {
  const pad = n => (n < 10 ? '0' : '') + n

  const d = new Date()
  const year = d.getFullYear()
  const month = pad(d.getMonth() + 1)
  const date = pad(d.getDate())
  const hours = pad(d.getHours())
  const minutes = pad(d.getMinutes())

  return `${year}-${month}-${date} ${hours}:${minutes}`
}

const server = net.createServer(socket => {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
