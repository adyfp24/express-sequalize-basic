const User = require('../../models').User;

const registUsers = async (req, res) => {
    try {
        const {
            username,
            email,
            password,
        } = req.body;
        const newUser = await User.create({
            username,
            email,
            password,
        });
        return res.status(200).json({
            success: true,
            message: 'registrasi sukses',
            data: newUser
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Errorrr' });
    }
}

module.exports = {
    registUsers
};