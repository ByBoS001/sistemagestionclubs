import firebase from '../firebase.js';
import Attendance_registration from '../models/attendance_registrationModel.js';
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

//create attendance registration

export const createAttendance_registration = async (req, res, next) => {
  try {
    const data = req.body;
    const typeAttendance_registration = {
    attendance:data.attendance,
    fk_typeuser: doc(db, "Attendance registration", data.iduser),
    fk_typeclub_activity: doc(db, "Attendance registration", data.idclub_activity)
    }
    await addDoc(collection(db, 'Attendance registration'), typeAttendance_registration);
    res.status(200).send('Attendance registration created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
 
//get all attendance registration fuction

  export const getAttendance_registrations = async (req, res, next) => {
    try {
      const attendance_registrations = await getDocs(collection(db, 'attendance registration'));
      const attendance_registrationArray = [];
  
      if (attendance_registrations.empty) {
        res.status(400).send('No Attendance registrations found');
      } else {
        attendance_registrations.forEach((doc) => {
          const attendance_registration = new Attendance_registration(
            doc.idattendance_registration,
            doc.data().attendance,
            doc.data().iduser,
            doc.data().idclub_activity,
          );
          attendance_registrationArray.push(attendance_registration);
        });
  
        res.status(200).send(attendance_registrationArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  //get attendance registration by id


export const getAttendance_registration = async (req, res, next) => {
  try {
    const id = req.params.id;
    const attendance_registration = doc(db, 'attendance registration', id);
    const data = await getDoc(attendance_registration);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('attendance registration not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};  

//update attendance registration


export const updateAttendance_registration = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const attendance_registration = doc(db, 'attendance registration', id);
    await updateDoc(attendance_registration, data);
    res.status(200).send('attendance registration updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//delete attendance registration

export const deleteAttendance_registration = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'attendance registration', id));
    res.status(200).send('attendance registration deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
