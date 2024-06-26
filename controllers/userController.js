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

//create user

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
      const users = await getDocs(collection(db, 'user'));
      const userArray = [];
  
      if (users.empty) {
        res.status(400).send('No Users found');
      } else {
        users.forEach((doc) => {
          const user = new User(
            doc.iduser,
            doc.data().name,
            doc.data().email,
            doc.data().cellphone,
            doc.data().club_idclub,
            doc.data().campus_idcampus,
            doc.data().user_role_iduser_role,
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
    const id = req.params.id;
    const user = doc(db, 'user', id);
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

//update user


export const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
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
    const id = req.params.id;
    await deleteDoc(doc(db, 'user', id));
    res.status(200).send('user deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
