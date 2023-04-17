import React from 'react'
import {collection , addDoc, getDocs,} from 'firebase/firestore'
import { db } from '../firebase'
import { useState, useEffect } from 'react';

export const data = () => {
    const [pet, setPet] = useState([]);
    const [post, setPost] = useState([]);

    const fetchPost = async () => {
        await getDocs(collection(db, "mypet"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setPet(newData)
                console.log(pet, newData)
            })
    }

    useEffect(() =>{
        fetchPost();
    },[]);
    // console.log("daw",pet)
  return pet;
};

export const dataLost = () => {
    const [pet, setPet] = useState([]);
    const [post, setPost] = useState([]);

    const fetchPost = async () => {
        await getDocs(collection(db, "lostpet"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setPet(newData)
                console.log(pet, newData)
            })
    }

    useEffect(() =>{
        fetchPost();
    },[]);
    // console.log("daw",pet)
  return pet;
};
