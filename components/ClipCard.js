'use strict'

const ClipCard = ({ id, name, startAt, endAt, onClick, selected }) => (
  <div
    onClick={() => onClick(id, startAt, endAt)}
    className={`container ${selected ? "container-hover" : '' }`}
  >
    <div className="thumbnail-view">
      <i className="material-icons icon">play_arrow</i>
    </div>
    <div className="info-view">
      <div className="name-view">
        <span className="title">{name}</span>
        <span className="duration-span">start: {startAt}</span>
        <span className="duration-span">end: {endAt}</span>
      </div>
      <div className="options-icon-view">
        <i className="material-icons">more_vert</i>
      </div>
    </div>
    <style jsx>
      {`
        .container {
          border-radius: 8px;
          box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
          height: 200px;
          width: 150px;
          display: grid;
          grid-template-rows: 130px 70px;
          overflow: hidden;
          cursor: pointer;
        }

        .container-hover {
          box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
          transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        }

        .thumbnail-view {
          background: black;
          display: grid;
          align-items: center;
          justify-content: center;
        }

        .info-view {
          padding: 5px;
          display: grid;
          grid-template-columns: 120px 20px;
        }

        .name-view {
          display: grid;
        }

        .options-icon-view {
          display: grid;
          justify-content: center;
          height: 30px;
        }

        .icon {
          color: white;
        }

        .container .title {
          font-weight: bold;
        }

        .container .duration-span {
          font-size: 12px;
          color: #7f8c8d;
        }
      `}
    </style>
  </div>
)

export default ClipCard
