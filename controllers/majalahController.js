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

const getAllMajalah = async (req, res) => {
    try {
        const majalah = await Majalah.findAll()
        res.status(200).json({
            success: true,
            message: 'data majalah tersedia',
            data: majalah
        })
    } catch (error) {
        res.status(error).json({
            succes: false,
            message: 'data majalah tidak tersedia'
        })
    }
}

const getMajalahById = async (req, res) => {
    const id = req.params.id;
    try {
        const majalah = await Majalah.findOne({where: {id}});
        if(majalah){
            res.status(200).json({
                success: true,
                message: 'data majalah tersedia',
                data: majalah
            })
        }else{
            res.status(200).json({
                success: true,
                message: 'data majalah tidak tersedia',
            })
        }
    } catch (error) {
        res.status(error).json({
            succes: false,
            message: 'data majalah tidak tersedia'
        })
    }
}

module.exports = {
    createMajalah,
    getAllMajalah,
    getMajalahById
};