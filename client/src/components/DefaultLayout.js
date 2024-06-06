import React from "react";
import { Menu, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import "./DefaultLayout.css"
import "../resources/default-layout.css";
function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("expense-tracker-user"));
  const navigate = useNavigate();
  const menu = (
    <Menu
      items={[
        {
          label: (
            <li
              className="btn btn-outline-primary"
              onClick={() => {
                localStorage.removeItem("expense-tracker-user");
                navigate("/login");
              }}
            >
              Logout
            </li>
          ),
        },
      ]}
    />
  );
  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
  <div className="logo-container">
    <img src={require('../components/logo1.png')} alt="Logo" className="logo-image" />
    <h3 className="logo-text">EXPENSE TRACKER</h3>
  </div>
  <div>
    <Dropdown overlay={menu} placement="bottomLeft">
      <button className="primary profile-button">
        <UserOutlined />
        <div className="profile-name">{user.name}</div>
      </button>
    </Dropdown>
  </div>
</div>

      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
