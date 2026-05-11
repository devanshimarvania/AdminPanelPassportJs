const express = require('express');

const path = require('path');

const bcrypt = require('bcrypt');

const Admin = require('../models/adminModel');

const auth = require('../middleware/authMiddleware');

exports.signInPage = (req, res) => {
    res.render('login');
}

exports.signUpPage = (req, res) => {
    res.render('register');
}

exports.loginUser = async (req, res) => {

    try {

        console.log("Login Successfully");

        return res.redirect('/');

    } catch (err) {

        console.log(err);

        return res.redirect('/login');

    }

}

exports.registerUser = async (req, res) => {

    try {

        const hashPassword = await bcrypt.hash(req.body.pwd, 10);

        req.body.pwd = hashPassword;

        req.body.name = req.body.fname + ' ' + req.body.lname;

        await Admin.create(req.body);

        return res.redirect('/login');

    } catch (err) {

        console.log(err);

        return res.redirect('back');

    }

}

exports.logoutUser = (req, res) => {

    req.logout((err) => {

        if (err) {
            console.log(err);
            return false;
        }

        return res.redirect('/login');

    });

}

exports.dashboardPage = async (req, res) => {

    try {

        res.render('index');

    } catch (err) {

        console.log(err);

        return res.redirect('/login');

    }

}

exports.addAdminPage = (req, res) => {

    res.render('addAdmin');

}

exports.insertAdminData = async (req, res) => {

    try {

        console.log(req.body);

        console.log(req.file);

        const hashPassword = await bcrypt.hash(req.body.pwd, 10);

        req.body.pwd = hashPassword;

        req.body.name = req.body.fname + ' ' + req.body.lname;

        try {

            if (req.file) {

                req.body.avtar = Admin.imagePath + '/' + req.file.filename;

            }

        } catch {

            console.log("Error in Upload Avatar");

        }

        await Admin.create(req.body);

        console.log("Admin Add Successfully");

        return res.redirect('/');

    } catch (err) {

        console.log(err);

        return false;

    }

}

exports.viewAdminPage = async (req, res) => {

    const admins = await Admin.find();

    res.render('viewAdmin', { admins });

}

exports.editAdminPage = async (req, res) => {

    try {

        const admin = await Admin.findById(req.params.id);

        if (!admin) return res.redirect('/viewAdmin');

        res.render('editAdmin', { admin });

    } catch (err) {

        console.log(err);

        return res.redirect('/viewAdmin');

    }

}

exports.updateAdminData = async (req, res) => {

    try {

        const adminId = req.params.id;

        const existingAdmin = await Admin.findById(adminId);

        req.body.name = req.body.fname + ' ' + req.body.lname;

        if (req.body.pwd && req.body.pwd.trim() !== "") {

            const hashPassword = await bcrypt.hash(req.body.pwd, 10);

            req.body.pwd = hashPassword;

        } else {

            req.body.pwd = existingAdmin.pwd;

        }

        if (req.file) {

            req.body.avtar = Admin.imagePath + '/' + req.file.filename;

        } else {

            req.body.avtar = existingAdmin.avtar;

        }

        await Admin.findByIdAndUpdate(adminId, req.body);

        console.log("Admin Updated Successfully");

        return res.redirect('/viewAdmin');

    } catch (err) {

        console.log(err);

        return res.redirect('/viewAdmin');

    }

}

exports.deleteAdmin = async (req, res) => {

    await Admin.findByIdAndDelete(req.params.id);

    res.redirect('/viewAdmin');

}