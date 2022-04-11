import React from 'react';
import NewsItem from './NewsItem';

let DataNews = {
  news1: {
    img: "https://git.hits.tsu.ru/Subject-Web/Web-Frontend-Manual/-/raw/master/Current/2.%20Bootstrat%20and%20fetch/media/news/img-spacex-1.jpg"
  },
  news2: {
    img: "https://git.hits.tsu.ru/Subject-Web/Web-Frontend-Manual/-/raw/master/Current/2.%20Bootstrat%20and%20fetch/media/news/Crew-2.png"
  },
  news3: {
    img: "https://git.hits.tsu.ru/Subject-Web/Web-Frontend-Manual/-/raw/master/Current/2.%20Bootstrat%20and%20fetch/media/news/falcon9.jpg"
  },
  news4: {
    img: "https://git.hits.tsu.ru/Subject-Web/Web-Frontend-Manual/-/raw/master/Current/2.%20Bootstrat%20and%20fetch/media/news/SpaceX-Logo.png"
  }
}



class NewsList extends React.Component {
  render() {
    return (
      <div className="mt-3">
        {
          this.props.newsPage.news.map((value) => {
            return <NewsItem title={value.title} tags={value.tags}
              content={value.content}  id={value.id} 
              date={getFormattedDate(value.date)} likes={value.serviceInfo.likes} key={value.id} /> //img={DataNews.news1.img}
          })
        }
      </div>
    );
  }
}

export default NewsList;

function getFormattedDate(datetime) {
  var date = new Date(datetime);
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  return day + '.' + month + '.' + year;
}

