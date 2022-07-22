import * as React from 'react';
import {Container, Card ,Button } from "react-bootstrap";

function Crd(props){
    let data=props.Data
    const handleclick=()=>{alert(data.body)}
    return (  
    <Card id={data.id} style={{ width: '18rem', margin: '2px' }} onClick={handleclick}>
    <Card.Body>
      <Card.Title>{data.title}</Card.Title>
      <Card.Text>{data.body}
                  </Card.Text>
          </Card.Body>
       </Card>
  )

}

function Index() {
  const [db ,setdb]=React.useState(['']);
  const person=async()=>{
    const resp= await fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'GET',
     
  })
  const data =await resp.json()
  setdb(data)
  console.log(data)
  }

  React.useEffect(()=>{person()},[]);

    return ( <div className="form-container">
    <Container className=" mt-5 p-4 frm-cand crd" >
        {db.map((x)=>{
         return  <Crd id={x.id} Data={x}/>
        })}
    </Container>
    </div>

    );
}

export default Index;