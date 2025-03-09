"use client"
import { useRef } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {

  const imgInputRef = useRef()
  function handleClick() {
    imgInputRef.current.click();
  }
  return <div className={classes.picker}>
    <label htmlFor={name}>{label}</label>
    <div className={classes.controls}>
      <input
        className={classes.input}
        type="file"
        id={name}
        accept="image/png, image/jpeg"
        name={name}
        ref={imgInputRef}
      />
      <button
        className={classes.button}
        type="button"
        onClick={handleClick}
      >Pick an Image</button>
    </div>
  </div>
}
