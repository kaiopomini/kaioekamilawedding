import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 20px;
  min-height: 52px;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;

  border-bottom: 1px solid rgba(0, 0, 0, 0.7);

  ul {
    display: flex;
    box-sizing: border-box;
    flex-wrap: nowrap;
    gap: 8px;
    li {
      display: flex;

      a {
        text-decoration: none;
        color: #eee;

        &:hover {
          color: #ccc;
        }
      }
    }
  }
`;

export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 10px;

  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;

  padding: 16px 0 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.7);
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li {
      list-style: none;

      font-size: 14px;

      & + li {
        margin: 10px 0 0;
      }

      a {
        text-decoration: none;
        color: #eee;

        &:hover {
          color: #ccc;
        }
      }
    }
  }

  @media (min-width: 600px) {
    padding-bottom: 38px;

    ul {
      flex-direction: row;

      li + li {
        margin: 0 0 0 30px;
      }
    }
  }
`;
