import React, { useState} from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white; ;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-top: 10px;
`;
const Link = styled.a`
  margin: 15px 0px;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  color: black;
  text-align: center;
`;

const  Register= ()=> {
  const [values,setValues]=useState({
    username:"",
    email:"",
    password:""
  })

  function submit(e){
    e.preventDefault()
    axios.post("http://localhost:5000/register",{
      username:values.username,
      email:values.email,
      password:values.password
    })
    .then(res=>{
      console.log(res.data);
    })
  }
  
  function handle(e){
    const newdata={...values}
    newdata[e.target.name]=e.target.value
    setValues(newdata)
    console.log(newdata);
  }

 

  
    return (
      <Container>
        <Wrapper>
          <Title> Registration</Title>
          <Form  onSubmit={(e)=>submit(e)}>
            <label>Full name</label>
            <Input
              placeholder="Enter name"
              type="text"
              name="username"

              onChange={(e) => handle((e))}
            />
            <label>Email</label>
            <Input
              placeholder="Enter email"
              type="email"
              name="email"
              onChange={(e) => handle((e))}
            />
            <label>Password</label>
            <Input
              placeholder="Enter password"
              type="password"
              name="password"
              onChange={(e) => handle((e))}
            />
            {/* <label>Confirm password</label>
          <Input placeholder=" enter password" /> */}

            <Button type="submit">SIGN UP</Button>

            <Link>Already have an account ? LOGIN</Link>
          </Form>
        </Wrapper>
      </Container>
    );
  
}

export default Register;
