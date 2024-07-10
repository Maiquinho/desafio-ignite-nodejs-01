import http from 'node:http'

const server = http.createServer((req, res) => {

    const { method, url } = req

    console.log('method:', method)
    console.log('url:', url)
    
    return res.writeHead(404).end()

})

server.listen(3333)