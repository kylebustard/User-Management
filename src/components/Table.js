import React from "react";
import PaginationDropDown from "./PaginationDropDown";
import PaginationFooter from "./PaginationFooter";
import PaginatedResults from "./PaginatedResults";

const pageOptions = [5, 10, 15, 20];

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsPerPage: 10,
      currentPage: 1,
    };
  }

  changeHandler = (event) =>
    this.setState({ resultsPerPage: event.target.value });

  changePage = (pageNum) => this.setState({ currentPage: pageNum });

  render() {
    const { tableHeaders, results, clickHandler } = this.props;

    const headerCells = tableHeaders.map((header, idx) => (
      <th key={idx}>{header}</th>
    ));

    return (
      <React.Fragment>
        <PaginationDropDown
          resultsPerPage={this.state.resultsPerPage}
          resultsType={"users"}
          pageOptions={pageOptions}
          changeHandler={this.changeHandler}
          numberOfResults={results.length}
        />
        <table>
          <thead>
            <tr>{headerCells}</tr>
          </thead>
          <PaginatedResults
            currentPage={this.state.currentPage}
            results={results}
            resultsPerPage={this.state.resultsPerPage}
            clickHandler={clickHandler}
          />
        </table>
        <PaginationFooter
          currentPage={this.state.currentPage}
          resultsPerPage={this.state.resultsPerPage}
          numberOfResults={results.length}
          changePage={this.changePage}
        />
      </React.Fragment>
    );
  }
}

export default Table;
