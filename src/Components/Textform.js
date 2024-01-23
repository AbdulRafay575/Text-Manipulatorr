import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Textform(props) {
  const [text, setText] = useState('Enter Text Here');
  const [bk, setBk] = useState({
    color: 'dark',
    backgroundColor: 'white',
  });

  const handleConvertToUpperCase = () => {
    setText((prevText) => prevText.toUpperCase());
  };
  const handleConvertTolowerCase = () => {
    setText((haha) => haha.toLowerCase());
  };
  const removeSpaces = () => {
    setText((prevText) => prevText.replace(/\s/g, ''));
  };
  const cleartext = () => {
    setText('');
  };
  const Copytext = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('Text copied to clipboard:', text);
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
      });
  };

  const Downloadtext = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Text.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const darkmode = () => {
    if (bk.backgroundColor === 'white') {
      setBk({
        backgroundColor: 'black',
        border: 'black',
        color: 'white',
      });
    } else {
      setBk({
        backgroundColor: 'white',
        color: 'black',
      });
    }
  };

  return (
    <div>
      <form style={{ marginTop: '50px' }} className={`container mt-5 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <div className="form-group">
          <label className="pb-2" htmlFor="mybox">
            <h1>Enter Text Below</h1>
          </label>
          <div className="form-check form-switch">
            <input onClick={darkmode} className="form-check-input mt-2" type="checkbox" id="radio" />
            <h4>Enable dark mode</h4>
          </div>
          <textarea style={bk} className="form-control" id="mybox" rows="10" value={text} onChange={handleChange}></textarea>
          <button type="button" className="btn m-2 btn-primary" onClick={handleConvertToUpperCase} disabled={!text.trim()}>
            Convert To Upper Case
          </button>
          <button type="button" className="btn m-2 btn-primary" onClick={handleConvertTolowerCase} disabled={!text.trim()}>
            Convert To lower Case
          </button>
          <button type="button" className="btn m-2 btn-primary" onClick={removeSpaces} disabled={!text.trim()}>
            Remove Spaces
          </button>
          <button type="button" className="btn m-2 btn-primary" onClick={cleartext} disabled={!text.trim()}>
            Cleartext
          </button>
          <button type="button" className="btn m-2 btn-primary" onClick={Downloadtext} disabled={!text.trim()}>
            Downloadtext
          </button>
          <button type="button" className="btn m-2 btn-primary" onClick={Copytext} disabled={!text.trim()}>
            Copytext
          </button>
          <h4>
  Number of characters: {text.length} Number of Words: {text.trim().length > 0 ? text.trim().split(/\s+/).length : 0}
</h4>

        </div>
      </form>
    </div>
  );
}
