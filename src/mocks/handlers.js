import { rest } from "msw";

const mockUsers = {
  1: {
    id: 1,
    name: "Jane Doe",
    email: "janedoe@example.com",
    profileId: 1,
  },
  2: {
    id: 2,
    name: "John Doe",
    email: "billy@whatever.com",
    profileId: 2,
  },
};

const mockProfiles = {
  1: {
    id: 1,
    language: "Spanish",
    country: "Ecuador",
  },
  2: {
    id: 2,
    language: "Italian",
    country: "Italy",
  },
};

function getLocalStorageItem(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

function delay() {
  return new Promise((resolve) => {
    const delay = getLocalStorageItem("NETWORK_DELAY") ?? 2000;
    const variance = getLocalStorageItem("NETWORK_VARIANCE") ?? 1500;

    const adjust = (Math.random() - 0.5) * variance;
    setTimeout(resolve, delay + adjust);
  });
}

export const handlers = [
  rest.get("/user", async (req, res, ctx) => {
    await delay();

    return res(ctx.status(200), ctx.json(mockUsers["1"]));
  }),
  rest.get("/user/:id", async (req, res, ctx) => {
    await delay();

    const { id } = req.params;

    return res(ctx.status(200), ctx.json(mockUsers[id]));
  }),
  rest.get("/profile", async (req, res, ctx) => {
    await delay();

    return res(ctx.status(200), ctx.json(mockProfiles["1"]));
  }),
  rest.get("/profile/:id", async (req, res, ctx) => {
    await delay();

    const { id } = req.params;

    return res(ctx.status(200), ctx.json(mockProfiles[id]));
  }),
];
