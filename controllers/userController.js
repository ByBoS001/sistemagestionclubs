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
    const typeUser = {
    name:data.name,
    email:data.email,
    cellphone:data.cellphone,
    fk_typeuser_rol: doc(db, "user_role", data.iduser_role),
    fk_typeclub: doc(db, "user_role", data.idclub),
    fk_typecampus: doc(db, "user_role", data.idcampus)
    }
    await addDoc(collection(db, 'user'), typeUser);
    res.status(200).send('user created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//get all user fuction

  export const getUsers = async (req, res, next) => {
    try {
      const users = await getDocs(collection(db, 'users'));
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
            doc.data().idclub,
            doc.data().idcampus,
            doc.data().iduser_role,
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
    const iduser_role = req.params.id;
    await deleteDoc(doc(db, 'user_role', iduser_role));
    res.status(200).send('user role deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
