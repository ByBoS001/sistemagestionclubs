import firebase from '../firebase.js';
import Campu from '../models/campuModel.js';
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

//create campus

export const createCampu = async (req, res, next) => {
  try {
    const data = req.body;
    const typeCampu = {
    name_campu:data.name_campu,
    fk_typeuniversity: doc(db, "campu", data.iduniversity)
    }
    await addDoc(collection(db, 'campu'), typeCampu);
    res.status(200).send('campu created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//get all Campu fuction

  export const getCampus = async (req, res, next) => {
    try {
      const campus = await getDocs(collection(db, 'campu'));
      const campuArray = [];
  
      if (campus.empty) {
        res.status(400).send('No Campus found');
      } else {
        campus.forEach((doc) => {
          const campu = new Campu(
            doc.idcampu,
            doc.data().name_campu,
            doc.data().iduniversity,
          );
          campuArray.push(campu);
        });
  
        res.status(200).send(campuArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  //get campu by id


export const getCampu = async (req, res, next) => {
  try {
    const id = req.params.id;
    const campu = doc(db, 'campu', id);
    const data = await getDoc(campu);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('campu not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};  

//update campu


export const updateCampu = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const campu = doc(db, 'campu', id);
    await updateDoc(campu, data);
    res.status(200).send('campu updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//delete campu

export const deleteCampu = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'campu', id));
    res.status(200).send('campu deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};