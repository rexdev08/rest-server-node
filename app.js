import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";
import server from "./models/server.js";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const servidor  = new server();
servidor.listen()