import React, { Component } from "react";
import styled from "styled-components";
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
  font-weight: 400;
  color: black;
  text-align: center;
`;



export class Login extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Title>Login in</Title>
          <Form>
            <label>Email</label>
            <Input placeholder="Enter email" />
            <label>Password</label>
            <Input placeholder="Enter  password" />
            forgot Password?
            <Button>LOGIN</Button>
            <Link>Don't have an account? Register</Link>
          </Form>
        </Wrapper>
      </Container>
    );
  }
}

export default Login;
