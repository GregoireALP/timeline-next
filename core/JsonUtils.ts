import fs from "fs"

export const writeJson = (fileName: string, content: string) => {
    fs.writeFileSync("../json/" + fileName + ".json", JSON.stringify(content))
}