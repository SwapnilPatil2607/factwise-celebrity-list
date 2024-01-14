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

const Accordion = ({ details }: { details: accordionDetails }) => {
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
                <div>Age</div>
                <div>value</div>
              </div>
              <div>
                <div>Gender</div>
                <div>{details.gender}</div>
              </div>
              <div>
                <div>Country</div>
                <div>{details.country}</div>
              </div>
            </UserDetails>

            <Description>
              <h5>Description</h5>
              <div>{details.description}</div>
            </Description>
          </div>

          <ActionButtons>
            <button>Delete</button>
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
