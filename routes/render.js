import { generateRandomCoordinate, generateRandomCoordinates } from "@alimyogurtcu/coordinate-generator"

export default (router) => {
    router.get("/map", async (req, res) => {
        const coordinates = generateRandomCoordinate();
        res.render("map",{coordinates})
    })
    router.get("/maps", async (req, res) => {
        let count = 10;
        if (req.query.count) {
            res.json(
                parseInt(req.query.count)
            )
        }
        const coordinates = generateRandomCoordinates(count);
        res.render("maps",{coordinates})
    })
}