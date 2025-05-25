import { Input, Table } from 'antd';
import React, { Fragment, useRef, useState } from 'react'
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
const GenericTable = ({dataSource,
  tableWidth,
  columns,
  loading,

  disabledTable}) => {
     const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
    setSearchText("");
  };
     // Enhance columns with search and filter props
  const enhancedColumns = columns.map((column) => ({
    ...column,
    filteredValue: filteredInfo[column.dataIndex] || null,
    sortOrder: sortedInfo.columnKey === column.key && sortedInfo.order,
    ...getColumnSearchProps(column.dataIndex),
  }));
  return (
   <Fragment>
    <div className="scrollbar-ripe-malinka">
        <Table
          rowHoverable={true}
          loading={loading}
          style={{ height: 'auto', minWidth: tableWidth ,
            pointerEvents: disabledTable ? 'none' : 'auto',
            opacity: disabledTable ? 0.5 : 1,
            cursor: disabledTable ? 'not-allowed' : 'auto' // Add cursor style

          }}
          pagination={{ pageSize: 10 }}
          columns={enhancedColumns}
          dataSource={dataSource}
          onChange={handleChange}
          rowKey="id"
        
        />
      </div>
   </Fragment>
  )
}

export default GenericTable