import { all } from "redux-saga/effects";
import { homepageSaga } from "./../features/PersonalHomepage/homepageSaga";

export default function* saga() {
  yield all([homepageSaga()]);
}
