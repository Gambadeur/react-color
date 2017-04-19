import React from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = (props) => 
            <SketchPicker className="pickerColor" 
            color={ this.props.background }
            name="color"
            onChangeComplete={ props.handleChangeComplete } />;

export default ColorPicker;