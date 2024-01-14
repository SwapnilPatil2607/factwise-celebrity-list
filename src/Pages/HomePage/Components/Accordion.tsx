import * as React from "react";
import {
  UserTitle,
  Container,
  ActionButtons,
  Description,
  UserDetails,
  ClosedViewContainer,
  ProfilePictureContainer,
} from "./AccordionStyle";

interface accordionDetails {
  id: number;
  first: string;
  last: string;
  dob: string;
  gender: string;
  email: string;
  picture: string;
  country: string;
  description: string;
}

const Accordion = ({
  details,
  onDelete,
}: {
  details: accordionDetails;
  onDelete: () => void;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Container>
      <ClosedViewContainer>
        <UserTitle>
          <ProfilePictureContainer>
            <img src={details.picture} />
          </ProfilePictureContainer>
          <div>{details.first + " " + details.last}</div>
        </UserTitle>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? "-" : "+"}
        </button>
      </ClosedViewContainer>

      {isOpen ? (
        <>
          <div>
            <UserDetails>
              <div>
                <h5>Age</h5>
                <div>value</div>
              </div>
              <div>
                <h5>Gender</h5>
                <div>{details.gender}</div>
              </div>
              <div>
                <h5>Country</h5>
                <div>{details.country}</div>
              </div>
            </UserDetails>

            <Description>
              <h4>Description</h4>
              <div>{details.description}</div>
            </Description>
          </div>

          <ActionButtons>
            <button onClick={() => onDelete(details.id)}>Delete</button>
            <button>Edit</button>
          </ActionButtons>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Accordion;
