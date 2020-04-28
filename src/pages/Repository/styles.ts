import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
    &:hover {
      color: #666;
      text-decoration: underline;
    }
  }

  svg {
    margin-right: 4px;
  }
`

export const RepositoryInfo = styled.div`
  header {
    margin-top: 80px;
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d3d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    margin-top: 40px;

    li {
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d3d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c6c;
      }
    }
  }
`
export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      border-radius: 50%;
      width: 64px;
      height: 64px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      span {
        font-size: 20px;
        color: #3d3d3d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 5px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbcb;
    }
  }
`
export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    color: #3d3d3d;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;

      span {
        font-size: 20px;
        color: #3d3d3d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 5px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbcb;
    }
  }
`

export const Loading = styled.div`
  color: #3d3d3d;
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`
