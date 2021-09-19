module.exports.getAll = (req, res) => {
    res.status(200).json({
        login: 'login from controller11'
    })
}

module.exports.getById = (req, res) => {
    res.status(200).json({
        login: 'login from controller22'
    })
}

module.exports.remove = (req, res) => {
    res.status(200).json({
        login: 'login from controller33'
    })
}

module.exports.create = (req, res) => {
    res.status(200).json({
        login: 'login from controller44'
    })
}

module.exports.update = (req, res) => {
    res.status(200).json({
        login: 'login from controller55'
    })
}