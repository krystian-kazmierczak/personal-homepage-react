import { call, select, takeEvery } from "@redux-saga/core/effects";
import { saveInLocalStorage } from "./localStorage";
import { selectIsDarkTheme } from "./themeSlice";

function* saveThemeHandler() {
    const isDarkTheme = yield select(selectIsDarkTheme);
    yield call(saveInLocalStorage, "isDarkTheme", isDarkTheme);
};

export function* themeSaga() {
    yield takeEvery ("*", saveThemeHandler);
};