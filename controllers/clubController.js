import firebase from '../firebase.js';
import Club from '../models/clubModel.js';
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

//create club

export const createClub = async (req, res, next) => {
    try {
      const data = req.body;
      await addDoc(collection(db, 'club'), data);
      res.status(200).send('club created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
 
//get all club fuction

  export const getClubs = async (req, res, next) => {
    try {
      const clubs = await getDocs(collection(db, 'club'));
      const clubArray = [];
  
      if (clubs.empty) {
        res.status(400).send('No Clubs found');
      } else {
        clubs.forEach((doc) => {
          const club = new Club(
            doc.idclub,
            doc.data().name,
            doc.data().description,
            doc.data().category_id_category,
            doc.data().policy_idpolicy,
            doc.data().resource_idresource,
          );
          clubArray.push(club);
        });
  
        res.status(200).send(clubArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  //get club by id


export const getClub = async (req, res, next) => {
  try {
    const id = req.params.id;
    const club = doc(db, 'club', id);
    const data = await getDoc(club);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('club not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};  

//update club


export const updateClub = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const club = doc(db, 'club', id);
    await updateDoc(club, data);
    res.status(200).send('club updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//delete club

export const deleteClub = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'club', id));
    res.status(200).send('club deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

