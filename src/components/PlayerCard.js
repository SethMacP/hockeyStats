import React from 'react'


import { Table } from 'reactstrap';

export const PlayerCard = (props) => {
    
console.log(props)

    
    
    return(
    <>

<Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Position</th>
          <th>Jersey #</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>

        


      </tbody>
    </Table>

   



      
    </>

    
    )
}

export default PlayerCard;


{/* <Card color='warning'>
<CardBody>
  <CardTitle tag="h5">{props.player.person.fullName}</CardTitle>
  <CardSubtitle tag="h6" className="mb-2 text-muted">{props.player.position.name}</CardSubtitle>
  
 
</CardBody>
</Card> */}