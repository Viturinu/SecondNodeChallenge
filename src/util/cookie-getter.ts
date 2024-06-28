import request from "supertest"
import { server } from "../app";

export async function getCookies() {
    const response = await request(server.server)
        .post("/user")
        .send({
            id: "4066dc54-211d-4c28-a970-64b877d0a025",
            name: "Thales Oliveira Almeida",
            email: "victor.almeida.ti@gmail.com",
            password: "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5",
            created_at: "2024-06-28 15:01:32",
            updated_at: null,
            session_id: "48619aa7-e495-411d-82bb-23e3fcd23ae9"
        }).expect(201)

    const cookies = response.get("Set-Cookie");
    return cookies;
}