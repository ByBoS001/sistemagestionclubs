import firebase from '../firebase.js';
import Resource from '../models/resourceModel.js';
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

//create resource

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
      const resources = await getDocs(collection(db, 'resource'));
      const resourceArray = [];
  
      if (resources.empty) {
        res.status(400).send('No Resoources found');
      } else {
        resources.forEach((doc) => {
          const resource = new Resource(
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
    const id = req.params.id;
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

//update resource


export const updateResource = async (req, res, next) => {
  try {
    const id = req.params.id;
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
    const id = req.params.id;
    await deleteDoc(doc(db, 'resource', id));
    res.status(200).send('resource deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
