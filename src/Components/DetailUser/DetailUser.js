import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, Redirect, Route } from "react-router-dom";
import { Button } from "@mui/material";
import usersOperations from "../../redux/users/usersOperations";
import style from "./detailUser.module.css";

const DetailUser = ({ ...props }) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  useEffect(() => {
    dispatch(usersOperations.detailUser(id));
  }, [dispatch, id]);
  const detailUser = useSelector((state) => state.users.detail_user);
  return (
    <>
      <ul className={style.detail__list}>
        <li className={style.detail__list_item}>
          <h2>
            <span className={style.detail__user_ligth}>Name:</span>{" "}
            {detailUser.first_name} {detailUser.last_name}
          </h2>
        </li>
        <li className={style.detail__list_item}>
          <p>
            <span className={style.detail__user_ligth}>Birthday:</span>{" "}
            {detailUser.birth_date}
          </p>
        </li>
        <li className={style.detail__list_item}>
          <p>
            <span className={style.detail__user_ligth}>Gender:</span>{" "}
            {detailUser.gender}
          </p>
        </li>
        <li className={style.detail__list_item}>
          <p>
            <span className={style.detail__user_ligth}>Job:</span>{" "}
            {detailUser.job}
          </p>
        </li>
        <li className={style.detail__list_item}>
          <p>
            <span className={style.detail__user_ligth}>Biography:</span>{" "}
            {detailUser.biography}
          </p>
        </li>
        <li className={style.detail__list_item}>
          <p>
            <span className={style.detail__user_ligth}>Active:</span>{" "}
            {detailUser.is_active ? "Yes" : "No"}
          </p>
        </li>
        <div className={style.btn__wrapper}>
          <div className={style.detail__button_del}>
            <NavLink to="/">
              <Button
                onClick={() => {
                  dispatch(usersOperations.deleteUser(detailUser.id));
                }}
                variant="outlined"
              >
                Delete
              </Button>
            </NavLink>
          </div>
          <div className={style.detail__button_edit}>
            <Link to={{ pathname: `/editUser/${detailUser.id}` }}>
              <Button variant="outlined">Edit</Button>
            </Link>
          </div>
        </div>
      </ul>
    </>
  );
};

export default DetailUser;
