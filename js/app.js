var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
  }
];

var News = React.createClass({
	render: function() {
		var data = this.props.data;
		var newsTemplate;
		var newsAmount;

		if (data.length > 0) {
			newsTemplate = data.map(function(item, index) {
				return (
					<div key={index}>
					<p className="news__author">{item.author}:</p>
					<p className="news__text">{item.text}</p>
					</div>
					)
				});
			newsAmount = React.createClass({
				render: function() {
					<strong className="news__amount">Всего новостей: {data.length}</strong>
				}
			});
		} else {
			newsTemplate = <p>К сожалению новостей нет</p>
		}

		return (
			<div className="news">
				{newsTemplate}
				{data.length > 0 ? {newsAmount} : null}
			</div>
		);
	}
});


var Comments = React.createClass({
  render: function() {
    return (
      <div className="comments">
        Нет новостей - комментировать нечего
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        Всем привет, я компонент App! Я умею отображать новости.
        <News data={my_news} />
        <Comments />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
