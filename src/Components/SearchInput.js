import React from "react";
import './SearchInput.css';

class SearchInput extends React.Component {
  render() {
    const { getInput } = this.props;

    return (
      <input
        id='search-bar'
        type="search"
        name="search"
        placeholder="찾으시는 작품명을 검색하세요"
        autoComplete="off"
        onChange={this.props.getInput}
        required
      />
    );
  }
}

export default SearchInput;