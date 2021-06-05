import React from 'react';
export default function CustomCard({ url, text, style }) {
  return (
    <div className=" myCard col-lg-3 col-md-5 col-sm-5 col-xs-10">
      <img className="cardImage" src={url} alt="card" />
      <div className="mt-1 p-4">
        <p className="">{text}</p>
      </div>
    </div>
  );
}
