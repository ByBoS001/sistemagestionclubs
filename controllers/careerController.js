import firebase from '../firebase.js';
import Career from '../models/careerModel.js';
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

//create career

export const createCareer = async (req, res, next) => {
    try {
      const data = req.body;
      await addDoc(collection(db, 'career'), data);
      res.status(200).send('career created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
 
//get all career fuction

  export const getCareers = async (req, res, next) => {
    try {
      const careers = await getDocs(collection(db, 'career'));
      const careerArray = [];
  
      if (careers.empty) {
        res.status(400).send('No Careers found');
      } else {
        careers.forEach((doc) => {
          const career = new Career(
            doc.idcareer,
            doc.data().name,
            doc.data().description,
          );
          careerArray.push(career);
        });
  
        res.status(200).send(careerArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  //get career by id


export const getCareer = async (req, res, next) => {
  try {
    const id = req.params.id;
    const career = doc(db, 'career', id);
    const data = await getDoc(career);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('resource not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};  

//update career


export const updateCareer = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const career = doc(db, 'career', id);
    await updateDoc(career, data);
    res.status(200).send('career  updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//delete career

export const deleteCareer = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'career', id));
    res.status(200).send('Career deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
