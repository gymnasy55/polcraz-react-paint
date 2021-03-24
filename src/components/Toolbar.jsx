import React from 'react';
import '../styles/toolbar.scss';
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import canvasState from "../store/canvasState";
import Rectangle from "../tools/Rectangle";
import Eraser from "../tools/Eraser";

const Toolbar = () => {

  const changeColor = e => {
    toolState.setStrokeColor(e.target.value)
    toolState.setFillColor(e.target.value)
  }

  return (
    <div className="toolbar">
      <button className="toolbar__btn brush" onClick={() => toolState.setTool(new Brush(canvasState.canvas))}/>
      <button className="toolbar__btn rectangle" onClick={() => toolState.setTool(new Rectangle(canvasState.canvas))}/>
      <button className="toolbar__btn circle"/>
      <button className="toolbar__btn eraser" onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}/>
      <button className="toolbar__btn line"/>
      <input onChange={e => changeColor(e)} style={{marginLeft:10}} type="color"/>
      <button className="toolbar__btn undo" onClick={() => canvasState.undo()}/>
      <button className="toolbar__btn redo" onClick={() => canvasState.redo()}/>
      <button className="toolbar__btn save"/>
    </div>
  );
};

export default Toolbar;