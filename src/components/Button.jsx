// Start coding here

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Button(props) {
  const buttonStyles = css`
    padding: 16px 32px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    color: white;
    background-color: ${props.variant === 'primary' ? '#064ee9' : '#08a4e8'};
  `;

  return <button css={buttonStyles}>{props.children}</button>;
}

export default Button;
