import React, { Component } from "react";

const MainContent = ({ event }) => {
  const eventNames = event.map((items) => {
    return (
      <div className="event_card" key={items.id}>
        <div className="card_img">
          <img src={items.img_url} height="200px" />
        </div>

        <div className="card_detail">
          <div className="event_title_cnt_name">{items.event_title}-{items.country_name}</div>
          <div className="event_date_div">{items.date}</div>
          <div className="event_meet_time">Zoom Meet | 02:00 PM</div>
          <button className="btn">Register Now</button>
        </div>
      </div>
    );
  });
  return <div className="main_content">{eventNames}</div>;
};

export default MainContent;
