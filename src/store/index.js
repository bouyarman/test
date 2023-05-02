import { configureStore, createSlice } from "@reduxjs/toolkit";

import classes from "../Component/NavBarre/nav.module.css";

const initialNavState = {
  menuClass: "",
  closeClass: classes.hideCloseBtn,
  showNav: false,
};

const navSlice = createSlice({
  name: "navigation",
  initialState: initialNavState,
  reducers: {
    showNav(state) {
      state.menuClass = classes.hideMenuBtn;
      state.closeClass = "";
      state.showNav = true;
    },
    hideNav(state) {
      state.menuClass = "";
      state.closeClass = classes.hideCloseBtn;
      state.showNav = false;
    },
  },
});

const store = configureStore({ reducer: navSlice.reducer });

export const navActions = navSlice.actions;

export default store;
