import {
    ADD_NEW_PHOTO_ERROR,
    ADD_NEW_PHOTO_REQUEST,
    ADD_NEW_PHOTO_SUCCESS,
    DELETE_PHOTO_ERROR,
    DELETE_PHOTO_SUCCESS, GET_ALL_PHOTO_ERROR, GET_ALL_PHOTO_REQUEST,
    GET_ALL_PHOTO_SUCCESS,
    GET_GALLERY_USER_ERROR,
    GET_GALLERY_USER_REQUEST,
    GET_GALLERY_USER_SUCCESS
} from "./actionType";
import axiosApi from "../../axiosApi";

import {toast} from "react-toastify";
import {push} from 'connected-react-router';

export const addNewPhotoSuccess = () => ({type: ADD_NEW_PHOTO_SUCCESS});
export const addNewPhotoRequest = () => ({type: ADD_NEW_PHOTO_REQUEST});
export const addNewPhotoError = (error) => ({type: ADD_NEW_PHOTO_ERROR, error});

export const getGalleryUserSuccess = gallery => ({type: GET_GALLERY_USER_SUCCESS, gallery});
export const getGalleryUserRequest = () => ({type: GET_GALLERY_USER_REQUEST});
export const getGalleryUserError = error => ({type: GET_GALLERY_USER_ERROR, error});

export const deletePhotoSuccess = () => ({type: DELETE_PHOTO_SUCCESS});
export const deletePhotoError = error => ({type: DELETE_PHOTO_ERROR, error});

export const getAllPhotoSuccess = gallery => ({type: GET_ALL_PHOTO_SUCCESS, gallery});
export const getAllPhotoRequest = () => ({type: GET_ALL_PHOTO_REQUEST});
export const getAllPhotoError = error => ({type: GET_ALL_PHOTO_ERROR, error});




export const addNewPhoto = (photoData) => {
    return async (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {'Authorization': 'Token ' + token}};
        try {
            dispatch(addNewPhotoRequest());
            const res = await axiosApi.post('/photos', photoData, config);
            dispatch(addNewPhotoSuccess());
            toast.success(res.data.message);
            dispatch(push('/my_gallery'))
        } catch (e) {
            dispatch(addNewPhotoRequest());
            if (e.response && e.response.data) {
                dispatch(addNewPhotoError(e.response.data))
            } else {
                dispatch(addNewPhotoError({global: 'No connection'}))
            }
        }
    }
};

export const getAllGallery = () => {
    return async (dispatch) =>{
        try{
            dispatch(getAllPhotoRequest());
            const res = await axiosApi.get('/photos');
            dispatch(getAllPhotoSuccess(res.data))
        }catch (e) {
            dispatch(getAllPhotoRequest());
            if (e.response && e.response.data) {
                dispatch(getAllPhotoError(e.response.data))
            } else {
                dispatch(getAllPhotoError({global: 'No connection'}))
            }
        }
    }
};


export const getGalleryUser = () => {
    return async (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {'Authorization': 'Token ' + token}};
        try{
            dispatch(getGalleryUserRequest());
            const res = await axiosApi.get('/photos/user_gallery', config);
            dispatch(getGalleryUserSuccess(res.data))
        }catch (e) {
            dispatch(getGalleryUserRequest());
            if (e.response && e.response.data) {
                dispatch(getGalleryUserError(e.response.data))
            } else {
                dispatch(getGalleryUserError({global: 'No connection'}))
            }
        }
    }
};

export const getGalleryById = id => {
    return async (dispatch) =>{
        try{
            dispatch(getGalleryUserRequest());
            const res = await axiosApi.get('/photos/' + id);
            dispatch(getGalleryUserSuccess(res.data))
        }catch (e) {
            dispatch(getGalleryUserRequest());
            if (e.response && e.response.data) {
                dispatch(getGalleryUserError(e.response.data))
            } else {
                dispatch(getGalleryUserError({global: 'No connection'}))
            }
        }
    }
};

export const deletePhoto = (id) =>{
    return async (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {'Authorization': 'Token ' + token}};
        try{
            const res = await axiosApi.delete('/photos/' + id, config);
            dispatch(deletePhotoSuccess());
            dispatch(getGalleryUser());
            toast.success(res.data.message);
        }catch (e) {
            if (e.response && e.response.data) {
                dispatch(deletePhotoError(e.response.data))
            } else {
                dispatch(deletePhotoError({global: 'No connection'}))
            }
        }
    }
};