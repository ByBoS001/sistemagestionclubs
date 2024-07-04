import firebase from '../firebase.js';
import Authentication from '../models/authenticationModel.js';
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

//create authentication

export const createAuthentication = async (req, res, next) => {
  try {
    const data = req.body;
    const typeAuthentication = {
    fk_typeuthentication_method: doc(db, "authentication", data.idauthentication_method),
    fk_typeuser: doc(db, "authentication", data.iduser)
    }
    await addDoc(collection(db, 'authentication'), typeAuthentication);
    res.status(200).send('authentication created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
//get all authentication fuction

  export const getAuthentications = async (req, res, next) => {
    try {
      const authentications = await getDocs(collection(db, 'authentication'));
      const authenticationArray = [];
  
      if (authentications.empty) {
        res.status(400).send('No Authentications found');
      } else {
        authentications.forEach((doc) => {
          const authentication = new Authentication(
            doc.idauthentication,
            doc.data().idauthentication_method,
            doc.data().iduser,
          );
          authenticationArray.push(authentication);
        });
  
        res.status(200).send(authenticationArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  //get authentication by id


export const getAuthentication = async (req, res, next) => {
  try {
    const id = req.params.id;
    const authentication = doc(db, 'authentication', id);
    const data = await getDoc(authentication);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('authentication not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};  

//update authentication


export const updateAuthentication = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const authentication = doc(db, 'authentication', id);
    await updateDoc(authentication, data);
    res.status(200).send('authentication updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//delete authentication

export const deleteAuthentication = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'authentication', id));
    res.status(200).send('authentication deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};