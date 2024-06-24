import firebase from '../firebase.js';
import universty from '../models/universityModel.js';
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
      res.status(200).send('University created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
