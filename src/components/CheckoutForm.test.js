import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    const fNameInput = screen.getByLabelText(/first name/i);
    const lNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const submitButton = screen.getByRole('button');

    userEvent.type(fNameInput, 'Ryan');
    userEvent.type(lNameInput, 'Walter');
    userEvent.type(addressInput, '123 Hoove St.');
    userEvent.type(cityInput, 'Whooville');
    userEvent.type(stateInput, 'Earth');
    userEvent.type(zipInput, '12345');

    expect(screen.queryByTestId('successMessage')).toBeFalsy();
    expect(screen.queryByTestId('successMessage')).not.toBeInTheDocument();

    userEvent.click(submitButton);

    expect(screen.queryByTestId('successMessage')).toBeTruthy();
    expect(screen.queryByTestId('successMessage')).toBeInTheDocument();
});
