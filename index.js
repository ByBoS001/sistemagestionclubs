import express from 'express';
import cors from 'cors';

import config from './config.js';

import userRoute from './routes/userRoute.js';
import universityRoute  from './routes/universityRoute.js';
import resourceRoute from './routes/resourceRoute.js';
import policyRoute from './routes/policyRoute.js';
import clubRoute from './routes/clubRoute.js';
import club_activityRoute from './routes/club_activityRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import careerRoute from './routes/careerRoute.js';
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

// Resource
app.use('/api', resourceRoute);
app.use('/api/newResource', resourceRoute);
app.use('/api/resource/:id', resourceRoute);
app.use('/api/updateResource/:id', resourceRoute);
app.use('/api/deleteResource/:id', resourceRoute);

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

// Career
app.use('/api', careerRoute);
app.use('/api/newCareer', careerRoute);
app.use('/api/career/:id', careerRoute);
app.use('/api/updateCareer/:id', careerRoute);
app.use('/api/deleteCareer/:id', careerRoute);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);

