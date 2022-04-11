import React from 'react';
/* import NewsList from './components/NewsList'; */
import Slider from './components/Slider';
import Attention from './components/TextInBlock';
import NewsContainer from './components/newsContainer';

class News extends React.Component {
  render() {
    return (
      <div className="mt-3">
        <Slider img1="https://hits.tsu.ru/sites/default/files/styles/main_slideshow_1140_300/public/start.png?itok=IULYkKfR"
          img2="https://hits.tsu.ru/sites/default/files/styles/main_slideshow_1140_300/public/ezh.png?itok=fmGF8T4v"
          img3="https://hits.tsu.ru/sites/default/files/styles/main_slideshow_1140_300/public/final.png?itok=kaDoekkt" />
        <h3>Новости</h3>
        <Attention text="Данный раздел является статическим, новости не подгружаются с сервера!" />
        <NewsContainer />

      </div>
    );
  }
}

export default News;