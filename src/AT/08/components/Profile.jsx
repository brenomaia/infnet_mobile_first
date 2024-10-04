import styled from "styled-components";

const Profile = styled.div`
  width: 100vw;

  @media (min-width: 640px) {
    display: flex;
    border-bottom: 1px solid black;
  }
`;

const ProfileInfo = styled.div`
  width: 100%;
  padding: 5px;
`;

const ProfilePic = styled.div`
  img {
    max-width: 100%;
    max-height: auto;
    display: block;
    margin: auto;
  }
`;

const ProfileActions = styled.div`
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  justify-content: space-evenly;
  padding-top: 5px;
  padding-bottom: 5px;

  img {
    width: 45px;
    height: 45px;
  }

  @media (min-width: 640px) {
    flex-wrap: wrap;
    flex-direction: column;
    border-left: 1px solid black;
    border-top: none;
    border-bottom: none;
    justify-content: space-evenly;
    align-items: center;
  }
`;


export {
    Profile,
    ProfileInfo,
    ProfilePic,
    ProfileActions
};