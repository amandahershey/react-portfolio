import React from 'react';

const PortfolioIdPage = (props) => {
  console.log(props);
  return(
    <div>
      <h1>Portfolio Item Page</h1>
      <p>This is the Portfolio: {props.match.params.id}</p>
    </div>
  );
};
export default PortfolioIdPage;