import firebase from '../firebase.js';
import resource from '../models/resourceModel.js';
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

//create Resource
export const createResource = async (req, res, next) => {
    try {
      const data = req.body;
      await addDoc(collection(db, 'resource'), data);
      res.status(200).send('resource created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

//get all resource fuction

export const getResources = async (req, res, next) => {
    try {
      const resource = await getDocs(collection(db, 'resource'));
      const resourceArray = [];
  
      if (resource.empty) {
        res.status(400).send('No Resource found');
      } else {
        resource.forEach((doc) => {
          const resource = new resource(
            doc.idresource,
            doc.data().name,
            doc.data().description,
            doc.data().amount,
          );
          resourceArray.push(resource);
        });
  
        res.status(200).send(resourceArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

//get resource by id

export const getResource = async (req, res, next) => {
    try {
      const id = req.params.idresource;
      const resource = doc(db, 'resource', id);
      const data = await getDoc(resource);
      if (data.exists()) {
        res.status(200).send(data.data());
      } else {
        res.status(404).send('resource not found');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

//update Resource

  export const updateResource = async (req, res, next) => {
  try {
    const id = req.params.idresource;
    const data = req.body;
    const resource = doc(db, 'resource', id);
    await updateDoc(resource, data);
    res.status(200).send('resource updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//delete resource

export const deleteResource = async (req, res, next) => {
    try {
      const id = req.params.idresource;
      await deleteDoc(doc(db, 'resource', id));
      res.status(200).send('resource deleted successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
