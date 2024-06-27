import firebase from '../firebase.js';
import Category from '../models/categoryModel.js';
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

//create category

export const createCategory = async (req, res, next) => {
    try {
      const data = req.body;
      await addDoc(collection(db, 'category'), data);
      res.status(200).send('category created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
 
//get all category fuction

  export const getCategorys = async (req, res, next) => {
    try {
      const categorys = await getDocs(collection(db, 'categorys'));
      const categoryArray = [];
  
      if (categorys.empty) {
        res.status(400).send('No Categorys found');
      } else {
        categorys.forEach((doc) => {
          const category = new  Category(
            doc.idcategory,
            doc.data().name,
            doc.data().description,
            doc.data().idcategory,
          );
          categoryArray.push(category);
        });
  
        res.status(200).send(categoryArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  //get category by id


export const getCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const category = doc(db, 'category', id);
    const data = await getDoc(category);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('category not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};  

//update category


export const updateCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const category = doc(db, 'category', id);
    await updateDoc(category, data);
    res.status(200).send('category updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//delete category

export const deleteCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'category', id));
    res.status(200).send('category deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
