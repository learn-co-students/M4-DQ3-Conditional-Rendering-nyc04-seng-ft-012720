import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

    state = {
        selected: "profile"
    }

    changeSelected = (selected) => {
        this.setState({
            selected: selected 
        })
    }

  render() {

    let detailsToDisplay;

    switch (this.state.selected) {
        case "profile":
            detailsToDisplay = <Profile />
            break;
        case "photo":
            detailsToDisplay = <Photos />
            break;
        case "cocktail":
            detailsToDisplay = <Cocktails />
            break;
        case "pokemon":
            detailsToDisplay = <Pokemon />
            break;
        default:
            detailsToDisplay = null
            break;
    }

    return (
      <div>
        <MenuBar changeSelected={this.changeSelected} selected={this.state.selected} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
