import React from 'react';
import {TextField} from "@material-ui/core";
import PropTypes from 'prop-types';
import FileInput from "../FileInput/FileInput";

const FormElement = (props) => {
    let inputComponent = <TextField
        fullWidth
        variant="outlined"
        type={props.type}
        name={props.propertyName}
        id={props.propertyName}
        value={props.value}
        onChange={props.onChange}
        helperText={props.error}
        label={props.title}
        error={!!props.error}
    />;

    if (props.type === 'file'){
        inputComponent = <FileInput
            label={props.title}
            name={props.propertyName}
            onChange={props.onChange}
        />
    }

    return inputComponent
};

FormElement.propTypes = {
    type: PropTypes.string.isRequired,
    propertyName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default FormElement;