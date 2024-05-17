import * as React from 'react';

interface IDataTableProps {
    updateReloadState: () => void
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
  return (
    <h1>data table</h1>
  );
};

export default DataTable;
