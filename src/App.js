import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-grey.jpg',
          desc: 'Lorem ipsum sit amet, consaescter adipsioleos',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'Lorem ipsum sit amet, consaescter adipsioleos',
          category: 'tables',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpg',
          desc: 'Lorem ipsum sit amet, consaescter adipsioleos',
          category: 'sofa',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'wall-light.jpg',
          desc: 'Lorem ipsum sit amet, consaescter adipsioleos',
          category: 'light',
          price: '25.00'
        }
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Items items={this.state.items} />
        <Footer/>
      </div>
    );
  }
}

export default App;