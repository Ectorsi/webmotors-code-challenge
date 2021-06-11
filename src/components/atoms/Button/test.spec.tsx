import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.';

const handleClick = jest.fn();

describe('Button component', () => {
  it('should be able to render a Button as prop FullButton', () => {
    render(
      <Button fullButton onClick={handleClick}>
        Full-button
      </Button>,
    );

    fireEvent.click(screen.getByText(/Full-button/i));

    expect(handleClick).toHaveBeenCalled();
  });

  it('should be able to render a Button as prop Underlined', () => {
    render(
      <Button underlined onClick={handleClick}>
        Underlined-button
      </Button>,
    );

    fireEvent.click(screen.getByText(/Underlined-button/i));

    expect(handleClick).toHaveBeenCalled();
  });

  it('should be able to render a Button as prop SimpleButton', () => {
    render(
      <Button simpleButton onClick={handleClick}>
        simple-Button
      </Button>,
    );

    fireEvent.click(screen.getByText(/simple-Button/i));

    expect(handleClick).toHaveBeenCalled();
  });

  it('should be able to render a Button as prop RawButton', () => {
    render(
      <Button rawButton onClick={handleClick}>
        raw-Button
      </Button>,
    );

    fireEvent.click(screen.getByText(/raw-Button/i));

    expect(handleClick).toHaveBeenCalled();
  });
});
