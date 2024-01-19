const Majalah = require('../models').Majalah;

const createMajalah = async (req, res) => {
    try {       
        const data = {
            judul_majalah,
            isi_konten,
            gambar
        } = req.body;
    
        const newMajalah = await Majalah.create(data);
        res.status(200).json({
            success: true,
            message: 'majalah berhasil dibuat',
            data: newMajalah
        })
    } catch (error) {
        res.status(error).json({
            succes: false,
            message: 'majalah gagal dibuat'
        })
    }
}

module.exports = {createMajalah};