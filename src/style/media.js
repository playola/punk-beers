import { css } from 'styled-components';

export const DEVICE_SIZE = {
  desktop: 1024,
  tablet: 768,
  phone: 480,
};

/**
 * Iterate through the sizes and create a media template.
 * Reference: https://www.styled-components.com/docs/advanced#media-templates.
 */
export const media = Object.keys(DEVICE_SIZE).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${DEVICE_SIZE[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
