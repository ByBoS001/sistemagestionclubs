import firebase from '../firebase.js';
import Policy from '../models/policyModel.js';
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

//create policy

export const createPolicy = async (req, res, next) => {
    try {
      const data = req.body;
      await addDoc(collection(db, 'policy'), data);
      res.status(200).send('policy created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
 
//get all policy fuction

  export const getPolicys = async (req, res, next) => {
    try {
      const policys = await getDocs(collection(db, 'policy'));
      const policyArray = [];
  
      if (policys.empty) {
        res.status(400).send('No Policys found');
      } else {
        policys.forEach((doc) => {
          const policy = new Policy(
            doc.idpolicy,
            doc.data().description,
            doc.data().mandatory,
          );
          policyArray.push(policy);
        });
  
        res.status(200).send(policyArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  //get policy by id


export const getPolicy = async (req, res, next) => {
  try {
    const id = req.params.id;
    const policy = doc(db, 'policy', id);
    const data = await getDoc(policy);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('policy not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};  

//update policy


export const updatePolicy = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const policy = doc(db, 'policy', id);
    await updateDoc(policy, data);
    res.status(200).send('policy updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//delete policy

export const deletePolicy = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'policy', id));
    res.status(200).send('policy deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
