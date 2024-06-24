import firebase from '../firebase.js';
import university from '../models/universityModel.js';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const  db = getFirestore(firebase);

//create university

export const createUniversity = async (req, res, next) => {
    try {
      const data = req.body;
      await addDoc(collection(db, 'university'), data);
      res.status(200).send('university created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  
//get all university fuction

export const getUniversitys = async (req, res, next) => {
  try {
    const university = await getDocs(collection(db, 'university'));
    const universityArray = [];

    if (university.empty) {
      res.status(400).send('No User_role found');
    } else {
      university.forEach((doc) => {
        const university = new university(
          doc.iduniversity,
          doc.data().name,
          doc.data().description,
          doc.data().vision,
          doc.data().mision,
        );
        universityArray.push(university);
      });

      res.status(200).send(universityArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//get university by id

export const getUniversity = async (req, res, next) => {
  try {
    const id = req.params.iduniversity;
    const university = doc(db, 'university', id);
    const data = await getDoc(university);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('university not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//update University

export const updateUniversity = async (req, res, next) => {
try {
  const id = req.params.iduniversity;
  const data = req.body;
  const university = doc(db, 'university', id);
  await updateDoc(university, data);
  res.status(200).send('university updated successfully');
} catch (error) {
  res.status(400).send(error.message);
}
};

//delete university

export const deleteUniversity = async (req, res, next) => {
  try {
    const id = req.params.iduniversity;
    await deleteDoc(doc(db, 'university', id));
    res.status(200).send('university deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};