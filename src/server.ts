import {serve} from "@hono/node-server";
import {Hono} from "hono";

const menu = [
    { id: "maguro", name: "まぐろ", price: 300 },
    { id: "salmon", name: "サーモン", price: 250 },
    { id: "tamago", name: "たまご", price: 150 },
];

const app = new Hono();

app.get("/menu", (c) => c.json({ shop: "すしラボ", items: menu }));


serve({ fetch: app.fetch, port: 3000 }, (info) => {
    console.log(`listening on http://localhost:${info.port}`);
});
