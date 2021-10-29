import axios from "axios";
import { userSlice } from "./usersReducer";

const getAllUser = () => async (dispatch) => {
  try {
    const responsiveGet = await axios.get(
      "https://frontend-candidate.dev.sdh.com.ua/v1/contact/"
    );
    dispatch(userSlice.actions.getAllUser(responsiveGet.data));
  } catch (error) {
    console.log(error);
  }
};

const detailUser = (id) => async (dispatch) => {
  try {
    const responsiveDetail = await axios.get(
      `https://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}`
    );
    dispatch(userSlice.actions.detailUser(responsiveDetail.data));
  } catch (error) {
    console.log(error);
  }
};

const addUser =
  ({ first_name, last_name, birth_date, gender, job, biography, is_active }) =>
  async (dispatch) => {
    const data = {
      first_name,
      last_name,
      birth_date,
      gender,
      job,
      biography,
      is_active,
    };
    try {
      await axios.post(
        "https://frontend-candidate.dev.sdh.com.ua/v1/contact/",
        data
      );
    } catch (error) {
      console.log(error);
    }
  };

const deleteUser = (id) => async (dispatch) => {
  try {
    const responsiveDelete = await axios.delete(
      `https://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}`
    );
    dispatch(userSlice.actions.deleteUser(id));
    if (responsiveDelete.status === 204) {
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUser =
  ({
    first_name,
    last_name,
    birth_date,
    gender,
    job,
    biography,
    is_active,
    id,
  }) =>
  async (dispatch) => {
    const data = {
      first_name,
      last_name,
      birth_date,
      gender,
      job,
      biography,
      is_active,
      id,
    };
    try {
      await axios.put(
        `https://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}`,
        data
      );
    } catch (error) {
      console.log(error);
    }
  };

export default { getAllUser, detailUser, addUser, deleteUser, updateUser };
