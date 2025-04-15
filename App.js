let parent=React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "this is an h1 tag"),
      React.createElement("h2", {}, "this is an h2 tag"),
    ]),
  ],
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "this is an h1 tag"),
    React.createElement("h2", {}, "this is an h2 tag"),
  ])
);

let root= ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)

