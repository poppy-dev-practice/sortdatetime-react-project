import React from 'react'

const Articles = ({articles}) => {
  return (

    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>upvotes</th>
            <th>Date</th>
          </tr>
          </thead>
          {articles.length && articles.map((key,values)=>{
            return(
              <tbody key = {values}>
                <tr>
                  <td>{key.title}</td>
                  <td>{key.upvotes}</td>
                  <td>{key.date}</td>
                </tr>
              </tbody>
            )
          })}
       
      </table>

    </div>
  )
}

export default Articles