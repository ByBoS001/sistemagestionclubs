import firebase from '../firebase.js';
import user_role from '../models/user_roleModel.js';
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

//create User_role
export const createUser_role = async (req, res, next) => {
    try {
      const data = req.body;
      await addDoc(collection(db, 'user_role'), data);
      res.status(200).send('user_role created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

//get all user_role fuction

export const getUsers_role = async (req, res, next) => {
    try {
      const user_role = await getDocs(collection(db, 'user_role'));
      const user_roleArray = [];
  
      if (user.empty) {
        res.status(400).send('No User_role found');
      } else {
        user_role.forEach((doc) => {
          const user_role = new user_role(
            doc.iduser_role,
            doc.data().name_role,
            doc.data().club_idclub,
            doc.data().user_iduser,
          );
          user_roleArray.push(user_role);
        });
  
        res.status(200).send(user_roleArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

//get user_role by id

export const getUser_role = async (req, res, next) => {
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
