let controlador = {
    index: (req, res) => {
        res.render('index', {titulo: 'kiara'});
    }
}

module.exports = controlador;