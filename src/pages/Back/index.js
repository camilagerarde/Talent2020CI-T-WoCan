import React, { useEffect, useState } from 'react';
import '../../assets/scss/Main.scss';
import Header from '../../components/Header';
import CardTitle from '../../components/CardTitle';
import CardLink from '../../components/CardLink/CardLink';
import firebase from '../../utils/firebase';
import './style.scss';

function BackEnd() {
  const [link, setLink] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection('back-end')
      .get()
      .then((querySnapshot) => {
        let links = [];
        querySnapshot.forEach((doc) => {
          links.push(doc.data());
        });
        setLink(links);
      });
  }, []);

  return (
    <>
      <Header />
      <main className='main-back'>
        <CardTitle title='Back-end' img='back' alt='Página Back-end' />
        {link.map((eachLink) => (
          <CardLink
            key={eachLink.title}
            src={eachLink.image}
            alt={eachLink.title}
            title={eachLink.title}
            href={eachLink.link}
          />
        ))}
      </main>
    </>
  );
}

export default BackEnd;
