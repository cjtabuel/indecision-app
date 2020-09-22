import React from 'react'

const Option = (props) => (
  <div>
    <div className="option">
      <p className="option__text">{props.count}. {props.optionText}</p>
      <button
        className="button button--link"
        onClick={() => {
          props.handleDeleteOption(props.optionText)
          }}
      >
        remove
      </button>
    </div>
  </div>
)

export default Option