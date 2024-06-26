import express from 'express';
import cors from 'cors';

import config from './config.js';

import userRoute from './routes/userRoute.js';
import universityRoute  from './routes/universityRoute.js';
import resourceRoute from './routes/resourceRoute.js';
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
 
app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);

