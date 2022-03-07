import { takeEvery } from "redux-saga/effects";

import { put } from "redux-saga/effects";
import axios from "axios";
import { taskListSuccess, fetchTaskList } from "../home.slice";

export function* fetchTaskListSaga() {
  try {
    const response = yield axios.get("/task", {
      baseURL: "http://localhost:3000",
    });
    yield put(taskListSuccess(response.data));
  } catch (error) {
    console.log("error", error);
  }
}

export function* homeSagas() {
  yield takeEvery([fetchTaskList], fetchTaskListSaga);
}
