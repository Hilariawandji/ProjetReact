import React, {useState, useContext } from 'react';
import { Link, useHistory} from 'react-router-dom';
import{ v4 as uuid} from 'uuid';
import { GlobalContext } from '../context/GlobalState';
import {
    Form, FormGroup, Label, Input, Button
} from 'reactstrap';

 const AddUser = () => {
     const[ name, setName] =useState('');
    const{ addUser}=useContext(GlobalContext);
    const history=useHistory();

    const onSubmit=(e)=>{
        e.preventDefault();
    const newUser={
        id:uuid(),
        name
    }
    addUser(newUser);
history.push('/');
}

const onChange=(e)=>{
    setName(e.target.value);
}

    return (
      <Form onSubmit={onSubmit}>
          <FormGroup>
              <Label> Name </Label>
              <Input type="text"  placeholder="Enter Name " value={name} onChange={onChange} name="name" required></Input>
          </FormGroup>
          <Button type="submit"> Submit </Button>
          <Link  exact to="/" className="btn btn-danger ml-2" > Cancel </Link>
      </Form>
    )
}

export default AddUser;