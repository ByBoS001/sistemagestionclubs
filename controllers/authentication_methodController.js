import firebase from '../firebase.js';
import Authentication_method from '../models/authentication_methodModel.js';
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

//create authentication method

export const createAuthentication_method = async (req, res, next) => {
    try {
      const data = req.body;
      await addDoc(collection(db, 'authentication method'), data);
      res.status(200).send('authentication method created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
 
//get all authentication method fuction

  export const getAuthentication_methods = async (req, res, next) => {
    try {
      const authentication_methods = await getDocs(collection(db, 'authentication method'));
      const authentication_methodArray = [];
  
      if (authentication_methods.empty) {
        res.status(400).send('No Authentication methods found');
      } else {
        authentication_methods.forEach((doc) => {
          const authentication_method = new Authentication_method(
            doc.idauthentication_method,
            doc.data().guy,
          );
          authentication_methodArray.push(authentication_method);
        });
  
        res.status(200).send(authentication_methodArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  //get authentication method by id


export const getAuthentication_method = async (req, res, next) => {
  try {
    const id = req.params.id;
    const authentication_method = doc(db, 'authentication method', id);
    const data = await getDoc(authentication_method);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('authentication method not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};  

//update authentication method


export const updateAuthentication_method = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const authentication_method = doc(db, 'authentication method', id);
    await updateDoc(authentication_method, data);
    res.status(200).send('authentication method updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//delete authentication method

export const deleteAuthentication_method = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'authentication method', id));
    res.status(200).send('authentication method deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
