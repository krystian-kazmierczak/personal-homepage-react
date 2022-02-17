import { all } from "redux-saga/effects";
import { themeSaga } from "../common/themeSaga";
import { homepageSaga } from "./../features/PersonalHomepage/homepageSaga";

export default function* saga() {
  yield all([homepageSaga(), themeSaga()]);
}
