import React from 'react';
import style from '../style.css';

// eslint-disable-next-line arrow-body-style

const Picture = (props) => {
  return (
    <div className={style.ContainerForPics}>
      {props.pictures.map( pictureID => <img className={style.images} key={pictureID.id} src={`https://farm${pictureID.farm}.staticflickr.com/${pictureID.server}/${pictureID.id}_${pictureID.secret}.jpg`} ></img>)}
    </div>
  );
};

export default Picture;
