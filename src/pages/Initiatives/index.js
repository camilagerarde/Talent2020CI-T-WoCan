import React, { useState, useEffect } from 'react';
import '../../assets/scss/Main.scss';
import firebase from '../../utils/firebase';
import Header from '../../components/Header';
import CardInic from '../../components/CardInic';

const Initiatives = () => {

    const [allInitiatives, setAllInitiatives] = useState([]);
    const allInitiativesArray = [];

    const firebaseRequisition = (collectionP, arrayP, setP) => {
        firebase
          .firestore()
          .collection(collectionP)
          .get()
          .then(async (result) => {
            await result
              .docs
              .forEach((doc) => arrayP
                .push({
                  id: doc.id,
                  ...doc.data(),
                }),
              )
            setP(arrayP);
          });
    }

    useEffect(() => {
        firebaseRequisition('initiatives', allInitiativesArray, setAllInitiatives);
    }, []);

      console.log(allInitiatives)

  return (
    <div>
      <Header/>

      <h1 className="titleInitiatives">Iniciativas</h1>
      <h4 className="titleInitiatives subTitleInit">Mantenha-se atualizado conosco!</h4>

      <section className="containerInitiatives">
        {
            allInitiatives.map(item =>
                <CardInic title={item.title} type={item.type} when={item.when} image={item.image} resume={item.resume} link={item.link}
            />)
        }
      </section>
    </div>
  )
}

export default Initiatives;