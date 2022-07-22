import React from 'react'
import {Container,Dropdown,Table} from 'react-bootstrap';

function Row(props)
{
    let data= props.Data;
return <tr key={data.Assets} className='lt'>
<td>{""}</td>
<td>{data.Assets}</td>
<td>{data.risk}</td>
<td>{data.Status}</td>
<td>
</td>


</tr>
}

export default function Index() {
      
      function createData(Assets, risk, Status) {
      
        return { Assets, risk, Status };
      }
      
      const rows = [
        createData('assets.securitybulls.com', 'Sql Injection', 'RESOLVED'),
        createData('admin.securitybulls.com', 'Stored XSS', 'Need Attention'),
        createData('app.securitybulls.com', 'Information Disclosure', 'RESOLVED'),
        createData('web.securitybulls.com', 'Option Method Allowed', 'RESOLVED'),
        createData('load.securitybulls.com', 'Data Discloser', 'Need Attention'),
        createData('db.securitybulls.com', 'Sql Injection', 'Need Attention'),
        createData('query.securitybulls.com', 'Sql Injection', 'Need Attention'),
        createData('support.securitybulls.com', 'Sql Injection', 'RESOLVED'),
      ];
      var asst = rows.filter((rows, index, self) =>
      index === self.findIndex((t) => (t.Assets === rows.Assets)))     
    var rsk =rows.filter((rows, index, self) =>
    index === self.findIndex((t) => (t.Status === rows.Status)))
      const [Assets, setAsset] = React.useState('');
  const [Status, setStatus] = React.useState('');

  const handleChangeasset = (event) => {
    setAsset(event.target.innerText)
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.innerText)
  };


  

  asst.push("")
  rsk.push("")
  const filterdt = (Assets == "") && (Status == "") ?
    rows : (Assets != "") && (Status == "") ? rows.filter(row => row.Assets == Assets) :
      (Assets == "") && (Status != "") ? rows.filter(row => row.Status == Status) :
        rows.filter(row => (row.Assets == Assets) && (row.Status == Status));


  return (
    <div className="form-container">
    <Container className=" mt-5 mb-5 frm-cand" >
    <div className='flex '>
    <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true " className='m-4'>
          Default 
        </Dropdown.Toggle>
        <Dropdown.Menu>
         {asst.map((x)=>{return <Dropdown.Item id={x.Assets} value={x.Assets} onClick={handleChangeasset}>{x.Assets}</Dropdown.Item>})} 
       
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true " className='m-4' defaultValue={""}>
          Default 
        </Dropdown.Toggle>
            <Dropdown.Menu>
              {rsk.map((x)=>{return <Dropdown.Item id={x.Status} value={x.Status} onClick={handleChangeStatus}>{x.Status}</Dropdown.Item>})}
            </Dropdown.Menu>
        
        </Dropdown>
        </div>
        <Container className='can-list'>
    
    <Table borderless hover  className='tb'>
    <thead className='tabhead'>
        <tr>
          <th></th>
          <th>Assests</th>
          <th>Vulnerability</th>
          <th style={{width:"30%"}}>Risk</th>
          <th></th>
        </tr>
        </thead>
            <tbody>
                 {filterdt.map((val)=> ( <Row key={val.id} Data={val}/> ))}
            </tbody>
        </Table>
    
    
        </Container>
    </Container>
    </div>
  )
}
