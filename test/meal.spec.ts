import { it, beforeAll, afterAll, beforeEach, describe, expect } from "vitest"
import request from "supertest"
import { server } from "../src/app"
import { execSync } from "node:child_process"
import { getCookies } from "../src/util/cookie-getter"

describe("Testes em rotas de meals", () => {

    beforeAll(async () => {
        await server.ready() //await faz esperar
        // execSync("npm run knex migrate:unlock")
    })

    afterAll(async () => {
        await server.close();
    })

    beforeEach(() => {
        execSync("npm run knex migrate:rollback --all");
        execSync("npm run knex migrate:latest");
    })

    it("Pegar todos os meals", async () => {
        const cookies = await getCookies();

        const response = request(server.server).get("/meal").set("Cookie", cookies).expect(201);
        expect(response.body).toEqual(
            expect.arrayContaining([])
        )
    })
});