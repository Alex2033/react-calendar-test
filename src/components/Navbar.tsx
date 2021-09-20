import { Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { FC } from "react";
import { useHistory } from "react-router";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router/intex";

const Navbar: FC = () => {
  const router = useHistory();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  return (
    <Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div
              style={{
                color: "white",
              }}
            >
              {user.username}
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              selectable={false}
              defaultSelectedKeys={["2"]}
            >
              <Menu.Item onClick={() => logout()} key="1">
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            defaultSelectedKeys={["2"]}
          >
            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key="1">
              Логин
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Header>
  );
};

export default Navbar;
