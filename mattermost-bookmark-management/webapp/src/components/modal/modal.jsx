import React from 'react';
import Styled from './modal.styled.jsx'
import { Client4 } from 'mattermost-redux/client';

const Modal = (props) => {
  const { open, close, header, Refresh, postId } = props;

  const deleteMyPost = (postid) => {
    try {
      Client4.deletePost(postid);
    } catch (err) {
      console.log(err)
    }
  };

  const deleteTest = () => {
    deleteMyPost(postId)
    Refresh()
  }

  return (
    <>
      {open ?
        <Styled.OpenModal>
          <Styled.Section>
            <Styled.Header>
              {header}
              <Styled.HeaderButton onClick={close}>
                &times;
              </Styled.HeaderButton>
            </Styled.Header>
            <Styled.Main>
              {props.children}
            </Styled.Main>
            <Styled.Footer>
              <Styled.FooterButton onClick={close}>
                Cancle
              </Styled.FooterButton>
              <Styled.DeleteButton onClick={deleteTest}>
                Delete
              </Styled.DeleteButton>
            </Styled.Footer>
          </Styled.Section>
        </Styled.OpenModal>
        :
        <Styled.Modal>
          {null}
        </Styled.Modal>
      }
    </>
  );
};

export default Modal