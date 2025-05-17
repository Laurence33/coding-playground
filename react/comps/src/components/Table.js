import { Fragment } from 'react';

function Table({ data, config, keyFn }) {

  const renderedHeaders = config.map(conf => {
    if (conf.header) {
      return <Fragment key={conf.label}>{conf.header()}</Fragment>;
    }
    return <th key={conf.label}>{conf.label}</th>;
  });

  const renderedRows = data.map((item) => {

    const renderedCells = config.map((itemConfig) => (
      <td key={itemConfig.label} className="p-3">{itemConfig.render(item)}</td>));

    return <tr key={keyFn(item)} className="border-b">
      {renderedCells}
    </tr>
  })


  return <table className="table-auto border-spacing-2">
    <thead>
      <tr className="border-b-2">
        {renderedHeaders}
      </tr>
    </thead>
    <tbody>
      {renderedRows}
    </tbody>
  </table>
}

export default Table;