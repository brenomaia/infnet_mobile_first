import styled from "styled-components";

const Profile = styled.div`
  width: 100vw;
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
    height: auto;
  }
`;


export {
    Profile,
    ProfileInfo,
    ProfilePic,
    ProfileActions
};