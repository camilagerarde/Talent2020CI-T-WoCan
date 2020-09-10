import React, {useEffect, useState} from 'react';
import './style.scss'
import '../../assets/scss/Main.scss';
import CardDev from '../../components/CardDev/CardDev'
import firebase from '../../utils/firebase';

function DevOps() {
  const [ link, setLink ] = useState([]);
  useEffect (() =>{
    firebase.firestore().collection('devops').get().then((querySnapshot) => {
      let links = []
      querySnapshot.forEach((doc) =>{links.push(doc.data())});
      setLink(links)
    });
  },[])

  return (
    <main className='main-front'>
          <h1>DevOps</h1>
          {link.map(eachLink => <CardDev key={eachLink.title} 
          title={eachLink.title} href={eachLink.link}/>)}
      </main>
  );
}

export default DevOps;
