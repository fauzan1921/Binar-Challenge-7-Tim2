import { set, ref, push, onValue, child, update } from "firebase/database";
import { database } from "../config/firebase";

const db = database

//WRITE Leaderboard
export const insertLeaderboard = (username, id) => {
    const dbRef = ref(db, "leaderboard/" + id);
    const data = {
        win : 1,
        username: username
    };
    set(dbRef, data);
};

//READ LEADERBOARD BY ID
export const getLeaderboardById = (id) => {
    return new Promise((resolve, reject) => {
        const dbRef = ref(db, `leaderboard/${id}`);
        onValue(dbRef, (data) => {
            const value = data.val();
            resolve(value);
        });
    });
};

//UPDATE LEADERBOARD
export const updateLeaderboard = (username, updateWin, id) => {
    const data = {
        username : username,
        win : updateWin
    }


    const updates = {};
    updates['/leaderboard/'+ id ] = data;

    return update(ref(db), updates);
}

//READ ALL LEADERBOARD

export const getAllLeaderboard = () => {
    return new Promise((resolve, reject) => {
        const dbref = ref(db, 'leaderboard')
        onValue(dbref, (snapshot) => {
            const value = []
            Object.keys(snapshot.val()).map(key => {
                value.push({
                    id : key,
                    data : snapshot.val()[key]
                })
            })
            resolve(value)
        })
    })
}