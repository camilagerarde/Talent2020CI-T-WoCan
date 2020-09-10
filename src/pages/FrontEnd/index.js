import React, {useEffect, useState} from 'react';
import './style.scss'
import '../../assets/scss/Main.scss';
import CardLink from '../../components/CardLink/CardLink';
import firebase from '../../utils/firebase';

function FrontEnd () {
  const [ link, setLink ] = useState([]);
  useEffect (() =>{
    firebase.firestore().collection('front-end').get().then((querySnapshot) => {
      let links = []
      querySnapshot.forEach((doc) =>{links.push(doc.data())});
      setLink(links)
    });
  },[])
  return (
      <main className='main-front'>
          <h1>Front-end</h1>
          {link.map(eachLink => <CardLink key={eachLink.title} src={eachLink.image} alt={eachLink.title} 
          title={eachLink.title} href={eachLink.link}/>)}
      </main>
  );
}

export default FrontEnd;
