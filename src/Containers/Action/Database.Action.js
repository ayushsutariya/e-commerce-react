import { useDispatch } from "react-redux"
import { Delete_Database, Edit_Database, Get_Database, Post_Database } from "../Api/DataBase.api";

import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../Firebase/Firebase";

export const DatabaseData = () => (dispatch) => {
    // console.log(data);
    try {
        Get_Database()
            .then((data) => {
                dispatch({ type: 'GET_SIGNUP_DATA', payload: data.data })
            })

            .catch(error => dispatch(error_medicines(error.message)));
    } catch (error) {
        dispatch(error_medicines(error.message))
        console.log(error);
    }
}

export const PostDatabaseData = (data) => async(dispatch) => {
    try {
        Post_Database(data)
            .then((data) => {
                dispatch({ type: 'POST_SIGNUP_DATA', payload: data.data })
            })

            .catch(error => dispatch(error_medicines(error.message)));
    } catch (error) {
        dispatch(error_medicines(error.message))
        console.log(error);
    }


try {
  const docRef = await addDoc(collection(db, "userdata"), data);
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}

export const DeleteDatabaseData = (id) => (dispatch) => {
    try {
        Delete_Database(id)
            .then(
                dispatch({ type: 'DELETE_SIGNUP_DATA', payload: id })
            )
            .catch(error => dispatch(error_medicines(error.message)));
    } catch (error) {
        dispatch(error_medicines(error.message))
        console.log(error);
    }
}

export const EditDatabaseData = (data) => (dispatch) => {
    try {
        Edit_Database(data)
        dispatch({ type: 'EDIT_SIGNUP_DATA', payload: data.data })

            .catch(error => dispatch(error_medicines(error.message)));
    } catch (error) {
        dispatch(error_medicines(error.message))
        console.log(error);
    }
}

export const error_medicines = (errors) => (dispatch) => {
    dispatch({ type: 'ERROR_MEDICINE', payload: errors })
}

export const loading_medicines = () => (dispatch) => {
    dispatch({ type: 'LOADING_MEDICINE' })
}