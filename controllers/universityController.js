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

export const getUniversity = async (req, res, next) => {
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
    const id = req.params.iduser_role;
    const user_role = doc(db, 'user_role', id);
    const data = await getDoc(user_role);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('user_role not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//update User_role

export const updateUser_role = async (req, res, next) => {
try {
  const id = req.params.iduser_role;
  const data = req.body;
  const user_role = doc(db, 'user_role', id);
  await updateDoc(user_role, data);
  res.status(200).send('user_role updated successfully');
} catch (error) {
  res.status(400).send(error.message);
}
};

//delete user_role

export const deleteUser_role = async (req, res, next) => {
  try {
    const id = req.params.iduser_role;
    await deleteDoc(doc(db, 'user_role', id));
    res.status(200).send('user_role deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};