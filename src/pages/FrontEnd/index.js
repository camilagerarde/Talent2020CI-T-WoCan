import React, { useEffect, useState } from 'react';
import './style.scss';
import '../../assets/scss/Main.scss';
import Header from '../../components/Header';
import CardTitle from '../../components/CardTitle';
import CardLink from '../../components/CardLink/CardLink';
import firebase from '../../utils/firebase';

function FrontEnd() {
  const [link, setLink] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection('front-end')
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
      <main className='main-front'>
        <CardTitle title='Front-end' img='front' alt='Página Front-end' />
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

export default FrontEnd;
