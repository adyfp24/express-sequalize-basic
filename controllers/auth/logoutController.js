const User = require('../../models').User;

const logoutUser = async (req, res) => {
    try {
        const dataUser = { username, password } = req.body;
        const user = await User.destroy({ where: dataUser });
        if (user) {
            res.status(200).json({
                success: true,
                message: 'akun berhasil logout dan dihapus',
            })
        } else {
            res.status(400).json({
                success: false,
                message: 'logout gagal',
            })
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal S' });
    }
}

module.exports = {
    logoutUser
};