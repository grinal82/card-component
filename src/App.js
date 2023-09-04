import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Card from './components/Card';



function App() {
  /* имитация "прилета" данных с сервера */
  const cardInfo = {
    cardTitle: "Awsome picture", 
    cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    cardImageLink: "https://avatars.dzeninfra.ru/get-zen_doc/3475288/pub_6077e486b57e177a1cfb5a35_6077f80a63028501a534ffdf/scale_1200"
  }
  /* Проверяем есть ли ключ содержащий ссылку на картинку */
  let hasImage = 'cardImageLink' in cardInfo;

  return (
    <div className="container">
      <Card>
        {/* в зависимости от того есть ли ссылка направляем в компонент Card 'детей' с тегом img или без такового */}
        {hasImage?
          <><img src={cardInfo.cardImageLink} className="card-img-top" alt="funny kitten" /><h5 className="card-title">{cardInfo.cardTitle}</h5><p className="card-text">{cardInfo.cardText}</p><a href="#" className="btn btn-primary">Go somewhere</a></>:

          <><h5 className="card-title">{cardInfo.cardTitle}</h5><p className="card-text">{cardInfo.cardText}</p><a href="#" className="btn btn-primary">Go somewhere</a></>
        }

      </Card>
    </div>
  );
}

export default App;
