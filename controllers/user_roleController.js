import firebase from '../firebase.js';
import User_role from '../models/userModel.js';
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

export const createUserRole = async (req, res, next) => {
    try {
      const data = req.body;
      await addDoc(collection(db, 'user_role'), data);
      res.status(200).send('User role created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
};

//get all user_role fuction

export const getUserRoleS = async (req, res, next) => {
    try {
      const user_roles = await getDocs(collection(db, 'user_role'));
      const user_roleArray = [];
  
      if (user_roles.empty) {
        res.status(400).send('No User roles found');
      } else {
        users.forEach((doc) => {
          const user_role = new User_role(
            doc.iduser_role,
            doc.data().name_user_role,
          );
          userArray.push(user_role);
        });
  
        res.status(200).send(user_roleArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
};

 //get user_role by id


export const getUserRole = async (req, res, next) => {
    try {
      const iduser_role = req.params.iduser_role;
      const user_role = doc(db, 'user', iduser_role);
      const data = await getDoc(user_role);
      if (data.exists()) {
        res.status(200).send(data.data());
      } else {
        res.status(404).send('user role not found');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
};  



//update user

export const updateUserRole = async (req, res, next) => {
    try {
      const iduser_role = req.params.id;
      const data = req.body;
      const user_role = doc(db, 'user_role', id);
      await updateDoc(user_role, data); 
      res.status(200).send('user role updated successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
};

//delete user

export const deleteUserRole = async (req, res, next) => {
    try {
      const iduser_role = req.params.id;
      await deleteDoc(doc(db, 'user_role', iduser_role));
      res.status(200).send('user role deleted successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
};
  

  