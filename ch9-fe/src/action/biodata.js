import { set, ref, onValue, update } from "firebase/database";
import { database, storage } from "../config/firebase";
import {
    getStorage,
    ref as storageRef,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";

const db = database;

//WRITE BIODATA
export const insertBiodata = (email, password, name, user) => {
    const dbRef = ref(db, "biodata");
    const data = {
        email: email,
        password: password,
        name: name,
        user: user,
    };
    set(dbRef, data);
};
// export default insertBiodata;

//READ BIODATA BY ID
export const getBiodataById = (id) => {
    return new Promise((resolve, reject) => {
        const dbRef = ref(db, `biodata/${id}`);
        onValue(dbRef, (data) => {
            const value = data.val();
            resolve(value);
        });
    });
};

// UPDATE USER DATA BY ID
export const updateBiodataById = (id, username, fullname, url) => {
    const dbRef = ref(db, `biodata/${id}`);
    const updateData = {
        fullname,
        username,
        profileImg: url,
    };
    update(dbRef, updateData)
        .then(() => {
            return alert(`Data updated`);
        })
        .catch((error) => {
            return alert(`Data update failed`);
        });
};

// UPLOAD IMAGE FILE
export const uploadProfileImage = async (id, file) => {
    const imgRef = storageRef(storage, `biodata/${id}/${file.name}`);
    const snapshot = await uploadBytes(imgRef, file);
    const url = await getDownloadURL(imgRef);
    return url;
};
