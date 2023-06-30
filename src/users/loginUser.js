import { loginButton } from "../createPage/createHeader";
import { loginEmail } from "../createPage/createHeader";
import { loginName } from "../createPage/createHeader";
import { getDatabase, onValue, ref } from "firebase/database";

export const loginUser = () => {
    const db = getDatabase();
    const starCountRef = ref(db, 'users/' + name);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data.userПавел);
    });
}