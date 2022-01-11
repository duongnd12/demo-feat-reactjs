/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { useState, useEffect } from "react";
import { Table, Spin, Space, Button } from "antd";
import { Link } from "react-router-dom";
import SearchName from "../Search/SearchName";
import { SelectOption } from "../SelectOption";

import VideoSource from "./../../video/video1.mp4";

export const Read = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState<any>();
  const [refreshData, setRefreshData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://61b1d4fec8d4640017aaef72.mockapi.io/api/v1/school"
        );
        setData(response.data);
        setRefreshData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        Promise.reject();
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (search === "") {
      setData(refreshData);
      return;
    }
    setData(
      [...refreshData].filter((item: any) => item?.name?.includes(search))
    );
  }, [search]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSelect = (value: any) => {
    if (value === "All data") {
      setData(refreshData);
      return;
    }
    setData(refreshData.filter((item: any) => item?.age === value));
  };

  const removeDuplicate = (array: any[]): number[] => {
    // const mapArr = array.map((item) => item.age )

    // const arrFilter = mapArr.filter((item, index) => {
    //   return mapArr.indexOf(item) === index;
    // })
    // console.log(arrFilter);

    // return arrFilter;

    return array
      .map((item) => item?.age)
      .reduce((acc: number[], curr: number) => {
        if (!acc.includes(curr)) {
          return [...acc, curr];
        }
        return acc;
      }, [] as number[]);

    // return [...new Set(...array.map((item) => item?.age))] as number[];
  };

  const dataSource = data?.map((item: any) => ({
    key: item.id,
    id: item.id,
    name: item.name,
    age: item.age,
    email: item.email,
    address: item.address,
  }));

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="small">
          <Link to={`/update/${record?.id}`}>
            <Button type="primary">Update</Button>
          </Link>
          <Link to={`delete/${record?.id}`}>
            <Button danger>Delete</Button>
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <a href={VideoSource}>ABC</a>
      <button
        onClick={() => {
          fetch("https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4")
            .then((resp) => resp.blob())
            .then((blob) => {
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.style.display = "none";
              a.href = url;
              // the filename you want
              a.download = `${Date.now()}.mp4`;
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(url);
            })
            .catch((er) => alert("oh no!"+er));
        }}
      >
        download
      </button>
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <Link to={"/create"}>
            <Button type="default">Create</Button>
          </Link>
          <SearchName onSearchChange={handleSearch} />
          <SelectOption
            onSelectChange={handleSelect}
            valueSelect={removeDuplicate(refreshData)}
          />
          <Table dataSource={dataSource} columns={columns} size="small" />
        </>
      )}
    </div>
  );
};
