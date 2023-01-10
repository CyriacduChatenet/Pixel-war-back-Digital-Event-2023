import { Pixel } from "src/pixel/entities/pixel.entity"
import { Screenshot } from "src/screenshot/entities/screenshot.entity"

export class GameDto {
    id: string
    pixel: Pixel[]
    screenshot: Screenshot
    createdAt: Date
    deletedAt: Date
}
