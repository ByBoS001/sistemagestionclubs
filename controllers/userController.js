import firebase from '../firebase.js';
import User from '../models/userModel.js';
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

const db = getFirestore(firebase);

//create User
export const createUser = async (req, res, next) => {
    try {
      const data = req.body;
      await addDoc(collection(db, 'user'), data);
      res.status(200).send('user created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

//get all user fuction

export const getUsers = async (req, res, next) => {
    try {
      const user = await getDocs(collection(db, 'user'));
      const userArray = [];
  
      if (user.empty) {
        res.status(400).send('No User found');
      } else {
        user.forEach((doc) => {
          const user = new user(
            doc.iduser,
            doc.data().name,
            doc.data().email,
            doc.data().cellphone,
            doc.data().category_id_category,
            doc.date().campus_idcampus,
          );
          userArray.push(user);
        });
  
        res.status(200).send(userArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

//get user by id

export const getUser = async (req, res, next) => {
    try {
      const id = req.params.iduser;
      const product = doc(db, 'user', id);
      const data = await getDoc(user);
      if (data.exists()) {
        res.status(200).send(data.data());
      } else {
        res.status(404).send('user not found');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

//update User

  export const updateUser = async (req, res, next) => {
  try {
    const id = req.params.idUser;
    const data = req.body;
    const user = doc(db, 'user', id);
    await updateDoc(user, data);
    res.status(200).send('user updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//delete user

export const deleteUser = async (req, res, next) => {
    try {
      const id = req.params.iduser;
      await deleteDoc(doc(db, 'user', id));
      res.status(200).send('user deleted successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
