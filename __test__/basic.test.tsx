import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { Test } from "../src/components/test";
import React from "react";

test("basic test", () => {
  const { container } = render(<Test r={5} />);

  expect(container.innerHTML).toContain("test");
});
