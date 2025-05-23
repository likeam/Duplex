import express, { Router } from "express";
import { createUrl, deleteUrl, getAllUrl, getUrl } from "../controller/shortUrl";

const router = Router()

router.post('/shortUrl', createUrl)
router.get('/shortUrl', getAllUrl)
router.get('/shortUrl/:id', getUrl)
router.delete('/shortUrl/:id', deleteUrl)

export default router