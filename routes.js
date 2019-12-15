const requestHandler = (req, res) => {
    const url = req.url;
    if(url === "/"){
        res.write('hello world');
        return res.end();
    }

    if(url === "/deneme"){
        res.write('example page');
        return res.end(); //Uygulama sonlandırmak için
    }

    res.setHeader('Content-type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Not Found</title></head>')
    res.write('<body>Sayfa bulunamadı!</body>')
    res.write('</html>')
}
exports.handler = requestHandler;