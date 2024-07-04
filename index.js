import express from 'express';
import cors from 'cors';

import config from './config.js';

import userRoute from './routes/userRoute.js';
import universityRoute  from './routes/universityRoute.js';
import resourceRoute from './routes/resourceRoute.js';
import user_roleRoute from './routes/user_roleRoute.js';
import careerRoute from './routes/careerRoute.js';
import campuRoute from './routes/campuRoute.js';
import authenticationRoute from './routes/authenticationRoute.js';
import authentication_methodRoute from './routes/authentication_methodRoute.js';
import attendance_registrationRoute from './routes/attendance_registrationRoute.js'; 
import policyRoute from './routes/policyRoute.js';
import clubRoute from './routes/clubRoute.js';
import club_activityRoute from './routes/club_activityRoute.js';
import categoryRoute from './routes/categoryRoute.js';

const app = express();

app.use(cors());
app.use(express.json());

//routes
//user
app.use('/api', userRoute);
app.use('/api/newUser', userRoute);
app.use('/api/user/:id', userRoute);
app.use('/api/updateUser/:id', userRoute);
app.use('/api/deleteUser/:id', userRoute);

// university
app.use('/api', universityRoute);
app.use('/api/newUniversity', universityRoute);
app.use('/api/university/:id', universityRoute);
app.use('/api/updateUniversity/:id', universityRoute);
app.use('/api/deleteUniversity/:id', universityRoute);

//user role
app.use('/api', user_roleRoute);
app.use('/api/newUserRole', user_roleRoute);
app.use('/api/userRole/:id', user_roleRoute);
app.use('/api/updateUserRole/:id', user_roleRoute);
app.use('/api/deleteUserRole/:id', user_roleRoute);

// Resource
app.use('/api', resourceRoute);
app.use('/api/newResource', resourceRoute);
app.use('/api/resource/:id', resourceRoute);
app.use('/api/updateResource/:id', resourceRoute);
app.use('/api/deleteResource/:id', resourceRoute);
 
// Career
app.use('/api', careerRoute);
app.use('/api/newCareer', careerRoute);
app.use('/api/career/:id', careerRoute);
app.use('/api/updateCareer/:id', careerRoute);
app.use('/api/deleteCareer/:id', careerRoute);

// Campu
app.use('/api', campuRoute);
app.use('/api/newCampu', campuRoute);
app.use('/api/campu/:id', campuRoute);
app.use('/api/updateCampu/:id', campuRoute);
app.use('/api/deleteCampu/:id', campuRoute);

// Authentication
app.use('/api', authenticationRoute);
app.use('/api/newAuthentication', authenticationRoute);
app.use('/api/authentication/:id', authenticationRoute);
app.use('/api/updateAuthentication/:id', authenticationRoute);
app.use('/api/deleteAuthentication/:id', authenticationRoute);

// Authentication method
app.use('/api', authentication_methodRoute);
app.use('/api/newAuthentication_method', authentication_methodRoute);
app.use('/api/authentication_method/:id', authentication_methodRoute);
app.use('/api/updateAuthentication_method/:id', authentication_methodRoute);
app.use('/api/deleteAuthentication_method/:id', authentication_methodRoute);

// Attendance regitration method
app.use('/api', attendance_registrationRoute);
app.use('/api/newAttendance_registration', attendance_registrationRoute);
app.use('/api/attendance_registration/:id', attendance_registrationRoute);
app.use('/api/updateAttendance_registration/:id', attendance_registrationRoute);
app.use('/api/deleteAttendance_registration/:id', attendance_registrationRoute);

// Policy
app.use('/api', policyRoute);
app.use('/api/newPolicy', policyRoute);
app.use('/api/policy/:id', policyRoute);
app.use('/api/updatePolicy/:id', policyRoute);
app.use('/api/deletePolicy/:id', policyRoute);

// Club 
app.use('/api', clubRoute);
app.use('/api/newClub', clubRoute);
app.use('/api/club/:id', clubRoute);
app.use('/api/updateClub/:id', clubRoute);
app.use('/api/deleteClub/:id', clubRoute);

// Club activity
app.use('/api', club_activityRoute);
app.use('/api/newClub_activity', club_activityRoute);
app.use('/api/club_activity/:id', club_activityRoute);
app.use('/api/updateClub_activity/:id', club_activityRoute);
app.use('/api/deleteClub_activity/:id', club_activityRoute);

// Category 
app.use('/api', categoryRoute);
app.use('/api/newCategory', categoryRoute);
app.use('/api/category/:id', categoryRoute);
app.use('/api/updateCategory/:id', categoryRoute);
app.use('/api/deleteCategory/:id', categoryRoute);
app.use('/api/new_sub_category', categoryRoute);

app.listen(config.port, () =>

  console.log(`Server is live @ ${config.hostUrl}`),
);

