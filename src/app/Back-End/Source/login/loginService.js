const bcrypt = require('bcrypt');
const Recruiter = require('../Recruiter/recruiterModel');
const Seeker = require('../Seeker/seekerModel');
const Admin = require('../Admin/adminModel');

async function loginService(loginData) {
    const { email, password } = loginData;

    // Check recruiters database first
    let user = await Recruiter.findOne({ 'registrationDetails.signupDetails.email': email });
    if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.registrationDetails.signupDetails.password);
        if (isPasswordValid) {
            // Return additional details like username
            return { 
                id: user._id, 
                role: 'recruiter', 
                username: user.registrationDetails.signupDetails.userName, // Assuming the Recruiter model contains a username
                email: user.registrationDetails.signupDetails.email 
            };
        }
    }

    // If not found, check seekers database
    user = await Seeker.findOne({ 'registrationDetails.signupDetails.email': email });
    if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.registrationDetails.signupDetails.password);
        if (isPasswordValid) {
            return { 
                id: user._id, 
                role: 'seeker', 
                username: user.registrationDetails.signupDetails.userName, // Assuming the Seeker model contains a username
                email: user.registrationDetails.signupDetails.email 
            };
        }
    }

    // Check admin database
    user = await Admin.findOne({ 'email': email });
    if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            return { 
                id: user._id, 
                role: 'admin', 
                username: user.username, // Assuming the Admin model contains a username
                email: user.email 
            };
        }
    }

    // Log details for debugging purposes (avoid in production)
    console.error(`Login failed for email: ${email}`);
    
    throw new Error('Invalid credentials');
}

module.exports = {
    loginService
};
