import React from 'react'
import './Widgets.css'
import InfoIcon from  '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>

      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>KinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Web development is funny for me!!", "Top news - 9099 readers")}
      {newsArticle("Tailwindcss?? What the...", "Trending - 886 readers")}
      {newsArticle("Next.js?? Awesome!!!!!!", "Trending - 886 readers")}
      {newsArticle("I wanna use TypeScript", "Journal - 100")}
      {newsArticle("Is Redux too good?", "Code - 123 readers")}
      {newsArticle("Kei started to studying REACT", "Journal - 987 readers")}
    </div>
  );
}

export default Widgets
