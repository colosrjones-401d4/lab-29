import React from "react";
import App from "../app";
import Form from "../form";
import Modal from "../Modal/modal";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
global.shallow = shallow;

describe("dummy test", () => {
  it("should return true", () => {
    expect(true).toBeTruthy();
  });
});

describe("Proof of life for App component", () => {
  it("should render a section tag with content inside", () => {
    const app = global.shallow(<App />);

    expect(app.find("section").exists()).toBeTruthy();
  });
});

describe("Proof of life for Modal component", () => {
  it("should render a section tag with content inside", () => {
    const modal = global.shallow(<Modal />);

    expect(modal.find(".modalContainer").exists()).toBeTruthy();
  });
});

describe("Proof of life for Form component", () => {
  it("should render a form with content inside", () => {
    const form = global.shallow(<Form />);

    expect(form.find("form").exists()).toBeTruthy();
  });
});
