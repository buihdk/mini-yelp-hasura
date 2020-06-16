import styled from '@emotion/styled';

const ListItemWithLink = styled.li`
  display: block;
  > a {
    display: block;
    background-color: #fff;
    padding: 3rem 5rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-top-width: 0;
    &:hover {
      color: #fff;
      background-color: #bababa;
      border-color: #bababa;
      cursor: pointer;
    }
  }
  &:first-of-type {
    a {
      border-top-width: 1px;
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
    }
  }
  &:last-of-type {
    a {
      border-bottom-right-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
  }
`;

export default ListItemWithLink;
