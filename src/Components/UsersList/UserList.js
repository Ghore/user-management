import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import usersOperations from "../../redux/users/usersOperations";
import style from "./userList.module.css";

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersOperations.getAllUser());
  }, [dispatch]);

  const allUsers = useSelector((state) => state.users.users);
  return (
    <>
      <div className={style.user__button_add}>
        <Link to="/createUser">
          <Button variant="contained">Create user</Button>
        </Link>
      </div>
      <div className={style.user__wrapper}>
        {allUsers.map((user) => (
          <ul key={user.id} className={style.user__list}>
            <Link to={{ pathname: `/detail/${user.id}` }}>
              <li className={style.user__list_item}>
                <h2 className={style.user__name}>
                  <span className={style.user__info_ligth}>Name: </span>
                  {user.first_name} {user.last_name}
                </h2>
              </li>
              <li className={style.user__list_item}>
                <p className={style.user__gender}>
                  <span className={style.user__info_ligth}>Gender: </span>
                  {user.gender}
                </p>
              </li>
              <li className={style.user__list_item}>
                <p className={style.user__birthdate}>
                  <span className={style.user__info_ligth}>Birthday: </span>
                  {user.birth_date}
                </p>
              </li>
            </Link>
            <div className={style.user__button_del}>
              <Button
                onClick={() => {
                  dispatch(usersOperations.deleteUser(user.id));
                }}
                variant="outlined"
              >
                Delete
              </Button>
            </div>
          </ul>
        ))}
      </div>
    </>
  );
};

export default UserList;
