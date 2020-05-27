import styled from "styled-components";

export const Container = styled.div`
  background: #eee;
  width: 500px;
  display: flex;
  place-content: center;

  flex-direction: column;

  h3 {
    text-align: center;
  }
`;

export const Form = styled.form`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  border: 1px solid #b8b8b8;

  :focus {
    border: 1px solid #90a8de;
    outline: none;
  }

  
}
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  border: 1px solid #b8b8b8;
  outline: none;

  :focus {
    border: 1px solid #90a8de;
    outline: none;
  }
`;

export const Button = styled.button`
  height: 40px;
  outline: none;
  background: #999;
  border-radius: 5px;
  margin-top: 10px;
  border: 1px solid #888;

  :hover {
    background: #aba8a8;
  }
`;
