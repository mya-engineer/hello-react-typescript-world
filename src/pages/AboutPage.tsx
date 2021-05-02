import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde
        veniam dicta iusto accusantium quisquam dolorem quos, hic tempore
        maiores cumque voluptas nemo officiis facilis officia optio at ipsum
        necessitatibus.
      </p>
      <button className='btn' onClick={() => history.push('/')}>
        Back To ToDo List
      </button>
    </>
  )
}
