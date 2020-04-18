import {
    ADD_NEW_PHOTO_ERROR,
    ADD_NEW_PHOTO_REQUEST,
    ADD_NEW_PHOTO_SUCCESS,
    DELETE_PHOTO_ERROR,
    DELETE_PHOTO_SUCCESS,
    GET_ALL_PHOTO_ERROR, GET_ALL_PHOTO_REQUEST, GET_ALL_PHOTO_SUCCESS,
    GET_GALLERY_USER_ERROR,
    GET_GALLERY_USER_REQUEST,
    GET_GALLERY_USER_SUCCESS
} from "../Action/actionType";

const initialState = {
    addError: null,
    addLoad: false,
    galleryUser : [],
    allGallery: [],
    getAllError: null,
    getAllLoad: false,
    getGalleryUserError: null,
    getGalleryUserLoad: false,
    deleteError: null,
};

const reducerPhotos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_PHOTO_SUCCESS:
            return {...state, addError: null, addLoad: false};
        case ADD_NEW_PHOTO_ERROR:
            return {...state, addError: action.error, addLoad: false};
        case ADD_NEW_PHOTO_REQUEST:
            return {...state, addLoad: true};
        case GET_GALLERY_USER_SUCCESS:
            return {...state, galleryUser: action.gallery, getGalleryUserError: null, getGalleryUserLoad: false};
        case GET_GALLERY_USER_REQUEST:
            return {...state, getGalleryUserLoad: true};
        case GET_GALLERY_USER_ERROR:
            return {...state, getGalleryUserError: action.error, getGalleryUserLoad: false};
        case DELETE_PHOTO_SUCCESS:
            return {...state, deleteError: null};
        case DELETE_PHOTO_ERROR:
            return {...state, deleteError: action.error};
        case GET_ALL_PHOTO_SUCCESS:
            return {...state, allGallery: action.gallery, getAllError: null, getAllLoad: false};
        case GET_ALL_PHOTO_ERROR:
            return {...state, getAllError: action.error, getAllLoad: false};
        case GET_ALL_PHOTO_REQUEST:
            return {...state, getAllLoad: true};
        default:
            return state
    }
};

export default reducerPhotos;