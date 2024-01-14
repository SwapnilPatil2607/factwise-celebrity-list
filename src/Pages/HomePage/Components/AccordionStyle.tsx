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

export {
  UserTitle,
  Container,
  ActionButtons,
  Description,
  UserDetails,
  ClosedViewContainer,
  ProfilePictureContainer,
};
