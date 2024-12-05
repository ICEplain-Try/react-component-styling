// Start coding here

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// import ไอคอนจากไฟล์ภาพ
import errorIcon from './icons/error-icon.png';
import warningIcon from './icons/warning-icon.png';
import infoIcon from './icons/info-icon.png';
import successIcon from './icons/success-icon.png';

function Alert(props) {
  const alertStyles = css`
    display: flex;
    align-items: center;
    padding: 16px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0;
    background-color: ${props.type === 'error'
      ? '#fdecea'
      : props.type === 'warning'
      ? '#fff4e5'
      : props.type === 'info'
      ? '#f0f4ff'
      : '#e7f6e7'};
    color: ${props.type === 'error'
      ? '#d32f2f'
      : props.type === 'warning'
      ? '#ffa000'
      : props.type === 'info'
      ? '#1976d2'
      : '#388e3c'};
  `;

  const icon = {
    error: errorIcon,
    warning: warningIcon,
    info: infoIcon,
    success: successIcon,
  };

  return (
    <div css={alertStyles}>
      <img
        src={icon[props.type]}
        alt={`${props.type} icon`}
        style={{ width: '24px', height: '24px', marginRight: '12px' }}
      />
      {props.children}
    </div>
  );
}

export default Alert;