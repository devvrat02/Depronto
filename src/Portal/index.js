import { Container,Form,Button } from "react-bootstrap";
import * as React from "react";

// Name
// Date
// Feedback Title
// Message Box
// Checkbox - Category
// Radio Button – Gender
// Submit Botton 


function PortalForm() {
   
    const [Portal, setPortal] = React.useState({
        Name:"" ,
        DoB:"",
        feed:"",
        Msg:"",
        Category:"",
        Gender:"",
    }
    );   
    const [dat,setdate]=React.useState(true);
    const handleChange = (props) => (event) => {
        if (event.target.value !== null) {
            setPortal({
                ...Portal, [props]: event.target.value
            })
        }
    }
    const handleForm=(e)=>{console.log(Portal)}

    return (
        <div className="form-container">
        <Container className=" mt-5 p-4 frm-cand" >
            <div className="">
                <h2>Create Portal</h2>
                <Form >
           
              
             
              <Form.Group className="mb-3 mt-3" controlId="Name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" size="lg" placeholder="Enter name" required value={Portal.Name} onChange={handleChange('Name')}/>
              </Form.Group>

              <Form.Group className="mb-3 mt-3" >
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="Date"  size="lg"  placeholder="Enter Date" required value={Portal.DoB} onChange={handleChange('DoB')}/>
              </Form.Group>

              <Form.Group className="mb-3 mt-3" controlId="Feed">
                  <Form.Label>Feed</Form.Label>
                  <Form.Control type="text" size="lg" placeholder="Enter Feed" required value={Portal.feed} onChange={handleChange('feed')}/>
              </Form.Group>
           
              <Form.Group className="mb-3 mt-3" controlId="Message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control type="textarea" size="lg" placeholder="Enter Message" required value={Portal.Msg} onChange={handleChange('Msg')}/>
              </Form.Group>

              <Form.Group className="mb-3 mt-3" controlId="State">
                  <Form.Label>Category</Form.Label>
                 
                  <div key={`inline-checkbox`} className="mb-3"  onChange={handleChange('Category')}>
          <Form.Check
            inline
            label="1"
            name="not know"
            type="checkbox"
            value={"1"}
          />
          <Form.Check
            inline
            label="2"
            name="not know 2"
            type="checkbox"
            value={"2"}
          />
          
        </div>
              </Form.Group>
    
    
              <Form.Group className="" controlId="Pin">
                  <Form.Label>Gender</Form.Label>
                  <div className="mb-3"  onChange={handleChange('Gender')}>
          <Form.Check
            inline
            label="Male"
            name="gen"
            type="Radio"
            value={"male"}
           
          />
          <Form.Check
            inline
            label="Female"
            name="gen"
            type="Radio"
            value={"Female"}

/>
          
        </div>
              
              
              </Form.Group>
            <div className="cand-btn mb-4 ">  
            
              <Button className="btn-create" size="lg" onClick={handleForm} >
                        Submit
                  </Button>
                </div>
            
            </Form>
        </div>
    
    
        </Container>
     </div>
        
    
        );
}

export default PortalForm;