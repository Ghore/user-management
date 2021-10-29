import { createSlice } from "@reduxjs/toolkit";

const state = {
  users: [],
  detail_user: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState: state,
  reducers: {
    getAllUser: (state, { payload }) => ({
      ...state,
      users: payload,
    }),
    detailUser: (state, { payload }) => ({
      ...state,
      detail_user: payload,
    }),
    deleteUser: (state, { payload }) => ({
      ...state,
      users: state.users.filter((user) => user.id !== payload),
      detail_user: [],
    }),
  },
});
