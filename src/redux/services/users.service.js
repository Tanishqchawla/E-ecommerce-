import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

export const getUserFromFirebase = async()=>{
     
    let userRef =collection(db, "users");

    const querySnapshot = await getDocs(userRef);

    let data =[];

    querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    let object = doc.data();
    object.id=doc.id;

    data.push(object);
})
 return(data);
}


export const addUserToFirebase = async(data)=>{


    let userRef =collection(db, "users");

  const docRef = await addDoc(userRef, data);
  console.log("Document written with ID: ", docRef.id);
}


export const updateUserToFirebase = async(data,id)=>{


    let userRef =doc(db, "users",id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef,data )
}

export const deleteUserToFirebase = async(id)=>{
    
    let userRef =doc(db, "users",id);
    await deleteDoc(userRef);
}