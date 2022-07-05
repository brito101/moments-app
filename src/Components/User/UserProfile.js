import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import Head from '../Helper/Head';

export default function UserProfile () {
  const { user } = useParams();

  return (
    <section className="container mainSection">
      <Head title={user} description="Página de fedd do usuário no site Moments"/>
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};
