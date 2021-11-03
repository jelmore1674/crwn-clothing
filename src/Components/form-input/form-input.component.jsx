import React from 'react';
import {
	FormInputContainer,
	FormInputInput,
	FormInputLabel,
} from './form-imput.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<FormInputContainer>
		<FormInputInput onChange={handleChange} {...otherProps} />
		{label && (
			<FormInputLabel
				className='form-input-label'
				shrink={otherProps.value.length}>
				{label}
			</FormInputLabel>
		)}
	</FormInputContainer>
);

export default FormInput;
