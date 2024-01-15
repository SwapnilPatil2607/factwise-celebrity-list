import * as React from "react";
import { useForm } from "react-hook-form";
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
  onSave,
}: {
  details: accordionDetails;
  onDelete: () => void;
  onSave: () => void;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);

  const { register, watch } = useForm({
    defaultValues: {
      ...details,
    },
  });

  const currentDate = new Date();
  const dob = new Date(details.dob);
  const timeDifference = currentDate.getTime() - dob.getTime();
  const age = Math.floor(timeDifference / (1000 * 3600 * 24 * 365.25));

  return (
    <Container>
      <ClosedViewContainer>
        <UserTitle>
          <ProfilePictureContainer>
            <img src={details.picture} />
          </ProfilePictureContainer>
          <div>
            {isEdit ? (
              <input type="text" {...register("first")} />
            ) : (
              details.first + " " + details.last
            )}
          </div>
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
                <div>{age} Years</div>
              </div>
              <div>
                <h5>Gender</h5>

                {isEdit ? (
                  <select {...register("gender")}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                ) : (
                  <div>{details.gender}</div>
                )}
              </div>
              <div>
                <h5>Country</h5>

                {isEdit ? (
                  <input type="text" {...register("country")} />
                ) : (
                  <div>{details.country}</div>
                )}
              </div>
            </UserDetails>

            <Description>
              <h4>Description</h4>

              {isEdit ? (
                <textarea {...register("description")} />
              ) : (
                <div>{details.description}</div>
              )}
            </Description>
          </div>

          <ActionButtons>
            {!isEdit ? (
              <>
                <button onClick={() => onDelete(details.id)}>Delete</button>
                <button onClick={() => setIsEdit(true)}>Edit</button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    onSave(watch(), details.id);
                    setIsEdit(false);
                  }}
                >
                  save
                </button>
                <button onClick={() => setIsEdit(false)}>cancel</button>
              </>
            )}
          </ActionButtons>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Accordion;
