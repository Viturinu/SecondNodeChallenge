import { server } from "./app"
import { env } from "./env"

server.listen({
    port: env.PORT
})