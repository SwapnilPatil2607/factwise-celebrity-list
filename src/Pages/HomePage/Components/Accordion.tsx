import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  display: flex;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid black;
  justify-content: space-between;
`;

const UserTitle = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfilePictureContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  overflow: hidden;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const Accordion = () => {
  return (
    <Container>
      <UserTitle>
        <ProfilePictureContainer>image</ProfilePictureContainer>
        <div>Name</div>
      </UserTitle>
      <button>+</button>
    </Container>
  );
};

export default Accordion;
