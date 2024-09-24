import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

export const getProductFromFirebase = async()=>{
     
    let prodctRef =collection(db, "products");

    const querySnapshot = await getDocs(prodctRef);

    let data =[];

    querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    let object = doc.data();
    object.id=doc.id;

    data.push(object);
})
 return(data);
}


export const addProductToFirebase = async(data)=>{


    let prodctRef =collection(db, "products");

  const docRef = await addDoc(prodctRef, data);
  console.log("Document written with ID: ", docRef.id);
}


export const updateProductToFirebase = async(data,id)=>{


    let prodctRef =doc(db, "products",id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(prodctRef,data )
}

export const deleteProductToFirebase = async(id)=>{
    
    let prodctRef =doc(db, "products",id);
    await deleteDoc(prodctRef);
}