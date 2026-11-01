import TCGdex from "@tcgdex/sdk";
import { writeFile, readFile } from "node:fs/promises";
import { id } from "./card_id.js";
const tcgdex = new TCGdex("en");
const allCards = [];