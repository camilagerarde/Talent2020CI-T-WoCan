import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebase';
import Header from '../../components/Header';
import CardInic from '../../components/CardInic';
import CardTitle from '../../components/CardTitle';
import '../../assets/scss/Main.scss';

const Initiatives = () => {
  const [allInitiatives, setAllInitiatives] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('initiatives')
      .get()
      .then(async (result) => {
        const allInitiativesArray = [];
        await result.docs.forEach((doc) =>
          allInitiativesArray.push({
            id: doc.id,
            ...doc.data(),
          })
        );
        setAllInitiatives(allInitiativesArray);
      });
  }, []);

  return (
    <div>
      <Header />
      <CardTitle title='Iniciativas' img='devops' alt='Pagina de Iniciativas' />
      <h4 className='titleInitiatives subTitleInit'>
        Mantenha-se atualizado conosco!
      </h4>
      <section className='containerInitiatives'>
        {allInitiatives.map((item) => (
          <CardInic
            title={item.title}
            type={item.type}
            when={item.when}
            image={item.image}
            resume={item.resume}
            link={item.link}
            key={item.id}
          />
        ))}
      </section>
    </div>
  );
};

export default Initiatives;
