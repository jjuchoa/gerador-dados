import React, { useState } from 'react'
import Header from '../Header/Header'
import { data } from '../../data'

const Home = () => {
  const [meals] = useState(data)
  return (
    <div>
      <Header title='' />
    </div>
  );
}

export default Home