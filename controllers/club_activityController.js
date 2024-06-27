import firebase from '../firebase.js';
import Club_activity from '../models/club_activityModel.js';
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

//create club_activity

export const createClub_activity = async (req, res, next) => {
    try {
      const data = req.body;
      await addDoc(collection(db, 'club_activity'), data);
      res.status(200).send('club activity created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
 
//get all club_activity fuction

  export const getClub_activitys = async (req, res, next) => {
    try {
      const club_activitys = await getDocs(collection(db, 'club_activity'));
      const club_activityArray = [];
  
      if (club_activitys.empty) {
        res.status(400).send('No Club activitys found');
      } else {
        club_activitys.forEach((doc) => {
          const club_activity = new Club_activity(
            doc.idclub_activity,
            doc.data().name,
            doc.data().description,
            doc.data().start_date,
            doc.data().end_date,
            doc.data().club_idclub,
          );
          club_activityArray.push(club_activity);
        });
  
        res.status(200).send(club_activityArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  //get club activity by id


export const getClub_activity = async (req, res, next) => {
  try {
    const id = req.params.id;
    const club_activity = doc(db, 'club_activity', id);
    const data = await getDoc(club_activity);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('club activity not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};  

//update club activity


export const updateClub_activity = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const club_activity = doc(db, 'club_activity', id);
    await updateDoc(club_activity, data);
    res.status(200).send('club  activity updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//delete club activity

export const deleteClub_activity = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'club activity', id));
    res.status(200).send('club activity  deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
