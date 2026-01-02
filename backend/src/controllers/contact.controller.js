const { StatusCodes } = require("http-status-codes");
const Contact = require("../models/Contact");

const createContact = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Basic validation
        if (!name || !email || !phone) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "name, email, and phone are required fields",
                data: {},
                error: { fields: ["name", "email", "phone"] },
                success: false
            });
        }

        const contactData = {
            name: name,
            email: email,
            phone: phone,
            message: message || ""
        };

        const response = await Contact.create(contactData);
        return res.status(StatusCodes.CREATED).json({
            message: "successfully created the contact",
            error: {},
            data: response,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "something went wrong while creating contact",
            data: {},
            error: error.message || error,
            success: false
        });
    }
};

const getAllContacts = async (req, res) => {
    try {
        const response = await Contact.find().sort({ createdAt: -1 });
        return res.status(StatusCodes.OK).json({
            message: "successfully fetched all contacts",
            error: {},
            data: response,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "something went wrong while fetching contacts",
            data: {},
            error: error.message || error,
            success: false
        });
    }
};

const getContact = async (req, res) => {
    try {
        const response = await Contact.findById(req.params.id);
        
        if (!response) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "contact not found",
                data: {},
                error: {},
                success: false
            });
        }

        return res.status(StatusCodes.OK).json({
            message: "successfully fetched the contact",
            error: {},
            data: response,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "something went wrong while fetching contact",
            data: {},
            error: error.message || error,
            success: false
        });
    }
};

const deleteContact = async (req, res) => {
    try {
        const response = await Contact.findByIdAndDelete(req.params.id);
        
        if (!response) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "contact not found",
                data: {},
                error: {},
                success: false
            });
        }

        return res.status(StatusCodes.OK).json({
            message: "successfully deleted the contact",
            error: {},
            data: response,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "something went wrong while deleting contact",
            data: {},
            error: error.message || error,
            success: false
        });
    }
};

const updateContact = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        
        const updateData = {};
        if (name) updateData.name = name;
        if (email) updateData.email = email;
        if (phone) updateData.phone = phone;
        if (message !== undefined) updateData.message = message;

        const response = await Contact.findByIdAndUpdate(
            req.params.id, 
            updateData, 
            { new: true, runValidators: true }
        );
        
        if (!response) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "contact not found",
                data: {},
                error: {},
                success: false
            });
        }

        return res.status(StatusCodes.OK).json({
            message: "successfully updated the contact",
            error: {},
            data: response,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "something went wrong while updating contact",
            data: {},
            error: error.message || error,
            success: false
        });
    }
};

module.exports = {
    createContact,
    getAllContacts,
    getContact,
    deleteContact,
    updateContact
};