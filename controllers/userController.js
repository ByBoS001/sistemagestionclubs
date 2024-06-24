import firebase from '../firebase.js';
import Product from '../models/userModel.js';
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
      res.status(200).send('product created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

//get all user fuction

export const getUser = async (req, res, next) => {
    try {
      const user = await getDocs(collection(db, 'user'));
      const userArray = [];
  
      if (user.empty) {
        res.status(400).send('No Users found');
      } else {
        user.forEach((doc) => {
          const user = new user(
            doc.idUser,
            doc.data().name,
            doc.data().email,
            doc.data().cellphone,
            doc.data().category_id_Cateory,
            doc.date().campus_idcampus
          );
          userArray.push(user);
        });
  
        res.status(200).send(userArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

