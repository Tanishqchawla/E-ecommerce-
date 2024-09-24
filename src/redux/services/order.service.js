
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";

export const getOrderFromFirebase = async () => {

    let cartRef = collection(db, "orders");

    const querySnapshot = await getDocs(cartRef);

    let data = [];

    querySnapshot.forEach((doc) => {
        let object = doc.data();
        object.id = doc.id;

        data.push(object);
    });

    return data;
}

export const placeOrderToFirebase = async (data) => {

    let orderRef = collection(db, "orders");

    await addDoc(orderRef, data);

    localStorage.removeItem('cart_id');
}
