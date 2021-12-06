import {
    generateRandomCoordinate,
    generateRandomCoordinates
} from "@alimyogurtcu/coordinate-generator";

export default (router) => {
    router.get("/coordinate", async (req, res) => {
        res.json(
            generateRandomCoordinate()
        )
    })
    router.get("/coordinates", async (req, res) => {
        if (req.query.count) {
            res.json(
                generateRandomCoordinates(parseInt(req.query.count))
            )
        } else {
            res.json(generateRandomCoordinate())
        }
    })
}