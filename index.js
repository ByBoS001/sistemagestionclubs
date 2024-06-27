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

// Campu
app.use('/api', authenticationRoute);
app.use('/api/newAuthentication', authenticationRoute);
app.use('/api/authentication/:id', authenticationRoute);
app.use('/api/updateAuthentication/:id', authenticationRoute);
app.use('/api/deleteAuthentication/:id', authenticationRoute);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);

