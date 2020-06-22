import React from "react";
import PaginationDropDown from "./PaginationDropDown";
import PaginationFooter from "./PaginationFooter";
import PaginatedResults from "./PaginatedResults";

const pageOptions = ["5", "10", "15", "20", "ALL"];

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsPerPage: 10,
      currentPage: 1,
    };
  }

  changeResultsPerPage = (event) => {
    this.setState({ resultsPerPage: event.target.value, currentPage: 1 });
  };

  changePage = (pageNum) => {
    this.setState({ currentPage: pageNum });
  };

  render() {
    const { tableHeaders, results, clickHandler } = this.props;

    const totalPages = Math.ceil(results.length / this.state.resultsPerPage);

    const end = this.state.currentPage * this.state.resultsPerPage;
    const startIdx = end - this.state.resultsPerPage;
    const endIdx = end <= results.length ? end : results.length;

    const headerCells = tableHeaders.map((header, idx) => (
      <th key={idx}>{header}</th>
    ));

    return (
      <React.Fragment>
        <PaginationDropDown
          resultsPerPage={this.state.resultsPerPage}
          resultsType={"users"}
          pageOptions={pageOptions}
          changeResultsPerPage={this.changeResultsPerPage}
          numberOfResults={results.length}
        />
        <table>
          <thead>
            <tr>{headerCells}</tr>
          </thead>
          <PaginatedResults
            results={results}
            clickHandler={clickHandler}
            startIdx={startIdx}
            endIdx={endIdx}
          />
        </table>
        {this.state.resultsPerPage !== "ALL" ? (
          <PaginationFooter
            currentPage={this.state.currentPage}
            totalPages={totalPages}
            changePage={this.changePage}
            startIdx={startIdx}
            endIdx={endIdx}
            numberOfResults={results.length}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Table;
