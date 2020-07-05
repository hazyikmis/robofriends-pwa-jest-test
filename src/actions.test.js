import * as actions from "./actions";

import fetchMock from "fetch-mock";

import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]); //if you export this store, it will be available to all your tests

it("should create an action to search robots", () => {
  const text = "woo";
  const expectedAction = {
    type: CHANGE_SEARCHFIELD,
    payload: text,
  };
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it("handles requesting robots API", () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  //console.log('action', action); //action [ { type: 'REQUEST_ROBOTS_PENDING' } ]

  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  };

  //expect(actions.requestRobots()).toEqual(expectedAction)  //no need to run again, it has already run above
  expect(action[0]).toEqual(expectedAction);
});

it("makes an API call and dispatches REQUEST_ROBOTS_SUCCESS action", (done) => {
  expect.assertions(1);
  const store = mockStore();

  fetchMock.mock("glob:https://jsonplaceholder.typicode.com/users", {
    data: { name: "Jim" },
  });

  const expectedAction = {
    type: REQUEST_ROBOTS_SUCCESS,
    payload: { data: { name: "Jim" } },
  };

  store.dispatch(actions.requestRobots()).then(() => {
    expect(store.getActions()[1]).toEqual(expectedAction);
    done();
  });
});

it("makes an API call, fails and dispatches REQUEST_ROBOTS_FAILED action", (done) => {
  expect.assertions(1);
  const store = mockStore();

  fetchMock.mock("glob:https://jsonplaceholder.typicode.com/users", {
    status: "400",
    throws: new TypeError("Failed to fetch"),
  });

  const expectedAction = {
    type: REQUEST_ROBOTS_FAILED,
    payload: new TypeError("Failed to fetch"),
  };

  store.dispatch(actions.requestRobots()).then(() => {
    expect(store.getActions()[1]).toEqual(expectedAction);
    done();
  });
});
