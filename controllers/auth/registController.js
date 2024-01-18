const User = require('../../models/user');

const registUsers = async (req, res) => {
    try {
        const data = req.body;
        const user = await User.create(data);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Errorrr' });
    }
}

module.exports = {
    registUsers
};