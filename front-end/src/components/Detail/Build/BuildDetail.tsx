import React from 'react'
import "./BuildStyle.scss";

interface Props {
    img: string,
}

export const ChooseImgBtn: React.FC<Props> = ({ img }) => {
  return (
    <li>
        <button>
            <img src={img} alt="" />
        </button>
    </li>
  )
}