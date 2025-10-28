import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ authcheck }) => {
  const navigate = useNavigate();
  // 폼 입력
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  // 유효성 에러 메시지
  const [errors, setErrors] = useState({});

  // 특정 필드만 검사하는 함수
  const validateField = (name, value) => {
    let message = "";

    if (name === "email") {
      if (!value) message = "이메일을 입력하세요.";
      else if (!/\S+@\S+\.\S+/.test(value))
        message = "올바른 이메일 형식이 아닙니다.";
    }

    if (name === "password") {
      if (!value) message = "비밀번호를 입력하세요.";
      else if (value.length < 6) message = "비밀번호는 6자 이상이어야 합니다.";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleBlur = (e) => {
    validateField(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.email === "" && errors.password === "") {
      navigate("/");
      authcheck(true);
    }
  };

  return (
    <>
      <h1 className="login-title">Login</h1>
      <Container>
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일</Form.Label>
            <Form.Control
              onChange={onChangeHandler}
              onBlur={handleBlur}
              type="email"
              placeholder="Enter email"
              value={form.email}
              name="email"
              className={errors.email && "error-border-email"}
            />
            {errors.email && <p className="error-msg">{errors.email}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              onChange={onChangeHandler}
              onBlur={handleBlur}
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              className={errors.password && "error-border-pw"}
            />
            {errors.password && <p className="error-msg">{errors.password}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" className="login-btn">
            로그인
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
