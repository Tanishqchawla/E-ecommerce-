import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

export const getCartFromFirebase = async()=>{
     
    let cartRef =collection(db, "carts");

    const querySnapshot = await getDocs(cartRef);

    let data ={};

    querySnapshot.forEach((doc) => {
        let object = doc.data();

        let cartId = localStorage.getItem("cart_id");

        if (cartId === doc.id) {
            object.id = doc.id;

            data = {
                ... object
            };
        }
    });

    return data;
}


export const addCartToFirebase = async(data)=>{


    let cartId = localStorage.getItem("cart_id");

    if (cartId) {
        let cartRef = doc(db, "carts", cartId);

        await updateDoc(cartRef, data);
    } else {
        let cartRef = collection(db, "carts");

        const docRef = await addDoc(cartRef, data);

        localStorage.setItem("cart_id", docRef.id);
    }
}


export const updateCartToFirebase = async(data,id)=>{


    let cartRef =doc(db, "carts",id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(cartRef,data )
}

export const deleteCartToFirebase = async(id)=>{
    
    let cartRef =doc(db, "carts",id);
    await deleteDoc(cartRef);
}