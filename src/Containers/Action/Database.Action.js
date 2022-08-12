import { useDispatch } from "react-redux"
import { Delete_Database, Get_Database, Post_Database } from "../Api/DataBase.api";

export const DatabaseData =  () => (dispatch) => {
    // console.log(data);
    try {
        Get_Database()
            .then((data) => {
                dispatch({ type: 'GET_SIGNUP_DATA', payload: data.data})
            })

            .catch(error => dispatch(error_medicines(error.message)));
    } catch (error) {
        dispatch(error_medicines(error.message))
        console.log(error);
    }
}

export const PostDatabaseData = (data) => (dispatch) => {
    try {
        Post_Database(data)
            .then((data) => {
                dispatch({ type: 'POST_SIGNUP_DATA', payload: data.data})
            })

            .catch(error => dispatch(error_medicines(error.message)));
    } catch (error) {
        dispatch(error_medicines(error.message))
        console.log(error);
    }
}

export const DeleteDatabaseData = (id) => (dispatch) => {
    try {
        Delete_Database(id)
                dispatch({ type: 'DELETE_SIGNUP_DATA', payload: id})

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