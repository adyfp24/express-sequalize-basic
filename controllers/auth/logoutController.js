const User = require('../../models/user');

const logoutUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findone({
            where:{
                username,
                password
            }
        });
        if(user){
            res.status(200).json({
                success: true,
                message: 'login sukses',
                data: user
            })
        }else{
            res.status(400).json({
                success: false,
                message: 'login gagal',
            })
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Errorrr' });
    }
}

module.exports = {
    logoutUser
};