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
        });
    }
}

const updateMajalah = async (req, res) => {
    const id = req.params.id;
    try {
        const dataUpdate = {
            judul_majalah,
            isi_konten,
            gambar
        } = req.body;
        const updatedMajalah = await Majalah.update(dataUpdate,{where: {id}});
        if(updatedMajalah){
            res.status(200).json({
                succes: false,
                message: 'data majalah berhasil ter update',
                data: dataUpdate
            });
        }else{
            res.status(404).json({
                succes: false,
                message: 'id majalah tidak ada',
            });
        }
    } catch (error) {
        res.status(error).json({
            succes: false,
            message: 'data majalah tidak ter update'
        });
    }
}

module.exports = {
    createMajalah,
    getAllMajalah,
    getMajalahById,
    updateMajalah
};