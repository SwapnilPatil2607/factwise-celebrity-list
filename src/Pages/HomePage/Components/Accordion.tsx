import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;

  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid black;
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

const ClosedViewContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: left;
  padding: 15px 0px;
  div {
    width: 100%;
  }
`;

const Description = styled.div`
  width: 100%;
`;

const ActionButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
`;

const Accordion = () => {
  return (
    <Container>
      <ClosedViewContainer>
        <UserTitle>
          <ProfilePictureContainer>
            <img src="" />
          </ProfilePictureContainer>
          <div>Name</div>
        </UserTitle>
        <button>+</button>
      </ClosedViewContainer>

      <div>
        <UserDetails>
          <div>
            <div>Age</div>
            <div>value</div>
          </div>
          <div>
            <div>Gender</div>
            <div>value</div>
          </div>
          <div>
            <div>Country</div>
            <div>value</div>
          </div>
        </UserDetails>

        <Description>
          <h5>Label</h5>
          <div>Value</div>
        </Description>
      </div>

      <ActionButtons>
        <button>Delete</button>
        <button>Edit</button>
      </ActionButtons>
    </Container>
  );
};

export default Accordion;
