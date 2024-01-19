const mongoose = require('mongoose')
const Meds = require('../models/meds')



exports.createMedecine = async (req, res) => {
  const userId = new mongoose.Types.ObjectId(req.userData.userId);
  try {
    const medecine = await Meds.create({
      name: req.body.name,
      description: req.body.description,
      price:req.body.price,
      category:req.body.category
    })
    res.status(200).json({
      success: true,
      message: 'medecine Created Successfully',
      data: medecine
    })
  } catch (error) {
    res.status(500).json({ error: true, message: 'Could not create the medecine' });
  }
}

exports.getAllMedecines = async (req, res) => {
  try {
    const meds = await Meds.find()
    res.status(200).json({
      success: true,
      data: meds
    });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Could not retrieve medecines' });
  }
};

exports.getMedecinesById = async (req, res) => {
  const { medId } = req.params;
  try {
    const med = await Meds.findById(medId)
    if (!med) {
      return res.status(404).json({ error: true, message: 'medecine not found' });
    }
    res.status(200).json({
      success: true,
      data: med
    });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Could not retrieve the medecine' });
  }
};

exports.updateMedecineById = async (req, res) => {
  const { medId } = req.params;
  try {
    const updatedMedecine = await Meds.findByIdAndUpdate(medId, req.body, { new: true });
    if (!updatedMedecine) {
      return res.status(404).json({ error: true, message: 'medecine not found' });
    }
    res.status(200).json({
      success: true,
      message: 'medecine updated successfully',
      data: updatedMedecine
    });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Could not update the medecine' });
  }
};


exports.deleteMedecineById = async (req, res) => {
  const { medId } = req.params;
  try {
    const deletedMedecine = await Meds.findByIdAndDelete(medId);
    if (!deletedMedecine) {
      return res.status(404).json({ error: true, message: 'medecine not found' });
    }
    res.status(200).json({
      success: true,
      message: 'medecine deleted successfully',
      data: deletedMedecine
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: true, message: 'Could not delete the medecine' });
  }
};


