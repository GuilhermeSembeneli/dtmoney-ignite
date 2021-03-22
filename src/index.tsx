import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Script Fivem",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },

        {
          id: 2,
          title: "Celular",
          type: "withdraw",
          category: "Casa",
          amount: 200,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api"; //dizendo que toda nossa api irá ficar dentro da pasta api
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    }); //quando houver uma req tipo get irá pegar em transactions

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return this.schema.create("transaction", data); //banco de dados
    });
  },
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
