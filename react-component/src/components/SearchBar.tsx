import React, { Component } from 'react';

type SearchBarState = {
  value: string;
};

export default class SearchBar extends Component<object, SearchBarState> {
  constructor(props: object) {
    super(props);
    this.state = { value: '' };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  getFromLocalStorage(): void {
    const value = localStorage.getItem('search');
    if (value) {
      this.setState({ value });
    }
  }

  saveToLocalStorage(): void {
    localStorage.setItem('search', this.state.value);
  }

  onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    this.setState({ value });
  }

  componentDidMount(): void {
    this.getFromLocalStorage();
  }

  componentWillUnmount(): void {
    this.saveToLocalStorage();
  }

  render() {
    return <input value={this.state.value} onChange={this.onChangeHandler}></input>;
  }
}
