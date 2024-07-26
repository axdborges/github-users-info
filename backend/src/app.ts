import { PrismaClient } from "@prisma/client";
import cors from "cors";
import csv from "csv-parser";
import express, { Request, Response } from "express";
import fs from "fs";
import multer from "multer";
import path from "path";
import "reflect-metadata";
import UserRouter from "./routes/Users.routes";

const app = express();
const prisma = new PrismaClient();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());
// import { userRouter } from "./routes/Users.routes";
// import { sessionRouter } from "./routes/Session.routes";
// import { contactsRouter } from "./routes/Contacts.routes";

app.use("/api/users", UserRouter);
// app.use("/login", sessionRouter);
// app.use("/contacts", contactsRouter);

app.post("/api/files", upload.single("file"), (req: Request, res: Response) => {
  // @ts-expect-error MUDAR DEPOIS
  const filePath = path.join(__dirname, "../uploads", req.file.filename);
  const results: any[] = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      for (const row of results) {
        await prisma.user.create({
          data: {
            name: row.name,
            city: row.city,
            country: row.country,
            favorite_sport: row.favorite_sport,
          },
        });
      }
      res.send({ message: "File processed successfully", data: results });
    })
    .on("error", (error) => {
      res.status(500).send({ message: "Error processing file", error });
    });
});

app.get("/api/users", async (_: Request, res: Response) => {
  const results = await prisma.user.findMany();
  console.log(results);
  res.send({ data: results });
});

export default app;
