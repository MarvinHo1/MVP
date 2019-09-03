import React from 'react';
import style from '../style.css';

// eslint-disable-next-line arrow-body-style

const Picture = (props) => {
  return (
    <div className={style.ContainerForPics}>
      {props.pictures.map( photo => <img className={style.images} key={photo.id} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} ></img>)}
    </div>
  );
};

export default Picture;
