import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

export const getCategoryFromFirebase = async()=>{
     
    let categoryRef =collection(db, "Categorys");

    const querySnapshot = await getDocs(categoryRef);

    let data =[];

    querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    let object = doc.data();
    object.id=doc.id;

    data.push(object);
})
 return(data);
}


export const addCategoryToFirebase = async(data)=>{


    let categoryRef =collection(db, "Categorys");

  const docRef = await addDoc(categoryRef, data);
  console.log("Document written with ID: ", docRef.id);
}


export const updateCategoryToFirebase = async(data,id)=>{


    let categoryRef =doc(db, "Categorys",id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(categoryRef,data )
}

export const deleteCategoryToFirebase = async(id)=>{
    
    let categoryRef =doc(db, "Categorys",id);
    await deleteDoc(categoryRef);
}