const User = require('../../models').User;

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({
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
    loginUser
};