import { set, ref, push, onValue } from "firebase/database";
import { database } from "../config/firebase";

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

// import { getDatabase, ref, onValue} from "firebase/database";

// const db = getDatabase();
// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

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
